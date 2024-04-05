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

export const useGetAmountOut = (
  { amountIn, reserveIn, reserveOut }: UseGetAmountOutParams,
  wagmiOverrides?: ContractCallOverrides,
) => {
  const globalChainId = useChainId();
  const chainId = wagmiOverrides?.chainId || globalChainId;

  return useReadContract({
    abi: uniswapV2Router02Abi,
    address: deployments[chainId].UniswapV2Router02.address,
    functionName: 'getAmountOut',
    args: [amountIn, reserveIn, reserveOut],
    ...wagmiOverrides,
  });
};
