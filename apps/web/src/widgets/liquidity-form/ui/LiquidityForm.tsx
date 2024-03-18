'use client';

import { useToken } from '@/entities';
import { TokenButton } from '@/features';
import { SupplyLiquidityDialog } from '@/features/liquidity';
import { Button, InputGroup, SwapInput } from '@/shared';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useChainId } from 'wagmi';
import { css } from '~/styled-system/css';
import { hstack, vstack } from '~/styled-system/patterns';

type FormData = {
  tokenAAmount: string;
  tokenBAmount: string;
  tokenA: string;
  tokenB: string;
};

export const LiquidityForm = () => {
  const { register, control, watch, handleSubmit } = useForm<FormData>({
    defaultValues: {
      tokenA: '',
      tokenB: '',
      tokenAAmount: '',
      tokenBAmount: '',
    },
  });

  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const chainId = useChainId();
  const { tokenA, tokenB, tokenAAmount, tokenBAmount } = watch();

  const tokenAInfo = useToken(tokenA, chainId);
  const tokenBInfo = useToken(tokenB, chainId);

  const onSubmit = () => {
    setIsDialogOpen(true);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={vstack({
        gap: 4,
        alignItems: 'stretch',
      })}
    >
      <InputGroup>
        <div className={hstack()}>
          <SwapInput placeholder="0" {...register('tokenAAmount')} />
          <Controller
            control={control}
            name="tokenA"
            render={({ field }) => {
              return <TokenButton {...field} chainId={chainId} />;
            }}
          />
        </div>
      </InputGroup>
      <InputGroup>
        <div className={hstack()}>
          <SwapInput placeholder="0" {...register('tokenBAmount')} />
          <Controller
            control={control}
            name="tokenB"
            render={({ field }) => {
              return <TokenButton {...field} chainId={chainId} />;
            }}
          />
        </div>
      </InputGroup>

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

          <hr className={css({ width: 'full', borderColor: 'neutral.200' })} />

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
                0.001%
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
        tokenB={tokenB}
        tokenAAmount={tokenAAmount}
        tokenBAmount={tokenBAmount}
        chainId={chainId}
        onClose={() => setIsDialogOpen(false)}
      />
    </form>
  );
};
