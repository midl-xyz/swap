import { graphqlClient } from '@/features/liquidity';
import { graphql } from '@/features/liquidity/api/gql';
import { PairsQuery } from '@/features/liquidity/api/gql/graphql';
import { useQuery } from '@tanstack/react-query';

const GetPools = graphql(`
  query Pairs(
    $where: PairWhereInput
    $orderBy: [PairOrderByInput!]
    $offset: Int
    $limit: Int
  ) {
    pairs(where: $where, orderBy: $orderBy, offset: $offset, limit: $limit) {
      id
      token0 {
        id
        symbol
        name
        decimals
        priceUSD
        priceETH
        totalSupply
        circulationSupply
        marketCapUSD
        tradeVolume24h
        tradeVolumeUSD24h
        tradeVolumeETH24h
        txCount24h
        totalLiquidityAllPairs
        totalLiquidityAllPairsUSD
        holders
        memeToken {
          id
          ownerAddress
          tokenAddress
          tokenName
          tokenSymbol
          tokenV60Initiated
          v60LpTokenAddress
          ownerAllocation
          activityVaultAllocation
          memeCreatedAt
          memePicUrl
          lockedLpTokens
          lpTokensUnlockTime
          lastUpdatedAt
        }
        lastUpdatedAt
      }
      token1 {
        id
        symbol
        name
        decimals
        priceUSD
        priceETH
        totalSupply
        circulationSupply
        marketCapUSD
        tradeVolume24h
        tradeVolumeUSD24h
        tradeVolumeETH24h
        txCount24h
        totalLiquidityAllPairs
        totalLiquidityAllPairsUSD
        holders
        memeToken {
          id
          ownerAddress
          tokenAddress
          tokenName
          tokenSymbol
          tokenV60Initiated
          v60LpTokenAddress
          ownerAllocation
          activityVaultAllocation
          memeCreatedAt
          memePicUrl
          lockedLpTokens
          lpTokensUnlockTime
          lastUpdatedAt
        }
        lastUpdatedAt
      }
      reserve0
      reserve1
      liquidityUSD
      liquidity24hDelta
      lpTotalSupply
      lpTotalLocked
      token0Price
      token1Price
      txCount24h
      tradeVolume24h
      tradeVolumeUSD24h
      tradeVolumeETH24h
      tradeVolume24hDelta
      fees24h
      feesUSD24h
      feesETH24h
      fees24hDelta
      createdAtTimestamp
      createdAtBlockNumber
      liquidityProviderCount
      lastUpdatedAt
    }
  }
`);

export const useGetPools = () => {
  return useQuery<PairsQuery>({
    queryKey: ['GetPools'],
    refetchOnWindowFocus: false,
    queryFn: () => {
      return graphqlClient.request(GetPools, {
        orderBy: 'PairOrderByInput.LiquidityUsdAsc',
      });
    },
  });
};
