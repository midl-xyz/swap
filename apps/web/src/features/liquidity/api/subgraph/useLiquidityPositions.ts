import { graphqlClient } from '@/features/liquidity';
import { graphql } from '@/features/liquidity/api/gql';
import { CurrentLiquidityPositionsQuery } from '@/features/liquidity/api/gql/graphql';
import { useQuery } from '@tanstack/react-query';
import { Address } from 'viem';

const GetLiquidityPositions = graphql(`
  query CurrentLiquidityPositions(
    $where: CurrentLiquidityPositionWhereInput
    $orderBy: [CurrentLiquidityPositionOrderByInput!]
    $offset: Int
    $limit: Int
  ) {
    currentLiquidityPositions(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      id
      user {
        id
        usdSwapped
        swapsAmount
        lastUpdatedAt
        lastUpdatedAtBlockTimestamp
      }
      pair {
        id
        token0 {
          id
          symbol
          name
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
        token1 {
          id
          symbol
          name
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
      liquidityTokenBalance
      lastUpdatedAt
      lastUpdatedAtBlockTimestamp
    }
  }
`);

export const useLiquidityPositions = (account: Address) => {
  return useQuery<CurrentLiquidityPositionsQuery>({
    queryKey: ['GetLiquidityPositions', account],
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: true,
    enabled: !!account,
    queryFn: () => {
      return graphqlClient.request(GetLiquidityPositions, {
        where: {
          user: {
            id_eq: account,
          },
        },
      });
    },
  });
};
