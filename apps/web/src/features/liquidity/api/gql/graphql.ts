/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** Big number decimal */
  BigDecimal: { input: any; output: any };
  /** Big number integer */
  BigInt: { input: any; output: any };
};

export type LiquidityPosition = {
  __typename?: 'LiquidityPosition';
  id: Scalars['String']['output'];
  liquidityTokenBalance: Scalars['BigDecimal']['output'];
  pair: Pair;
  user: User;
};

export type LiquidityPositionEdge = {
  __typename?: 'LiquidityPositionEdge';
  cursor: Scalars['String']['output'];
  node: LiquidityPosition;
};

export enum LiquidityPositionOrderByInput {
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  LiquidityTokenBalanceAsc = 'liquidityTokenBalance_ASC',
  LiquidityTokenBalanceAscNullsFirst = 'liquidityTokenBalance_ASC_NULLS_FIRST',
  LiquidityTokenBalanceAscNullsLast = 'liquidityTokenBalance_ASC_NULLS_LAST',
  LiquidityTokenBalanceDesc = 'liquidityTokenBalance_DESC',
  LiquidityTokenBalanceDescNullsFirst = 'liquidityTokenBalance_DESC_NULLS_FIRST',
  LiquidityTokenBalanceDescNullsLast = 'liquidityTokenBalance_DESC_NULLS_LAST',
  PairCreatedAtBlockNumberAsc = 'pair_createdAtBlockNumber_ASC',
  PairCreatedAtBlockNumberAscNullsFirst = 'pair_createdAtBlockNumber_ASC_NULLS_FIRST',
  PairCreatedAtBlockNumberAscNullsLast = 'pair_createdAtBlockNumber_ASC_NULLS_LAST',
  PairCreatedAtBlockNumberDesc = 'pair_createdAtBlockNumber_DESC',
  PairCreatedAtBlockNumberDescNullsFirst = 'pair_createdAtBlockNumber_DESC_NULLS_FIRST',
  PairCreatedAtBlockNumberDescNullsLast = 'pair_createdAtBlockNumber_DESC_NULLS_LAST',
  PairCreatedAtTimestampAsc = 'pair_createdAtTimestamp_ASC',
  PairCreatedAtTimestampAscNullsFirst = 'pair_createdAtTimestamp_ASC_NULLS_FIRST',
  PairCreatedAtTimestampAscNullsLast = 'pair_createdAtTimestamp_ASC_NULLS_LAST',
  PairCreatedAtTimestampDesc = 'pair_createdAtTimestamp_DESC',
  PairCreatedAtTimestampDescNullsFirst = 'pair_createdAtTimestamp_DESC_NULLS_FIRST',
  PairCreatedAtTimestampDescNullsLast = 'pair_createdAtTimestamp_DESC_NULLS_LAST',
  PairIdAsc = 'pair_id_ASC',
  PairIdAscNullsFirst = 'pair_id_ASC_NULLS_FIRST',
  PairIdAscNullsLast = 'pair_id_ASC_NULLS_LAST',
  PairIdDesc = 'pair_id_DESC',
  PairIdDescNullsFirst = 'pair_id_DESC_NULLS_FIRST',
  PairIdDescNullsLast = 'pair_id_DESC_NULLS_LAST',
  PairLiquidityProviderCountAsc = 'pair_liquidityProviderCount_ASC',
  PairLiquidityProviderCountAscNullsFirst = 'pair_liquidityProviderCount_ASC_NULLS_FIRST',
  PairLiquidityProviderCountAscNullsLast = 'pair_liquidityProviderCount_ASC_NULLS_LAST',
  PairLiquidityProviderCountDesc = 'pair_liquidityProviderCount_DESC',
  PairLiquidityProviderCountDescNullsFirst = 'pair_liquidityProviderCount_DESC_NULLS_FIRST',
  PairLiquidityProviderCountDescNullsLast = 'pair_liquidityProviderCount_DESC_NULLS_LAST',
  PairReserve0Asc = 'pair_reserve0_ASC',
  PairReserve0AscNullsFirst = 'pair_reserve0_ASC_NULLS_FIRST',
  PairReserve0AscNullsLast = 'pair_reserve0_ASC_NULLS_LAST',
  PairReserve0Desc = 'pair_reserve0_DESC',
  PairReserve0DescNullsFirst = 'pair_reserve0_DESC_NULLS_FIRST',
  PairReserve0DescNullsLast = 'pair_reserve0_DESC_NULLS_LAST',
  PairReserve1Asc = 'pair_reserve1_ASC',
  PairReserve1AscNullsFirst = 'pair_reserve1_ASC_NULLS_FIRST',
  PairReserve1AscNullsLast = 'pair_reserve1_ASC_NULLS_LAST',
  PairReserve1Desc = 'pair_reserve1_DESC',
  PairReserve1DescNullsFirst = 'pair_reserve1_DESC_NULLS_FIRST',
  PairReserve1DescNullsLast = 'pair_reserve1_DESC_NULLS_LAST',
  PairReserveEthAsc = 'pair_reserveETH_ASC',
  PairReserveEthAscNullsFirst = 'pair_reserveETH_ASC_NULLS_FIRST',
  PairReserveEthAscNullsLast = 'pair_reserveETH_ASC_NULLS_LAST',
  PairReserveEthDesc = 'pair_reserveETH_DESC',
  PairReserveEthDescNullsFirst = 'pair_reserveETH_DESC_NULLS_FIRST',
  PairReserveEthDescNullsLast = 'pair_reserveETH_DESC_NULLS_LAST',
  PairReserveUsdAsc = 'pair_reserveUSD_ASC',
  PairReserveUsdAscNullsFirst = 'pair_reserveUSD_ASC_NULLS_FIRST',
  PairReserveUsdAscNullsLast = 'pair_reserveUSD_ASC_NULLS_LAST',
  PairReserveUsdDesc = 'pair_reserveUSD_DESC',
  PairReserveUsdDescNullsFirst = 'pair_reserveUSD_DESC_NULLS_FIRST',
  PairReserveUsdDescNullsLast = 'pair_reserveUSD_DESC_NULLS_LAST',
  PairToken0PriceAsc = 'pair_token0Price_ASC',
  PairToken0PriceAscNullsFirst = 'pair_token0Price_ASC_NULLS_FIRST',
  PairToken0PriceAscNullsLast = 'pair_token0Price_ASC_NULLS_LAST',
  PairToken0PriceDesc = 'pair_token0Price_DESC',
  PairToken0PriceDescNullsFirst = 'pair_token0Price_DESC_NULLS_FIRST',
  PairToken0PriceDescNullsLast = 'pair_token0Price_DESC_NULLS_LAST',
  PairToken1PriceAsc = 'pair_token1Price_ASC',
  PairToken1PriceAscNullsFirst = 'pair_token1Price_ASC_NULLS_FIRST',
  PairToken1PriceAscNullsLast = 'pair_token1Price_ASC_NULLS_LAST',
  PairToken1PriceDesc = 'pair_token1Price_DESC',
  PairToken1PriceDescNullsFirst = 'pair_token1Price_DESC_NULLS_FIRST',
  PairToken1PriceDescNullsLast = 'pair_token1Price_DESC_NULLS_LAST',
  PairTotalSupplyAsc = 'pair_totalSupply_ASC',
  PairTotalSupplyAscNullsFirst = 'pair_totalSupply_ASC_NULLS_FIRST',
  PairTotalSupplyAscNullsLast = 'pair_totalSupply_ASC_NULLS_LAST',
  PairTotalSupplyDesc = 'pair_totalSupply_DESC',
  PairTotalSupplyDescNullsFirst = 'pair_totalSupply_DESC_NULLS_FIRST',
  PairTotalSupplyDescNullsLast = 'pair_totalSupply_DESC_NULLS_LAST',
  PairTrackedReserveEthAsc = 'pair_trackedReserveETH_ASC',
  PairTrackedReserveEthAscNullsFirst = 'pair_trackedReserveETH_ASC_NULLS_FIRST',
  PairTrackedReserveEthAscNullsLast = 'pair_trackedReserveETH_ASC_NULLS_LAST',
  PairTrackedReserveEthDesc = 'pair_trackedReserveETH_DESC',
  PairTrackedReserveEthDescNullsFirst = 'pair_trackedReserveETH_DESC_NULLS_FIRST',
  PairTrackedReserveEthDescNullsLast = 'pair_trackedReserveETH_DESC_NULLS_LAST',
  PairTxCountAsc = 'pair_txCount_ASC',
  PairTxCountAscNullsFirst = 'pair_txCount_ASC_NULLS_FIRST',
  PairTxCountAscNullsLast = 'pair_txCount_ASC_NULLS_LAST',
  PairTxCountDesc = 'pair_txCount_DESC',
  PairTxCountDescNullsFirst = 'pair_txCount_DESC_NULLS_FIRST',
  PairTxCountDescNullsLast = 'pair_txCount_DESC_NULLS_LAST',
  PairUntrackedVolumeUsdAsc = 'pair_untrackedVolumeUSD_ASC',
  PairUntrackedVolumeUsdAscNullsFirst = 'pair_untrackedVolumeUSD_ASC_NULLS_FIRST',
  PairUntrackedVolumeUsdAscNullsLast = 'pair_untrackedVolumeUSD_ASC_NULLS_LAST',
  PairUntrackedVolumeUsdDesc = 'pair_untrackedVolumeUSD_DESC',
  PairUntrackedVolumeUsdDescNullsFirst = 'pair_untrackedVolumeUSD_DESC_NULLS_FIRST',
  PairUntrackedVolumeUsdDescNullsLast = 'pair_untrackedVolumeUSD_DESC_NULLS_LAST',
  PairVolumeToken0Asc = 'pair_volumeToken0_ASC',
  PairVolumeToken0AscNullsFirst = 'pair_volumeToken0_ASC_NULLS_FIRST',
  PairVolumeToken0AscNullsLast = 'pair_volumeToken0_ASC_NULLS_LAST',
  PairVolumeToken0Desc = 'pair_volumeToken0_DESC',
  PairVolumeToken0DescNullsFirst = 'pair_volumeToken0_DESC_NULLS_FIRST',
  PairVolumeToken0DescNullsLast = 'pair_volumeToken0_DESC_NULLS_LAST',
  PairVolumeToken1Asc = 'pair_volumeToken1_ASC',
  PairVolumeToken1AscNullsFirst = 'pair_volumeToken1_ASC_NULLS_FIRST',
  PairVolumeToken1AscNullsLast = 'pair_volumeToken1_ASC_NULLS_LAST',
  PairVolumeToken1Desc = 'pair_volumeToken1_DESC',
  PairVolumeToken1DescNullsFirst = 'pair_volumeToken1_DESC_NULLS_FIRST',
  PairVolumeToken1DescNullsLast = 'pair_volumeToken1_DESC_NULLS_LAST',
  PairVolumeUsdAsc = 'pair_volumeUSD_ASC',
  PairVolumeUsdAscNullsFirst = 'pair_volumeUSD_ASC_NULLS_FIRST',
  PairVolumeUsdAscNullsLast = 'pair_volumeUSD_ASC_NULLS_LAST',
  PairVolumeUsdDesc = 'pair_volumeUSD_DESC',
  PairVolumeUsdDescNullsFirst = 'pair_volumeUSD_DESC_NULLS_FIRST',
  PairVolumeUsdDescNullsLast = 'pair_volumeUSD_DESC_NULLS_LAST',
  UserIdAsc = 'user_id_ASC',
  UserIdAscNullsFirst = 'user_id_ASC_NULLS_FIRST',
  UserIdAscNullsLast = 'user_id_ASC_NULLS_LAST',
  UserIdDesc = 'user_id_DESC',
  UserIdDescNullsFirst = 'user_id_DESC_NULLS_FIRST',
  UserIdDescNullsLast = 'user_id_DESC_NULLS_LAST',
  UserUsdSwappedAsc = 'user_usdSwapped_ASC',
  UserUsdSwappedAscNullsFirst = 'user_usdSwapped_ASC_NULLS_FIRST',
  UserUsdSwappedAscNullsLast = 'user_usdSwapped_ASC_NULLS_LAST',
  UserUsdSwappedDesc = 'user_usdSwapped_DESC',
  UserUsdSwappedDescNullsFirst = 'user_usdSwapped_DESC_NULLS_FIRST',
  UserUsdSwappedDescNullsLast = 'user_usdSwapped_DESC_NULLS_LAST',
}

export type LiquidityPositionSnapshot = {
  __typename?: 'LiquidityPositionSnapshot';
  block: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  liquidityPosition: LiquidityPosition;
  liquidityTokenBalance: Scalars['BigDecimal']['output'];
  liquidityTokenTotalSupply: Scalars['BigDecimal']['output'];
  pair: Pair;
  reserve0: Scalars['BigDecimal']['output'];
  reserve1: Scalars['BigDecimal']['output'];
  reserveUSD: Scalars['BigDecimal']['output'];
  timestamp: Scalars['Int']['output'];
  token0PriceUSD: Scalars['BigDecimal']['output'];
  token1PriceUSD: Scalars['BigDecimal']['output'];
  user: User;
};

export type LiquidityPositionSnapshotEdge = {
  __typename?: 'LiquidityPositionSnapshotEdge';
  cursor: Scalars['String']['output'];
  node: LiquidityPositionSnapshot;
};

