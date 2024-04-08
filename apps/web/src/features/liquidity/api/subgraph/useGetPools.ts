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
