import { deployments, uniswapV2PairAbi } from '@/global';
import { getToken } from '@/widgets/swap-form/ui/utils';
import { Address, erc20Abi } from 'viem';
import { useChainId, useReadContracts } from 'wagmi';

type PairStatsArgs = {
  userAddress: Address;
  tokenA?: Address;
  tokenB?: Address;
  lpTokenAddress?: Address;
};

export const useGetPairStats = (
  { lpTokenAddress, tokenA, tokenB, userAddress }: PairStatsArgs,
  wagmiOverrides: ContractCallOverrides = {
    query: {
      enabled: !!lpTokenAddress && !!tokenA && !!tokenB,
    },
  },
) => {
  const globalChainId = useChainId();
  const chainId = wagmiOverrides?.chainId || globalChainId;

  const { data: callResults, refetch } = useReadContracts({
    scopeKey: 'pairStats',
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
      {
        address: lpTokenAddress,
        abi: uniswapV2PairAbi,
        functionName: 'totalSupply',
        ...wagmiOverrides,
      },
    ],
  });

  const isTokenAEqToken0 =
    getToken({
      token: tokenA,
      chainId,
    }) ===
    getToken({
      token: callResults?.[0].result as Address,
      chainId,
    });

  const tokenAReserve = isTokenAEqToken0
    ? callResults?.[1].result?.[0] || BigInt(0)
    : callResults?.[1].result?.[1] || BigInt(0);

  const tokenBReserve = isTokenAEqToken0
    ? callResults?.[1].result?.[1] || BigInt(0)
    : callResults?.[1].result?.[0] || BigInt(0);

  const result = {
    reserves: {
      tokenA: tokenAReserve,
      tokenB: tokenBReserve,
    },
    balances: {
      lpToken: callResults?.[4].result || BigInt(0),
      tokenA: callResults?.[2].result || BigInt(0),
      tokenB: callResults?.[3].result || BigInt(0),
    },
    allowances: {
      lpToken: callResults?.[5].result || BigInt(0),
      tokenA: callResults?.[6].result || BigInt(0),
      tokenB: callResults?.[7].result || BigInt(0),
    },
    totalSupply: callResults?.[8].result || BigInt(0),
  } as const;

  return { data: result, refetch };
};