export enum LiquidityPositionSnapshotOrderByInput {
  BlockAsc = 'block_ASC',
  BlockAscNullsFirst = 'block_ASC_NULLS_FIRST',
  BlockAscNullsLast = 'block_ASC_NULLS_LAST',
  BlockDesc = 'block_DESC',
  BlockDescNullsFirst = 'block_DESC_NULLS_FIRST',
  BlockDescNullsLast = 'block_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  LiquidityPositionIdAsc = 'liquidityPosition_id_ASC',
  LiquidityPositionIdAscNullsFirst = 'liquidityPosition_id_ASC_NULLS_FIRST',
  LiquidityPositionIdAscNullsLast = 'liquidityPosition_id_ASC_NULLS_LAST',
  LiquidityPositionIdDesc = 'liquidityPosition_id_DESC',
  LiquidityPositionIdDescNullsFirst = 'liquidityPosition_id_DESC_NULLS_FIRST',
  LiquidityPositionIdDescNullsLast = 'liquidityPosition_id_DESC_NULLS_LAST',
  LiquidityPositionLiquidityTokenBalanceAsc = 'liquidityPosition_liquidityTokenBalance_ASC',
  LiquidityPositionLiquidityTokenBalanceAscNullsFirst = 'liquidityPosition_liquidityTokenBalance_ASC_NULLS_FIRST',
  LiquidityPositionLiquidityTokenBalanceAscNullsLast = 'liquidityPosition_liquidityTokenBalance_ASC_NULLS_LAST',
  LiquidityPositionLiquidityTokenBalanceDesc = 'liquidityPosition_liquidityTokenBalance_DESC',
  LiquidityPositionLiquidityTokenBalanceDescNullsFirst = 'liquidityPosition_liquidityTokenBalance_DESC_NULLS_FIRST',
  LiquidityPositionLiquidityTokenBalanceDescNullsLast = 'liquidityPosition_liquidityTokenBalance_DESC_NULLS_LAST',
  LiquidityTokenBalanceAsc = 'liquidityTokenBalance_ASC',
  LiquidityTokenBalanceAscNullsFirst = 'liquidityTokenBalance_ASC_NULLS_FIRST',
  LiquidityTokenBalanceAscNullsLast = 'liquidityTokenBalance_ASC_NULLS_LAST',
  LiquidityTokenBalanceDesc = 'liquidityTokenBalance_DESC',
  LiquidityTokenBalanceDescNullsFirst = 'liquidityTokenBalance_DESC_NULLS_FIRST',
  LiquidityTokenBalanceDescNullsLast = 'liquidityTokenBalance_DESC_NULLS_LAST',
  LiquidityTokenTotalSupplyAsc = 'liquidityTokenTotalSupply_ASC',
  LiquidityTokenTotalSupplyAscNullsFirst = 'liquidityTokenTotalSupply_ASC_NULLS_FIRST',
  LiquidityTokenTotalSupplyAscNullsLast = 'liquidityTokenTotalSupply_ASC_NULLS_LAST',
  LiquidityTokenTotalSupplyDesc = 'liquidityTokenTotalSupply_DESC',
  LiquidityTokenTotalSupplyDescNullsFirst = 'liquidityTokenTotalSupply_DESC_NULLS_FIRST',
  LiquidityTokenTotalSupplyDescNullsLast = 'liquidityTokenTotalSupply_DESC_NULLS_LAST',
  PairCreatedAtBlockNumberAsc = 'pair_createdAtBlockNumber_ASC',
  PairCreatedAtBlockNumberAscNullsFirst = 'pair_createdAtBlockNumber_ASC_NULLS_FIRST',
  PairCreatedAtBlockNumberAscNullsLast = 'pair_createdAtBlockNumber_ASC_NULLS_LAST',
  PairCreatedAtBlockNumberDesc = 'pair_createdAtBlockNumber_DESC',
  PairCreatedAtBlockNumberDescNullsFirst = 'pair_createdAtBlockNumber_DESC_NULLS_FIRST',
  PairCreatedAtBlockNumberDescNullsLast = 'pair_createdAtBlockNumber_DESC_NULLS_LAST',
  PairCreatedAtTimestampAsc = 'pair_createdAtTimestamp_ASC',
  PairCreatedAtTimestampAscNullsFirst = 'pair_createdAtTimestamp_ASC_NULLS_FIRST',
  PairCreatedAtTimestampAscNullsLast = 'pair_createdAtTimestamp_ASC_NULLS_LAST',
  PairCreatedAtTimestampDesc = 'pair_createdAtTimestamp_DESC',
  PairCreatedAtTimestampDescNullsFirst = 'pair_createdAtTimestamp_DESC_NULLS_FIRST',
  PairCreatedAtTimestampDescNullsLast = 'pair_createdAtTimestamp_DESC_NULLS_LAST',
  PairIdAsc = 'pair_id_ASC',
  PairIdAscNullsFirst = 'pair_id_ASC_NULLS_FIRST',
  PairIdAscNullsLast = 'pair_id_ASC_NULLS_LAST',
  PairIdDesc = 'pair_id_DESC',
  PairIdDescNullsFirst = 'pair_id_DESC_NULLS_FIRST',
  PairIdDescNullsLast = 'pair_id_DESC_NULLS_LAST',
  PairLiquidityProviderCountAsc = 'pair_liquidityProviderCount_ASC',
  PairLiquidityProviderCountAscNullsFirst = 'pair_liquidityProviderCount_ASC_NULLS_FIRST',
  PairLiquidityProviderCountAscNullsLast = 'pair_liquidityProviderCount_ASC_NULLS_LAST',
  PairLiquidityProviderCountDesc = 'pair_liquidityProviderCount_DESC',
  PairLiquidityProviderCountDescNullsFirst = 'pair_liquidityProviderCount_DESC_NULLS_FIRST',
  PairLiquidityProviderCountDescNullsLast = 'pair_liquidityProviderCount_DESC_NULLS_LAST',
  PairReserve0Asc = 'pair_reserve0_ASC',
  PairReserve0AscNullsFirst = 'pair_reserve0_ASC_NULLS_FIRST',
  PairReserve0AscNullsLast = 'pair_reserve0_ASC_NULLS_LAST',
  PairReserve0Desc = 'pair_reserve0_DESC',
  PairReserve0DescNullsFirst = 'pair_reserve0_DESC_NULLS_FIRST',
  PairReserve0DescNullsLast = 'pair_reserve0_DESC_NULLS_LAST',
  PairReserve1Asc = 'pair_reserve1_ASC',
  PairReserve1AscNullsFirst = 'pair_reserve1_ASC_NULLS_FIRST',
  PairReserve1AscNullsLast = 'pair_reserve1_ASC_NULLS_LAST',
  PairReserve1Desc = 'pair_reserve1_DESC',
  PairReserve1DescNullsFirst = 'pair_reserve1_DESC_NULLS_FIRST',
  PairReserve1DescNullsLast = 'pair_reserve1_DESC_NULLS_LAST',
  PairReserveEthAsc = 'pair_reserveETH_ASC',
  PairReserveEthAscNullsFirst = 'pair_reserveETH_ASC_NULLS_FIRST',
  PairReserveEthAscNullsLast = 'pair_reserveETH_ASC_NULLS_LAST',
  PairReserveEthDesc = 'pair_reserveETH_DESC',
  PairReserveEthDescNullsFirst = 'pair_reserveETH_DESC_NULLS_FIRST',
  PairReserveEthDescNullsLast = 'pair_reserveETH_DESC_NULLS_LAST',
  PairReserveUsdAsc = 'pair_reserveUSD_ASC',
  PairReserveUsdAscNullsFirst = 'pair_reserveUSD_ASC_NULLS_FIRST',
  PairReserveUsdAscNullsLast = 'pair_reserveUSD_ASC_NULLS_LAST',
  PairReserveUsdDesc = 'pair_reserveUSD_DESC',
  PairReserveUsdDescNullsFirst = 'pair_reserveUSD_DESC_NULLS_FIRST',
  PairReserveUsdDescNullsLast = 'pair_reserveUSD_DESC_NULLS_LAST',
  PairToken0PriceAsc = 'pair_token0Price_ASC',
  PairToken0PriceAscNullsFirst = 'pair_token0Price_ASC_NULLS_FIRST',
  PairToken0PriceAscNullsLast = 'pair_token0Price_ASC_NULLS_LAST',
  PairToken0PriceDesc = 'pair_token0Price_DESC',
  PairToken0PriceDescNullsFirst = 'pair_token0Price_DESC_NULLS_FIRST',
  PairToken0PriceDescNullsLast = 'pair_token0Price_DESC_NULLS_LAST',
  PairToken1PriceAsc = 'pair_token1Price_ASC',
  PairToken1PriceAscNullsFirst = 'pair_token1Price_ASC_NULLS_FIRST',
  PairToken1PriceAscNullsLast = 'pair_token1Price_ASC_NULLS_LAST',
  PairToken1PriceDesc = 'pair_token1Price_DESC',
  PairToken1PriceDescNullsFirst = 'pair_token1Price_DESC_NULLS_FIRST',
  PairToken1PriceDescNullsLast = 'pair_token1Price_DESC_NULLS_LAST',
  PairTotalSupplyAsc = 'pair_totalSupply_ASC',
  PairTotalSupplyAscNullsFirst = 'pair_totalSupply_ASC_NULLS_FIRST',
  PairTotalSupplyAscNullsLast = 'pair_totalSupply_ASC_NULLS_LAST',
  PairTotalSupplyDesc = 'pair_totalSupply_DESC',
  PairTotalSupplyDescNullsFirst = 'pair_totalSupply_DESC_NULLS_FIRST',
  PairTotalSupplyDescNullsLast = 'pair_totalSupply_DESC_NULLS_LAST',
  PairTrackedReserveEthAsc = 'pair_trackedReserveETH_ASC',
  PairTrackedReserveEthAscNullsFirst = 'pair_trackedReserveETH_ASC_NULLS_FIRST',
  PairTrackedReserveEthAscNullsLast = 'pair_trackedReserveETH_ASC_NULLS_LAST',
  PairTrackedReserveEthDesc = 'pair_trackedReserveETH_DESC',
  PairTrackedReserveEthDescNullsFirst = 'pair_trackedReserveETH_DESC_NULLS_FIRST',
  PairTrackedReserveEthDescNullsLast = 'pair_trackedReserveETH_DESC_NULLS_LAST',
  PairTxCountAsc = 'pair_txCount_ASC',
  PairTxCountAscNullsFirst = 'pair_txCount_ASC_NULLS_FIRST',
  PairTxCountAscNullsLast = 'pair_txCount_ASC_NULLS_LAST',
  PairTxCountDesc = 'pair_txCount_DESC',
  PairTxCountDescNullsFirst = 'pair_txCount_DESC_NULLS_FIRST',
  PairTxCountDescNullsLast = 'pair_txCount_DESC_NULLS_LAST',
  PairUntrackedVolumeUsdAsc = 'pair_untrackedVolumeUSD_ASC',
  PairUntrackedVolumeUsdAscNullsFirst = 'pair_untrackedVolumeUSD_ASC_NULLS_FIRST',
  PairUntrackedVolumeUsdAscNullsLast = 'pair_untrackedVolumeUSD_ASC_NULLS_LAST',
  PairUntrackedVolumeUsdDesc = 'pair_untrackedVolumeUSD_DESC',
  PairUntrackedVolumeUsdDescNullsFirst = 'pair_untrackedVolumeUSD_DESC_NULLS_FIRST',
  PairUntrackedVolumeUsdDescNullsLast = 'pair_untrackedVolumeUSD_DESC_NULLS_LAST',
  PairVolumeToken0Asc = 'pair_volumeToken0_ASC',
  PairVolumeToken0AscNullsFirst = 'pair_volumeToken0_ASC_NULLS_FIRST',
  PairVolumeToken0AscNullsLast = 'pair_volumeToken0_ASC_NULLS_LAST',
  PairVolumeToken0Desc = 'pair_volumeToken0_DESC',
  PairVolumeToken0DescNullsFirst = 'pair_volumeToken0_DESC_NULLS_FIRST',
  PairVolumeToken0DescNullsLast = 'pair_volumeToken0_DESC_NULLS_LAST',
  PairVolumeToken1Asc = 'pair_volumeToken1_ASC',
  PairVolumeToken1AscNullsFirst = 'pair_volumeToken1_ASC_NULLS_FIRST',
  PairVolumeToken1AscNullsLast = 'pair_volumeToken1_ASC_NULLS_LAST',
  PairVolumeToken1Desc = 'pair_volumeToken1_DESC',
  PairVolumeToken1DescNullsFirst = 'pair_volumeToken1_DESC_NULLS_FIRST',
  PairVolumeToken1DescNullsLast = 'pair_volumeToken1_DESC_NULLS_LAST',
  PairVolumeUsdAsc = 'pair_volumeUSD_ASC',
  PairVolumeUsdAscNullsFirst = 'pair_volumeUSD_ASC_NULLS_FIRST',
  PairVolumeUsdAscNullsLast = 'pair_volumeUSD_ASC_NULLS_LAST',
  PairVolumeUsdDesc = 'pair_volumeUSD_DESC',
  PairVolumeUsdDescNullsFirst = 'pair_volumeUSD_DESC_NULLS_FIRST',
  PairVolumeUsdDescNullsLast = 'pair_volumeUSD_DESC_NULLS_LAST',
  Reserve0Asc = 'reserve0_ASC',
  Reserve0AscNullsFirst = 'reserve0_ASC_NULLS_FIRST',
  Reserve0AscNullsLast = 'reserve0_ASC_NULLS_LAST',
  Reserve0Desc = 'reserve0_DESC',
  Reserve0DescNullsFirst = 'reserve0_DESC_NULLS_FIRST',
  Reserve0DescNullsLast = 'reserve0_DESC_NULLS_LAST',
  Reserve1Asc = 'reserve1_ASC',
  Reserve1AscNullsFirst = 'reserve1_ASC_NULLS_FIRST',
  Reserve1AscNullsLast = 'reserve1_ASC_NULLS_LAST',
  Reserve1Desc = 'reserve1_DESC',
  Reserve1DescNullsFirst = 'reserve1_DESC_NULLS_FIRST',
  Reserve1DescNullsLast = 'reserve1_DESC_NULLS_LAST',
  ReserveUsdAsc = 'reserveUSD_ASC',
  ReserveUsdAscNullsFirst = 'reserveUSD_ASC_NULLS_FIRST',
  ReserveUsdAscNullsLast = 'reserveUSD_ASC_NULLS_LAST',
  ReserveUsdDesc = 'reserveUSD_DESC',
  ReserveUsdDescNullsFirst = 'reserveUSD_DESC_NULLS_FIRST',
  ReserveUsdDescNullsLast = 'reserveUSD_DESC_NULLS_LAST',
  TimestampAsc = 'timestamp_ASC',
  TimestampAscNullsFirst = 'timestamp_ASC_NULLS_FIRST',
  TimestampAscNullsLast = 'timestamp_ASC_NULLS_LAST',
  TimestampDesc = 'timestamp_DESC',
  TimestampDescNullsFirst = 'timestamp_DESC_NULLS_FIRST',
  TimestampDescNullsLast = 'timestamp_DESC_NULLS_LAST',
  Token0PriceUsdAsc = 'token0PriceUSD_ASC',
  Token0PriceUsdAscNullsFirst = 'token0PriceUSD_ASC_NULLS_FIRST',
  Token0PriceUsdAscNullsLast = 'token0PriceUSD_ASC_NULLS_LAST',
  Token0PriceUsdDesc = 'token0PriceUSD_DESC',
  Token0PriceUsdDescNullsFirst = 'token0PriceUSD_DESC_NULLS_FIRST',
  Token0PriceUsdDescNullsLast = 'token0PriceUSD_DESC_NULLS_LAST',
  Token1PriceUsdAsc = 'token1PriceUSD_ASC',
  Token1PriceUsdAscNullsFirst = 'token1PriceUSD_ASC_NULLS_FIRST',
  Token1PriceUsdAscNullsLast = 'token1PriceUSD_ASC_NULLS_LAST',
  Token1PriceUsdDesc = 'token1PriceUSD_DESC',
  Token1PriceUsdDescNullsFirst = 'token1PriceUSD_DESC_NULLS_FIRST',
  Token1PriceUsdDescNullsLast = 'token1PriceUSD_DESC_NULLS_LAST',
  UserIdAsc = 'user_id_ASC',
  UserIdAscNullsFirst = 'user_id_ASC_NULLS_FIRST',
  UserIdAscNullsLast = 'user_id_ASC_NULLS_LAST',
  UserIdDesc = 'user_id_DESC',
  UserIdDescNullsFirst = 'user_id_DESC_NULLS_FIRST',
  UserIdDescNullsLast = 'user_id_DESC_NULLS_LAST',
  UserUsdSwappedAsc = 'user_usdSwapped_ASC',
  UserUsdSwappedAscNullsFirst = 'user_usdSwapped_ASC_NULLS_FIRST',
  UserUsdSwappedAscNullsLast = 'user_usdSwapped_ASC_NULLS_LAST',
  UserUsdSwappedDesc = 'user_usdSwapped_DESC',
  UserUsdSwappedDescNullsFirst = 'user_usdSwapped_DESC_NULLS_FIRST',
  UserUsdSwappedDescNullsLast = 'user_usdSwapped_DESC_NULLS_LAST',
}

