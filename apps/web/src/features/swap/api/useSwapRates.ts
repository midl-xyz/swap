import { deployments, uniswapV2Router02Abi } from '@/global';
import { Address } from 'viem';
import { useMemo } from 'react';
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

  const args = useMemo(() => {
    if (!tokenIn || !tokenOut || !value) return undefined;
    return [value, [tokenIn, tokenOut]] as const;
  }, [tokenIn, tokenOut, value]);

  const { data, error, isFetching, refetch } = useReadContract({
    abi: uniswapV2Router02Abi,
    address: deployments[chainId].UniswapV2Router02.address,
    functionName,
    args,
    query: {
      enabled: !!args && !!deployments[chainId]?.UniswapV2Router02?.address,
    },
  });

  return {
    data,
    error: error as Error | null,
    isFetching,
    refetch,
  };
};
