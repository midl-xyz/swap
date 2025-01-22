import { useERC20Allowance } from '@/features/token';
import { deployments, uniswapV2Router02Abi, WETHByChain } from '@/global';
import {
  useAddTxIntention,
  useClearTxIntentions,
} from '@midl-xyz/midl-js-executor-react';
import { useMutation } from '@tanstack/react-query';
import { Address, encodeFunctionData, erc20Abi } from 'viem';
import { useAccount, useChainId } from 'wagmi';

type UseRemoveLiquidityParams = {
  lpToken: {
    address: Address;
    amount: bigint;
  };
};

type RemoveLiquidityArgs = {
  tokenA: Address;
  tokenB: Address;
  liquidity: bigint;
  amountAMin: bigint;
  amountBMin: bigint;
  to: Address;
  deadline: bigint;
};

export const useRemoveLiquidityMidl = ({
  lpToken,
}: UseRemoveLiquidityParams) => {
  const chainId = useChainId();
  const { address } = useAccount();

  const { data: allowance = 0n } = useERC20Allowance({
    token: lpToken.address,
    spender: deployments[chainId].UniswapV2Router02.address,
    user: address as Address,
  });
  const { addTxIntention } = useAddTxIntention();
  const clearTxIntentions = useClearTxIntentions();

  const isTokenNeedApproved = allowance < lpToken.amount;

  const { mutate: removeLiquidity, ...rest } = useMutation<
    void,
    Error,
    RemoveLiquidityArgs
  >({
    mutationFn: async ({
      tokenA,
      tokenB,
      liquidity,
      amountAMin,
      amountBMin,
      to,
      deadline,
    }) => {
      clearTxIntentions();

      if (isTokenNeedApproved) {
        addTxIntention({
          intention: {
            evmTransaction: {
              to: lpToken.address,
              chainId,
              type: 'btc',
              data: encodeFunctionData({
                abi: erc20Abi,
                functionName: 'approve',
                args: [
                  deployments[chainId].UniswapV2Router02.address,
                  lpToken.amount,
                ],
              }),
            },
          },
        });
      }

      const WETHAddr = WETHByChain[chainId];

      const ethValue =
        tokenA === WETHAddr
          ? amountAMin
          : tokenB === WETHAddr
            ? amountBMin
            : undefined;

      const isETH = Boolean(ethValue);

      let args:
        | SmartContractFunctionArgs<
            typeof uniswapV2Router02Abi,
            'removeLiquidityETH'
          >
        | SmartContractFunctionArgs<
            typeof uniswapV2Router02Abi,
            'removeLiquidity'
          >;

      if (isETH) {
        const erc20TokenAddress = tokenA === WETHAddr ? tokenB : tokenA;

        const erc20Min = tokenA === WETHAddr ? amountBMin : amountAMin;
        const ethMin = tokenA === WETHAddr ? amountAMin : amountBMin;

        args = [erc20TokenAddress, liquidity, erc20Min, ethMin, to, deadline];
      } else {
        args = [
          tokenA,
          tokenB,
          liquidity,
          amountAMin,
          amountBMin,
          to,
          deadline,
        ];
      }

      const functionName = isETH ? 'removeLiquidityETH' : 'removeLiquidity';

      addTxIntention({
        intention: {
          evmTransaction: {
            to: deployments[chainId].UniswapV2Router02.address,
            chainId,
            type: 'btc',
            data: encodeFunctionData({
              abi: uniswapV2Router02Abi,
              functionName,
              args: args as any,
            }),
          },
        },
      });
    },
  });

  return {
    removeLiquidity,
    isTokenNeedApproved,
    ...rest,
  };
};
