import { graphqlClient } from '@/features/liquidity';
import { graphql } from '@/features/liquidity/api/gql';
import { TokenPricePoint } from '@/features/liquidity/api/gql/graphql';
import { useQuery } from '@tanstack/react-query';
import { TypedDocumentNode } from '@graphql-typed-document-node/core';

type GetPairTokenPricesQuery = {
  tokenPrices: TokenPricePoint[];
};

type GetPairTokenPricesVariables = {
  maxPoints: number;
  from: string;
  to: string;
  tokenAddress: string;
};

const GetPairTokenPrices: TypedDocumentNode<
  GetPairTokenPricesQuery,
  GetPairTokenPricesVariables
> = graphql(/* GraphQL */ `
  query GetPairTokenPricesQuery(
    $maxPoints: Int!
    $from: String!
    $to: String!
    $tokenAddress: String!
  ) {
    tokenPrices(
      maxPoints: $maxPoints
      to: $to
      from: $from
      tokenAddress: $tokenAddress
    ) {
      timestamp
      priceUSD
    }
  }
`);

export const useGetPairPrices = ({
  maxPoints,
  from,
  to,
  tokenAddress,
}: GetPairTokenPricesVariables) => {
  return useQuery<GetPairTokenPricesQuery>({
    queryFn: async () => {
      return await graphqlClient.request(GetPairTokenPrices, {
        maxPoints,
        from,
        to,
        tokenAddress,
      });
    },
    queryKey: ['GetPairTokenPrices', maxPoints, from, to, tokenAddress],
    enabled: !!tokenAddress && !!from && !!to,
    staleTime: 5 * 60 * 1000, // 5 minutes
    gcTime: 10 * 60 * 1000, // 10 minutes
  });
};
