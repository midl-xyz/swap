import { uniswapV2Router02Abi } from '@/global';

type GetAmountOutArgs = SmartContractReadFunctionArgs<
  typeof uniswapV2Router02Abi,
  'getLiquidityValue'
>;

export type UseGetAmountOutParams = {
  amountIn: GetAmountOutArgs['0'];
  reserveIn: GetAmountOutArgs['1'];
  reserveOut: GetAmountOutArgs['2'];
};

export const useEstimateLiquidityPair = (
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
