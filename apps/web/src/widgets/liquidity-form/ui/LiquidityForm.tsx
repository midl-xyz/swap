'use client';

import { Token, useToken } from '@/entities';
import { useLastUsedTokens, useTokenBalance } from '@/features';
import {
  SupplyLiquidityDialog,
  useGetLPTokenAddress,
  usePoolShare,
} from '@/features/liquidity';
import { useMinAmount } from '@/features/liquidity/api/useMinAmount';
import { useERC20ApproveAllowance } from '@/features/token/api/useERC20ApprovaAllowance';
import { deployments, tokenList } from '@/global';
import {
  Button,
  SwapInput,
  parseNumberInput,
  scopeKeyPredicate,
} from '@/shared';
import { SlippageControl } from '@/widgets';
import { yupResolver } from '@hookform/resolvers/yup';
import { useQueryClient } from '@tanstack/react-query';
import { useSearchParams } from 'next/navigation';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDebouncedCallback } from 'use-debounce';
import { Address, formatUnits, parseUnits, zeroAddress } from 'viem';
import { useChainId } from 'wagmi';
import * as yup from 'yup';
import { css } from '~/styled-system/css';
import { hstack, vstack } from '~/styled-system/patterns';

type FormData = {
  tokenAAmount: string;
  tokenBAmount: string;
  tokenA: Address;
  tokenB: Address;
};

const schema = yup.object().shape({
  tokenAAmount: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .when(['$minAmountA'], ([minAmount], schema) => {
      const rules = schema.min(
        minAmount || 0,
        `Minimum amount is ${minAmount}`,
      );

      if (minAmount > 0) {
        return rules.required(`Minimum amount is ${minAmount}`);
      }

      return rules;
    }),
  tokenBAmount: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .when(['$minAmountB'], ([minAmount], schema) => {
      const rules = schema.min(
        minAmount || 0,
        `Minimum amount is ${minAmount}`,
      );

      if (minAmount > 0) {
        return rules.required(`Minimum amount is ${minAmount}`);
      }

      return rules;
    }),
  tokenA: yup.string<Address>().required(),
  tokenB: yup.string<Address>().required(),
});

export const LiquidityForm = () => {
  const searchParams = useSearchParams();
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
  const { tokenA, tokenB, tokenAAmount, tokenBAmount } = watch();

  useEffect(() => {
    const popularTokenA = tokens.get(chainId)?.[0];
    if (!tokenA && !tokenB && popularTokenA) {
      form.setValue('tokenA', popularTokenA);
      selectTokens([
        ...selectedTokens.filter((it: Token) => it.inputName !== 'tokenA'),
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

  const {
    write: approveERC20,
    isPending,
    isConfirming,
    isConfirmed,
  } = useERC20ApproveAllowance();

  const parsedTokenAAmount = parseUnits(
    parseNumberInput(tokenAAmount),
    tokenAInfo.decimals,
  );
  const parsedTokenBAmount = parseUnits(
    parseNumberInput(tokenBAmount),
    tokenBInfo.decimals,
  );

  const {
    data: { poolShare, allowances, reserves },
    refetch,
  } = usePoolShare({
    tokenA,
    tokenB,
    formValues: {
      tokenAAmount: parsedTokenAAmount,
      tokenBAmount: parsedTokenBAmount,
    },
  });

  useEffect(() => {
    if (isConfirmed) {
      refetch();
    }
  }, [isConfirmed]);

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

  const { UniswapV2Router02 } = deployments[chainId];

  const onSubmit = () => {
    setIsDialogOpen(true);
  };

  const onChange = useDebouncedCallback(() => {
    form.trigger();
  }, 0);

  const queryClient = useQueryClient();

  const onSuccess = useCallback(() => {
    queryClient.invalidateQueries({
      predicate: scopeKeyPredicate(['balance', 'allowance', 'pairStats']),
    });
    form.resetField('tokenBAmount');
  }, [form, queryClient]);

  const onClose = useCallback(() => {
    form.reset();
    router?.push('/liquidity');
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
    const inputTokenSymbol = searchParams.get('inputToken');
    const outputTokenSymbol = searchParams.get('outputToken');
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

  const isTokenANeedApprove =
    formState.isValid &&
    allowances.tokenA < parsedTokenAAmount &&
    tokenA !== zeroAddress;

  const isTokenBNeedApprove =
    formState.isValid &&
    allowances.tokenB < parsedTokenBAmount &&
    tokenB !== zeroAddress;

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
        {isTokenANeedApprove && (
          <Button
            onClick={() =>
              approveERC20(
                tokenAInfo.address,
                UniswapV2Router02.address,
                parsedTokenAAmount,
              )
            }
            disabled={isPending || isConfirming || !isBalanceABigEnough}
          >
            {isBalanceABigEnough
              ? `Approve ${tokenAInfo.symbol}`
              : 'Insufficient Balance'}
          </Button>
        )}
        {isTokenBNeedApprove && !isTokenANeedApprove && (
          <Button
            onClick={() =>
              approveERC20(
                tokenBInfo.address,
                UniswapV2Router02.address,
                parsedTokenBAmount,
              )
            }
            disabled={isPending || isConfirming || !isBalanceBBigEnough}
          >
            {isBalanceBBigEnough
              ? `Approve ${tokenBInfo.symbol}`
              : 'Insufficient Balance'}
          </Button>
        )}
        {!isTokenANeedApprove && !isTokenBNeedApprove && (
          <Button
            type="submit"
            disabled={
              !formState.isValid ||
              isPending ||
              isConfirming ||
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
        )}
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
