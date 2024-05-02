import { graphqlClient } from '@/features/liquidity';
import { graphql } from '@/features/liquidity/api/gql';
import { GetLiquidityPositionsQuery } from '@/features/liquidity/api/gql/graphql';
import { useQuery } from '@tanstack/react-query';
import { Address } from 'viem';

const GetLiquidityPositions = graphql(`
  query GetLiquidityPositions($account: String!) {
    liquidityPositions(where: { user: $account, liquidityTokenBalance_gt: 0 }) {
      id
      pair {
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
      liquidityTokenBalance
    }
  }
`);

export const useLiquidityPositions = (account: Address) => {
  return useQuery<GetLiquidityPositionsQuery>({
    queryKey: ['GetLiquidityPositions', account],
    refetchOnWindowFocus: false,
    queryFn: () => {
      return graphqlClient.request(GetLiquidityPositions, {
        account: account.toLowerCase(),
      });
    },
  });
};
