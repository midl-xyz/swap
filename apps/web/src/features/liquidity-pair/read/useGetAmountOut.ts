import { deployments, uniswapV2Router02Abi } from '@/global';
import { useChainId, useReadContract } from 'wagmi';

export type GetAmountOutArgs = {
  amountIn: bigint;
  reserveIn: bigint;
  reserveOut: bigint;
};

// GetAmountOut Params: uint amountIn, uint reserveIn, uint reserveOut

export const useGetAmountOut = async ({
  reserveIn,
  reserveOut,
  amountIn,
}: GetAmountOutArgs) => {
  const globalChainId = useChainId();

  return useReadContract({
    abi: uniswapV2Router02Abi,
    address: deployments[globalChainId].UniswapV2Router02.address,
    functionName: 'getAmountOut',
    args: [amountIn, reserveIn, reserveOut],
  });
};
