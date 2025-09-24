import { deployments, uniswapV2Router02Abi } from '@/global';
import { Address } from 'viem';
import { useChainId, useReadContract } from 'wagmi';

export type UseSwapRatesArgs = {
  tokenIn: Address | undefined;
  tokenOut: Address | undefined;
  type: 'exactIn' | 'exactOut';
  value: bigint | undefined;
};

export const useSwapRates = ({
  tokenIn,
  tokenOut,
  type,
  value,
}: UseSwapRatesArgs) => {
  const chainId = useChainId();

  const functionName: 'getAmountsIn' | 'getAmountsOut' =
    type === 'exactIn' ? 'getAmountsOut' : 'getAmountsIn';

  const args =
    tokenIn && tokenOut && value
      ? ([value, [tokenIn, tokenOut]] as const)
      : undefined;

  return useReadContract({
    abi: uniswapV2Router02Abi,
    address: deployments[chainId].UniswapV2Router02.address,
    functionName,
    args,
    query: {
      enabled: !!args && !!deployments[chainId]?.UniswapV2Router02?.address,
    },
  });
};
