import { deployments, uv2LibraryAbi } from '@/global';
import { Address } from 'viem';
import { useChainId, useReadContract } from 'wagmi';

type GetAmountOutArgs = SmartContractReadFunctionArgs<
  typeof uv2LibraryAbi,
  'getLiquidityValue'
>;

export type UseGetLiquidityAmountParams = {
  tokenA: GetAmountOutArgs['0'];
  tokenB: GetAmountOutArgs['1'];
  liquidityAmount: GetAmountOutArgs['2'];
};

export const useEstimateLiquidityPair = (
  { tokenA, tokenB, liquidityAmount }: UseGetLiquidityAmountParams,
  wagmiOverrides?: ContractCallOverrides,
) => {
  const globalChainId = useChainId();
  const chainId = wagmiOverrides?.chainId || globalChainId;

  return useReadContract({
    abi: uv2LibraryAbi,
    address: deployments[chainId].UV2Library.address as Address,
    functionName: 'getLiquidityValue',
    args: [tokenA, tokenB, liquidityAmount],
    ...wagmiOverrides,
  });
};
