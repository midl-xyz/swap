import { graphqlClient } from '@/features/liquidity';
import { graphql } from '@/features/liquidity/api/gql';
import { QueryQuery } from '@/features/liquidity/api/gql/graphql';
import { useQuery } from '@tanstack/react-query';

const GetPools = graphql(`
  query Query(
    $orderBy: [PairOrderByInput!]
    $where: PairWhereInput
    $limit: Int
    $offset: Int
  ) {
    pairs(orderBy: $orderBy, where: $where, limit: $limit, offset: $offset) {
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
  }
`);

export const useGetPools = () => {
  return useQuery<QueryQuery>({
    queryKey: ['GetPools'],
    refetchOnWindowFocus: false,
    queryFn: () => {
      return graphqlClient.request(GetPools, {});
    },
  });
};
