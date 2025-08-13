import { graphqlClient } from '@/features/liquidity';
import { graphql } from '@/features/liquidity/api/gql';
import { useQuery } from '@tanstack/react-query';

type PairPricePoint = {
  token0: {
    tokenAddress: string;
    tokenPrice: string;
  };
  token1: {
    tokenAddress: string;
    tokenPrice: string;
  };
  timestamp: string;
};

type GetPairPricesVariables = {
  maxPoints: number;
  from: string;
  to: string;
  token0Address: string;
  token1Address: string;
};

const GetPairPrices = graphql(/* GraphQL */ `
  query GetPairPricesQuery(
    $maxPoints: Int!
    $from: String!
    $to: String!
    $token0Address: String!
    $token1Address: String!
  ) {
    pairPrices(
      maxPoints: $maxPoints
      to: $to
      from: $from
      token0Address: $token0Address
      token1Address: $token1Address
    ) {
      token0 {
        tokenAddress
        tokenPrice
      }
      token1 {
        tokenAddress
        tokenPrice
      }
      timestamp
    }
  }
`);

export const useGetPairPrices = ({
  maxPoints,
  from,
  to,
  token0Address,
  token1Address,
}: GetPairPricesVariables) => {
  return useQuery({
    queryFn: async () => {
      return await graphqlClient.request(GetPairPrices as any, {
        maxPoints,
        from,
        to,
        token0Address,
        token1Address,
      });
    },
    queryKey: [
      'GetPairPrices',
      maxPoints,
      from,
      to,
      token0Address,
      token1Address,
    ],
    enabled: !!token0Address && !!token1Address && !!from && !!to,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
    retry: 3, // Built-in retry mechanism
  });
};
