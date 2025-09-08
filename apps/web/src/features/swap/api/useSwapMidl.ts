import { useStateOverride } from '@/features/state-override';
import { useERC20Allowance, useTokenBalance } from '@/features/token';
import { WETHByChain } from '@/global';
import { deployments, uniswapV2Router02Abi } from '@/global/contracts';
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
  encodeAbiParameters,
  encodeFunctionData,
  erc20Abi,
  keccak256,
  maxUint256,
  parseEther,
  StateOverride,
  toHex,
  zeroAddress,
} from 'viem';
import { useChainId } from 'wagmi';
import { getSwapParams } from '../lib/swapUtils';

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
  const clearTxIntentions = useClearTxIntentions();
  const { rune } = useToken(tokenIn);
  const { rune: runeOut } = useToken(tokenOut);

  const { data } = useTokenBalance(tokenIn);
  const evmOnlyTokenInBalance = data.evmOnlyBalance;

  const isTokenANeedApprove = amountIn
    ? allowance < amountIn && tokenIn !== zeroAddress
    : false;

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
        if (isTokenANeedApprove) {
          addTxIntention({
            intention: {
              evmTransaction: {
                to: tokenIn,
                data: encodeFunctionData({
                  abi: erc20Abi,
                  functionName: 'approve',
                  args: [
                    deployments[chainId].UniswapV2Router02.address,
                    maxUint256 - 1n,
                  ],
                }),
              },
            },
          });
        }
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
            value: ethValue,
          },
          deposit: {
            satoshis: ethValue > 0n ? weiToSatoshis(ethValue) : 0,
            runes:
              rune && amountIn - (evmOnlyTokenInBalance || 0n) > 0n
                ? [
                    {
                      id: rune.id,
                      amount: amountIn - (evmOnlyTokenInBalance || 0n),
                      address: tokenIn,
                    },
                  ]
                : [],
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
                  '0xEbF0Ece9A6cbDfd334Ce71f09fF450cd06D57753' as Address,
                  maxUint256,
                ],
              }),
            },
          },
        });
      }

      if (tokenIn === LUSD_TOKEN) {
        const slot = keccak256(
          encodeAbiParameters(
            [
              {
                type: 'address',
              },
              { type: 'uint256' },
            ],
            [userAddress, 2n],
          ),
        );

        let customStateOverride: StateOverride = [
          {
            address: LUSD_TOKEN as Address,
            stateDiff: [
              {
                slot,
                value: toHex(args['0'], { size: 32 }),
              },
            ],
          },
        ];

        customStateOverride.push({
          address: userAddress,
          balance: parseEther('0.1'),
        });

        setStateOverride(customStateOverride);
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
