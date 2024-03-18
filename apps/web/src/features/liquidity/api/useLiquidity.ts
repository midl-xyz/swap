export const useLiquidity = (
  tokenA: string,
  tokenB: string,
  tokenAAmount: string,
  tokenBAmount: string,
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
