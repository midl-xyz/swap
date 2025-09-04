import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    process.env.NEXT_PUBLIC_GRAPHQL_URL ||
      'https://squid.regtest.midl.xyz/graphql',
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
