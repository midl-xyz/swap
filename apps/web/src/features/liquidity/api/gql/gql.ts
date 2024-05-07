/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
  '\n  query GetPair($id: ID!) {\n    pair(id: $id) {\n      id\n      token0 {\n        id\n        symbol\n        name\n      }\n      token1 {\n        id\n        symbol\n        name\n      }\n\n      reserve0\n      reserve1\n      totalSupply\n      txCount\n      volumeToken0\n      volumeToken1\n      volumeUSD\n      reserveUSD\n      reserveETH\n      token0Price\n      token1Price\n    }\n  }\n':
    types.GetPairDocument,
  '\n  query GetPools {\n    pairs {\n      id\n      token0 {\n        id\n        symbol\n        name\n      }\n      token1 {\n        id\n        symbol\n        name\n      }\n\n      reserve0\n      reserve1\n      totalSupply\n      txCount\n      volumeToken0\n      volumeToken1\n      volumeUSD\n      reserveUSD\n      reserveETH\n      token0Price\n      token1Price\n    }\n  }\n':
    types.GetPoolsDocument,
  '\n  query GetLiquidityPositions($account: String!) {\n    liquidityPositions(where: { user: $account, liquidityTokenBalance_gt: 0 }) {\n      id\n      pair {\n        id\n        token0 {\n          id\n          symbol\n          name\n        }\n        token1 {\n          id\n          symbol\n          name\n        }\n        reserve0\n        reserve1\n        totalSupply\n      }\n      liquidityTokenBalance\n    }\n  }\n':
    types.GetLiquidityPositionsDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetPair($id: ID!) {\n    pair(id: $id) {\n      id\n      token0 {\n        id\n        symbol\n        name\n      }\n      token1 {\n        id\n        symbol\n        name\n      }\n\n      reserve0\n      reserve1\n      totalSupply\n      txCount\n      volumeToken0\n      volumeToken1\n      volumeUSD\n      reserveUSD\n      reserveETH\n      token0Price\n      token1Price\n    }\n  }\n',
): (typeof documents)['\n  query GetPair($id: ID!) {\n    pair(id: $id) {\n      id\n      token0 {\n        id\n        symbol\n        name\n      }\n      token1 {\n        id\n        symbol\n        name\n      }\n\n      reserve0\n      reserve1\n      totalSupply\n      txCount\n      volumeToken0\n      volumeToken1\n      volumeUSD\n      reserveUSD\n      reserveETH\n      token0Price\n      token1Price\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetPools {\n    pairs {\n      id\n      token0 {\n        id\n        symbol\n        name\n      }\n      token1 {\n        id\n        symbol\n        name\n      }\n\n      reserve0\n      reserve1\n      totalSupply\n      txCount\n      volumeToken0\n      volumeToken1\n      volumeUSD\n      reserveUSD\n      reserveETH\n      token0Price\n      token1Price\n    }\n  }\n',
): (typeof documents)['\n  query GetPools {\n    pairs {\n      id\n      token0 {\n        id\n        symbol\n        name\n      }\n      token1 {\n        id\n        symbol\n        name\n      }\n\n      reserve0\n      reserve1\n      totalSupply\n      txCount\n      volumeToken0\n      volumeToken1\n      volumeUSD\n      reserveUSD\n      reserveETH\n      token0Price\n      token1Price\n    }\n  }\n'];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: '\n  query GetLiquidityPositions($account: String!) {\n    liquidityPositions(where: { user: $account, liquidityTokenBalance_gt: 0 }) {\n      id\n      pair {\n        id\n        token0 {\n          id\n          symbol\n          name\n        }\n        token1 {\n          id\n          symbol\n          name\n        }\n        reserve0\n        reserve1\n        totalSupply\n      }\n      liquidityTokenBalance\n    }\n  }\n',
): (typeof documents)['\n  query GetLiquidityPositions($account: String!) {\n    liquidityPositions(where: { user: $account, liquidityTokenBalance_gt: 0 }) {\n      id\n      pair {\n        id\n        token0 {\n          id\n          symbol\n          name\n        }\n        token1 {\n          id\n          symbol\n          name\n        }\n        reserve0\n        reserve1\n        totalSupply\n      }\n      liquidityTokenBalance\n    }\n  }\n'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
