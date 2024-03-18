'use client';

import { Button, Input, InputGroup, NumberInput, SwapInput } from '@/shared';
import { css } from '~/styled-system/css';
import { hstack, vstack } from '~/styled-system/patterns';
import { ArrowDownUpIcon } from 'lucide-react';
import { styled } from '~/styled-system/jsx';
import { Controller, useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { TokenButton, TokenSelect, useLastUsedTokens } from '@/features';
import { useChainId } from 'wagmi';

type FormData = {
  inputToken: string;
  outputToken: string;
  inputTokenAmount: string;
  outputTokenAmount: string;
};

export const SwapForm = () => {
  const { tokens } = useLastUsedTokens();
  const chainId = useChainId();

  const { handleSubmit, register, setValue, getValues, watch, control } =
    useForm<FormData>({
      defaultValues: {
        inputToken: '',
        outputToken: '',
        inputTokenAmount: '',
        outputTokenAmount: '',
      },
    });

  const { inputToken, outputToken } = watch();

  const onSubmit = () => {
    // TODO: Implement token swap
  };

  const onSwapInput = () => {
    const { outputTokenAmount, inputTokenAmount, inputToken, outputToken } =
      getValues();

    if (inputTokenAmount && !outputTokenAmount) {
      setValue('outputTokenAmount', inputTokenAmount);
      setValue('inputTokenAmount', '');
      setValue('inputToken', outputToken);
      setValue('outputToken', inputToken);
    }

    if (!inputTokenAmount && outputTokenAmount) {
      setValue('inputTokenAmount', outputTokenAmount);
      setValue('outputTokenAmount', '');
      setValue('inputToken', outputToken);
      setValue('outputToken', inputToken);
    }

    if (inputTokenAmount && outputTokenAmount) {
      setValue('inputTokenAmount', outputTokenAmount);
      setValue('outputTokenAmount', '');
      setValue('inputToken', outputToken);
      setValue('outputToken', inputToken);
    }
  };

  useEffect(() => {
    // TODO: Implement get token swap rate
  }, [inputToken, outputToken]);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={vstack({
        gap: 8,
        alignItems: 'stretch',
        bg: 'neutral.100',
        borderRadius: '2xl',
        px: 16,
        py: 8,
        width: 'full',
        maxWidth: 640,
      })}
    >
      <h2
        className={css({
          textStyle: 'h2',
          textAlign: 'center',
        })}
      >
        Swap
      </h2>

      <div
        className={vstack({
          alignItems: 'stretch',
          gap: 4,
          position: 'relative',
        })}
      >
        <InputGroup>
          <label
            className={vstack({
              alignItems: 'stretch',
              gap: 2,
            })}
          >
            <span>You pay</span>
            <div className={hstack()}>
              <SwapInput placeholder="0" {...register('inputTokenAmount')} />
              <Controller
                control={control}
                name="inputToken"
                render={({ field }) => {
                  return <TokenButton {...field} chainId={chainId} />;
                }}
              />
            </div>
          </label>
        </InputGroup>

        <Button
          onClick={onSwapInput}
          aria-label="Swap input and output tokens"
          className={css({
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          })}
        >
          <ArrowDownUpIcon />
        </Button>
        <InputGroup>
          <label
            className={vstack({
              alignItems: 'stretch',
              gap: 2,
            })}
          >
            <span>You receive</span>
            <div className={hstack()}>
              <SwapInput placeholder="0" {...register('outputTokenAmount')} />
              <Controller
                control={control}
                name="outputToken"
                render={({ field }) => {
                  return <TokenButton {...field} chainId={chainId} />;
                }}
              />
            </div>
          </label>
        </InputGroup>
      </div>
      <Button type="submit">Swap</Button>
    </form>
  );
};
