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
  wagmiOverrides?: Pick<ContractCallOverrides, 'chainId'>,
) => {
  const globalChainId = useChainId();
  const chainId = wagmiOverrides?.chainId || globalChainId;
  const { data, ...rest } = useReadContract({
    abi: uv2LibraryAbi,
    functionName: 'getLiquidityValue',
    address: deployments[chainId].UV2Library.address as Address,
    args: [tokenA, tokenB, liquidityAmount],
    chainId,
  });

  return {
    ...rest,
    tokenAAmount: data?.[0] as bigint,
    tokenBAmount: data?.[1] as bigint,
  };
};
