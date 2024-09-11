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
  return useQuery<PairsQuery>({
    queryKey: ['GetPools'],
    refetchOnWindowFocus: false,
    queryFn: () => {
      return graphqlClient.request(GetPools, {});
    },
  });
};
