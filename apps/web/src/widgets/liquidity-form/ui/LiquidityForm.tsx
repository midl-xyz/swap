'use client';

import { useToken } from '@/entities';
import { useLastUsedTokens } from '@/features';
import {
  SupplyLiquidityDialog,
  useGetLPTokenAddress,
  usePoolShare,
} from '@/features/liquidity';
import { useMinAmount } from '@/features/liquidity/api/useMinAmount';
import { useERC20ApproveAllowance } from '@/features/token/api/useERC20ApprovaAllowance';
import { deployments } from '@/global';
import { Button, SwapInput, parseNumberInput } from '@/shared';
import { SlippageControl } from '@/widgets';
import { yupResolver } from '@hookform/resolvers/yup';
import { useCallback, useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Address, parseUnits, zeroAddress } from 'viem';
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
    .required("Amount can't be empty")
    .when(['$minAmountA'], ([minAmount], schema) => {
      return schema.min(minAmount || 0, `Minimum amount is ${minAmount}`);
    }),
  tokenBAmount: yup
    .number()
    .transform((value) => (isNaN(value) ? undefined : value))
    .required("Amount can't be empty")
    .when(['$minAmountB'], ([minAmount], schema) => {
      return schema.min(minAmount || 0, `Minimum amount is ${minAmount}`);
    }),
  tokenA: yup.string<Address>().required(),
  tokenB: yup.string<Address>().required(),
});

export const LiquidityForm = () => {
  const [minValues, setValues] = useState({
    minAmountA: 0,
    minAmountB: 0,
  });

  const { tokens } = useLastUsedTokens();
  const chainId = useChainId();

  const form = useForm<FormData>({
    resolver: yupResolver(schema as any),
    context: minValues,
  });

  const { watch, handleSubmit, formState } = form;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { tokenA, tokenB, tokenAAmount, tokenBAmount } = watch();

  useEffect(() => {
    if (!tokenA && !tokenB) {
      form.setValue('tokenA', tokens.get(chainId)?.[0] || zeroAddress);
    }
  }, [tokens, tokenA, chainId, form, tokenB]);

  const { minAmountA, minAmountB } = useMinAmount({
    tokenA,
    tokenB,
    tokenAAmount,
    tokenBAmount,
  });

  useEffect(() => {
    setValues({ minAmountA, minAmountB });
  }, [minAmountA, minAmountB]);

  const tokenAInfo = useToken(tokenA, chainId);
  const tokenBInfo = useToken(tokenB, chainId);

  const parsedTokenAAmount = parseUnits(
    parseNumberInput(tokenAAmount),
    tokenAInfo.decimals,
  );
  const parsedTokenBAmount = parseUnits(
    parseNumberInput(tokenBAmount),
    tokenBInfo.decimals,
  );

  const { poolShare, allowances } = usePoolShare({
    tokenA,
    tokenB,
    formValues: {
      tokenAAmount: parsedTokenAAmount,
      tokenBAmount: parsedTokenBAmount,
    },
  });

  const lpToken = useGetLPTokenAddress({ tokenA, tokenB });

  const {
    write: approveERC20,
    isPending,
    isConfirming,
  } = useERC20ApproveAllowance();

  const { UniswapV2Router02 } = deployments[chainId];

  const onSubmit = () => {
    setIsDialogOpen(true);
  };

  const onChange = useCallback(() => {
    form.trigger();
  }, [form]);

  return (
    <FormProvider {...form}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={vstack({
          gap: 4,
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
                  2372.01
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
                  0.123
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
        {formState.isValid && allowances.tokenA < parsedTokenAAmount ? (
          <Button
            onClick={() =>
              approveERC20(
                tokenAInfo.address,
                UniswapV2Router02.address,
                parsedTokenAAmount,
              )
            }
            disabled={isPending || isConfirming}
          >
            Approve {tokenAInfo.symbol}
          </Button>
        ) : formState.isValid && allowances.tokenB < parsedTokenBAmount ? (
          <Button
            onClick={() =>
              approveERC20(
                tokenBInfo.address,
                UniswapV2Router02.address,
                parsedTokenBAmount,
              )
            }
            disabled={isPending || isConfirming}
          >
            Approve {tokenBInfo.symbol}
          </Button>
        ) : (
          <Button
            type="submit"
            disabled={!formState.isValid || isPending || isConfirming}
          >
            {!tokenA || !tokenB ? 'Select token' : 'Supply'}
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
          onClose={() => setIsDialogOpen(false)}
        />
      </form>
    </FormProvider>
  );
};
