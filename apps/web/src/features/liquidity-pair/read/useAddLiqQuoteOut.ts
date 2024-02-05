import { deployments, uniswapV2FactoryAbi } from '@/global';
import { Address } from 'viem';
import { useChainId, useReadContract } from 'wagmi';

export type getLpTokenArgs = {
  tokenA: Address;
  tokenB: Address;
};

// GetAmountOut Params: uint amountIn, uint reserveIn, uint reserveOut

export const useGetLPTokenAddress = async ({
  tokenA,
  tokenB,
}: getLpTokenArgs) => {
  const globalChainId = useChainId();

  return useReadContract({
    abi: uniswapV2FactoryAbi,
    address: deployments[globalChainId].UniswapV2Factory.address,
    functionName: 'getPair',
    args: [tokenA, tokenB],
  });
};
