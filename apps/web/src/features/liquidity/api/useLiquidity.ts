export const useLiquidity = (
  tokenA: string,
  tokenB: string,
  tokenAAmount: bigint,
  tokenBAmount: bigint,
  chainId: number,
) => {
  return {
    tokenA,
    tokenB,
    tokenAAmount,
    tokenBAmount,
    chainId,
  };
};
