'use client';

import { Button, SwapInput } from '@/shared';
import { ArrowDownUpIcon } from 'lucide-react';
import { useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { css } from '~/styled-system/css';
import { vstack } from '~/styled-system/patterns';

type FormData = {
  inputToken: string;
  outputToken: string;
  inputTokenAmount: string;
  outputTokenAmount: string;
};

export const SwapForm = () => {
  const form = useForm<FormData>({
    defaultValues: {
      inputToken: '',
      outputToken: '',
      inputTokenAmount: '',
      outputTokenAmount: '',
    },
  });

  const { watch, handleSubmit, setValue, getValues } = form;

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
    <FormProvider {...form}>
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
          <SwapInput
            placeholder="0"
            label="You pay"
            tokenName="inputToken"
            amountName="inputTokenAmount"
          />

          <Button
            onClick={onSwapInput}
            aria-label="Swap input and output tokens"
            className={css({
              position: 'absolute',
              top: '50%',
              left: '50%',
              zIndex: 2,
              transform: 'translate(-50%, -50%)',
            })}
          >
            <ArrowDownUpIcon />
          </Button>

          <SwapInput
            placeholder="0"
            label="You receive"
            tokenName="outputToken"
            amountName="outputTokenAmount"
          />
        </div>
        <Button type="submit">Swap</Button>
      </form>
    </FormProvider>
  );
};
