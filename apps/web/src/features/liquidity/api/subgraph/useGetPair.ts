import { graphqlClient } from '@/features/liquidity';
import { graphql } from '@/features/liquidity/api/gql';
import { GetPairQuery } from '@/features/liquidity/api/gql/graphql';
import { useQuery } from '@tanstack/react-query';

const GetPair = graphql(`
  query GetPair($id: ID!) {
    pair(id: $id) {
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

export const useGetPair = (id: string) => {
  return useQuery<GetPairQuery>({
    queryKey: ['GetPair', id],
    queryFn: () => {
      return graphqlClient.request(GetPair, {
        id: id,
      });
    },
  });
};
