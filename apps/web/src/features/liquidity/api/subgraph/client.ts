import { GraphQLClient } from 'graphql-request';

export const graphqlClient = new GraphQLClient(
  'https://squid-staging.regtest.midl.xyz/graphql',
);
