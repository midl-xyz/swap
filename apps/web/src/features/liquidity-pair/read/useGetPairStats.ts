import { deployments, uniswapV2PairAbi } from '@/global';
import { Address, erc20Abi } from 'viem';
import { useChainId, useReadContracts } from 'wagmi';

type PairStatsArgs = {
  userAddress: Address;
  tokenA: Address;
  tokenB: Address;
  lpTokenAddress: Address;
};

export const useGetPairStats = async (
  { lpTokenAddress, tokenA, tokenB, userAddress }: PairStatsArgs,
  wagmiOverrides?: ContractCallOverrides,
) => {
  const globalChainId = useChainId();
  const chainId = wagmiOverrides?.chainId || globalChainId;

  const callResults = useReadContracts({
    contracts: [
      // 0: Token0 Address in Pair
      {
        address: lpTokenAddress,
        abi: uniswapV2PairAbi,
        functionName: 'token0',
        ...wagmiOverrides,
      },
      // 1: Reserves returns uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast
      {
        address: lpTokenAddress,
        abi: uniswapV2PairAbi,
        functionName: 'getReserves',
        ...wagmiOverrides,
      },

      // 2: TokenA Balance
      {
        address: tokenA,
        abi: erc20Abi,
        functionName: 'balanceOf',
        args: [userAddress],
        ...wagmiOverrides,
      },
      // 3: TokenB Balance
      {
        address: tokenB,
        abi: erc20Abi,
        functionName: 'balanceOf',
        args: [userAddress],
        ...wagmiOverrides,
      },
      // 4: Lp token Balance
      {
        address: lpTokenAddress,
        abi: uniswapV2PairAbi,
        functionName: 'balanceOf',
        args: [userAddress],
        ...wagmiOverrides,
      },
      // 5: Lp Token Allowance
      {
        address: lpTokenAddress,
        abi: uniswapV2PairAbi,
        functionName: 'allowance',
        args: [userAddress, deployments[chainId].UniswapV2Router02.address],
        ...wagmiOverrides,
      },
      // 6: TokenA Allowance
      {
        address: tokenA,
        abi: erc20Abi,
        functionName: 'allowance',
        args: [userAddress, deployments[chainId].UniswapV2Router02.address],
        ...wagmiOverrides,
      },
      // 7: TokenB Allowance
      {
        address: tokenB,
        abi: erc20Abi,
        functionName: 'allowance',
        args: [userAddress, deployments[chainId].UniswapV2Router02.address],
        ...wagmiOverrides,
      },
    ],
  });

  const isTokenAEqToken0 = tokenA === callResults?.data?.[0].result;

  const tokenAReserve = isTokenAEqToken0
    ? callResults?.data?.[1].result?.[0] || BigInt(0)
    : callResults?.data?.[1].result?.[1] || BigInt(0);

  const tokenBReserve = isTokenAEqToken0
    ? callResults?.data?.[1].result?.[1] || BigInt(0)
    : callResults?.data?.[1].result?.[0] || BigInt(0);

  const result = {
    reserves: {
      tokenA: tokenAReserve,
      tokenB: tokenBReserve,
    },
    balances: {
      lpToken: callResults?.data?.[4].result || BigInt(0),
      tokenA: callResults?.data?.[2].result || BigInt(0),
      tokenB: callResults?.data?.[3].result || BigInt(0),
    },
    allowances: {
      lpToken: callResults?.data?.[5].result || BigInt(0),
      tokenA: callResults?.data?.[6].result || BigInt(0),
      tokenB: callResults?.data?.[7].result || BigInt(0),
    },
  } as const;

  return result;
};
