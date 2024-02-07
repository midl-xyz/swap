import { deployments, uniswapV2Router02Abi } from '@/global';
import { useChainId, useReadContract } from 'wagmi';

type GetAmountOutArgs = SmartContractReadFunctionArgs<
  typeof uniswapV2Router02Abi,
  'getAmountOut'
>;

export type UseGetAmountOutParams = {
  amountIn: GetAmountOutArgs['0'];
  reserveIn: GetAmountOutArgs['1'];
  reserveOut: GetAmountOutArgs['2'];
};

export const useGetAmountOut = async ({
  reserveIn,
  reserveOut,
  amountIn,
}: UseGetAmountOutParams) => {
  const globalChainId = useChainId();

  return useReadContract({
    abi: uniswapV2Router02Abi,
    address: deployments[globalChainId].UniswapV2Router02.address,
    functionName: 'getAmountOut',
    args: [amountIn, reserveIn, reserveOut],
  });
};
