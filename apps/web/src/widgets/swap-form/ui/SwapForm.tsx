'use client';

import { useToken } from '@/entities';
import {
  useERC20Allowance,
  useERC20ApproveAllowance,
  useSlippage,
  useSwap,
} from '@/features';
import { useSwapRates } from '@/features/swap/api/useSwapRates';
import { deployments } from '@/global';
import { Button, SwapInput, parseNumberInput } from '@/shared';
import { SlippageControl } from '@/widgets';
import { ArrowDownUpIcon } from 'lucide-react';
import { ChangeEventHandler, useEffect } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDebouncedCallback } from 'use-debounce';
import { Address, formatUnits, parseUnits, zeroAddress } from 'viem';
import { useAccount, useChainId } from 'wagmi';
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
      if (!e.target) {
        return;
      }

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

  const { swap, error: swapError } = useSwap();
  const { address } = useAccount();
  const { data: tokenAllowance } = useERC20Allowance({
    token: inputToken,
    spender: deployments[chainId].UniswapV2Router02.address as Address,
    user: address as Address,
  });

  const { write: approveERC20 } = useERC20ApproveAllowance();

  useEffect(() => {
    if (swapError) {
      toast.error(swapError.message);
      console.error(swapError);
    }
  }, [swapError]);

  const parsedInputTokenAmount = parseUnits(
    parseNumberInput(inputTokenAmount),
    inputTokenInfo.decimals,
  );

  const [slippage] = useSlippage();

  const onSubmit = () => {
    if (
      (tokenAllowance as bigint) < parsedInputTokenAmount &&
      inputToken !== zeroAddress
    ) {
      return approveERC20(
        inputToken,
        deployments[chainId].UniswapV2Router02.address as Address,
        parsedInputTokenAmount,
      );
    }

    swap({
      tokenIn: inputToken,
      tokenOut: outputToken,
      amountIn: parsedInputTokenAmount,
      amountOutMin:
        parseUnits(
          parseNumberInput(outputTokenAmount),
          outputTokenInfo.decimals,
        ) -
        parseUnits(
          (
            parseFloat(parseNumberInput(outputTokenAmount)) * slippage
          ).toString(),
          outputTokenInfo.decimals,
        ),
      to: address!,
      deadline: BigInt(Math.floor(Date.now() / 1000) + 60 * 20),
    });
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
          {isFetching
            ? 'Getting the best rate...'
            : (tokenAllowance as bigint) < parsedInputTokenAmount &&
                inputToken !== zeroAddress
              ? 'Approve'
              : 'Swap'}
        </Button>
      </form>
    </FormProvider>
  );
};
