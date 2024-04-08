import { GraphQLClient } from 'graphql-request';

export const graphqlClient = new GraphQLClient(
  'https://api.thegraph.com/subgraphs/name/prom-io/uniswap-sepolia',
);
