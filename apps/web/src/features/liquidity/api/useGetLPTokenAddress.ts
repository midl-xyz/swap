import { deployments, uniswapV2FactoryAbi } from '@/global';
import { useChainId, useReadContract } from 'wagmi';

type GetPairArgs = SmartContractReadFunctionArgs<
  typeof uniswapV2FactoryAbi,
  'getPair'
>;

export type UseGetLpTokenAddressParams = {
  tokenA?: GetPairArgs['0'];
  tokenB?: GetPairArgs['1'];
};

export const useGetLPTokenAddress = (
  { tokenA, tokenB }: UseGetLpTokenAddressParams,
  wagmiOverrides?: ContractCallOverrides,
) => {
  const globalChainId = useChainId();
  const chainId = wagmiOverrides?.chainId || globalChainId;

  return useReadContract({
    abi: uniswapV2FactoryAbi,
    address: deployments[chainId].UniswapV2Factory.address,
    functionName: 'getPair',
    args: [tokenA, tokenB],
    query: {
      enabled: !!tokenA && !!tokenB,
    },
    ...wagmiOverrides,
  });
};
