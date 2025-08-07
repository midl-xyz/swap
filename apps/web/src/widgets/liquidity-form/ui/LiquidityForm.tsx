'use client';

import { useToken } from '@/entities';
import { LastUsedToken, useLastUsedTokens, useTokenBalance } from '@/features';
import {
  SupplyLiquidityDialog,
  useGetLPTokenAddress,
  usePoolShare,
} from '@/features/liquidity';
import { useMinAmount } from '@/features/liquidity/api/useMinAmount';
import { tokenList } from '@/global';
import {
  Button,
  SwapInput,
  parseNumberInput,
  scopeKeyPredicate,
} from '@/shared';
import { SlippageControl } from '@/widgets';
import { schema } from '@/widgets/liquidity-form/ui/schema';
import { correctNumber } from '@/widgets/swap-form/ui/utils';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQueryClient } from '@tanstack/react-query';
import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDebouncedCallback } from 'use-debounce';
import { Address, formatUnits, parseUnits, zeroAddress } from 'viem';
import { useChainId } from 'wagmi';

import { css } from '~/styled-system/css';
import { hstack, vstack } from '~/styled-system/patterns';

type FormData = {
  tokenAAmount: string;
  tokenBAmount: string;
  tokenA: Address;
  tokenB: Address;
};

export const LiquidityForm = () => {
  // const searchParams = useSearchParams();
  const [minValues, setValues] = useState({
    minAmountA: 0,
    minAmountB: 0,
    balanceA: 0,
    balanceB: 0,
  });

  const { tokens, selectTokens, selectedTokens } = useLastUsedTokens();

  const chainId = useChainId();
  const router = useRouter();

  const form = useForm<FormData>({
    resolver: yupResolver(schema as any),
    context: minValues,
    reValidateMode: 'onChange',
    mode: 'all',
  });

  const { watch, handleSubmit, formState } = form;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { tokenA, tokenB, ...formValues } = watch();

  const tokenAAmount = correctNumber(formValues.tokenAAmount);
  const tokenBAmount = correctNumber(formValues.tokenBAmount);

  useEffect(() => {
    const popularTokenA = tokens.get(chainId)?.[0];
    if (!tokenA && !tokenB && popularTokenA) {
      form.setValue('tokenA', popularTokenA);
      selectTokens([
        ...selectedTokens.filter(
          (it: LastUsedToken) => it.inputName !== 'tokenA',
        ),
        { chain: chainId, token: popularTokenA, inputName: 'tokenA' },
      ]);
    }
  }, [tokens, tokenA, chainId, form, tokenB]);

  const tokenAInfo = useToken(tokenA, chainId);
  const tokenBInfo = useToken(tokenB, chainId);
  const { data: balanceA } = useTokenBalance(tokenA);
  const { data: balanceB } = useTokenBalance(tokenB);

  const { minAmountA, minAmountB } = useMinAmount({
    tokenA,
    tokenB,
    tokenAAmount: tokenAAmount ?? '0',
    tokenBAmount: tokenBAmount ?? '0',
  });

  const update = useDebouncedCallback(
    (balanceA, balanceB, minAmountA, minAmountB) => {
      setValues({
        minAmountA,
        minAmountB,
        balanceA: parseFloat(balanceA?.formattedBalance ?? '0'),
        balanceB: parseFloat(balanceB?.formattedBalance ?? '0'),
      });

      setTimeout(() => {
        form.trigger();
      }, 0);
    },
    0,
  );

  const parsedTokenAAmount = parseUnits(
    parseNumberInput(tokenAAmount),
    tokenAInfo.decimals,
  );
  const parsedTokenBAmount = parseUnits(
    parseNumberInput(tokenBAmount),
    tokenBInfo.decimals,
  );

  const {
    data: { poolShare, reserves },
  } = usePoolShare({
    tokenA,
    tokenB,
    formValues: {
      tokenAAmount: parsedTokenAAmount,
      tokenBAmount: parsedTokenBAmount,
    },
  });

  useEffect(() => {
    form.trigger();
    selectTokens([
      {
        chain: chainId,
        token: tokenA,
        inputName: 'tokenA',
      },
      {
        chain: chainId,
        token: tokenB,
        inputName: 'tokenB',
      },
    ]);
  }, [tokenA, tokenB, form]);

  useEffect(() => {
    if (
      minValues.balanceA === parseFloat(balanceA?.formattedBalance ?? '0') &&
      minValues.balanceB === parseFloat(balanceB?.formattedBalance ?? '0') &&
      minValues.minAmountA === minAmountA &&
      minValues.minAmountB === minAmountB
    ) {
      return;
    }

    update(balanceA, balanceB, minAmountA, minAmountB);
  }, [update, balanceA, balanceB, minAmountA, minAmountB, minValues]);

  const lpToken = useGetLPTokenAddress({ tokenA, tokenB });

  const onSubmit = () => {
    setIsDialogOpen(true);
  };

  const onChange = useDebouncedCallback(() => {
    form.trigger();
  }, 0);

  const queryClient = useQueryClient();

  const onSuccess = useCallback(async () => {
    await queryClient.invalidateQueries({
      predicate: scopeKeyPredicate([
        'balance',
        'allowance',
        'pairStats',
        'GetLiquidityPositions',
      ]),
    });
    form.resetField('tokenBAmount');
    setTimeout(() => {
      router?.push('/liquidity');
      setIsDialogOpen(false);
    }, 1000);
  }, [form, queryClient]);

  const onClose = useCallback(() => {
    form.reset();
    setIsDialogOpen(false);
  }, []);

  let priceAtoB = 0;
  let priceBtoA = 0;

  const formattedReserveA = formatUnits(reserves.tokenA, tokenAInfo.decimals);
  const formattedReserveB = formatUnits(reserves.tokenB, tokenBInfo.decimals);

  const a = parseFloat(formattedReserveA) + parseFloat(tokenAAmount);
  const b = parseFloat(formattedReserveB) + parseFloat(tokenBAmount);

  try {
    priceAtoB = a / b;
    priceBtoA = b / a;
  } catch {}

  useEffect(() => {
    const inputTokenSymbol = undefined; //searchParams.get('inputToken');
    const outputTokenSymbol = undefined; //searchParams.get('outputToken');
    if (inputTokenSymbol && outputTokenSymbol) {
      const inputTokenFound = tokenList.find(
        ({ symbol }) => symbol === inputTokenSymbol,
      );
      const outputTokenFound = tokenList.find(
        ({ symbol }) => outputTokenSymbol === symbol,
      );

      if (inputTokenFound && outputTokenFound) {
        form.reset({
          tokenA: inputTokenFound.address,
          tokenB: outputTokenFound.address,
        });
      }
    }
  }, []);

  const isBalanceABigEnough =
    parsedTokenAAmount <=
    parseUnits(balanceA?.formattedBalance!, tokenAInfo.decimals);

  const isBalanceBBigEnough =
    parsedTokenBAmount <=
    parseUnits(balanceB?.formattedBalance!, tokenBInfo.decimals);

  const isBalanceBigEnough = isBalanceABigEnough && isBalanceBBigEnough;

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={vstack({
          gap: 8,
          alignItems: 'stretch',
        })}
      >
        <SwapInput
          tokenName="tokenA"
          amountName="tokenAAmount"
          placeholder="0"
          onChange={onChange}
        />
        <SwapInput
          tokenName="tokenB"
          amountName="tokenBAmount"
          placeholder="0"
          onChange={onChange}
        />
        <SlippageControl />
        {tokenA && tokenB && tokenAAmount && tokenBAmount && (
          <div
            className={css({
              display: 'flex',
              flexDirection: 'column',
              gap: 3,
              alignItems: 'center',
              justifyContent: 'flex-start',
              width: 'full',
              borderWidth: 1,
              borderColor: 'neutral.200',
              borderStyle: 'solid',
              borderRadius: '2xl',
              p: 4,
            })}
          >
            <div
              className={css({
                textStyle: 'caption',
              })}
            >
              Prices and pool share
            </div>

            <hr
              className={css({ width: 'full', borderColor: 'neutral.200' })}
            />

            <div
              className={hstack({
                gap: 1,
                justifyContent: 'space-between',
                width: 'full',
                textAlign: 'center',
              })}
            >
              <div>
                <span
                  className={css({
                    fontWeight: 'bold',
                  })}
                >
                  {parseFloat(priceAtoB.toFixed(4))}
                </span>
                <div
                  className={css({
                    textStyle: 'caption',
                    color: 'neutral.600',
                  })}
                >
                  {tokenAInfo.symbol} per {tokenBInfo.symbol}
                </div>
              </div>

              <div>
                <span
                  className={css({
                    fontWeight: 'bold',
                  })}
                >
                  {parseFloat(priceBtoA.toFixed(4))}
                </span>
                <div
                  className={css({
                    textStyle: 'caption',
                    color: 'neutral.600',
                  })}
                >
                  {tokenBInfo.symbol} per {tokenAInfo.symbol}
                </div>
              </div>

              <div>
                <span
                  className={css({
                    fontWeight: 'bold',
                  })}
                >
                  {parseFloat((poolShare * 100).toFixed(2))}%
                </span>
                <div
                  className={css({
                    textStyle: 'caption',
                    color: 'neutral.600',
                  })}
                >
                  Pool share
                </div>
              </div>
            </div>
          </div>
        )}

        <Button
          type="submit"
          disabled={
            !formState.isValid ||
            !tokenAAmount ||
            !tokenBAmount ||
            !isBalanceBigEnough
          }
        >
          {tokenAAmount && tokenBAmount && !isBalanceBigEnough
            ? 'Insufficient Balance'
            : !tokenA || !tokenB
              ? 'Select token'
              : 'Supply'}
        </Button>

        <SupplyLiquidityDialog
          open={isDialogOpen}
          tokenA={tokenA}
          isCreatePool={lpToken.data === zeroAddress}
          tokenB={tokenB}
          tokenAAmount={parsedTokenAAmount}
          tokenBAmount={parsedTokenBAmount}
          chainId={chainId}
          onClose={onClose}
          onSuccess={onSuccess}
        />
      </form>
    </FormProvider>
  );
};
