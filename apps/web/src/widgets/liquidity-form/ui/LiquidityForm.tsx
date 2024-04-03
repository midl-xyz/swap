'use client';

import { useToken } from '@/entities';
import {
  SupplyLiquidityDialog,
  useGetLPTokenAddress,
  usePoolShare,
} from '@/features/liquidity';
import { Button, SwapInput, parseNumberInput } from '@/shared';
import { useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Address, parseUnits } from 'viem';
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
  const form = useForm<FormData>({
    defaultValues: {
      tokenAAmount: '',
      tokenBAmount: '',
      tokenA: '' as Address,
      tokenB: '' as Address,
    },
  });

  const { watch, handleSubmit } = form;
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const chainId = useChainId();
  const { tokenA, tokenB, tokenAAmount, tokenBAmount } = watch();

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

  const { poolShare } = usePoolShare({
    tokenA,
    tokenB,
    formValues: {
      tokenAAmount: parsedTokenAAmount,
      tokenBAmount: parsedTokenBAmount,
    },
  });

  const lpToken = useGetLPTokenAddress({ tokenA, tokenB });

  const onSubmit = () => {
    setIsDialogOpen(true);
  };

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
        />

        <SwapInput
          tokenName="tokenB"
          amountName="tokenBAmount"
          placeholder="0"
        />

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

        <Button type="submit">Supply</Button>

        <SupplyLiquidityDialog
          open={isDialogOpen}
          tokenA={tokenA}
          isCreatePool={lpToken.data === null}
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
