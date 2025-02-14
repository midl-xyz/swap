import { WETHByChain, deployments, uniswapV2Router02Abi } from '@/global';
import { Address } from 'viem';
import {
  useChainId,
  useWaitForTransactionReceipt,
  useWriteContract,
} from 'wagmi';

export type RemoveLiquidityArgs = {
  tokenA: Address;
  tokenB: Address;
  liquidity: bigint;
  amountAMin: bigint;
  amountBMin: bigint;
  to: Address;
  deadline: bigint;
};

export const useRemoveLiquidity = () => {
  const globalChainId = useChainId();

  const { writeContract, data: hash, ...rest } = useWriteContract();

  const { isLoading: isConfirming, isSuccess: isConfirmed } =
    useWaitForTransactionReceipt({
      hash,
      query: {
        enabled: Boolean(hash),
        retry: true,
      },
    });

  const removeLiquidity = async ({
    tokenA,
    tokenB,
    liquidity,
    amountAMin,
    amountBMin,
    to,
    deadline,
  }: RemoveLiquidityArgs) => {
    const WETHAddr = WETHByChain[globalChainId];

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
      args = [tokenA, tokenB, liquidity, amountAMin, amountBMin, to, deadline];
    }

    const functionName = isETH ? 'removeLiquidityETH' : 'removeLiquidity';

    return writeContract({
      address: deployments[globalChainId].UniswapV2Router02.address,
      abi: uniswapV2Router02Abi,
      functionName,
      args: args as any,
    });
  };

  return {
    removeLiquidity,
    hash,
    isConfirming,
    isConfirmed,
    ...rest,
  };
};
