'use client';

import { useToken } from '@/entities';
import { useSwapRates } from '@/features/swap/api/useSwapRates';
import { Button, SwapInput, parseNumberInput } from '@/shared';
import { SlippageControl } from '@/widgets';
import { ArrowDownUpIcon } from 'lucide-react';
import { ChangeEventHandler, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { useDebouncedCallback } from 'use-debounce';
import { Address, formatUnits, parseUnits } from 'viem';
import { useChainId } from 'wagmi';
import { css } from '~/styled-system/css';
import { vstack } from '~/styled-system/patterns';

type FormData = {
  inputToken: Address;
  outputToken: Address;
  inputTokenAmount: string;
  outputTokenAmount: string;
};

export const SwapForm = () => {
  const form = useForm<FormData>({
    defaultValues: {
      inputToken: '' as Address,
      outputToken: '' as Address,
      inputTokenAmount: '',
      outputTokenAmount: '',
    },
  });

  const chainId = useChainId();

  const { watch, handleSubmit, setValue, getValues } = form;
  const { inputToken, outputToken, inputTokenAmount, outputTokenAmount } =
    watch();
  const inputTokenInfo = useToken(inputToken, chainId);
  const outputTokenInfo = useToken(outputToken, chainId);

  const { read: readSwapRates, error, isFetching } = useSwapRates();

  const onInputTokenAmountChange: ChangeEventHandler<HTMLInputElement> =
    useDebouncedCallback(async (e) => {
      const value = parseUnits(
        parseNumberInput(e.target.value),
        inputTokenInfo.decimals,
      );

      const swapRates = await readSwapRates({
        value,
        pair: [inputToken, outputToken],
      });

      if (!swapRates) {
        return;
      }

      const [, outputAmount] = swapRates;

      setValue(
        'outputTokenAmount',
        formatUnits(outputAmount, outputTokenInfo.decimals),
      );
    }, 500);

  const onOutputTokenAmountChange: ChangeEventHandler<HTMLInputElement> =
    useDebouncedCallback(async (e) => {
      const value = parseUnits(
        parseNumberInput(e.target.value),
        outputTokenInfo.decimals,
      );

      const swapRates = await readSwapRates({
        value,
        pair: [outputToken, inputToken],
      });

      if (!swapRates) {
        return;
      }

      const [inputAmount] = swapRates;

      setValue(
        'inputTokenAmount',
        formatUnits(inputAmount, inputTokenInfo.decimals),
      );
    }, 500);

  const onSubmit = () => {
    // TODO: Implement token swap
  };

  const onSwapInput = () => {
    const { outputTokenAmount, inputTokenAmount, inputToken, outputToken } =
      getValues();

    if (inputTokenAmount && !outputTokenAmount) {
      setValue('outputTokenAmount', inputTokenAmount);
      onOutputTokenAmountChange({
        target: { value: inputTokenAmount },
      } as any);
      setValue('inputTokenAmount', '');
      setValue('inputToken', outputToken);
      setValue('outputToken', inputToken);
    }

    if (!inputTokenAmount && outputTokenAmount) {
      setValue('inputTokenAmount', outputTokenAmount);

      onInputTokenAmountChange({
        target: { value: outputTokenAmount },
      } as any);

      setValue('outputTokenAmount', '');
      setValue('inputToken', outputToken);
      setValue('outputToken', inputToken);
    }

    if (inputTokenAmount && outputTokenAmount) {
      setValue('inputTokenAmount', outputTokenAmount);

      onInputTokenAmountChange({
        target: { value: outputTokenAmount },
      } as any);

      setValue('outputTokenAmount', '');
      setValue('inputToken', outputToken);
      setValue('outputToken', inputToken);
    }
  };

  useEffect(() => {
    if (inputToken && inputTokenAmount) {
      onInputTokenAmountChange({
        currentTarget: { value: inputTokenAmount },
      } as any);
    }

    if (outputToken && outputTokenAmount) {
      onOutputTokenAmountChange({
        currentTarget: { value: outputTokenAmount },
      } as any);
    }
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
            onChange={onInputTokenAmountChange}
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
            onChange={onOutputTokenAmountChange}
          />
        </div>
        <SlippageControl />

        <Button type="submit" disabled={isFetching}>
          {isFetching ? 'Getting the best rate...' : 'Swap'}
        </Button>
      </form>
    </FormProvider>
  );
};