export type LiquidityPositionSnapshotWhereInput = {
  AND?: InputMaybe<Array<LiquidityPositionSnapshotWhereInput>>;
  OR?: InputMaybe<Array<LiquidityPositionSnapshotWhereInput>>;
  block_eq?: InputMaybe<Scalars['Int']['input']>;
  block_gt?: InputMaybe<Scalars['Int']['input']>;
  block_gte?: InputMaybe<Scalars['Int']['input']>;
  block_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  block_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  block_lt?: InputMaybe<Scalars['Int']['input']>;
  block_lte?: InputMaybe<Scalars['Int']['input']>;
  block_not_eq?: InputMaybe<Scalars['Int']['input']>;
  block_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  liquidityPosition?: InputMaybe<LiquidityPositionWhereInput>;
  liquidityPosition_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  liquidityTokenBalance_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  liquidityTokenBalance_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  liquidityTokenBalance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >;
  liquidityTokenTotalSupply_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenTotalSupply_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenTotalSupply_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenTotalSupply_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >;
  liquidityTokenTotalSupply_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  liquidityTokenTotalSupply_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenTotalSupply_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenTotalSupply_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenTotalSupply_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >;
  pair?: InputMaybe<PairWhereInput>;
  pair_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserve0_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve0_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserve0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve1_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve1_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserve1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserveUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserveUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  timestamp_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_gte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['Int']['input']>;
  timestamp_lte?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['Int']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  token0PriceUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0PriceUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0PriceUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0PriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0PriceUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  token0PriceUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0PriceUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0PriceUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0PriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1PriceUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1PriceUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1PriceUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1PriceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1PriceUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  token1PriceUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1PriceUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1PriceUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1PriceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  user?: InputMaybe<UserWhereInput>;
  user_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LiquidityPositionSnapshotsConnection = {
  __typename?: 'LiquidityPositionSnapshotsConnection';
  edges: Array<LiquidityPositionSnapshotEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LiquidityPositionWhereInput = {
  AND?: InputMaybe<Array<LiquidityPositionWhereInput>>;
  OR?: InputMaybe<Array<LiquidityPositionWhereInput>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  liquidityTokenBalance_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  liquidityTokenBalance_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  liquidityTokenBalance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityTokenBalance_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >;
  pair?: InputMaybe<PairWhereInput>;
  pair_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  user?: InputMaybe<UserWhereInput>;
  user_isNull?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LiquidityPositionsConnection = {
  __typename?: 'LiquidityPositionsConnection';
  edges: Array<LiquidityPositionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type MemeToken = {
  __typename?: 'MemeToken';
  activityVaultAllocation?: Maybe<Scalars['BigInt']['output']>;
  id: Scalars['String']['output'];
  memeCreatedAt?: Maybe<Scalars['BigInt']['output']>;
  ownerAllocation?: Maybe<Scalars['BigInt']['output']>;
  tokenAddress: Scalars['String']['output'];
  tokenName: Scalars['String']['output'];
  tokenPrice?: Maybe<Scalars['BigInt']['output']>;
  tokenSymbol: Scalars['String']['output'];
  tokenV60Initiated?: Maybe<Scalars['Boolean']['output']>;
  userAddress: Scalars['String']['output'];
  v60LpTokenAddress?: Maybe<Scalars['String']['output']>;
};

export type MemeTokenEdge = {
  __typename?: 'MemeTokenEdge';
  cursor: Scalars['String']['output'];
  node: MemeToken;
};

export enum MemeTokenOrderByInput {
  ActivityVaultAllocationAsc = 'activityVaultAllocation_ASC',
  ActivityVaultAllocationAscNullsFirst = 'activityVaultAllocation_ASC_NULLS_FIRST',
  ActivityVaultAllocationAscNullsLast = 'activityVaultAllocation_ASC_NULLS_LAST',
  ActivityVaultAllocationDesc = 'activityVaultAllocation_DESC',
  ActivityVaultAllocationDescNullsFirst = 'activityVaultAllocation_DESC_NULLS_FIRST',
  ActivityVaultAllocationDescNullsLast = 'activityVaultAllocation_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  MemeCreatedAtAsc = 'memeCreatedAt_ASC',
  MemeCreatedAtAscNullsFirst = 'memeCreatedAt_ASC_NULLS_FIRST',
  MemeCreatedAtAscNullsLast = 'memeCreatedAt_ASC_NULLS_LAST',
  MemeCreatedAtDesc = 'memeCreatedAt_DESC',
  MemeCreatedAtDescNullsFirst = 'memeCreatedAt_DESC_NULLS_FIRST',
  MemeCreatedAtDescNullsLast = 'memeCreatedAt_DESC_NULLS_LAST',
  OwnerAllocationAsc = 'ownerAllocation_ASC',
  OwnerAllocationAscNullsFirst = 'ownerAllocation_ASC_NULLS_FIRST',
  OwnerAllocationAscNullsLast = 'ownerAllocation_ASC_NULLS_LAST',
  OwnerAllocationDesc = 'ownerAllocation_DESC',
  OwnerAllocationDescNullsFirst = 'ownerAllocation_DESC_NULLS_FIRST',
  OwnerAllocationDescNullsLast = 'ownerAllocation_DESC_NULLS_LAST',
  TokenAddressAsc = 'tokenAddress_ASC',
  TokenAddressAscNullsFirst = 'tokenAddress_ASC_NULLS_FIRST',
  TokenAddressAscNullsLast = 'tokenAddress_ASC_NULLS_LAST',
  TokenAddressDesc = 'tokenAddress_DESC',
  TokenAddressDescNullsFirst = 'tokenAddress_DESC_NULLS_FIRST',
  TokenAddressDescNullsLast = 'tokenAddress_DESC_NULLS_LAST',
  TokenNameAsc = 'tokenName_ASC',
  TokenNameAscNullsFirst = 'tokenName_ASC_NULLS_FIRST',
  TokenNameAscNullsLast = 'tokenName_ASC_NULLS_LAST',
  TokenNameDesc = 'tokenName_DESC',
  TokenNameDescNullsFirst = 'tokenName_DESC_NULLS_FIRST',
  TokenNameDescNullsLast = 'tokenName_DESC_NULLS_LAST',
  TokenPriceAsc = 'tokenPrice_ASC',
  TokenPriceAscNullsFirst = 'tokenPrice_ASC_NULLS_FIRST',
  TokenPriceAscNullsLast = 'tokenPrice_ASC_NULLS_LAST',
  TokenPriceDesc = 'tokenPrice_DESC',
  TokenPriceDescNullsFirst = 'tokenPrice_DESC_NULLS_FIRST',
  TokenPriceDescNullsLast = 'tokenPrice_DESC_NULLS_LAST',
  TokenSymbolAsc = 'tokenSymbol_ASC',
  TokenSymbolAscNullsFirst = 'tokenSymbol_ASC_NULLS_FIRST',
  TokenSymbolAscNullsLast = 'tokenSymbol_ASC_NULLS_LAST',
  TokenSymbolDesc = 'tokenSymbol_DESC',
  TokenSymbolDescNullsFirst = 'tokenSymbol_DESC_NULLS_FIRST',
  TokenSymbolDescNullsLast = 'tokenSymbol_DESC_NULLS_LAST',
  TokenV60InitiatedAsc = 'tokenV60Initiated_ASC',
  TokenV60InitiatedAscNullsFirst = 'tokenV60Initiated_ASC_NULLS_FIRST',
  TokenV60InitiatedAscNullsLast = 'tokenV60Initiated_ASC_NULLS_LAST',
  TokenV60InitiatedDesc = 'tokenV60Initiated_DESC',
  TokenV60InitiatedDescNullsFirst = 'tokenV60Initiated_DESC_NULLS_FIRST',
  TokenV60InitiatedDescNullsLast = 'tokenV60Initiated_DESC_NULLS_LAST',
  UserAddressAsc = 'userAddress_ASC',
  UserAddressAscNullsFirst = 'userAddress_ASC_NULLS_FIRST',
  UserAddressAscNullsLast = 'userAddress_ASC_NULLS_LAST',
  UserAddressDesc = 'userAddress_DESC',
  UserAddressDescNullsFirst = 'userAddress_DESC_NULLS_FIRST',
  UserAddressDescNullsLast = 'userAddress_DESC_NULLS_LAST',
  V60LpTokenAddressAsc = 'v60LpTokenAddress_ASC',
  V60LpTokenAddressAscNullsFirst = 'v60LpTokenAddress_ASC_NULLS_FIRST',
  V60LpTokenAddressAscNullsLast = 'v60LpTokenAddress_ASC_NULLS_LAST',
  V60LpTokenAddressDesc = 'v60LpTokenAddress_DESC',
  V60LpTokenAddressDescNullsFirst = 'v60LpTokenAddress_DESC_NULLS_FIRST',
  V60LpTokenAddressDescNullsLast = 'v60LpTokenAddress_DESC_NULLS_LAST',
}

export type MemeTokenWhereInput = {
  AND?: InputMaybe<Array<MemeTokenWhereInput>>;
  OR?: InputMaybe<Array<MemeTokenWhereInput>>;
  activityVaultAllocation_eq?: InputMaybe<Scalars['BigInt']['input']>;
  activityVaultAllocation_gt?: InputMaybe<Scalars['BigInt']['input']>;
  activityVaultAllocation_gte?: InputMaybe<Scalars['BigInt']['input']>;
  activityVaultAllocation_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  activityVaultAllocation_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  activityVaultAllocation_lt?: InputMaybe<Scalars['BigInt']['input']>;
  activityVaultAllocation_lte?: InputMaybe<Scalars['BigInt']['input']>;
  activityVaultAllocation_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  activityVaultAllocation_not_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  memeCreatedAt_eq?: InputMaybe<Scalars['BigInt']['input']>;
  memeCreatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  memeCreatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  memeCreatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  memeCreatedAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  memeCreatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  memeCreatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  memeCreatedAt_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  memeCreatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ownerAllocation_eq?: InputMaybe<Scalars['BigInt']['input']>;
  ownerAllocation_gt?: InputMaybe<Scalars['BigInt']['input']>;
  ownerAllocation_gte?: InputMaybe<Scalars['BigInt']['input']>;
  ownerAllocation_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  ownerAllocation_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  ownerAllocation_lt?: InputMaybe<Scalars['BigInt']['input']>;
  ownerAllocation_lte?: InputMaybe<Scalars['BigInt']['input']>;
  ownerAllocation_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  ownerAllocation_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenAddress_contains?: InputMaybe<Scalars['String']['input']>;
  tokenAddress_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  tokenAddress_endsWith?: InputMaybe<Scalars['String']['input']>;
  tokenAddress_eq?: InputMaybe<Scalars['String']['input']>;
  tokenAddress_gt?: InputMaybe<Scalars['String']['input']>;
  tokenAddress_gte?: InputMaybe<Scalars['String']['input']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenAddress_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tokenAddress_lt?: InputMaybe<Scalars['String']['input']>;
  tokenAddress_lte?: InputMaybe<Scalars['String']['input']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenAddress_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  tokenAddress_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  tokenAddress_not_eq?: InputMaybe<Scalars['String']['input']>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenAddress_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  tokenAddress_startsWith?: InputMaybe<Scalars['String']['input']>;
  tokenName_contains?: InputMaybe<Scalars['String']['input']>;
  tokenName_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  tokenName_endsWith?: InputMaybe<Scalars['String']['input']>;
  tokenName_eq?: InputMaybe<Scalars['String']['input']>;
  tokenName_gt?: InputMaybe<Scalars['String']['input']>;
  tokenName_gte?: InputMaybe<Scalars['String']['input']>;
  tokenName_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenName_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tokenName_lt?: InputMaybe<Scalars['String']['input']>;
  tokenName_lte?: InputMaybe<Scalars['String']['input']>;
  tokenName_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenName_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  tokenName_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  tokenName_not_eq?: InputMaybe<Scalars['String']['input']>;
  tokenName_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenName_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  tokenName_startsWith?: InputMaybe<Scalars['String']['input']>;
  tokenPrice_eq?: InputMaybe<Scalars['BigInt']['input']>;
  tokenPrice_gt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenPrice_gte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenPrice_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenPrice_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tokenPrice_lt?: InputMaybe<Scalars['BigInt']['input']>;
  tokenPrice_lte?: InputMaybe<Scalars['BigInt']['input']>;
  tokenPrice_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  tokenPrice_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenSymbol_contains?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_endsWith?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_eq?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_gt?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_gte?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenSymbol_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tokenSymbol_lt?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_lte?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_not_eq?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenSymbol_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  tokenSymbol_startsWith?: InputMaybe<Scalars['String']['input']>;
  tokenV60Initiated_eq?: InputMaybe<Scalars['Boolean']['input']>;
  tokenV60Initiated_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tokenV60Initiated_not_eq?: InputMaybe<Scalars['Boolean']['input']>;
  userAddress_contains?: InputMaybe<Scalars['String']['input']>;
  userAddress_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  userAddress_endsWith?: InputMaybe<Scalars['String']['input']>;
  userAddress_eq?: InputMaybe<Scalars['String']['input']>;
  userAddress_gt?: InputMaybe<Scalars['String']['input']>;
  userAddress_gte?: InputMaybe<Scalars['String']['input']>;
  userAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  userAddress_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  userAddress_lt?: InputMaybe<Scalars['String']['input']>;
  userAddress_lte?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_eq?: InputMaybe<Scalars['String']['input']>;
  userAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  userAddress_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  userAddress_startsWith?: InputMaybe<Scalars['String']['input']>;
  v60LpTokenAddress_contains?: InputMaybe<Scalars['String']['input']>;
  v60LpTokenAddress_containsInsensitive?: InputMaybe<
    Scalars['String']['input']
  >;
  v60LpTokenAddress_endsWith?: InputMaybe<Scalars['String']['input']>;
  v60LpTokenAddress_eq?: InputMaybe<Scalars['String']['input']>;
  v60LpTokenAddress_gt?: InputMaybe<Scalars['String']['input']>;
  v60LpTokenAddress_gte?: InputMaybe<Scalars['String']['input']>;
  v60LpTokenAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  v60LpTokenAddress_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  v60LpTokenAddress_lt?: InputMaybe<Scalars['String']['input']>;
  v60LpTokenAddress_lte?: InputMaybe<Scalars['String']['input']>;
  v60LpTokenAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  v60LpTokenAddress_not_containsInsensitive?: InputMaybe<
    Scalars['String']['input']
  >;
  v60LpTokenAddress_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  v60LpTokenAddress_not_eq?: InputMaybe<Scalars['String']['input']>;
  v60LpTokenAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  v60LpTokenAddress_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  v60LpTokenAddress_startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type MemeTokensConnection = {
  __typename?: 'MemeTokensConnection';
  edges: Array<MemeTokenEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor: Scalars['String']['output'];
  hasNextPage: Scalars['Boolean']['output'];
  hasPreviousPage: Scalars['Boolean']['output'];
  startCursor: Scalars['String']['output'];
};

export type Pair = {
  __typename?: 'Pair';
  createdAtBlockNumber: Scalars['BigInt']['output'];
  createdAtTimestamp: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  liquidityProviderCount: Scalars['BigInt']['output'];
  reserve0: Scalars['BigDecimal']['output'];
  reserve1: Scalars['BigDecimal']['output'];
  reserveETH: Scalars['BigDecimal']['output'];
  reserveUSD: Scalars['BigDecimal']['output'];
  token0: Token;
  token0Price: Scalars['BigDecimal']['output'];
  token1: Token;
  token1Price: Scalars['BigDecimal']['output'];
  totalSupply: Scalars['BigDecimal']['output'];
  trackedReserveETH: Scalars['BigDecimal']['output'];
  txCount: Scalars['BigInt']['output'];
  untrackedVolumeUSD: Scalars['BigDecimal']['output'];
  volumeToken0: Scalars['BigDecimal']['output'];
  volumeToken1: Scalars['BigDecimal']['output'];
  volumeUSD: Scalars['BigDecimal']['output'];
};

export type PairDayData = {
  __typename?: 'PairDayData';
  dailyTxns: Scalars['BigInt']['output'];
  dailyVolumeToken0: Scalars['BigDecimal']['output'];
  dailyVolumeToken1: Scalars['BigDecimal']['output'];
  dailyVolumeUSD: Scalars['BigDecimal']['output'];
  date: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  pairAddress: Scalars['String']['output'];
  reserve0: Scalars['BigDecimal']['output'];
  reserve1: Scalars['BigDecimal']['output'];
  reserveUSD: Scalars['BigDecimal']['output'];
  token0: Token;
  token1: Token;
  totalSupply?: Maybe<Scalars['BigDecimal']['output']>;
};

export type PairDayDataConnection = {
  __typename?: 'PairDayDataConnection';
  edges: Array<PairDayDataEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PairDayDataEdge = {
  __typename?: 'PairDayDataEdge';
  cursor: Scalars['String']['output'];
  node: PairDayData;
};

export enum PairDayDataOrderByInput {
  DailyTxnsAsc = 'dailyTxns_ASC',
  DailyTxnsAscNullsFirst = 'dailyTxns_ASC_NULLS_FIRST',
  DailyTxnsAscNullsLast = 'dailyTxns_ASC_NULLS_LAST',
  DailyTxnsDesc = 'dailyTxns_DESC',
  DailyTxnsDescNullsFirst = 'dailyTxns_DESC_NULLS_FIRST',
  DailyTxnsDescNullsLast = 'dailyTxns_DESC_NULLS_LAST',
  DailyVolumeToken0Asc = 'dailyVolumeToken0_ASC',
  DailyVolumeToken0AscNullsFirst = 'dailyVolumeToken0_ASC_NULLS_FIRST',
  DailyVolumeToken0AscNullsLast = 'dailyVolumeToken0_ASC_NULLS_LAST',
  DailyVolumeToken0Desc = 'dailyVolumeToken0_DESC',
  DailyVolumeToken0DescNullsFirst = 'dailyVolumeToken0_DESC_NULLS_FIRST',
  DailyVolumeToken0DescNullsLast = 'dailyVolumeToken0_DESC_NULLS_LAST',
  DailyVolumeToken1Asc = 'dailyVolumeToken1_ASC',
  DailyVolumeToken1AscNullsFirst = 'dailyVolumeToken1_ASC_NULLS_FIRST',
  DailyVolumeToken1AscNullsLast = 'dailyVolumeToken1_ASC_NULLS_LAST',
  DailyVolumeToken1Desc = 'dailyVolumeToken1_DESC',
  DailyVolumeToken1DescNullsFirst = 'dailyVolumeToken1_DESC_NULLS_FIRST',
  DailyVolumeToken1DescNullsLast = 'dailyVolumeToken1_DESC_NULLS_LAST',
  DailyVolumeUsdAsc = 'dailyVolumeUSD_ASC',
  DailyVolumeUsdAscNullsFirst = 'dailyVolumeUSD_ASC_NULLS_FIRST',
  DailyVolumeUsdAscNullsLast = 'dailyVolumeUSD_ASC_NULLS_LAST',
  DailyVolumeUsdDesc = 'dailyVolumeUSD_DESC',
  DailyVolumeUsdDescNullsFirst = 'dailyVolumeUSD_DESC_NULLS_FIRST',
  DailyVolumeUsdDescNullsLast = 'dailyVolumeUSD_DESC_NULLS_LAST',
  DateAsc = 'date_ASC',
  DateAscNullsFirst = 'date_ASC_NULLS_FIRST',
  DateAscNullsLast = 'date_ASC_NULLS_LAST',
  DateDesc = 'date_DESC',
  DateDescNullsFirst = 'date_DESC_NULLS_FIRST',
  DateDescNullsLast = 'date_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  PairAddressAsc = 'pairAddress_ASC',
  PairAddressAscNullsFirst = 'pairAddress_ASC_NULLS_FIRST',
  PairAddressAscNullsLast = 'pairAddress_ASC_NULLS_LAST',
  PairAddressDesc = 'pairAddress_DESC',
  PairAddressDescNullsFirst = 'pairAddress_DESC_NULLS_FIRST',
  PairAddressDescNullsLast = 'pairAddress_DESC_NULLS_LAST',
  Reserve0Asc = 'reserve0_ASC',
  Reserve0AscNullsFirst = 'reserve0_ASC_NULLS_FIRST',
  Reserve0AscNullsLast = 'reserve0_ASC_NULLS_LAST',
  Reserve0Desc = 'reserve0_DESC',
  Reserve0DescNullsFirst = 'reserve0_DESC_NULLS_FIRST',
  Reserve0DescNullsLast = 'reserve0_DESC_NULLS_LAST',
  Reserve1Asc = 'reserve1_ASC',
  Reserve1AscNullsFirst = 'reserve1_ASC_NULLS_FIRST',
  Reserve1AscNullsLast = 'reserve1_ASC_NULLS_LAST',
  Reserve1Desc = 'reserve1_DESC',
  Reserve1DescNullsFirst = 'reserve1_DESC_NULLS_FIRST',
  Reserve1DescNullsLast = 'reserve1_DESC_NULLS_LAST',
  ReserveUsdAsc = 'reserveUSD_ASC',
  ReserveUsdAscNullsFirst = 'reserveUSD_ASC_NULLS_FIRST',
  ReserveUsdAscNullsLast = 'reserveUSD_ASC_NULLS_LAST',
  ReserveUsdDesc = 'reserveUSD_DESC',
  ReserveUsdDescNullsFirst = 'reserveUSD_DESC_NULLS_FIRST',
  ReserveUsdDescNullsLast = 'reserveUSD_DESC_NULLS_LAST',
  Token0DecimalsAsc = 'token0_decimals_ASC',
  Token0DecimalsAscNullsFirst = 'token0_decimals_ASC_NULLS_FIRST',
  Token0DecimalsAscNullsLast = 'token0_decimals_ASC_NULLS_LAST',
  Token0DecimalsDesc = 'token0_decimals_DESC',
  Token0DecimalsDescNullsFirst = 'token0_decimals_DESC_NULLS_FIRST',
  Token0DecimalsDescNullsLast = 'token0_decimals_DESC_NULLS_LAST',
  Token0DerivedEthAsc = 'token0_derivedETH_ASC',
  Token0DerivedEthAscNullsFirst = 'token0_derivedETH_ASC_NULLS_FIRST',
  Token0DerivedEthAscNullsLast = 'token0_derivedETH_ASC_NULLS_LAST',
  Token0DerivedEthDesc = 'token0_derivedETH_DESC',
  Token0DerivedEthDescNullsFirst = 'token0_derivedETH_DESC_NULLS_FIRST',
  Token0DerivedEthDescNullsLast = 'token0_derivedETH_DESC_NULLS_LAST',
  Token0IdAsc = 'token0_id_ASC',
  Token0IdAscNullsFirst = 'token0_id_ASC_NULLS_FIRST',
  Token0IdAscNullsLast = 'token0_id_ASC_NULLS_LAST',
  Token0IdDesc = 'token0_id_DESC',
  Token0IdDescNullsFirst = 'token0_id_DESC_NULLS_FIRST',
  Token0IdDescNullsLast = 'token0_id_DESC_NULLS_LAST',
  Token0NameAsc = 'token0_name_ASC',
  Token0NameAscNullsFirst = 'token0_name_ASC_NULLS_FIRST',
  Token0NameAscNullsLast = 'token0_name_ASC_NULLS_LAST',
  Token0NameDesc = 'token0_name_DESC',
  Token0NameDescNullsFirst = 'token0_name_DESC_NULLS_FIRST',
  Token0NameDescNullsLast = 'token0_name_DESC_NULLS_LAST',
  Token0SymbolAsc = 'token0_symbol_ASC',
  Token0SymbolAscNullsFirst = 'token0_symbol_ASC_NULLS_FIRST',
  Token0SymbolAscNullsLast = 'token0_symbol_ASC_NULLS_LAST',
  Token0SymbolDesc = 'token0_symbol_DESC',
  Token0SymbolDescNullsFirst = 'token0_symbol_DESC_NULLS_FIRST',
  Token0SymbolDescNullsLast = 'token0_symbol_DESC_NULLS_LAST',
  Token0TotalLiquidityAsc = 'token0_totalLiquidity_ASC',
  Token0TotalLiquidityAscNullsFirst = 'token0_totalLiquidity_ASC_NULLS_FIRST',
  Token0TotalLiquidityAscNullsLast = 'token0_totalLiquidity_ASC_NULLS_LAST',
  Token0TotalLiquidityDesc = 'token0_totalLiquidity_DESC',
  Token0TotalLiquidityDescNullsFirst = 'token0_totalLiquidity_DESC_NULLS_FIRST',
  Token0TotalLiquidityDescNullsLast = 'token0_totalLiquidity_DESC_NULLS_LAST',
  Token0TotalSupplyAsc = 'token0_totalSupply_ASC',
  Token0TotalSupplyAscNullsFirst = 'token0_totalSupply_ASC_NULLS_FIRST',
  Token0TotalSupplyAscNullsLast = 'token0_totalSupply_ASC_NULLS_LAST',
  Token0TotalSupplyDesc = 'token0_totalSupply_DESC',
  Token0TotalSupplyDescNullsFirst = 'token0_totalSupply_DESC_NULLS_FIRST',
  Token0TotalSupplyDescNullsLast = 'token0_totalSupply_DESC_NULLS_LAST',
  Token0TradeVolumeUsdAsc = 'token0_tradeVolumeUSD_ASC',
  Token0TradeVolumeUsdAscNullsFirst = 'token0_tradeVolumeUSD_ASC_NULLS_FIRST',
  Token0TradeVolumeUsdAscNullsLast = 'token0_tradeVolumeUSD_ASC_NULLS_LAST',
  Token0TradeVolumeUsdDesc = 'token0_tradeVolumeUSD_DESC',
  Token0TradeVolumeUsdDescNullsFirst = 'token0_tradeVolumeUSD_DESC_NULLS_FIRST',
  Token0TradeVolumeUsdDescNullsLast = 'token0_tradeVolumeUSD_DESC_NULLS_LAST',
  Token0TradeVolumeAsc = 'token0_tradeVolume_ASC',
  Token0TradeVolumeAscNullsFirst = 'token0_tradeVolume_ASC_NULLS_FIRST',
  Token0TradeVolumeAscNullsLast = 'token0_tradeVolume_ASC_NULLS_LAST',
  Token0TradeVolumeDesc = 'token0_tradeVolume_DESC',
  Token0TradeVolumeDescNullsFirst = 'token0_tradeVolume_DESC_NULLS_FIRST',
  Token0TradeVolumeDescNullsLast = 'token0_tradeVolume_DESC_NULLS_LAST',
  Token0TxCountAsc = 'token0_txCount_ASC',
  Token0TxCountAscNullsFirst = 'token0_txCount_ASC_NULLS_FIRST',
  Token0TxCountAscNullsLast = 'token0_txCount_ASC_NULLS_LAST',
  Token0TxCountDesc = 'token0_txCount_DESC',
  Token0TxCountDescNullsFirst = 'token0_txCount_DESC_NULLS_FIRST',
  Token0TxCountDescNullsLast = 'token0_txCount_DESC_NULLS_LAST',
  Token0UntrackedVolumeUsdAsc = 'token0_untrackedVolumeUSD_ASC',
  Token0UntrackedVolumeUsdAscNullsFirst = 'token0_untrackedVolumeUSD_ASC_NULLS_FIRST',
  Token0UntrackedVolumeUsdAscNullsLast = 'token0_untrackedVolumeUSD_ASC_NULLS_LAST',
  Token0UntrackedVolumeUsdDesc = 'token0_untrackedVolumeUSD_DESC',
  Token0UntrackedVolumeUsdDescNullsFirst = 'token0_untrackedVolumeUSD_DESC_NULLS_FIRST',
  Token0UntrackedVolumeUsdDescNullsLast = 'token0_untrackedVolumeUSD_DESC_NULLS_LAST',
  Token1DecimalsAsc = 'token1_decimals_ASC',
  Token1DecimalsAscNullsFirst = 'token1_decimals_ASC_NULLS_FIRST',
  Token1DecimalsAscNullsLast = 'token1_decimals_ASC_NULLS_LAST',
  Token1DecimalsDesc = 'token1_decimals_DESC',
  Token1DecimalsDescNullsFirst = 'token1_decimals_DESC_NULLS_FIRST',
  Token1DecimalsDescNullsLast = 'token1_decimals_DESC_NULLS_LAST',
  Token1DerivedEthAsc = 'token1_derivedETH_ASC',
  Token1DerivedEthAscNullsFirst = 'token1_derivedETH_ASC_NULLS_FIRST',
  Token1DerivedEthAscNullsLast = 'token1_derivedETH_ASC_NULLS_LAST',
  Token1DerivedEthDesc = 'token1_derivedETH_DESC',
  Token1DerivedEthDescNullsFirst = 'token1_derivedETH_DESC_NULLS_FIRST',
  Token1DerivedEthDescNullsLast = 'token1_derivedETH_DESC_NULLS_LAST',
  Token1IdAsc = 'token1_id_ASC',
  Token1IdAscNullsFirst = 'token1_id_ASC_NULLS_FIRST',
  Token1IdAscNullsLast = 'token1_id_ASC_NULLS_LAST',
  Token1IdDesc = 'token1_id_DESC',
  Token1IdDescNullsFirst = 'token1_id_DESC_NULLS_FIRST',
  Token1IdDescNullsLast = 'token1_id_DESC_NULLS_LAST',
  Token1NameAsc = 'token1_name_ASC',
  Token1NameAscNullsFirst = 'token1_name_ASC_NULLS_FIRST',
  Token1NameAscNullsLast = 'token1_name_ASC_NULLS_LAST',
  Token1NameDesc = 'token1_name_DESC',
  Token1NameDescNullsFirst = 'token1_name_DESC_NULLS_FIRST',
  Token1NameDescNullsLast = 'token1_name_DESC_NULLS_LAST',
  Token1SymbolAsc = 'token1_symbol_ASC',
  Token1SymbolAscNullsFirst = 'token1_symbol_ASC_NULLS_FIRST',
  Token1SymbolAscNullsLast = 'token1_symbol_ASC_NULLS_LAST',
  Token1SymbolDesc = 'token1_symbol_DESC',
  Token1SymbolDescNullsFirst = 'token1_symbol_DESC_NULLS_FIRST',
  Token1SymbolDescNullsLast = 'token1_symbol_DESC_NULLS_LAST',
  Token1TotalLiquidityAsc = 'token1_totalLiquidity_ASC',
  Token1TotalLiquidityAscNullsFirst = 'token1_totalLiquidity_ASC_NULLS_FIRST',
  Token1TotalLiquidityAscNullsLast = 'token1_totalLiquidity_ASC_NULLS_LAST',
  Token1TotalLiquidityDesc = 'token1_totalLiquidity_DESC',
  Token1TotalLiquidityDescNullsFirst = 'token1_totalLiquidity_DESC_NULLS_FIRST',
  Token1TotalLiquidityDescNullsLast = 'token1_totalLiquidity_DESC_NULLS_LAST',
  Token1TotalSupplyAsc = 'token1_totalSupply_ASC',
  Token1TotalSupplyAscNullsFirst = 'token1_totalSupply_ASC_NULLS_FIRST',
  Token1TotalSupplyAscNullsLast = 'token1_totalSupply_ASC_NULLS_LAST',
  Token1TotalSupplyDesc = 'token1_totalSupply_DESC',
  Token1TotalSupplyDescNullsFirst = 'token1_totalSupply_DESC_NULLS_FIRST',
  Token1TotalSupplyDescNullsLast = 'token1_totalSupply_DESC_NULLS_LAST',
  Token1TradeVolumeUsdAsc = 'token1_tradeVolumeUSD_ASC',
  Token1TradeVolumeUsdAscNullsFirst = 'token1_tradeVolumeUSD_ASC_NULLS_FIRST',
  Token1TradeVolumeUsdAscNullsLast = 'token1_tradeVolumeUSD_ASC_NULLS_LAST',
  Token1TradeVolumeUsdDesc = 'token1_tradeVolumeUSD_DESC',
  Token1TradeVolumeUsdDescNullsFirst = 'token1_tradeVolumeUSD_DESC_NULLS_FIRST',
  Token1TradeVolumeUsdDescNullsLast = 'token1_tradeVolumeUSD_DESC_NULLS_LAST',
  Token1TradeVolumeAsc = 'token1_tradeVolume_ASC',
  Token1TradeVolumeAscNullsFirst = 'token1_tradeVolume_ASC_NULLS_FIRST',
  Token1TradeVolumeAscNullsLast = 'token1_tradeVolume_ASC_NULLS_LAST',
  Token1TradeVolumeDesc = 'token1_tradeVolume_DESC',
  Token1TradeVolumeDescNullsFirst = 'token1_tradeVolume_DESC_NULLS_FIRST',
  Token1TradeVolumeDescNullsLast = 'token1_tradeVolume_DESC_NULLS_LAST',
  Token1TxCountAsc = 'token1_txCount_ASC',
  Token1TxCountAscNullsFirst = 'token1_txCount_ASC_NULLS_FIRST',
  Token1TxCountAscNullsLast = 'token1_txCount_ASC_NULLS_LAST',
  Token1TxCountDesc = 'token1_txCount_DESC',
  Token1TxCountDescNullsFirst = 'token1_txCount_DESC_NULLS_FIRST',
  Token1TxCountDescNullsLast = 'token1_txCount_DESC_NULLS_LAST',
  Token1UntrackedVolumeUsdAsc = 'token1_untrackedVolumeUSD_ASC',
  Token1UntrackedVolumeUsdAscNullsFirst = 'token1_untrackedVolumeUSD_ASC_NULLS_FIRST',
  Token1UntrackedVolumeUsdAscNullsLast = 'token1_untrackedVolumeUSD_ASC_NULLS_LAST',
  Token1UntrackedVolumeUsdDesc = 'token1_untrackedVolumeUSD_DESC',
  Token1UntrackedVolumeUsdDescNullsFirst = 'token1_untrackedVolumeUSD_DESC_NULLS_FIRST',
  Token1UntrackedVolumeUsdDescNullsLast = 'token1_untrackedVolumeUSD_DESC_NULLS_LAST',
  TotalSupplyAsc = 'totalSupply_ASC',
  TotalSupplyAscNullsFirst = 'totalSupply_ASC_NULLS_FIRST',
  TotalSupplyAscNullsLast = 'totalSupply_ASC_NULLS_LAST',
  TotalSupplyDesc = 'totalSupply_DESC',
  TotalSupplyDescNullsFirst = 'totalSupply_DESC_NULLS_FIRST',
  TotalSupplyDescNullsLast = 'totalSupply_DESC_NULLS_LAST',
}

export type PairDayDataWhereInput = {
  AND?: InputMaybe<Array<PairDayDataWhereInput>>;
  OR?: InputMaybe<Array<PairDayDataWhereInput>>;
  dailyTxns_eq?: InputMaybe<Scalars['BigInt']['input']>;
  dailyTxns_gt?: InputMaybe<Scalars['BigInt']['input']>;
  dailyTxns_gte?: InputMaybe<Scalars['BigInt']['input']>;
  dailyTxns_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dailyTxns_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  dailyTxns_lt?: InputMaybe<Scalars['BigInt']['input']>;
  dailyTxns_lte?: InputMaybe<Scalars['BigInt']['input']>;
  dailyTxns_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  dailyTxns_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dailyVolumeToken0_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyVolumeToken0_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  dailyVolumeToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken0_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyVolumeToken1_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyVolumeToken1_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  dailyVolumeToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken1_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyVolumeUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyVolumeUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  date_eq?: InputMaybe<Scalars['Int']['input']>;
  date_gt?: InputMaybe<Scalars['Int']['input']>;
  date_gte?: InputMaybe<Scalars['Int']['input']>;
  date_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  date_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  date_lt?: InputMaybe<Scalars['Int']['input']>;
  date_lte?: InputMaybe<Scalars['Int']['input']>;
  date_not_eq?: InputMaybe<Scalars['Int']['input']>;
  date_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  pairAddress_contains?: InputMaybe<Scalars['String']['input']>;
  pairAddress_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  pairAddress_endsWith?: InputMaybe<Scalars['String']['input']>;
  pairAddress_eq?: InputMaybe<Scalars['String']['input']>;
  pairAddress_gt?: InputMaybe<Scalars['String']['input']>;
  pairAddress_gte?: InputMaybe<Scalars['String']['input']>;
  pairAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pairAddress_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  pairAddress_lt?: InputMaybe<Scalars['String']['input']>;
  pairAddress_lte?: InputMaybe<Scalars['String']['input']>;
  pairAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  pairAddress_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  pairAddress_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  pairAddress_not_eq?: InputMaybe<Scalars['String']['input']>;
  pairAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  pairAddress_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  pairAddress_startsWith?: InputMaybe<Scalars['String']['input']>;
  reserve0_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve0_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserve0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve1_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve1_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserve1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserveUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserveUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0?: InputMaybe<TokenWhereInput>;
  token0_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  token1?: InputMaybe<TokenWhereInput>;
  token1_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalSupply_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSupply_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalSupply_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export type PairEdge = {
  __typename?: 'PairEdge';
  cursor: Scalars['String']['output'];
  node: Pair;
};

export enum PairOrderByInput {
  CreatedAtBlockNumberAsc = 'createdAtBlockNumber_ASC',
  CreatedAtBlockNumberAscNullsFirst = 'createdAtBlockNumber_ASC_NULLS_FIRST',
  CreatedAtBlockNumberAscNullsLast = 'createdAtBlockNumber_ASC_NULLS_LAST',
  CreatedAtBlockNumberDesc = 'createdAtBlockNumber_DESC',
  CreatedAtBlockNumberDescNullsFirst = 'createdAtBlockNumber_DESC_NULLS_FIRST',
  CreatedAtBlockNumberDescNullsLast = 'createdAtBlockNumber_DESC_NULLS_LAST',
  CreatedAtTimestampAsc = 'createdAtTimestamp_ASC',
  CreatedAtTimestampAscNullsFirst = 'createdAtTimestamp_ASC_NULLS_FIRST',
  CreatedAtTimestampAscNullsLast = 'createdAtTimestamp_ASC_NULLS_LAST',
  CreatedAtTimestampDesc = 'createdAtTimestamp_DESC',
  CreatedAtTimestampDescNullsFirst = 'createdAtTimestamp_DESC_NULLS_FIRST',
  CreatedAtTimestampDescNullsLast = 'createdAtTimestamp_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  LiquidityProviderCountAsc = 'liquidityProviderCount_ASC',
  LiquidityProviderCountAscNullsFirst = 'liquidityProviderCount_ASC_NULLS_FIRST',
  LiquidityProviderCountAscNullsLast = 'liquidityProviderCount_ASC_NULLS_LAST',
  LiquidityProviderCountDesc = 'liquidityProviderCount_DESC',
  LiquidityProviderCountDescNullsFirst = 'liquidityProviderCount_DESC_NULLS_FIRST',
  LiquidityProviderCountDescNullsLast = 'liquidityProviderCount_DESC_NULLS_LAST',
  Reserve0Asc = 'reserve0_ASC',
  Reserve0AscNullsFirst = 'reserve0_ASC_NULLS_FIRST',
  Reserve0AscNullsLast = 'reserve0_ASC_NULLS_LAST',
  Reserve0Desc = 'reserve0_DESC',
  Reserve0DescNullsFirst = 'reserve0_DESC_NULLS_FIRST',
  Reserve0DescNullsLast = 'reserve0_DESC_NULLS_LAST',
  Reserve1Asc = 'reserve1_ASC',
  Reserve1AscNullsFirst = 'reserve1_ASC_NULLS_FIRST',
  Reserve1AscNullsLast = 'reserve1_ASC_NULLS_LAST',
  Reserve1Desc = 'reserve1_DESC',
  Reserve1DescNullsFirst = 'reserve1_DESC_NULLS_FIRST',
  Reserve1DescNullsLast = 'reserve1_DESC_NULLS_LAST',
  ReserveEthAsc = 'reserveETH_ASC',
  ReserveEthAscNullsFirst = 'reserveETH_ASC_NULLS_FIRST',
  ReserveEthAscNullsLast = 'reserveETH_ASC_NULLS_LAST',
  ReserveEthDesc = 'reserveETH_DESC',
  ReserveEthDescNullsFirst = 'reserveETH_DESC_NULLS_FIRST',
  ReserveEthDescNullsLast = 'reserveETH_DESC_NULLS_LAST',
  ReserveUsdAsc = 'reserveUSD_ASC',
  ReserveUsdAscNullsFirst = 'reserveUSD_ASC_NULLS_FIRST',
  ReserveUsdAscNullsLast = 'reserveUSD_ASC_NULLS_LAST',
  ReserveUsdDesc = 'reserveUSD_DESC',
  ReserveUsdDescNullsFirst = 'reserveUSD_DESC_NULLS_FIRST',
  ReserveUsdDescNullsLast = 'reserveUSD_DESC_NULLS_LAST',
  Token0PriceAsc = 'token0Price_ASC',
  Token0PriceAscNullsFirst = 'token0Price_ASC_NULLS_FIRST',
  Token0PriceAscNullsLast = 'token0Price_ASC_NULLS_LAST',
  Token0PriceDesc = 'token0Price_DESC',
  Token0PriceDescNullsFirst = 'token0Price_DESC_NULLS_FIRST',
  Token0PriceDescNullsLast = 'token0Price_DESC_NULLS_LAST',
  Token0DecimalsAsc = 'token0_decimals_ASC',
  Token0DecimalsAscNullsFirst = 'token0_decimals_ASC_NULLS_FIRST',
  Token0DecimalsAscNullsLast = 'token0_decimals_ASC_NULLS_LAST',
  Token0DecimalsDesc = 'token0_decimals_DESC',
  Token0DecimalsDescNullsFirst = 'token0_decimals_DESC_NULLS_FIRST',
  Token0DecimalsDescNullsLast = 'token0_decimals_DESC_NULLS_LAST',
  Token0DerivedEthAsc = 'token0_derivedETH_ASC',
  Token0DerivedEthAscNullsFirst = 'token0_derivedETH_ASC_NULLS_FIRST',
  Token0DerivedEthAscNullsLast = 'token0_derivedETH_ASC_NULLS_LAST',
  Token0DerivedEthDesc = 'token0_derivedETH_DESC',
  Token0DerivedEthDescNullsFirst = 'token0_derivedETH_DESC_NULLS_FIRST',
  Token0DerivedEthDescNullsLast = 'token0_derivedETH_DESC_NULLS_LAST',
  Token0IdAsc = 'token0_id_ASC',
  Token0IdAscNullsFirst = 'token0_id_ASC_NULLS_FIRST',
  Token0IdAscNullsLast = 'token0_id_ASC_NULLS_LAST',
  Token0IdDesc = 'token0_id_DESC',
  Token0IdDescNullsFirst = 'token0_id_DESC_NULLS_FIRST',
  Token0IdDescNullsLast = 'token0_id_DESC_NULLS_LAST',
  Token0NameAsc = 'token0_name_ASC',
  Token0NameAscNullsFirst = 'token0_name_ASC_NULLS_FIRST',
  Token0NameAscNullsLast = 'token0_name_ASC_NULLS_LAST',
  Token0NameDesc = 'token0_name_DESC',
  Token0NameDescNullsFirst = 'token0_name_DESC_NULLS_FIRST',
  Token0NameDescNullsLast = 'token0_name_DESC_NULLS_LAST',
  Token0SymbolAsc = 'token0_symbol_ASC',
  Token0SymbolAscNullsFirst = 'token0_symbol_ASC_NULLS_FIRST',
  Token0SymbolAscNullsLast = 'token0_symbol_ASC_NULLS_LAST',
  Token0SymbolDesc = 'token0_symbol_DESC',
  Token0SymbolDescNullsFirst = 'token0_symbol_DESC_NULLS_FIRST',
  Token0SymbolDescNullsLast = 'token0_symbol_DESC_NULLS_LAST',
  Token0TotalLiquidityAsc = 'token0_totalLiquidity_ASC',
  Token0TotalLiquidityAscNullsFirst = 'token0_totalLiquidity_ASC_NULLS_FIRST',
  Token0TotalLiquidityAscNullsLast = 'token0_totalLiquidity_ASC_NULLS_LAST',
  Token0TotalLiquidityDesc = 'token0_totalLiquidity_DESC',
  Token0TotalLiquidityDescNullsFirst = 'token0_totalLiquidity_DESC_NULLS_FIRST',
  Token0TotalLiquidityDescNullsLast = 'token0_totalLiquidity_DESC_NULLS_LAST',
  Token0TotalSupplyAsc = 'token0_totalSupply_ASC',
  Token0TotalSupplyAscNullsFirst = 'token0_totalSupply_ASC_NULLS_FIRST',
  Token0TotalSupplyAscNullsLast = 'token0_totalSupply_ASC_NULLS_LAST',
  Token0TotalSupplyDesc = 'token0_totalSupply_DESC',
  Token0TotalSupplyDescNullsFirst = 'token0_totalSupply_DESC_NULLS_FIRST',
  Token0TotalSupplyDescNullsLast = 'token0_totalSupply_DESC_NULLS_LAST',
  Token0TradeVolumeUsdAsc = 'token0_tradeVolumeUSD_ASC',
  Token0TradeVolumeUsdAscNullsFirst = 'token0_tradeVolumeUSD_ASC_NULLS_FIRST',
  Token0TradeVolumeUsdAscNullsLast = 'token0_tradeVolumeUSD_ASC_NULLS_LAST',
  Token0TradeVolumeUsdDesc = 'token0_tradeVolumeUSD_DESC',
  Token0TradeVolumeUsdDescNullsFirst = 'token0_tradeVolumeUSD_DESC_NULLS_FIRST',
  Token0TradeVolumeUsdDescNullsLast = 'token0_tradeVolumeUSD_DESC_NULLS_LAST',
  Token0TradeVolumeAsc = 'token0_tradeVolume_ASC',
  Token0TradeVolumeAscNullsFirst = 'token0_tradeVolume_ASC_NULLS_FIRST',
  Token0TradeVolumeAscNullsLast = 'token0_tradeVolume_ASC_NULLS_LAST',
  Token0TradeVolumeDesc = 'token0_tradeVolume_DESC',
  Token0TradeVolumeDescNullsFirst = 'token0_tradeVolume_DESC_NULLS_FIRST',
  Token0TradeVolumeDescNullsLast = 'token0_tradeVolume_DESC_NULLS_LAST',
  Token0TxCountAsc = 'token0_txCount_ASC',
  Token0TxCountAscNullsFirst = 'token0_txCount_ASC_NULLS_FIRST',
  Token0TxCountAscNullsLast = 'token0_txCount_ASC_NULLS_LAST',
  Token0TxCountDesc = 'token0_txCount_DESC',
  Token0TxCountDescNullsFirst = 'token0_txCount_DESC_NULLS_FIRST',
  Token0TxCountDescNullsLast = 'token0_txCount_DESC_NULLS_LAST',
  Token0UntrackedVolumeUsdAsc = 'token0_untrackedVolumeUSD_ASC',
  Token0UntrackedVolumeUsdAscNullsFirst = 'token0_untrackedVolumeUSD_ASC_NULLS_FIRST',
  Token0UntrackedVolumeUsdAscNullsLast = 'token0_untrackedVolumeUSD_ASC_NULLS_LAST',
  Token0UntrackedVolumeUsdDesc = 'token0_untrackedVolumeUSD_DESC',
  Token0UntrackedVolumeUsdDescNullsFirst = 'token0_untrackedVolumeUSD_DESC_NULLS_FIRST',
  Token0UntrackedVolumeUsdDescNullsLast = 'token0_untrackedVolumeUSD_DESC_NULLS_LAST',
  Token1PriceAsc = 'token1Price_ASC',
  Token1PriceAscNullsFirst = 'token1Price_ASC_NULLS_FIRST',
  Token1PriceAscNullsLast = 'token1Price_ASC_NULLS_LAST',
  Token1PriceDesc = 'token1Price_DESC',
  Token1PriceDescNullsFirst = 'token1Price_DESC_NULLS_FIRST',
  Token1PriceDescNullsLast = 'token1Price_DESC_NULLS_LAST',
  Token1DecimalsAsc = 'token1_decimals_ASC',
  Token1DecimalsAscNullsFirst = 'token1_decimals_ASC_NULLS_FIRST',
  Token1DecimalsAscNullsLast = 'token1_decimals_ASC_NULLS_LAST',
  Token1DecimalsDesc = 'token1_decimals_DESC',
  Token1DecimalsDescNullsFirst = 'token1_decimals_DESC_NULLS_FIRST',
  Token1DecimalsDescNullsLast = 'token1_decimals_DESC_NULLS_LAST',
  Token1DerivedEthAsc = 'token1_derivedETH_ASC',
  Token1DerivedEthAscNullsFirst = 'token1_derivedETH_ASC_NULLS_FIRST',
  Token1DerivedEthAscNullsLast = 'token1_derivedETH_ASC_NULLS_LAST',
  Token1DerivedEthDesc = 'token1_derivedETH_DESC',
  Token1DerivedEthDescNullsFirst = 'token1_derivedETH_DESC_NULLS_FIRST',
  Token1DerivedEthDescNullsLast = 'token1_derivedETH_DESC_NULLS_LAST',
  Token1IdAsc = 'token1_id_ASC',
  Token1IdAscNullsFirst = 'token1_id_ASC_NULLS_FIRST',
  Token1IdAscNullsLast = 'token1_id_ASC_NULLS_LAST',
  Token1IdDesc = 'token1_id_DESC',
  Token1IdDescNullsFirst = 'token1_id_DESC_NULLS_FIRST',
  Token1IdDescNullsLast = 'token1_id_DESC_NULLS_LAST',
  Token1NameAsc = 'token1_name_ASC',
  Token1NameAscNullsFirst = 'token1_name_ASC_NULLS_FIRST',
  Token1NameAscNullsLast = 'token1_name_ASC_NULLS_LAST',
  Token1NameDesc = 'token1_name_DESC',
  Token1NameDescNullsFirst = 'token1_name_DESC_NULLS_FIRST',
  Token1NameDescNullsLast = 'token1_name_DESC_NULLS_LAST',
  Token1SymbolAsc = 'token1_symbol_ASC',
  Token1SymbolAscNullsFirst = 'token1_symbol_ASC_NULLS_FIRST',
  Token1SymbolAscNullsLast = 'token1_symbol_ASC_NULLS_LAST',
  Token1SymbolDesc = 'token1_symbol_DESC',
  Token1SymbolDescNullsFirst = 'token1_symbol_DESC_NULLS_FIRST',
  Token1SymbolDescNullsLast = 'token1_symbol_DESC_NULLS_LAST',
  Token1TotalLiquidityAsc = 'token1_totalLiquidity_ASC',
  Token1TotalLiquidityAscNullsFirst = 'token1_totalLiquidity_ASC_NULLS_FIRST',
  Token1TotalLiquidityAscNullsLast = 'token1_totalLiquidity_ASC_NULLS_LAST',
  Token1TotalLiquidityDesc = 'token1_totalLiquidity_DESC',
  Token1TotalLiquidityDescNullsFirst = 'token1_totalLiquidity_DESC_NULLS_FIRST',
  Token1TotalLiquidityDescNullsLast = 'token1_totalLiquidity_DESC_NULLS_LAST',
  Token1TotalSupplyAsc = 'token1_totalSupply_ASC',
  Token1TotalSupplyAscNullsFirst = 'token1_totalSupply_ASC_NULLS_FIRST',
  Token1TotalSupplyAscNullsLast = 'token1_totalSupply_ASC_NULLS_LAST',
  Token1TotalSupplyDesc = 'token1_totalSupply_DESC',
  Token1TotalSupplyDescNullsFirst = 'token1_totalSupply_DESC_NULLS_FIRST',
  Token1TotalSupplyDescNullsLast = 'token1_totalSupply_DESC_NULLS_LAST',
  Token1TradeVolumeUsdAsc = 'token1_tradeVolumeUSD_ASC',
  Token1TradeVolumeUsdAscNullsFirst = 'token1_tradeVolumeUSD_ASC_NULLS_FIRST',
  Token1TradeVolumeUsdAscNullsLast = 'token1_tradeVolumeUSD_ASC_NULLS_LAST',
  Token1TradeVolumeUsdDesc = 'token1_tradeVolumeUSD_DESC',
  Token1TradeVolumeUsdDescNullsFirst = 'token1_tradeVolumeUSD_DESC_NULLS_FIRST',
  Token1TradeVolumeUsdDescNullsLast = 'token1_tradeVolumeUSD_DESC_NULLS_LAST',
  Token1TradeVolumeAsc = 'token1_tradeVolume_ASC',
  Token1TradeVolumeAscNullsFirst = 'token1_tradeVolume_ASC_NULLS_FIRST',
  Token1TradeVolumeAscNullsLast = 'token1_tradeVolume_ASC_NULLS_LAST',
  Token1TradeVolumeDesc = 'token1_tradeVolume_DESC',
  Token1TradeVolumeDescNullsFirst = 'token1_tradeVolume_DESC_NULLS_FIRST',
  Token1TradeVolumeDescNullsLast = 'token1_tradeVolume_DESC_NULLS_LAST',
  Token1TxCountAsc = 'token1_txCount_ASC',
  Token1TxCountAscNullsFirst = 'token1_txCount_ASC_NULLS_FIRST',
  Token1TxCountAscNullsLast = 'token1_txCount_ASC_NULLS_LAST',
  Token1TxCountDesc = 'token1_txCount_DESC',
  Token1TxCountDescNullsFirst = 'token1_txCount_DESC_NULLS_FIRST',
  Token1TxCountDescNullsLast = 'token1_txCount_DESC_NULLS_LAST',
  Token1UntrackedVolumeUsdAsc = 'token1_untrackedVolumeUSD_ASC',
  Token1UntrackedVolumeUsdAscNullsFirst = 'token1_untrackedVolumeUSD_ASC_NULLS_FIRST',
  Token1UntrackedVolumeUsdAscNullsLast = 'token1_untrackedVolumeUSD_ASC_NULLS_LAST',
  Token1UntrackedVolumeUsdDesc = 'token1_untrackedVolumeUSD_DESC',
  Token1UntrackedVolumeUsdDescNullsFirst = 'token1_untrackedVolumeUSD_DESC_NULLS_FIRST',
  Token1UntrackedVolumeUsdDescNullsLast = 'token1_untrackedVolumeUSD_DESC_NULLS_LAST',
  TotalSupplyAsc = 'totalSupply_ASC',
  TotalSupplyAscNullsFirst = 'totalSupply_ASC_NULLS_FIRST',
  TotalSupplyAscNullsLast = 'totalSupply_ASC_NULLS_LAST',
  TotalSupplyDesc = 'totalSupply_DESC',
  TotalSupplyDescNullsFirst = 'totalSupply_DESC_NULLS_FIRST',
  TotalSupplyDescNullsLast = 'totalSupply_DESC_NULLS_LAST',
  TrackedReserveEthAsc = 'trackedReserveETH_ASC',
  TrackedReserveEthAscNullsFirst = 'trackedReserveETH_ASC_NULLS_FIRST',
  TrackedReserveEthAscNullsLast = 'trackedReserveETH_ASC_NULLS_LAST',
  TrackedReserveEthDesc = 'trackedReserveETH_DESC',
  TrackedReserveEthDescNullsFirst = 'trackedReserveETH_DESC_NULLS_FIRST',
  TrackedReserveEthDescNullsLast = 'trackedReserveETH_DESC_NULLS_LAST',
  TxCountAsc = 'txCount_ASC',
  TxCountAscNullsFirst = 'txCount_ASC_NULLS_FIRST',
  TxCountAscNullsLast = 'txCount_ASC_NULLS_LAST',
  TxCountDesc = 'txCount_DESC',
  TxCountDescNullsFirst = 'txCount_DESC_NULLS_FIRST',
  TxCountDescNullsLast = 'txCount_DESC_NULLS_LAST',
  UntrackedVolumeUsdAsc = 'untrackedVolumeUSD_ASC',
  UntrackedVolumeUsdAscNullsFirst = 'untrackedVolumeUSD_ASC_NULLS_FIRST',
  UntrackedVolumeUsdAscNullsLast = 'untrackedVolumeUSD_ASC_NULLS_LAST',
  UntrackedVolumeUsdDesc = 'untrackedVolumeUSD_DESC',
  UntrackedVolumeUsdDescNullsFirst = 'untrackedVolumeUSD_DESC_NULLS_FIRST',
  UntrackedVolumeUsdDescNullsLast = 'untrackedVolumeUSD_DESC_NULLS_LAST',
  VolumeToken0Asc = 'volumeToken0_ASC',
  VolumeToken0AscNullsFirst = 'volumeToken0_ASC_NULLS_FIRST',
  VolumeToken0AscNullsLast = 'volumeToken0_ASC_NULLS_LAST',
  VolumeToken0Desc = 'volumeToken0_DESC',
  VolumeToken0DescNullsFirst = 'volumeToken0_DESC_NULLS_FIRST',
  VolumeToken0DescNullsLast = 'volumeToken0_DESC_NULLS_LAST',
  VolumeToken1Asc = 'volumeToken1_ASC',
  VolumeToken1AscNullsFirst = 'volumeToken1_ASC_NULLS_FIRST',
  VolumeToken1AscNullsLast = 'volumeToken1_ASC_NULLS_LAST',
  VolumeToken1Desc = 'volumeToken1_DESC',
  VolumeToken1DescNullsFirst = 'volumeToken1_DESC_NULLS_FIRST',
  VolumeToken1DescNullsLast = 'volumeToken1_DESC_NULLS_LAST',
  VolumeUsdAsc = 'volumeUSD_ASC',
  VolumeUsdAscNullsFirst = 'volumeUSD_ASC_NULLS_FIRST',
  VolumeUsdAscNullsLast = 'volumeUSD_ASC_NULLS_LAST',
  VolumeUsdDesc = 'volumeUSD_DESC',
  VolumeUsdDescNullsFirst = 'volumeUSD_DESC_NULLS_FIRST',
  VolumeUsdDescNullsLast = 'volumeUSD_DESC_NULLS_LAST',
}

export type PairWhereInput = {
  AND?: InputMaybe<Array<PairWhereInput>>;
  OR?: InputMaybe<Array<PairWhereInput>>;
  createdAtBlockNumber_eq?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtBlockNumber_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtBlockNumber_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtBlockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_eq?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  createdAtTimestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  createdAtTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  createdAtTimestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  liquidityProviderCount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityProviderCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  reserve0_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve0_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserve0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve1_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserve1_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserve1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserve1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserveETH_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveETH_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveETH_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveETH_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserveETH_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserveETH_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveETH_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveETH_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserveUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  reserveUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  reserveUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  reserveUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0?: InputMaybe<TokenWhereInput>;
  token0Price_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0Price_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  token0Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  token1?: InputMaybe<TokenWhereInput>;
  token1Price_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1Price_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  token1Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalSupply_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSupply_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalSupply_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  trackedReserveETH_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  trackedReserveETH_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  trackedReserveETH_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  trackedReserveETH_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  trackedReserveETH_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  trackedReserveETH_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  trackedReserveETH_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  trackedReserveETH_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  trackedReserveETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  txCount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  untrackedVolumeUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  untrackedVolumeUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken0_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken0_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  volumeToken0_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken0_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeToken1_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  volumeToken1_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeToken1_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  volumeUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  volumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  volumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export type PairsConnection = {
  __typename?: 'PairsConnection';
  edges: Array<PairEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  liquidityPositionById?: Maybe<LiquidityPosition>;
  liquidityPositionSnapshotById?: Maybe<LiquidityPositionSnapshot>;
  liquidityPositionSnapshots: Array<LiquidityPositionSnapshot>;
  liquidityPositionSnapshotsConnection: LiquidityPositionSnapshotsConnection;
  liquidityPositions: Array<LiquidityPosition>;
  liquidityPositionsConnection: LiquidityPositionsConnection;
  memeTokenById?: Maybe<MemeToken>;
  memeTokens: Array<MemeToken>;
  memeTokensConnection: MemeTokensConnection;
  pairById?: Maybe<Pair>;
  pairDayData: Array<PairDayData>;
  pairDayDataById?: Maybe<PairDayData>;
  pairDayDataConnection: PairDayDataConnection;
  pairs: Array<Pair>;
  pairsConnection: PairsConnection;
  squidStatus?: Maybe<SquidStatus>;
  tokenById?: Maybe<Token>;
  tokenDayData: Array<TokenDayData>;
  tokenDayDataById?: Maybe<TokenDayData>;
  tokenDayDataConnection: TokenDayDataConnection;
  tokens: Array<Token>;
  tokensConnection: TokensConnection;
  userById?: Maybe<User>;
  users: Array<User>;
  usersConnection: UsersConnection;
};

export type QueryLiquidityPositionByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryLiquidityPositionSnapshotByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryLiquidityPositionSnapshotsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LiquidityPositionSnapshotOrderByInput>>;
  where?: InputMaybe<LiquidityPositionSnapshotWhereInput>;
};

export type QueryLiquidityPositionSnapshotsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<LiquidityPositionSnapshotOrderByInput>;
  where?: InputMaybe<LiquidityPositionSnapshotWhereInput>;
};

export type QueryLiquidityPositionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LiquidityPositionOrderByInput>>;
  where?: InputMaybe<LiquidityPositionWhereInput>;
};

export type QueryLiquidityPositionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<LiquidityPositionOrderByInput>;
  where?: InputMaybe<LiquidityPositionWhereInput>;
};

export type QueryMemeTokenByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryMemeTokensArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<MemeTokenOrderByInput>>;
  where?: InputMaybe<MemeTokenWhereInput>;
};

export type QueryMemeTokensConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<MemeTokenOrderByInput>;
  where?: InputMaybe<MemeTokenWhereInput>;
};

export type QueryPairByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryPairDayDataArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PairDayDataOrderByInput>>;
  where?: InputMaybe<PairDayDataWhereInput>;
};

export type QueryPairDayDataByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryPairDayDataConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<PairDayDataOrderByInput>;
  where?: InputMaybe<PairDayDataWhereInput>;
};

