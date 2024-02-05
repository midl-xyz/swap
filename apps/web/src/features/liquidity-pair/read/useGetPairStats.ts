import { deployments, uniswapV2PairAbi, wagmiConfig } from '@/global';
import { Address, erc20Abi } from 'viem';
import { useChainId } from 'wagmi';
import { multicall } from 'wagmi/actions';

type PairStatsArgs = {
  userAddress: Address;
  tokenA: Address;
  tokenB: Address;
  lpTokenAddress: Address;
};

export const useGetPairStats = async ({
  lpTokenAddress,
  tokenA,
  tokenB,
  userAddress,
}: PairStatsArgs) => {
  const chainId = useChainId();

  // TODO: Double check that it works and on a correct chain. Perhaps an import from wagmi/core is required
  const callResults = await multicall(wagmiConfig, {
    contracts: [
      // 0: Token0 Address in Pair
      {
        address: lpTokenAddress,
        abi: uniswapV2PairAbi,
        functionName: 'token0',
      },
      // 1: Reserves returns uint112 reserve0, uint112 reserve1, uint32 blockTimestampLast
      {
        address: lpTokenAddress,
        abi: uniswapV2PairAbi,
        functionName: 'getReserves',
      },

      // 2: TokenA Balance
      {
        address: tokenA,
        abi: erc20Abi,
        functionName: 'balanceOf',
        args: [userAddress],
      },
      // 3: TokenB Balance
      {
        address: tokenB,
        abi: erc20Abi,
        functionName: 'balanceOf',
        args: [userAddress],
      },
      // 4: Lp token Balance
      {
        address: lpTokenAddress,
        abi: uniswapV2PairAbi,
        functionName: 'balanceOf',
        args: [userAddress],
      },
      // 5: Lp Token Allowance
      {
        address: lpTokenAddress,
        abi: uniswapV2PairAbi,
        functionName: 'allowance',
        args: [userAddress, deployments[chainId].UniswapV2Router02.address],
      },
      // 6: TokenA Allowance
      {
        address: tokenA,
        abi: erc20Abi,
        functionName: 'allowance',
        args: [userAddress, deployments[chainId].UniswapV2Router02.address],
      },
      // 7: TokenB Allowance
      {
        address: tokenB,
        abi: erc20Abi,
        functionName: 'allowance',
        args: [userAddress, deployments[chainId].UniswapV2Router02.address],
      },
    ],
  });

  type Result = {
    reserves: {
      tokenA: bigint;
      tokenB: bigint;
    };
    balances: {
      lpToken: bigint;
      tokenA: bigint;
      tokenB: bigint;
    };
    allowances: {
      lpToken: bigint;
      tokenA: bigint;
      tokenB: bigint;
    };
  };

  const isTokenAEqToken0 = tokenA === callResults[0].result;

  const tokenAReserve = isTokenAEqToken0
    ? callResults[1].result?.[0] || BigInt(0)
    : callResults[1].result?.[1] || BigInt(0);

  const tokenBReserve = isTokenAEqToken0
    ? callResults[1].result?.[1] || BigInt(0)
    : callResults[1].result?.[0] || BigInt(0);

  const result: Result = {
    reserves: {
      tokenA: tokenAReserve,
      tokenB: tokenBReserve,
    },
    balances: {
      lpToken: callResults[4].result || BigInt(0),
      tokenA: callResults[2].result || BigInt(0),
      tokenB: callResults[3].result || BigInt(0),
    },
    allowances: {
      lpToken: callResults[5].result || BigInt(0),
      tokenA: callResults[6].result || BigInt(0),
      tokenB: callResults[7].result || BigInt(0),
    },
  };

  return result;
};
