import { graphqlClient } from '@/features/liquidity';
import { graphql } from '@/features/liquidity/api/gql';
import { PairByIdQuery } from '@/features/liquidity/api/gql/graphql';
import { useQuery } from '@tanstack/react-query';

const GetPair = graphql(`
  query PairById($pairByIdId: String!) {
    pairById(id: $pairByIdId) {
      id
      token0 {
        id
        symbol
        name
        decimals
        totalSupply
        circulationSupply
        holders
        tokenPicture
        tokenMetrics {
          id
          tokenAddress
          priceUSD
          priceETH
          price24hDelta
          marketCapUSD
          fdv
          tradeVolume24h
          tradeVolumeUSD24h
          tradeVolumeETH24h
          txCount24h
          txCountTotal
          totalLiquidityAllPairs
          totalLiquidityAllPairsUSD
          lastUpdatedAt
          lastUpdatedAtBlockTimestamp
        }
        factoryAddress
        lastUpdatedAt
        lastUpdatedAtBlockTimestamp
      }
      token1 {
        id
        symbol
        name
        tokenPicture
        decimals
        totalSupply
        circulationSupply
        holders
        tokenMetrics {
          id
          tokenAddress
          priceUSD
          priceETH
          price24hDelta
          marketCapUSD
          fdv
          tradeVolume24h
          tradeVolumeUSD24h
          tradeVolumeETH24h
          txCount24h
          txCountTotal
          totalLiquidityAllPairs
          totalLiquidityAllPairsUSD
          lastUpdatedAt
          lastUpdatedAtBlockTimestamp
        }
        factoryAddress
        lastUpdatedAt
        lastUpdatedAtBlockTimestamp
      }
      token0Id
      token1Id
      reserve0
      reserve1
      liquidityUSD
      liquidity24hDelta
      lpTotalSupply
      lpTotalLocked
      lpDecimals
      token0Price
      token1Price
      txCount24h
      txCountTotal
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
      factoryAddress
      lastUpdatedAt
      lastUpdatedAtBlockTimestamp
    }
  }
`);

export const useGetPair = (id: string) => {
  return useQuery<PairByIdQuery>({
    queryKey: ['GetPair', id],
    queryFn: () => {
      return graphqlClient.request(GetPair, {
        pairByIdId: id,
      });
    },
  });
};
