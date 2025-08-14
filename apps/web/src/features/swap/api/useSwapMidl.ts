import { useStateOverride } from '@/features/state-override';
import { useERC20Allowance } from '@/features/token';
import { WETHByChain } from '@/global';
import { deployments, uniswapV2Router02Abi } from '@/global/contracts';
import { useApproveWithOptionalDeposit } from '@/shared';
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
  toHex,
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
        if (isTokenANeedApprove) {
          addApproveDepositIntention({
            address: tokenIn,
            amount: amountIn,
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
                      amount: amountIn,
                      address: tokenIn,
                    },
                  ],
                },
              },
            },
            {},
          );
        }
      }
      let args:
        | SmartContractFunctionArgs<
            typeof uniswapV2Router02Abi,
            'swapExactETHForTokens'
          >
        | SmartContractFunctionArgs<
            typeof uniswapV2Router02Abi,
            'swapExactTokensForETH'
          >
        | SmartContractFunctionArgs<
            typeof uniswapV2Router02Abi,
            'swapExactTokensForTokens'
          >;

      let txName:
        | 'swapExactETHForTokens'
        | 'swapExactTokensForETH'
        | 'swapExactTokensForTokens';

      if (tokenIn === zeroAddress) {
        txName = 'swapExactETHForTokens';
        args = [amountOutMin, [WETH, tokenOut], to, deadline];
      } else if (tokenOut === zeroAddress) {
        txName = 'swapExactTokensForETH';
        args = [amountIn, amountOutMin, [tokenIn, WETH], to, deadline];
      } else {
        txName = 'swapExactTokensForTokens';
        args = [amountIn, amountOutMin, [tokenIn, tokenOut], to, deadline];
      }

      addTxIntention({
        intention: {
          evmTransaction: {
            to: deployments[chainId].UniswapV2Router02.address,
            chainId,
            data: encodeFunctionData({
              abi: uniswapV2Router02Abi,
              functionName: txName,
              args: args as any,
            }),
            value: (tokenIn === zeroAddress ? amountIn : BigInt(0)) as any,
          },
          deposit: {
            satoshis: tokenIn === zeroAddress ? weiToSatoshis(amountIn) : 0,
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

        const customStateOverride = [
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
