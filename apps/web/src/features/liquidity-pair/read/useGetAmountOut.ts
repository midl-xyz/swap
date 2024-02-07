import { deployments, uniswapV2Router02Abi } from '@/global';
import { useChainId, useReadContract, UseReadContractParameters } from 'wagmi';

type GetAmountOutArgs = SmartContractReadFunctionArgs<
  typeof uniswapV2Router02Abi,
  'getAmountOut'
>;

export type UseGetAmountOutParams = {
  args: {
    amountIn: GetAmountOutArgs['0'];
    reserveIn: GetAmountOutArgs['1'];
    reserveOut: GetAmountOutArgs['2'];
  };
  overrides: UseReadContractParameters;
};

export const useGetAmountOut = async ({
  args,
  overrides,
}: UseGetAmountOutParams) => {
  const globalChainId = useChainId();
  const { amountIn, reserveIn, reserveOut } = args;

  return useReadContract({
    abi: uniswapV2Router02Abi,
    address: deployments[globalChainId].UniswapV2Router02.address,
    functionName: 'getAmountOut',
    args: [amountIn, reserveIn, reserveOut],
    ...overrides,
  });
};
