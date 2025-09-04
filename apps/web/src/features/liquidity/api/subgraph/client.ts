import { GraphQLClient } from 'graphql-request';

export const graphqlClient = new GraphQLClient(
  'https://swap-squid.sa.midl.xyz/graphql',
);