export type QueryPairsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<PairOrderByInput>>;
  where?: InputMaybe<PairWhereInput>;
};

export type QueryPairsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<PairOrderByInput>;
  where?: InputMaybe<PairWhereInput>;
};

export type QueryTokenByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryTokenDayDataArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TokenDayDataOrderByInput>>;
  where?: InputMaybe<TokenDayDataWhereInput>;
};

export type QueryTokenDayDataByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryTokenDayDataConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<TokenDayDataOrderByInput>;
  where?: InputMaybe<TokenDayDataWhereInput>;
};

export type QueryTokensArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TokenOrderByInput>>;
  where?: InputMaybe<TokenWhereInput>;
};

export type QueryTokensConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<TokenOrderByInput>;
  where?: InputMaybe<TokenWhereInput>;
};

export type QueryUserByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryUsersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<UserOrderByInput>>;
  where?: InputMaybe<UserWhereInput>;
};

export type QueryUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<UserOrderByInput>;
  where?: InputMaybe<UserWhereInput>;
};

export type SquidStatus = {
  __typename?: 'SquidStatus';
  /** The height of the processed part of the chain */
  height?: Maybe<Scalars['Int']['output']>;
};

export type Token = {
  __typename?: 'Token';
  decimals: Scalars['BigInt']['output'];
  derivedETH: Scalars['BigDecimal']['output'];
  id: Scalars['String']['output'];
  memeToken?: Maybe<MemeToken>;
  name: Scalars['String']['output'];
  symbol: Scalars['String']['output'];
  totalLiquidity: Scalars['BigDecimal']['output'];
  totalSupply: Scalars['BigInt']['output'];
  tradeVolume: Scalars['BigDecimal']['output'];
  tradeVolumeUSD: Scalars['BigDecimal']['output'];
  txCount: Scalars['BigInt']['output'];
  untrackedVolumeUSD: Scalars['BigDecimal']['output'];
};

