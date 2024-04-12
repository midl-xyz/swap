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
import { ArrowDownUpIcon, Loader2Icon } from 'lucide-react';
import { ChangeEventHandler, useEffect, useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useDebouncedCallback } from 'use-debounce';
import { Address, formatUnits, parseUnits, zeroAddress } from 'viem';
import { useAccount, useChainId } from 'wagmi';
import { css } from '~/styled-system/css';
import { vstack } from '~/styled-system/patterns';
import { AiOutlineSwapVertical } from '@/shared/assets';

console.log(AiOutlineSwapVertical);

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

  const {
    read: readSwapRates,
    error: swapRatesError,
    isFetching: isSwapRatesFetching,
  } = useSwapRates();

  const onInputTokenAmountChange: ChangeEventHandler<HTMLInputElement> =
    useDebouncedCallback(async (e) => {
      if (!e.target) {
        return;
      }

      lastChangedInput.current = true;

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
    }, 0);

  const onOutputTokenAmountChange: ChangeEventHandler<HTMLInputElement> =
    useDebouncedCallback(async (e) => {
      const value = parseUnits(
        parseNumberInput(e.target.value),
        outputTokenInfo.decimals,
      );

      lastChangedInput.current = false;

      const swapRates = await readSwapRates({
        value,
        pair: [inputToken, outputToken],
        reverse: true,
      });

      if (!swapRates) {
        return;
      }

      const [inputAmount] = swapRates;

      setValue(
        'inputTokenAmount',
        formatUnits(inputAmount, inputTokenInfo.decimals),
      );
    }, 0);

  const {
    swap,
    error: swapError,
    isPending: isSwapPending,
    isConfirming: isSwapConfirming,
    isConfirmed: isSwapSuccess,
  } = useSwap();

  const { address } = useAccount();

  const {
    data: tokenAllowance,
    refetch,
    dataUpdatedAt,
  } = useERC20Allowance({
    token: inputToken,
    spender: deployments[chainId].UniswapV2Router02.address as Address,
    user: address as Address,
  });

  const {
    write: approveERC20,
    isConfirmed,
    isPending,
    isConfirming,
    confirmedAt,
  } = useERC20ApproveAllowance();

  useEffect(() => {
    if (isConfirmed && dataUpdatedAt < confirmedAt) {
      refetch();
      toast.success('Approved');
    }
  }, [isConfirmed, dataUpdatedAt, confirmedAt, refetch]);

  useEffect(() => {
    if (swapError) {
      toast.error(swapError.name);
      console.error(swapError);
    }
  }, [swapError]);

  useEffect(() => {
    if (isSwapSuccess) {
      toast.success('Swap successful');
    }
  }, [isSwapSuccess]);

  const parsedInputTokenAmount = parseUnits(
    parseNumberInput(inputTokenAmount),
    inputTokenInfo.decimals,
  );

  const lastChangedInput = useRef(true);
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

    if (lastChangedInput.current) {
      setValue('outputTokenAmount', inputTokenAmount);

      setValue('inputTokenAmount', '');
      setValue('inputToken', outputToken);
      setValue('outputToken', inputToken);

      onOutputTokenAmountChange({
        target: { value: inputTokenAmount },
      } as any);
    } else {
      setValue('inputTokenAmount', outputTokenAmount);
      setValue('outputTokenAmount', '');
      setValue('inputToken', outputToken);
      setValue('outputToken', inputToken);

      onInputTokenAmountChange({
        target: { value: outputTokenAmount },
      } as any);
    }
  };

  useEffect(() => {
    if (inputToken && inputTokenAmount) {
      onInputTokenAmountChange({
        target: { value: inputTokenAmount },
      } as any);
    }

    if (outputToken && outputTokenAmount) {
      onOutputTokenAmountChange({
        target: { value: outputTokenAmount },
      } as any);
    }
  }, [inputToken, outputToken]);

  const isApproving = isPending || isConfirming;
  const shouldApprove = (tokenAllowance as bigint) < parsedInputTokenAmount;
  const isSwapping = (isSwapPending || isSwapConfirming) && !shouldApprove;

  console.log('isSwapSuccess', isSwapSuccess);

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
            appearance="secondary"
            className={css({
              position: 'absolute',
              top: '50%',
              left: '50%',
              zIndex: 2,
              transform: 'translate(-50%, -50%)',
            })}
          >
            <AiOutlineSwapVertical width={24} height={24} />
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

        <Button
          type="submit"
          disabled={
            isSwapRatesFetching ||
            isConfirming ||
            Boolean(swapRatesError) ||
            isApproving ||
            isPending ||
            isSwapping
          }
        >
          {isSwapRatesFetching && <>Getting the best rate...</>}

          {!isSwapRatesFetching &&
            !swapRatesError &&
            (shouldApprove ? (
              isApproving ? (
                <>
                  <Loader2Icon
                    className={css({
                      animation: 'spin 1s linear infinite',
                    })}
                  />
                  Approving...
                </>
              ) : (
                'Approve'
              )
            ) : isSwapping ? (
              <>Swapping...</>
            ) : (
              'Swap'
            ))}

          {!isSwapRatesFetching &&
            Boolean(swapRatesError) &&
            'Insufficient liquidity'}
        </Button>
      </form>
    </FormProvider>
  );
};
