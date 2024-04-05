import { deployments, uniswapV2Router02Abi, wagmiConfig } from '@/global';
import { useChainId } from 'wagmi';
import { readContract } from '@wagmi/core';
import { useState } from 'react';

type GetAmountsOutArgs = SmartContractReadFunctionArgs<
  typeof uniswapV2Router02Abi,
  'getAmountsOut'
>;

export const useSwapRates = () => {
  const chainId = useChainId();
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const read = async ({
    value,
    pair,
  }: {
    value: GetAmountsOutArgs['0'];
    pair: GetAmountsOutArgs['1'];
  }) => {
    setIsFetching(true);
    setError(null);

    try {
      const result = await readContract(wagmiConfig, {
        abi: uniswapV2Router02Abi,
        address: deployments[chainId].UniswapV2Router02.address,
        functionName: 'getAmountsOut',
        args: [value, pair],
      });

      setIsFetching(false);

      return result;
    } catch (error: any) {
      setError(error);
    }

    setIsFetching(false);
  };

  return {
    read,
    error,
    isFetching,
  };
};
