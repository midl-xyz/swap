import { graphqlClient } from '@/features/liquidity';
import { graphql } from '@/features/liquidity/api/gql';
import { LiquidityPositionsQuery } from '@/features/liquidity/api/gql/graphql';
import { useQuery } from '@tanstack/react-query';
import { Address } from 'viem';

const GetLiquidityPositions = graphql(`
  query LiquidityPositions(
    $where: LiquidityPositionWhereInput
    $orderBy: [LiquidityPositionOrderByInput!]
    $offset: Int
    $limit: Int
    $liquidityPositionsWhere2: LiquidityPositionWhereInput
    $liquidityPositionsOrderBy2: [LiquidityPositionOrderByInput!]
    $liquidityPositionsOffset2: Int
    $liquidityPositionsLimit2: Int
  ) {
    liquidityPositions(
      where: $where
      orderBy: $orderBy
      offset: $offset
      limit: $limit
    ) {
      id
      user {
        id
        liquidityPositions(
          where: $liquidityPositionsWhere2
          orderBy: $liquidityPositionsOrderBy2
          offset: $liquidityPositionsOffset2
          limit: $liquidityPositionsLimit2
        ) {
          id
          liquidityTokenBalance
        }
        usdSwapped
      }
      pair {
        id
        token0 {
          id
          symbol
          name
          decimals
          totalSupply
          tradeVolume
          tradeVolumeUSD
          untrackedVolumeUSD
          txCount
          totalLiquidity
          derivedETH
          memeToken {
            id
            userAddress
            tokenAddress
            tokenName
            tokenSymbol
            tokenPrice
            tokenV60Initiated
            v60LpTokenAddress
            ownerAllocation
            activityVaultAllocation
            memeCreatedAt
          }
        }
        token1 {
          id
          symbol
          name
          decimals
          totalSupply
          tradeVolume
          tradeVolumeUSD
          untrackedVolumeUSD
          txCount
          totalLiquidity
          derivedETH
          memeToken {
            id
            userAddress
            tokenAddress
            tokenName
            tokenSymbol
            tokenPrice
            tokenV60Initiated
            v60LpTokenAddress
            ownerAllocation
            activityVaultAllocation
            memeCreatedAt
          }
        }
        reserve0
        reserve1
        totalSupply
        reserveETH
        reserveUSD
        trackedReserveETH
        token0Price
        token1Price
        volumeToken0
        volumeToken1
        volumeUSD
        untrackedVolumeUSD
        txCount
        createdAtTimestamp
        createdAtBlockNumber
        liquidityProviderCount
      }
      liquidityTokenBalance
    }
  }
`);

export const useLiquidityPositions = (account: Address) => {
  return useQuery<LiquidityPositionsQuery>({
    queryKey: ['GetLiquidityPositions', account],
    refetchOnWindowFocus: false,
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
