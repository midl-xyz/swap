import { GraphQLClient } from 'graphql-request';

export const graphqlClient = new GraphQLClient(
  'https://api.rekt.me/mainnet/graphql',
);
