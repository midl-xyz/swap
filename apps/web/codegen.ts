import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    // 'https://api.thegraph.com/subgraphs/name/prom-io/uniswap-sepolia',
    'https://api.rekt.me/graphql', // Вторая схема
  ],
  documents: 'src/features/liquidity/api/**/*.ts',
  ignoreNoDocuments: true,
  generates: {
    'src/features/liquidity/api/gql/': {
      preset: 'client',
    },
  },
};

export default config;
