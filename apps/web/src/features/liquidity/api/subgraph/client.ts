import { GraphQLClient } from 'graphql-request';

export const graphqlClient = new GraphQLClient(
  'https://subgraph.satsuma-prod.com/78ca71bf98f8/prom--194761/uniswap-sepolia/api',
);
