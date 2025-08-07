import { graphqlClient } from '@/features/liquidity';
import { QueryKey, useQuery } from '@tanstack/react-query';
import { graphql } from '@/features/liquidity/api/gql';
import {
  HistoricalPairMetricsWhereInput,
  HistoricalPairMetricsOrderByInput,
  HistoricalPairMetricsQuery,
} from '@/features/liquidity/api/gql/graphql';

export const GetHistoricalPairMetrics = graphql(/* GraphQL */ `
  query HistoricalPairMetrics(
    $where: HistoricalPairMetricsWhereInput
    $orderBy: [HistoricalPairMetricsOrderByInput!]
  ) {
    historicalPairMetrics(where: $where, orderBy: $orderBy, limit: 350) {
      id
      date
      pairAddress
      token0
      token1
      reserve0
      reserve1
      liquidityUSD
      lpTotalSupply
      lpTotalLocked
      token0Price
      token1Price
      txCount24h
      txCountTotal
      liquidityProviderCount
      lastUpdatedAt
      lastUpdatedAtBlockTimestamp
    }
  }
`);

interface Params {
  where?: HistoricalPairMetricsWhereInput;
  enabled?: boolean;
  queryKey?: QueryKey;
  limit?: number;
  offset?: number;
  orderBy?: HistoricalPairMetricsOrderByInput;
}

export const useGetHistoricalPairMetrics = ({
  queryKey,
  where,
  enabled = true,
  orderBy,
  ...rest
}: Params) => {
  return useQuery<HistoricalPairMetricsQuery>({
    enabled,
    queryKey: queryKey || ['MemeTokenHistory'],
    staleTime: 0,
    queryFn: () => {
      return graphqlClient.request(GetHistoricalPairMetrics, {
        where,
        orderBy,
        ...rest,
      });
    },
  });
};
