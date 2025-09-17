import { useQuery } from '@tanstack/react-query';
import { Address } from 'viem';
import { useChainId } from 'wagmi';

export const useSwapRates = ({
  tokenIn,
  tokenOut,
  value,
  type,
}: {
  tokenIn?: Address;
  tokenOut?: Address;
  value?: bigint;
  type?: 'exactIn' | 'exactOut';
} = {}) => {
  const chainId = useChainId();

  const requestUrl = `https://l880r1g2zk.execute-api.us-east-2.amazonaws.com/prod/quote?tokenInAddress=${tokenIn}&tokenInChainId=${chainId}&tokenOutAddress=${tokenOut}&tokenOutChainId=${chainId}&amount=${value}&type=${type}`;

  return useQuery({
    queryKey: ['swapRates', tokenIn, tokenOut, value, type],
    queryFn: async () => {
      const response = (await fetch(requestUrl)).json();

      return response;
    },
    enabled: !!tokenIn && !!tokenOut && !!value && !!chainId,
    staleTime: 1000 * 60 * 5,
  });
};
