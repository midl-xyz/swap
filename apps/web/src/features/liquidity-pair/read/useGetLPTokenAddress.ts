import { deployments, uniswapV2FactoryAbi } from '@/global';
import { useChainId, useReadContract } from 'wagmi';

type GetPairArgs = SmartContractReadFunctionArgs<
  typeof uniswapV2FactoryAbi,
  'getPair'
>;

export type UseGetLpTokenAddressParams = {
  tokenA: GetPairArgs['0'];
  tokenB: GetPairArgs['1'];
};

export const useGetLPTokenAddress = async ({
  tokenA,
  tokenB,
}: UseGetLpTokenAddressParams) => {
  const globalChainId = useChainId();

  return useReadContract({
    abi: uniswapV2FactoryAbi,
    address: deployments[globalChainId].UniswapV2Factory.address,
    functionName: 'getPair',
    args: [tokenA, tokenB],
  });
};