export type TokenDayData = {
  __typename?: 'TokenDayData';
  dailyTxns: Scalars['BigInt']['output'];
  dailyVolumeETH: Scalars['BigDecimal']['output'];
  dailyVolumeToken: Scalars['BigDecimal']['output'];
  dailyVolumeUSD: Scalars['BigDecimal']['output'];
  date: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  priceUSD: Scalars['BigDecimal']['output'];
  token: Token;
  totalLiquidityETH: Scalars['BigDecimal']['output'];
  totalLiquidityToken: Scalars['BigDecimal']['output'];
  totalLiquidityUSD: Scalars['BigDecimal']['output'];
};

export type TokenDayDataConnection = {
  __typename?: 'TokenDayDataConnection';
  edges: Array<TokenDayDataEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TokenDayDataEdge = {
  __typename?: 'TokenDayDataEdge';
  cursor: Scalars['String']['output'];
  node: TokenDayData;
};

export enum TokenDayDataOrderByInput {
  DailyTxnsAsc = 'dailyTxns_ASC',
  DailyTxnsAscNullsFirst = 'dailyTxns_ASC_NULLS_FIRST',
  DailyTxnsAscNullsLast = 'dailyTxns_ASC_NULLS_LAST',
  DailyTxnsDesc = 'dailyTxns_DESC',
  DailyTxnsDescNullsFirst = 'dailyTxns_DESC_NULLS_FIRST',
  DailyTxnsDescNullsLast = 'dailyTxns_DESC_NULLS_LAST',
  DailyVolumeEthAsc = 'dailyVolumeETH_ASC',
  DailyVolumeEthAscNullsFirst = 'dailyVolumeETH_ASC_NULLS_FIRST',
  DailyVolumeEthAscNullsLast = 'dailyVolumeETH_ASC_NULLS_LAST',
  DailyVolumeEthDesc = 'dailyVolumeETH_DESC',
  DailyVolumeEthDescNullsFirst = 'dailyVolumeETH_DESC_NULLS_FIRST',
  DailyVolumeEthDescNullsLast = 'dailyVolumeETH_DESC_NULLS_LAST',
  DailyVolumeTokenAsc = 'dailyVolumeToken_ASC',
  DailyVolumeTokenAscNullsFirst = 'dailyVolumeToken_ASC_NULLS_FIRST',
  DailyVolumeTokenAscNullsLast = 'dailyVolumeToken_ASC_NULLS_LAST',
  DailyVolumeTokenDesc = 'dailyVolumeToken_DESC',
  DailyVolumeTokenDescNullsFirst = 'dailyVolumeToken_DESC_NULLS_FIRST',
  DailyVolumeTokenDescNullsLast = 'dailyVolumeToken_DESC_NULLS_LAST',
  DailyVolumeUsdAsc = 'dailyVolumeUSD_ASC',
  DailyVolumeUsdAscNullsFirst = 'dailyVolumeUSD_ASC_NULLS_FIRST',
  DailyVolumeUsdAscNullsLast = 'dailyVolumeUSD_ASC_NULLS_LAST',
  DailyVolumeUsdDesc = 'dailyVolumeUSD_DESC',
  DailyVolumeUsdDescNullsFirst = 'dailyVolumeUSD_DESC_NULLS_FIRST',
  DailyVolumeUsdDescNullsLast = 'dailyVolumeUSD_DESC_NULLS_LAST',
  DateAsc = 'date_ASC',
  DateAscNullsFirst = 'date_ASC_NULLS_FIRST',
  DateAscNullsLast = 'date_ASC_NULLS_LAST',
  DateDesc = 'date_DESC',
  DateDescNullsFirst = 'date_DESC_NULLS_FIRST',
  DateDescNullsLast = 'date_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  PriceUsdAsc = 'priceUSD_ASC',
  PriceUsdAscNullsFirst = 'priceUSD_ASC_NULLS_FIRST',
  PriceUsdAscNullsLast = 'priceUSD_ASC_NULLS_LAST',
  PriceUsdDesc = 'priceUSD_DESC',
  PriceUsdDescNullsFirst = 'priceUSD_DESC_NULLS_FIRST',
  PriceUsdDescNullsLast = 'priceUSD_DESC_NULLS_LAST',
  TokenDecimalsAsc = 'token_decimals_ASC',
  TokenDecimalsAscNullsFirst = 'token_decimals_ASC_NULLS_FIRST',
  TokenDecimalsAscNullsLast = 'token_decimals_ASC_NULLS_LAST',
  TokenDecimalsDesc = 'token_decimals_DESC',
  TokenDecimalsDescNullsFirst = 'token_decimals_DESC_NULLS_FIRST',
  TokenDecimalsDescNullsLast = 'token_decimals_DESC_NULLS_LAST',
  TokenDerivedEthAsc = 'token_derivedETH_ASC',
  TokenDerivedEthAscNullsFirst = 'token_derivedETH_ASC_NULLS_FIRST',
  TokenDerivedEthAscNullsLast = 'token_derivedETH_ASC_NULLS_LAST',
  TokenDerivedEthDesc = 'token_derivedETH_DESC',
  TokenDerivedEthDescNullsFirst = 'token_derivedETH_DESC_NULLS_FIRST',
  TokenDerivedEthDescNullsLast = 'token_derivedETH_DESC_NULLS_LAST',
  TokenIdAsc = 'token_id_ASC',
  TokenIdAscNullsFirst = 'token_id_ASC_NULLS_FIRST',
  TokenIdAscNullsLast = 'token_id_ASC_NULLS_LAST',
  TokenIdDesc = 'token_id_DESC',
  TokenIdDescNullsFirst = 'token_id_DESC_NULLS_FIRST',
  TokenIdDescNullsLast = 'token_id_DESC_NULLS_LAST',
  TokenNameAsc = 'token_name_ASC',
  TokenNameAscNullsFirst = 'token_name_ASC_NULLS_FIRST',
  TokenNameAscNullsLast = 'token_name_ASC_NULLS_LAST',
  TokenNameDesc = 'token_name_DESC',
  TokenNameDescNullsFirst = 'token_name_DESC_NULLS_FIRST',
  TokenNameDescNullsLast = 'token_name_DESC_NULLS_LAST',
  TokenSymbolAsc = 'token_symbol_ASC',
  TokenSymbolAscNullsFirst = 'token_symbol_ASC_NULLS_FIRST',
  TokenSymbolAscNullsLast = 'token_symbol_ASC_NULLS_LAST',
  TokenSymbolDesc = 'token_symbol_DESC',
  TokenSymbolDescNullsFirst = 'token_symbol_DESC_NULLS_FIRST',
  TokenSymbolDescNullsLast = 'token_symbol_DESC_NULLS_LAST',
  TokenTotalLiquidityAsc = 'token_totalLiquidity_ASC',
  TokenTotalLiquidityAscNullsFirst = 'token_totalLiquidity_ASC_NULLS_FIRST',
  TokenTotalLiquidityAscNullsLast = 'token_totalLiquidity_ASC_NULLS_LAST',
  TokenTotalLiquidityDesc = 'token_totalLiquidity_DESC',
  TokenTotalLiquidityDescNullsFirst = 'token_totalLiquidity_DESC_NULLS_FIRST',
  TokenTotalLiquidityDescNullsLast = 'token_totalLiquidity_DESC_NULLS_LAST',
  TokenTotalSupplyAsc = 'token_totalSupply_ASC',
  TokenTotalSupplyAscNullsFirst = 'token_totalSupply_ASC_NULLS_FIRST',
  TokenTotalSupplyAscNullsLast = 'token_totalSupply_ASC_NULLS_LAST',
  TokenTotalSupplyDesc = 'token_totalSupply_DESC',
  TokenTotalSupplyDescNullsFirst = 'token_totalSupply_DESC_NULLS_FIRST',
  TokenTotalSupplyDescNullsLast = 'token_totalSupply_DESC_NULLS_LAST',
  TokenTradeVolumeUsdAsc = 'token_tradeVolumeUSD_ASC',
  TokenTradeVolumeUsdAscNullsFirst = 'token_tradeVolumeUSD_ASC_NULLS_FIRST',
  TokenTradeVolumeUsdAscNullsLast = 'token_tradeVolumeUSD_ASC_NULLS_LAST',
  TokenTradeVolumeUsdDesc = 'token_tradeVolumeUSD_DESC',
  TokenTradeVolumeUsdDescNullsFirst = 'token_tradeVolumeUSD_DESC_NULLS_FIRST',
  TokenTradeVolumeUsdDescNullsLast = 'token_tradeVolumeUSD_DESC_NULLS_LAST',
  TokenTradeVolumeAsc = 'token_tradeVolume_ASC',
  TokenTradeVolumeAscNullsFirst = 'token_tradeVolume_ASC_NULLS_FIRST',
  TokenTradeVolumeAscNullsLast = 'token_tradeVolume_ASC_NULLS_LAST',
  TokenTradeVolumeDesc = 'token_tradeVolume_DESC',
  TokenTradeVolumeDescNullsFirst = 'token_tradeVolume_DESC_NULLS_FIRST',
  TokenTradeVolumeDescNullsLast = 'token_tradeVolume_DESC_NULLS_LAST',
  TokenTxCountAsc = 'token_txCount_ASC',
  TokenTxCountAscNullsFirst = 'token_txCount_ASC_NULLS_FIRST',
  TokenTxCountAscNullsLast = 'token_txCount_ASC_NULLS_LAST',
  TokenTxCountDesc = 'token_txCount_DESC',
  TokenTxCountDescNullsFirst = 'token_txCount_DESC_NULLS_FIRST',
  TokenTxCountDescNullsLast = 'token_txCount_DESC_NULLS_LAST',
  TokenUntrackedVolumeUsdAsc = 'token_untrackedVolumeUSD_ASC',
  TokenUntrackedVolumeUsdAscNullsFirst = 'token_untrackedVolumeUSD_ASC_NULLS_FIRST',
  TokenUntrackedVolumeUsdAscNullsLast = 'token_untrackedVolumeUSD_ASC_NULLS_LAST',
  TokenUntrackedVolumeUsdDesc = 'token_untrackedVolumeUSD_DESC',
  TokenUntrackedVolumeUsdDescNullsFirst = 'token_untrackedVolumeUSD_DESC_NULLS_FIRST',
  TokenUntrackedVolumeUsdDescNullsLast = 'token_untrackedVolumeUSD_DESC_NULLS_LAST',
  TotalLiquidityEthAsc = 'totalLiquidityETH_ASC',
  TotalLiquidityEthAscNullsFirst = 'totalLiquidityETH_ASC_NULLS_FIRST',
  TotalLiquidityEthAscNullsLast = 'totalLiquidityETH_ASC_NULLS_LAST',
  TotalLiquidityEthDesc = 'totalLiquidityETH_DESC',
  TotalLiquidityEthDescNullsFirst = 'totalLiquidityETH_DESC_NULLS_FIRST',
  TotalLiquidityEthDescNullsLast = 'totalLiquidityETH_DESC_NULLS_LAST',
  TotalLiquidityTokenAsc = 'totalLiquidityToken_ASC',
  TotalLiquidityTokenAscNullsFirst = 'totalLiquidityToken_ASC_NULLS_FIRST',
  TotalLiquidityTokenAscNullsLast = 'totalLiquidityToken_ASC_NULLS_LAST',
  TotalLiquidityTokenDesc = 'totalLiquidityToken_DESC',
  TotalLiquidityTokenDescNullsFirst = 'totalLiquidityToken_DESC_NULLS_FIRST',
  TotalLiquidityTokenDescNullsLast = 'totalLiquidityToken_DESC_NULLS_LAST',
  TotalLiquidityUsdAsc = 'totalLiquidityUSD_ASC',
  TotalLiquidityUsdAscNullsFirst = 'totalLiquidityUSD_ASC_NULLS_FIRST',
  TotalLiquidityUsdAscNullsLast = 'totalLiquidityUSD_ASC_NULLS_LAST',
  TotalLiquidityUsdDesc = 'totalLiquidityUSD_DESC',
  TotalLiquidityUsdDescNullsFirst = 'totalLiquidityUSD_DESC_NULLS_FIRST',
  TotalLiquidityUsdDescNullsLast = 'totalLiquidityUSD_DESC_NULLS_LAST',
}

export type TokenDayDataWhereInput = {
  AND?: InputMaybe<Array<TokenDayDataWhereInput>>;
  OR?: InputMaybe<Array<TokenDayDataWhereInput>>;
  dailyTxns_eq?: InputMaybe<Scalars['BigInt']['input']>;
  dailyTxns_gt?: InputMaybe<Scalars['BigInt']['input']>;
  dailyTxns_gte?: InputMaybe<Scalars['BigInt']['input']>;
  dailyTxns_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dailyTxns_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  dailyTxns_lt?: InputMaybe<Scalars['BigInt']['input']>;
  dailyTxns_lte?: InputMaybe<Scalars['BigInt']['input']>;
  dailyTxns_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  dailyTxns_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  dailyVolumeETH_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeETH_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeETH_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeETH_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyVolumeETH_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  dailyVolumeETH_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeETH_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeETH_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyVolumeToken_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyVolumeToken_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  dailyVolumeToken_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeToken_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyVolumeUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  dailyVolumeUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  dailyVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  dailyVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  date_eq?: InputMaybe<Scalars['Int']['input']>;
  date_gt?: InputMaybe<Scalars['Int']['input']>;
  date_gte?: InputMaybe<Scalars['Int']['input']>;
  date_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  date_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  date_lt?: InputMaybe<Scalars['Int']['input']>;
  date_lte?: InputMaybe<Scalars['Int']['input']>;
  date_not_eq?: InputMaybe<Scalars['Int']['input']>;
  date_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  priceUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  priceUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  priceUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token?: InputMaybe<TokenWhereInput>;
  token_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalLiquidityETH_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityETH_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityETH_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityETH_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidityETH_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalLiquidityETH_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityETH_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityETH_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidityToken_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityToken_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityToken_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityToken_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidityToken_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalLiquidityToken_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityToken_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityToken_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityToken_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >;
  totalLiquidityUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidityUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalLiquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export type TokenEdge = {
  __typename?: 'TokenEdge';
  cursor: Scalars['String']['output'];
  node: Token;
};

export enum TokenOrderByInput {
  DecimalsAsc = 'decimals_ASC',
  DecimalsAscNullsFirst = 'decimals_ASC_NULLS_FIRST',
  DecimalsAscNullsLast = 'decimals_ASC_NULLS_LAST',
  DecimalsDesc = 'decimals_DESC',
  DecimalsDescNullsFirst = 'decimals_DESC_NULLS_FIRST',
  DecimalsDescNullsLast = 'decimals_DESC_NULLS_LAST',
  DerivedEthAsc = 'derivedETH_ASC',
  DerivedEthAscNullsFirst = 'derivedETH_ASC_NULLS_FIRST',
  DerivedEthAscNullsLast = 'derivedETH_ASC_NULLS_LAST',
  DerivedEthDesc = 'derivedETH_DESC',
  DerivedEthDescNullsFirst = 'derivedETH_DESC_NULLS_FIRST',
  DerivedEthDescNullsLast = 'derivedETH_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  MemeTokenActivityVaultAllocationAsc = 'memeToken_activityVaultAllocation_ASC',
  MemeTokenActivityVaultAllocationAscNullsFirst = 'memeToken_activityVaultAllocation_ASC_NULLS_FIRST',
  MemeTokenActivityVaultAllocationAscNullsLast = 'memeToken_activityVaultAllocation_ASC_NULLS_LAST',
  MemeTokenActivityVaultAllocationDesc = 'memeToken_activityVaultAllocation_DESC',
  MemeTokenActivityVaultAllocationDescNullsFirst = 'memeToken_activityVaultAllocation_DESC_NULLS_FIRST',
  MemeTokenActivityVaultAllocationDescNullsLast = 'memeToken_activityVaultAllocation_DESC_NULLS_LAST',
  MemeTokenIdAsc = 'memeToken_id_ASC',
  MemeTokenIdAscNullsFirst = 'memeToken_id_ASC_NULLS_FIRST',
  MemeTokenIdAscNullsLast = 'memeToken_id_ASC_NULLS_LAST',
  MemeTokenIdDesc = 'memeToken_id_DESC',
  MemeTokenIdDescNullsFirst = 'memeToken_id_DESC_NULLS_FIRST',
  MemeTokenIdDescNullsLast = 'memeToken_id_DESC_NULLS_LAST',
  MemeTokenMemeCreatedAtAsc = 'memeToken_memeCreatedAt_ASC',
  MemeTokenMemeCreatedAtAscNullsFirst = 'memeToken_memeCreatedAt_ASC_NULLS_FIRST',
  MemeTokenMemeCreatedAtAscNullsLast = 'memeToken_memeCreatedAt_ASC_NULLS_LAST',
  MemeTokenMemeCreatedAtDesc = 'memeToken_memeCreatedAt_DESC',
  MemeTokenMemeCreatedAtDescNullsFirst = 'memeToken_memeCreatedAt_DESC_NULLS_FIRST',
  MemeTokenMemeCreatedAtDescNullsLast = 'memeToken_memeCreatedAt_DESC_NULLS_LAST',
  MemeTokenOwnerAllocationAsc = 'memeToken_ownerAllocation_ASC',
  MemeTokenOwnerAllocationAscNullsFirst = 'memeToken_ownerAllocation_ASC_NULLS_FIRST',
  MemeTokenOwnerAllocationAscNullsLast = 'memeToken_ownerAllocation_ASC_NULLS_LAST',
  MemeTokenOwnerAllocationDesc = 'memeToken_ownerAllocation_DESC',
  MemeTokenOwnerAllocationDescNullsFirst = 'memeToken_ownerAllocation_DESC_NULLS_FIRST',
  MemeTokenOwnerAllocationDescNullsLast = 'memeToken_ownerAllocation_DESC_NULLS_LAST',
  MemeTokenTokenAddressAsc = 'memeToken_tokenAddress_ASC',
  MemeTokenTokenAddressAscNullsFirst = 'memeToken_tokenAddress_ASC_NULLS_FIRST',
  MemeTokenTokenAddressAscNullsLast = 'memeToken_tokenAddress_ASC_NULLS_LAST',
  MemeTokenTokenAddressDesc = 'memeToken_tokenAddress_DESC',
  MemeTokenTokenAddressDescNullsFirst = 'memeToken_tokenAddress_DESC_NULLS_FIRST',
  MemeTokenTokenAddressDescNullsLast = 'memeToken_tokenAddress_DESC_NULLS_LAST',
  MemeTokenTokenNameAsc = 'memeToken_tokenName_ASC',
  MemeTokenTokenNameAscNullsFirst = 'memeToken_tokenName_ASC_NULLS_FIRST',
  MemeTokenTokenNameAscNullsLast = 'memeToken_tokenName_ASC_NULLS_LAST',
  MemeTokenTokenNameDesc = 'memeToken_tokenName_DESC',
  MemeTokenTokenNameDescNullsFirst = 'memeToken_tokenName_DESC_NULLS_FIRST',
  MemeTokenTokenNameDescNullsLast = 'memeToken_tokenName_DESC_NULLS_LAST',
  MemeTokenTokenPriceAsc = 'memeToken_tokenPrice_ASC',
  MemeTokenTokenPriceAscNullsFirst = 'memeToken_tokenPrice_ASC_NULLS_FIRST',
  MemeTokenTokenPriceAscNullsLast = 'memeToken_tokenPrice_ASC_NULLS_LAST',
  MemeTokenTokenPriceDesc = 'memeToken_tokenPrice_DESC',
  MemeTokenTokenPriceDescNullsFirst = 'memeToken_tokenPrice_DESC_NULLS_FIRST',
  MemeTokenTokenPriceDescNullsLast = 'memeToken_tokenPrice_DESC_NULLS_LAST',
  MemeTokenTokenSymbolAsc = 'memeToken_tokenSymbol_ASC',
  MemeTokenTokenSymbolAscNullsFirst = 'memeToken_tokenSymbol_ASC_NULLS_FIRST',
  MemeTokenTokenSymbolAscNullsLast = 'memeToken_tokenSymbol_ASC_NULLS_LAST',
  MemeTokenTokenSymbolDesc = 'memeToken_tokenSymbol_DESC',
  MemeTokenTokenSymbolDescNullsFirst = 'memeToken_tokenSymbol_DESC_NULLS_FIRST',
  MemeTokenTokenSymbolDescNullsLast = 'memeToken_tokenSymbol_DESC_NULLS_LAST',
  MemeTokenTokenV60InitiatedAsc = 'memeToken_tokenV60Initiated_ASC',
  MemeTokenTokenV60InitiatedAscNullsFirst = 'memeToken_tokenV60Initiated_ASC_NULLS_FIRST',
  MemeTokenTokenV60InitiatedAscNullsLast = 'memeToken_tokenV60Initiated_ASC_NULLS_LAST',
  MemeTokenTokenV60InitiatedDesc = 'memeToken_tokenV60Initiated_DESC',
  MemeTokenTokenV60InitiatedDescNullsFirst = 'memeToken_tokenV60Initiated_DESC_NULLS_FIRST',
  MemeTokenTokenV60InitiatedDescNullsLast = 'memeToken_tokenV60Initiated_DESC_NULLS_LAST',
  MemeTokenUserAddressAsc = 'memeToken_userAddress_ASC',
  MemeTokenUserAddressAscNullsFirst = 'memeToken_userAddress_ASC_NULLS_FIRST',
  MemeTokenUserAddressAscNullsLast = 'memeToken_userAddress_ASC_NULLS_LAST',
  MemeTokenUserAddressDesc = 'memeToken_userAddress_DESC',
  MemeTokenUserAddressDescNullsFirst = 'memeToken_userAddress_DESC_NULLS_FIRST',
  MemeTokenUserAddressDescNullsLast = 'memeToken_userAddress_DESC_NULLS_LAST',
  MemeTokenV60LpTokenAddressAsc = 'memeToken_v60LpTokenAddress_ASC',
  MemeTokenV60LpTokenAddressAscNullsFirst = 'memeToken_v60LpTokenAddress_ASC_NULLS_FIRST',
  MemeTokenV60LpTokenAddressAscNullsLast = 'memeToken_v60LpTokenAddress_ASC_NULLS_LAST',
  MemeTokenV60LpTokenAddressDesc = 'memeToken_v60LpTokenAddress_DESC',
  MemeTokenV60LpTokenAddressDescNullsFirst = 'memeToken_v60LpTokenAddress_DESC_NULLS_FIRST',
  MemeTokenV60LpTokenAddressDescNullsLast = 'memeToken_v60LpTokenAddress_DESC_NULLS_LAST',
  NameAsc = 'name_ASC',
  NameAscNullsFirst = 'name_ASC_NULLS_FIRST',
  NameAscNullsLast = 'name_ASC_NULLS_LAST',
  NameDesc = 'name_DESC',
  NameDescNullsFirst = 'name_DESC_NULLS_FIRST',
  NameDescNullsLast = 'name_DESC_NULLS_LAST',
  SymbolAsc = 'symbol_ASC',
  SymbolAscNullsFirst = 'symbol_ASC_NULLS_FIRST',
  SymbolAscNullsLast = 'symbol_ASC_NULLS_LAST',
  SymbolDesc = 'symbol_DESC',
  SymbolDescNullsFirst = 'symbol_DESC_NULLS_FIRST',
  SymbolDescNullsLast = 'symbol_DESC_NULLS_LAST',
  TotalLiquidityAsc = 'totalLiquidity_ASC',
  TotalLiquidityAscNullsFirst = 'totalLiquidity_ASC_NULLS_FIRST',
  TotalLiquidityAscNullsLast = 'totalLiquidity_ASC_NULLS_LAST',
  TotalLiquidityDesc = 'totalLiquidity_DESC',
  TotalLiquidityDescNullsFirst = 'totalLiquidity_DESC_NULLS_FIRST',
  TotalLiquidityDescNullsLast = 'totalLiquidity_DESC_NULLS_LAST',
  TotalSupplyAsc = 'totalSupply_ASC',
  TotalSupplyAscNullsFirst = 'totalSupply_ASC_NULLS_FIRST',
  TotalSupplyAscNullsLast = 'totalSupply_ASC_NULLS_LAST',
  TotalSupplyDesc = 'totalSupply_DESC',
  TotalSupplyDescNullsFirst = 'totalSupply_DESC_NULLS_FIRST',
  TotalSupplyDescNullsLast = 'totalSupply_DESC_NULLS_LAST',
  TradeVolumeUsdAsc = 'tradeVolumeUSD_ASC',
  TradeVolumeUsdAscNullsFirst = 'tradeVolumeUSD_ASC_NULLS_FIRST',
  TradeVolumeUsdAscNullsLast = 'tradeVolumeUSD_ASC_NULLS_LAST',
  TradeVolumeUsdDesc = 'tradeVolumeUSD_DESC',
  TradeVolumeUsdDescNullsFirst = 'tradeVolumeUSD_DESC_NULLS_FIRST',
  TradeVolumeUsdDescNullsLast = 'tradeVolumeUSD_DESC_NULLS_LAST',
  TradeVolumeAsc = 'tradeVolume_ASC',
  TradeVolumeAscNullsFirst = 'tradeVolume_ASC_NULLS_FIRST',
  TradeVolumeAscNullsLast = 'tradeVolume_ASC_NULLS_LAST',
  TradeVolumeDesc = 'tradeVolume_DESC',
  TradeVolumeDescNullsFirst = 'tradeVolume_DESC_NULLS_FIRST',
  TradeVolumeDescNullsLast = 'tradeVolume_DESC_NULLS_LAST',
  TxCountAsc = 'txCount_ASC',
  TxCountAscNullsFirst = 'txCount_ASC_NULLS_FIRST',
  TxCountAscNullsLast = 'txCount_ASC_NULLS_LAST',
  TxCountDesc = 'txCount_DESC',
  TxCountDescNullsFirst = 'txCount_DESC_NULLS_FIRST',
  TxCountDescNullsLast = 'txCount_DESC_NULLS_LAST',
  UntrackedVolumeUsdAsc = 'untrackedVolumeUSD_ASC',
  UntrackedVolumeUsdAscNullsFirst = 'untrackedVolumeUSD_ASC_NULLS_FIRST',
  UntrackedVolumeUsdAscNullsLast = 'untrackedVolumeUSD_ASC_NULLS_LAST',
  UntrackedVolumeUsdDesc = 'untrackedVolumeUSD_DESC',
  UntrackedVolumeUsdDescNullsFirst = 'untrackedVolumeUSD_DESC_NULLS_FIRST',
  UntrackedVolumeUsdDescNullsLast = 'untrackedVolumeUSD_DESC_NULLS_LAST',
}

export type TokenWhereInput = {
  AND?: InputMaybe<Array<TokenWhereInput>>;
  OR?: InputMaybe<Array<TokenWhereInput>>;
  decimals_eq?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  decimals_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  decimals_lt?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  derivedETH_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  derivedETH_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  derivedETH_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  derivedETH_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  derivedETH_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  derivedETH_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  derivedETH_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  derivedETH_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  derivedETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  memeToken?: InputMaybe<MemeTokenWhereInput>;
  memeToken_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  name_contains?: InputMaybe<Scalars['String']['input']>;
  name_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  name_endsWith?: InputMaybe<Scalars['String']['input']>;
  name_eq?: InputMaybe<Scalars['String']['input']>;
  name_gt?: InputMaybe<Scalars['String']['input']>;
  name_gte?: InputMaybe<Scalars['String']['input']>;
  name_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  name_lt?: InputMaybe<Scalars['String']['input']>;
  name_lte?: InputMaybe<Scalars['String']['input']>;
  name_not_contains?: InputMaybe<Scalars['String']['input']>;
  name_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  name_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  name_not_eq?: InputMaybe<Scalars['String']['input']>;
  name_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  name_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  name_startsWith?: InputMaybe<Scalars['String']['input']>;
  symbol_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  symbol_endsWith?: InputMaybe<Scalars['String']['input']>;
  symbol_eq?: InputMaybe<Scalars['String']['input']>;
  symbol_gt?: InputMaybe<Scalars['String']['input']>;
  symbol_gte?: InputMaybe<Scalars['String']['input']>;
  symbol_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  symbol_lt?: InputMaybe<Scalars['String']['input']>;
  symbol_lte?: InputMaybe<Scalars['String']['input']>;
  symbol_not_contains?: InputMaybe<Scalars['String']['input']>;
  symbol_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  symbol_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  symbol_not_eq?: InputMaybe<Scalars['String']['input']>;
  symbol_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  symbol_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  symbol_startsWith?: InputMaybe<Scalars['String']['input']>;
  totalLiquidity_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidity_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalLiquidity_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidity_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalSupply_eq?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tradeVolumeUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolumeUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tradeVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolume_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolume_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tradeVolume_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  txCount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  txCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  untrackedVolumeUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  untrackedVolumeUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  untrackedVolumeUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  untrackedVolumeUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export type TokensConnection = {
  __typename?: 'TokensConnection';
  edges: Array<TokenEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String']['output'];
  liquidityPositions: Array<LiquidityPosition>;
  usdSwapped: Scalars['BigDecimal']['output'];
};

export type UserLiquidityPositionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LiquidityPositionOrderByInput>>;
  where?: InputMaybe<LiquidityPositionWhereInput>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor: Scalars['String']['output'];
  node: User;
};

export enum UserOrderByInput {
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  UsdSwappedAsc = 'usdSwapped_ASC',
  UsdSwappedAscNullsFirst = 'usdSwapped_ASC_NULLS_FIRST',
  UsdSwappedAscNullsLast = 'usdSwapped_ASC_NULLS_LAST',
  UsdSwappedDesc = 'usdSwapped_DESC',
  UsdSwappedDescNullsFirst = 'usdSwapped_DESC_NULLS_FIRST',
  UsdSwappedDescNullsLast = 'usdSwapped_DESC_NULLS_LAST',
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  id_contains?: InputMaybe<Scalars['String']['input']>;
  id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_eq?: InputMaybe<Scalars['String']['input']>;
  id_gt?: InputMaybe<Scalars['String']['input']>;
  id_gte?: InputMaybe<Scalars['String']['input']>;
  id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  id_lt?: InputMaybe<Scalars['String']['input']>;
  id_lte?: InputMaybe<Scalars['String']['input']>;
  id_not_contains?: InputMaybe<Scalars['String']['input']>;
  id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  id_not_eq?: InputMaybe<Scalars['String']['input']>;
  id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  id_startsWith?: InputMaybe<Scalars['String']['input']>;
  liquidityPositions_every?: InputMaybe<LiquidityPositionWhereInput>;
  liquidityPositions_none?: InputMaybe<LiquidityPositionWhereInput>;
  liquidityPositions_some?: InputMaybe<LiquidityPositionWhereInput>;
  usdSwapped_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdSwapped_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdSwapped_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdSwapped_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  usdSwapped_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  usdSwapped_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdSwapped_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdSwapped_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  usdSwapped_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
};

export type UsersConnection = {
  __typename?: 'UsersConnection';
  edges: Array<UserEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type PairByIdQueryVariables = Exact<{
  pairByIdId: Scalars['String']['input'];
}>;

export type PairByIdQuery = {
  __typename?: 'Query';
  pairById?: {
    __typename?: 'Pair';
    id: string;
    reserve0: any;
    reserve1: any;
    totalSupply: any;
    reserveETH: any;
    reserveUSD: any;
    trackedReserveETH: any;
    token0Price: any;
    token1Price: any;
    volumeToken0: any;
    volumeToken1: any;
    volumeUSD: any;
    untrackedVolumeUSD: any;
    txCount: any;
    createdAtTimestamp: any;
    createdAtBlockNumber: any;
    liquidityProviderCount: any;
    token0: {
      __typename?: 'Token';
      id: string;
      symbol: string;
      name: string;
      decimals: any;
      totalSupply: any;
      tradeVolume: any;
      tradeVolumeUSD: any;
      untrackedVolumeUSD: any;
      txCount: any;
      totalLiquidity: any;
      derivedETH: any;
      memeToken?: {
        __typename?: 'MemeToken';
        id: string;
        userAddress: string;
        tokenAddress: string;
        tokenName: string;
        tokenSymbol: string;
        tokenPrice?: any | null;
        tokenV60Initiated?: boolean | null;
        v60LpTokenAddress?: string | null;
        ownerAllocation?: any | null;
        activityVaultAllocation?: any | null;
        memeCreatedAt?: any | null;
      } | null;
    };
    token1: {
      __typename?: 'Token';
      id: string;
      symbol: string;
      name: string;
      decimals: any;
      totalSupply: any;
      tradeVolume: any;
      tradeVolumeUSD: any;
      untrackedVolumeUSD: any;
      txCount: any;
      totalLiquidity: any;
      derivedETH: any;
      memeToken?: {
        __typename?: 'MemeToken';
        id: string;
        userAddress: string;
        tokenAddress: string;
        tokenName: string;
        tokenSymbol: string;
        tokenPrice?: any | null;
        tokenV60Initiated?: boolean | null;
        v60LpTokenAddress?: string | null;
        ownerAllocation?: any | null;
        activityVaultAllocation?: any | null;
        memeCreatedAt?: any | null;
      } | null;
    };
  } | null;
};

export type PairsQueryVariables = Exact<{
  where?: InputMaybe<PairWhereInput>;
  orderBy?: InputMaybe<Array<PairOrderByInput> | PairOrderByInput>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type PairsQuery = {
  __typename?: 'Query';
  pairs: Array<{
    __typename?: 'Pair';
    id: string;
    reserve0: any;
    reserve1: any;
    totalSupply: any;
    reserveETH: any;
    reserveUSD: any;
    trackedReserveETH: any;
    token0Price: any;
    token1Price: any;
    volumeToken0: any;
    volumeToken1: any;
    volumeUSD: any;
    untrackedVolumeUSD: any;
    txCount: any;
    createdAtTimestamp: any;
    createdAtBlockNumber: any;
    liquidityProviderCount: any;
    token0: {
      __typename?: 'Token';
      id: string;
      symbol: string;
      name: string;
      decimals: any;
      totalSupply: any;
      tradeVolume: any;
      tradeVolumeUSD: any;
      untrackedVolumeUSD: any;
      txCount: any;
      totalLiquidity: any;
      derivedETH: any;
      memeToken?: {
        __typename?: 'MemeToken';
        id: string;
        userAddress: string;
        tokenAddress: string;
        tokenName: string;
        tokenSymbol: string;
        tokenPrice?: any | null;
        tokenV60Initiated?: boolean | null;
        v60LpTokenAddress?: string | null;
        ownerAllocation?: any | null;
        activityVaultAllocation?: any | null;
        memeCreatedAt?: any | null;
      } | null;
    };
    token1: {
      __typename?: 'Token';
      id: string;
      symbol: string;
      name: string;
      decimals: any;
      totalSupply: any;
      tradeVolume: any;
      tradeVolumeUSD: any;
      untrackedVolumeUSD: any;
      txCount: any;
      totalLiquidity: any;
      derivedETH: any;
      memeToken?: {
        __typename?: 'MemeToken';
        id: string;
        userAddress: string;
        tokenAddress: string;
        tokenName: string;
        tokenSymbol: string;
        tokenPrice?: any | null;
        tokenV60Initiated?: boolean | null;
        v60LpTokenAddress?: string | null;
        ownerAllocation?: any | null;
        activityVaultAllocation?: any | null;
        memeCreatedAt?: any | null;
      } | null;
    };
  }>;
};

export type LiquidityPositionsQueryVariables = Exact<{
  where?: InputMaybe<LiquidityPositionWhereInput>;
  orderBy?: InputMaybe<
    Array<LiquidityPositionOrderByInput> | LiquidityPositionOrderByInput
  >;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type LiquidityPositionsQuery = {
  __typename?: 'Query';
  liquidityPositions: Array<{
    __typename?: 'LiquidityPosition';
    id: string;
    liquidityTokenBalance: any;
    user: { __typename?: 'User'; id: string; usdSwapped: any };
    pair: {
      __typename?: 'Pair';
      id: string;
      reserve0: any;
      reserve1: any;
      totalSupply: any;
      reserveETH: any;
      reserveUSD: any;
      trackedReserveETH: any;
      token0Price: any;
      token1Price: any;
      volumeToken0: any;
      volumeToken1: any;
      volumeUSD: any;
      untrackedVolumeUSD: any;
      txCount: any;
      createdAtTimestamp: any;
      createdAtBlockNumber: any;
      liquidityProviderCount: any;
      token0: {
        __typename?: 'Token';
        id: string;
        symbol: string;
        name: string;
        decimals: any;
        totalSupply: any;
        tradeVolume: any;
        tradeVolumeUSD: any;
        untrackedVolumeUSD: any;
        txCount: any;
        totalLiquidity: any;
        derivedETH: any;
        memeToken?: {
          __typename?: 'MemeToken';
          id: string;
          userAddress: string;
          tokenAddress: string;
          tokenName: string;
          tokenSymbol: string;
          tokenPrice?: any | null;
          tokenV60Initiated?: boolean | null;
          v60LpTokenAddress?: string | null;
          ownerAllocation?: any | null;
          activityVaultAllocation?: any | null;
          memeCreatedAt?: any | null;
        } | null;
      };
      token1: {
        __typename?: 'Token';
        id: string;
        symbol: string;
        name: string;
        decimals: any;
        totalSupply: any;
        tradeVolume: any;
        tradeVolumeUSD: any;
        untrackedVolumeUSD: any;
        txCount: any;
        totalLiquidity: any;
        derivedETH: any;
        memeToken?: {
          __typename?: 'MemeToken';
          id: string;
          userAddress: string;
          tokenAddress: string;
          tokenName: string;
          tokenSymbol: string;
          tokenPrice?: any | null;
          tokenV60Initiated?: boolean | null;
          v60LpTokenAddress?: string | null;
          ownerAllocation?: any | null;
          activityVaultAllocation?: any | null;
          memeCreatedAt?: any | null;
        } | null;
      };
    };
  }>;
};

export const PairByIdDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'PairById' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'pairByIdId' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pairById' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'id' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'pairByIdId' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'token0' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'symbol' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'decimals' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalSupply' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolume' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolumeUSD' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'untrackedVolumeUSD' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'txCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalLiquidity' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'derivedETH' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'memeToken' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'userAddress' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tokenAddress' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tokenName' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tokenSymbol' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tokenPrice' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'tokenV60Initiated',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'v60LpTokenAddress',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'ownerAllocation' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'activityVaultAllocation',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'memeCreatedAt' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'token1' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'symbol' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'decimals' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalSupply' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolume' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolumeUSD' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'untrackedVolumeUSD' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'txCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalLiquidity' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'derivedETH' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'memeToken' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'userAddress' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tokenAddress' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tokenName' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tokenSymbol' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tokenPrice' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'tokenV60Initiated',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'v60LpTokenAddress',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'ownerAllocation' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'activityVaultAllocation',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'memeCreatedAt' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'reserve0' } },
                { kind: 'Field', name: { kind: 'Name', value: 'reserve1' } },
                { kind: 'Field', name: { kind: 'Name', value: 'totalSupply' } },
                { kind: 'Field', name: { kind: 'Name', value: 'reserveETH' } },
                { kind: 'Field', name: { kind: 'Name', value: 'reserveUSD' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'trackedReserveETH' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'token0Price' } },
                { kind: 'Field', name: { kind: 'Name', value: 'token1Price' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'volumeToken0' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'volumeToken1' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'volumeUSD' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'untrackedVolumeUSD' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'txCount' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'createdAtTimestamp' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'createdAtBlockNumber' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'liquidityProviderCount' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PairByIdQuery, PairByIdQueryVariables>;
export const PairsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'Pairs' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'PairWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'PairOrderByInput' },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'offset' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'pairs' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'offset' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'token0' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'symbol' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'decimals' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalSupply' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolume' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolumeUSD' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'untrackedVolumeUSD' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'txCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalLiquidity' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'derivedETH' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'memeToken' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'userAddress' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tokenAddress' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tokenName' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tokenSymbol' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tokenPrice' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'tokenV60Initiated',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'v60LpTokenAddress',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'ownerAllocation' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'activityVaultAllocation',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'memeCreatedAt' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'token1' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'symbol' },
                      },
                      { kind: 'Field', name: { kind: 'Name', value: 'name' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'decimals' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalSupply' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolume' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolumeUSD' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'untrackedVolumeUSD' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'txCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalLiquidity' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'derivedETH' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'memeToken' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'userAddress' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tokenAddress' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tokenName' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tokenSymbol' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tokenPrice' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'tokenV60Initiated',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'v60LpTokenAddress',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'ownerAllocation' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'activityVaultAllocation',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'memeCreatedAt' },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'reserve0' } },
                { kind: 'Field', name: { kind: 'Name', value: 'reserve1' } },
                { kind: 'Field', name: { kind: 'Name', value: 'totalSupply' } },
                { kind: 'Field', name: { kind: 'Name', value: 'reserveETH' } },
                { kind: 'Field', name: { kind: 'Name', value: 'reserveUSD' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'trackedReserveETH' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'token0Price' } },
                { kind: 'Field', name: { kind: 'Name', value: 'token1Price' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'volumeToken0' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'volumeToken1' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'volumeUSD' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'untrackedVolumeUSD' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'txCount' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'createdAtTimestamp' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'createdAtBlockNumber' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'liquidityProviderCount' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PairsQuery, PairsQueryVariables>;
export const LiquidityPositionsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'LiquidityPositions' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'LiquidityPositionWhereInput' },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'orderBy' },
          },
          type: {
            kind: 'ListType',
            type: {
              kind: 'NonNullType',
              type: {
                kind: 'NamedType',
                name: { kind: 'Name', value: 'LiquidityPositionOrderByInput' },
              },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'offset' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'limit' },
          },
          type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'liquidityPositions' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'where' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'where' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'orderBy' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'orderBy' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'offset' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'offset' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'limit' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'limit' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'user' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'usdSwapped' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'pair' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'token0' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'symbol' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'decimals' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'totalSupply' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tradeVolume' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tradeVolumeUSD' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'untrackedVolumeUSD',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'txCount' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'totalLiquidity' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'derivedETH' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'memeToken' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'userAddress',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'tokenAddress',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'tokenName' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'tokenSymbol',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'tokenPrice' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'tokenV60Initiated',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'v60LpTokenAddress',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'ownerAllocation',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'activityVaultAllocation',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'memeCreatedAt',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'token1' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'symbol' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'name' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'decimals' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'totalSupply' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tradeVolume' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tradeVolumeUSD' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'untrackedVolumeUSD',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'txCount' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'totalLiquidity' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'derivedETH' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'memeToken' },
                              selectionSet: {
                                kind: 'SelectionSet',
                                selections: [
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'id' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'userAddress',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'tokenAddress',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'tokenName' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'tokenSymbol',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'tokenPrice' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'tokenV60Initiated',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'v60LpTokenAddress',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'ownerAllocation',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'activityVaultAllocation',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'memeCreatedAt',
                                    },
                                  },
                                ],
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'reserve0' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'reserve1' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'totalSupply' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'reserveETH' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'reserveUSD' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'trackedReserveETH' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'token0Price' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'token1Price' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'volumeToken0' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'volumeToken1' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'volumeUSD' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'untrackedVolumeUSD' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'txCount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAtTimestamp' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'createdAtBlockNumber' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'liquidityProviderCount' },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'liquidityTokenBalance' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  LiquidityPositionsQuery,
  LiquidityPositionsQueryVariables
>;
