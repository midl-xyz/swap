import { useStateOverride } from '@/features/state-override';
import { useERC20Allowance } from '@/features/token';
import { WETHByChain } from '@/global';
import { deployments, uniswapV2Router02Abi } from '@/global/contracts';
import { useApproveWithOptionalDeposit } from '@/shared';
import { createLUSDSwapStateOverride } from '@/shared/lib/blockchainUtils';
import { weiToSatoshis } from '@midl-xyz/midl-js-executor';
import {
  useAddCompleteTxIntention,
  useAddTxIntention,
  useClearTxIntentions,
  useEVMAddress,
  useToken,
} from '@midl-xyz/midl-js-executor-react';
import { useMutation } from '@tanstack/react-query';
import {
  Address,
  encodeFunctionData,
  erc20Abi,
  maxUint256,
  zeroAddress,
} from 'viem';
import { useChainId } from 'wagmi';

type UseSwapMidlParams = {
  tokenIn: Address;
  amountIn: bigint;
  tokenOut: Address;
};

export type SwapArgs = {
  amountOutMin: bigint;
  to: Address;
  deadline: bigint;
};

const LUSD_TOKEN = '0x93a800a06BCc954020266227Fe644ec6962ad153';

const handleSwapTokenApproval = (
  token: { address: Address; amount: bigint },
  rune: any,
  needsApprove: boolean,
  addApproveDepositIntention: any,
  addTxIntention: any,
) => {
  const isETH = token.address === zeroAddress;

  if (isETH) return;

  if (needsApprove) {
    addApproveDepositIntention({
      address: token.address,
      amount: token.amount,
      runeId: rune?.id,
    });
  } else if (rune) {
    addTxIntention(
      {
        intention: {
          deposit: {
            runes: [
              {
                id: rune?.id,
                amount: token.amount,
                address: token.address,
              },
            ],
          },
        },
      },
      {},
    );
  }
};

const getSwapParams = (
  tokenIn: Address,
  tokenOut: Address,
  amountIn: bigint,
  amountOutMin: bigint,
  to: Address,
  deadline: bigint,
  WETH: Address,
) => {
  if (tokenIn === zeroAddress) {
    return {
      functionName: 'swapExactETHForTokens' as const,
      args: [amountOutMin, [WETH, tokenOut], to, deadline] as const,
      ethValue: amountIn,
    };
  }

  if (tokenOut === zeroAddress) {
    return {
      functionName: 'swapExactTokensForETH' as const,
      args: [amountIn, amountOutMin, [tokenIn, WETH], to, deadline] as const,
      ethValue: 0n,
    };
  }

  return {
    functionName: 'swapExactTokensForTokens' as const,
    args: [amountIn, amountOutMin, [tokenIn, tokenOut], to, deadline] as const,
    ethValue: 0n,
  };
};

export const useSwapMidl = ({
  tokenIn,
  tokenOut,
  amountIn,
}: UseSwapMidlParams) => {
  const address = useEVMAddress();
  const chainId = useChainId();
  const [, setStateOverride] = useStateOverride();
  const userAddress = useEVMAddress();
  const { data: allowance = 0n } = useERC20Allowance({
    token: tokenIn,
    spender: deployments[chainId].UniswapV2Router02.address,
    user: address!,
  });

  const { addTxIntention } = useAddTxIntention();
  const { addCompleteTxIntentionAsync } = useAddCompleteTxIntention();
  const { addApproveDepositIntention } = useApproveWithOptionalDeposit(chainId);
  const clearTxIntentions = useClearTxIntentions();
  const { rune } = useToken(tokenIn);
  const { rune: runeOut } = useToken(tokenOut);

  const isTokenANeedApprove = allowance < amountIn && tokenIn !== zeroAddress;

  const {
    mutate: swap,
    mutateAsync: swapAsync,
    ...rest
  } = useMutation<void, Error, SwapArgs>({
    mutationFn: async ({ to, deadline, amountOutMin }) => {
      clearTxIntentions();
      const isTokenETH = tokenIn === zeroAddress;

      const WETH = WETHByChain[chainId];
      if (!WETH) {
        throw new Error('WETH not found');
      }

      if (!isTokenETH) {
        handleSwapTokenApproval(
          { address: tokenIn, amount: amountIn },
          rune,
          isTokenANeedApprove,
          addApproveDepositIntention,
          addTxIntention,
        );
      }

      // Get swap parameters using helper function
      const { functionName, args, ethValue } = getSwapParams(
        tokenIn,
        tokenOut,
        amountIn,
        amountOutMin,
        to,
        deadline,
        WETH,
      );

      addTxIntention({
        intention: {
          evmTransaction: {
            to: deployments[chainId].UniswapV2Router02.address,
            chainId,
            data: encodeFunctionData({
              abi: uniswapV2Router02Abi,
              functionName,
              args: args as any,
            }),
            value: ethValue as any,
          },
          deposit: {
            satoshis: ethValue > 0n ? weiToSatoshis(ethValue) : 0,
          },
        },
      });

      if (tokenOut == LUSD_TOKEN) {
        addTxIntention({
          intention: {
            evmTransaction: {
              to: tokenOut,
              data: encodeFunctionData({
                abi: erc20Abi,
                functionName: 'approve',
                args: [
                  '0xEbF0Ece9A6cbDfd334Ce71f09fF450cd06D57753' as Address, // Executor address
                  maxUint256,
                ],
              }),
            },
          },
        });
      }

      if (tokenIn === LUSD_TOKEN) {
        const lusdStateOverride = createLUSDSwapStateOverride(
          userAddress,
          amountIn,
        );
        setStateOverride(lusdStateOverride);
      } else {
        setStateOverride([]);
      }

      const assetsToWithdraw =
        tokenOut !== zeroAddress
          ? !!runeOut
            ? [
                {
                  id: runeOut?.id,
                  amount: maxUint256,
                  address: tokenOut,
                },
              ]
            : []
          : [];
      try {
        await addCompleteTxIntentionAsync({
          runes: assetsToWithdraw,
        });
      } catch (e) {
        console.error(e);
      }
    },
  });

  return {
    swap,
    swapAsync,
    ...rest,
  };
};
