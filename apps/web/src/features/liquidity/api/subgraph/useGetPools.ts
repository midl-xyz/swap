import { graphqlClient } from '@/features/liquidity';
import { graphql } from '@/features/liquidity/api/gql';
import { GetPoolsQuery } from '@/features/liquidity/api/gql/graphql';
import { useQuery } from '@tanstack/react-query';

const GetPools = graphql(`
  query GetPools {
    pairs {
      id
      token0 {
        id
        symbol
        name
      }
      token1 {
        id
        symbol
        name
      }

      reserve0
      reserve1
      totalSupply
      txCount
      volumeToken0
      volumeToken1
      volumeUSD
      reserveUSD
      reserveETH
      token0Price
      token1Price
    }
  }
`);

export const useGetPools = () => {
  return useQuery<GetPoolsQuery>({
    queryKey: ['GetPools'],
    queryFn: () => {
      return graphqlClient.request(GetPools);
    },
  });
};
