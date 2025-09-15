import { deployments, uniswapV2Router02Abi } from '@/global';
import { readContract } from '@wagmi/core';
import { useState } from 'react';
import { useChainId, useConfig } from 'wagmi';

type GetAmountsOutArgs = SmartContractReadFunctionArgs<
  typeof uniswapV2Router02Abi,
  'getAmountsOut'
>;

export const useSwapRates = () => {
  const chainId = useChainId();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const config = useConfig();

  const read = async ({
    value,
    pair,
    reverse,
  }: {
    value: GetAmountsOutArgs['0'];
    pair: GetAmountsOutArgs['1'];
    reverse?: boolean;
  }) => {
    setIsFetching(true);
    setError(null);

    let method: 'getAmountsIn' | 'getAmountsOut' = 'getAmountsOut';

    if (reverse) {
      method = 'getAmountsIn';
    }

    try {
      const result = await readContract(config as any, {
        abi: uniswapV2Router02Abi,
        address: deployments[chainId].UniswapV2Router02.address,
        functionName: method,
        args: [value, pair],
      });

      return result;
    } catch (error: any) {
      setError(error);
    } finally {
      setIsFetching(false);
    }
  };

  return {
    read,
    error,
    isFetching,
  };
};
