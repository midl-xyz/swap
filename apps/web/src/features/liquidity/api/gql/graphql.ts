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

export type CurrentLiquidityPosition = {
  __typename?: 'CurrentLiquidityPosition';
  id: Scalars['String']['output'];
  lastUpdatedAt: Scalars['BigInt']['output'];
  lastUpdatedAtBlockTimestamp: Scalars['BigInt']['output'];
  liquidityTokenBalance: Scalars['BigDecimal']['output'];
  pair: Pair;
  user: User;
};

export type CurrentLiquidityPositionEdge = {
  __typename?: 'CurrentLiquidityPositionEdge';
  cursor: Scalars['String']['output'];
  node: CurrentLiquidityPosition;
};

export enum CurrentLiquidityPositionOrderByInput {
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  LastUpdatedAtBlockTimestampAsc = 'lastUpdatedAtBlockTimestamp_ASC',
  LastUpdatedAtBlockTimestampAscNullsFirst = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampAscNullsLast = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  LastUpdatedAtBlockTimestampDesc = 'lastUpdatedAtBlockTimestamp_DESC',
  LastUpdatedAtBlockTimestampDescNullsFirst = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampDescNullsLast = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  LastUpdatedAtAsc = 'lastUpdatedAt_ASC',
  LastUpdatedAtAscNullsFirst = 'lastUpdatedAt_ASC_NULLS_FIRST',
  LastUpdatedAtAscNullsLast = 'lastUpdatedAt_ASC_NULLS_LAST',
  LastUpdatedAtDesc = 'lastUpdatedAt_DESC',
  LastUpdatedAtDescNullsFirst = 'lastUpdatedAt_DESC_NULLS_FIRST',
  LastUpdatedAtDescNullsLast = 'lastUpdatedAt_DESC_NULLS_LAST',
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
  PairFactoryAddressAsc = 'pair_factoryAddress_ASC',
  PairFactoryAddressAscNullsFirst = 'pair_factoryAddress_ASC_NULLS_FIRST',
  PairFactoryAddressAscNullsLast = 'pair_factoryAddress_ASC_NULLS_LAST',
  PairFactoryAddressDesc = 'pair_factoryAddress_DESC',
  PairFactoryAddressDescNullsFirst = 'pair_factoryAddress_DESC_NULLS_FIRST',
  PairFactoryAddressDescNullsLast = 'pair_factoryAddress_DESC_NULLS_LAST',
  PairFees24hDeltaAsc = 'pair_fees24hDelta_ASC',
  PairFees24hDeltaAscNullsFirst = 'pair_fees24hDelta_ASC_NULLS_FIRST',
  PairFees24hDeltaAscNullsLast = 'pair_fees24hDelta_ASC_NULLS_LAST',
  PairFees24hDeltaDesc = 'pair_fees24hDelta_DESC',
  PairFees24hDeltaDescNullsFirst = 'pair_fees24hDelta_DESC_NULLS_FIRST',
  PairFees24hDeltaDescNullsLast = 'pair_fees24hDelta_DESC_NULLS_LAST',
  PairFees24hAsc = 'pair_fees24h_ASC',
  PairFees24hAscNullsFirst = 'pair_fees24h_ASC_NULLS_FIRST',
  PairFees24hAscNullsLast = 'pair_fees24h_ASC_NULLS_LAST',
  PairFees24hDesc = 'pair_fees24h_DESC',
  PairFees24hDescNullsFirst = 'pair_fees24h_DESC_NULLS_FIRST',
  PairFees24hDescNullsLast = 'pair_fees24h_DESC_NULLS_LAST',
  PairFeesEth24hAsc = 'pair_feesETH24h_ASC',
  PairFeesEth24hAscNullsFirst = 'pair_feesETH24h_ASC_NULLS_FIRST',
  PairFeesEth24hAscNullsLast = 'pair_feesETH24h_ASC_NULLS_LAST',
  PairFeesEth24hDesc = 'pair_feesETH24h_DESC',
  PairFeesEth24hDescNullsFirst = 'pair_feesETH24h_DESC_NULLS_FIRST',
  PairFeesEth24hDescNullsLast = 'pair_feesETH24h_DESC_NULLS_LAST',
  PairFeesUsd24hAsc = 'pair_feesUSD24h_ASC',
  PairFeesUsd24hAscNullsFirst = 'pair_feesUSD24h_ASC_NULLS_FIRST',
  PairFeesUsd24hAscNullsLast = 'pair_feesUSD24h_ASC_NULLS_LAST',
  PairFeesUsd24hDesc = 'pair_feesUSD24h_DESC',
  PairFeesUsd24hDescNullsFirst = 'pair_feesUSD24h_DESC_NULLS_FIRST',
  PairFeesUsd24hDescNullsLast = 'pair_feesUSD24h_DESC_NULLS_LAST',
  PairIdAsc = 'pair_id_ASC',
  PairIdAscNullsFirst = 'pair_id_ASC_NULLS_FIRST',
  PairIdAscNullsLast = 'pair_id_ASC_NULLS_LAST',
  PairIdDesc = 'pair_id_DESC',
  PairIdDescNullsFirst = 'pair_id_DESC_NULLS_FIRST',
  PairIdDescNullsLast = 'pair_id_DESC_NULLS_LAST',
  PairLastUpdatedAtBlockTimestampAsc = 'pair_lastUpdatedAtBlockTimestamp_ASC',
  PairLastUpdatedAtBlockTimestampAscNullsFirst = 'pair_lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  PairLastUpdatedAtBlockTimestampAscNullsLast = 'pair_lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  PairLastUpdatedAtBlockTimestampDesc = 'pair_lastUpdatedAtBlockTimestamp_DESC',
  PairLastUpdatedAtBlockTimestampDescNullsFirst = 'pair_lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  PairLastUpdatedAtBlockTimestampDescNullsLast = 'pair_lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  PairLastUpdatedAtAsc = 'pair_lastUpdatedAt_ASC',
  PairLastUpdatedAtAscNullsFirst = 'pair_lastUpdatedAt_ASC_NULLS_FIRST',
  PairLastUpdatedAtAscNullsLast = 'pair_lastUpdatedAt_ASC_NULLS_LAST',
  PairLastUpdatedAtDesc = 'pair_lastUpdatedAt_DESC',
  PairLastUpdatedAtDescNullsFirst = 'pair_lastUpdatedAt_DESC_NULLS_FIRST',
  PairLastUpdatedAtDescNullsLast = 'pair_lastUpdatedAt_DESC_NULLS_LAST',
  PairLiquidity24hDeltaAsc = 'pair_liquidity24hDelta_ASC',
  PairLiquidity24hDeltaAscNullsFirst = 'pair_liquidity24hDelta_ASC_NULLS_FIRST',
  PairLiquidity24hDeltaAscNullsLast = 'pair_liquidity24hDelta_ASC_NULLS_LAST',
  PairLiquidity24hDeltaDesc = 'pair_liquidity24hDelta_DESC',
  PairLiquidity24hDeltaDescNullsFirst = 'pair_liquidity24hDelta_DESC_NULLS_FIRST',
  PairLiquidity24hDeltaDescNullsLast = 'pair_liquidity24hDelta_DESC_NULLS_LAST',
  PairLiquidityProviderCountAsc = 'pair_liquidityProviderCount_ASC',
  PairLiquidityProviderCountAscNullsFirst = 'pair_liquidityProviderCount_ASC_NULLS_FIRST',
  PairLiquidityProviderCountAscNullsLast = 'pair_liquidityProviderCount_ASC_NULLS_LAST',
  PairLiquidityProviderCountDesc = 'pair_liquidityProviderCount_DESC',
  PairLiquidityProviderCountDescNullsFirst = 'pair_liquidityProviderCount_DESC_NULLS_FIRST',
  PairLiquidityProviderCountDescNullsLast = 'pair_liquidityProviderCount_DESC_NULLS_LAST',
  PairLiquidityUsdAsc = 'pair_liquidityUSD_ASC',
  PairLiquidityUsdAscNullsFirst = 'pair_liquidityUSD_ASC_NULLS_FIRST',
  PairLiquidityUsdAscNullsLast = 'pair_liquidityUSD_ASC_NULLS_LAST',
  PairLiquidityUsdDesc = 'pair_liquidityUSD_DESC',
  PairLiquidityUsdDescNullsFirst = 'pair_liquidityUSD_DESC_NULLS_FIRST',
  PairLiquidityUsdDescNullsLast = 'pair_liquidityUSD_DESC_NULLS_LAST',
  PairLpDecimalsAsc = 'pair_lpDecimals_ASC',
  PairLpDecimalsAscNullsFirst = 'pair_lpDecimals_ASC_NULLS_FIRST',
  PairLpDecimalsAscNullsLast = 'pair_lpDecimals_ASC_NULLS_LAST',
  PairLpDecimalsDesc = 'pair_lpDecimals_DESC',
  PairLpDecimalsDescNullsFirst = 'pair_lpDecimals_DESC_NULLS_FIRST',
  PairLpDecimalsDescNullsLast = 'pair_lpDecimals_DESC_NULLS_LAST',
  PairLpTotalLockedAsc = 'pair_lpTotalLocked_ASC',
  PairLpTotalLockedAscNullsFirst = 'pair_lpTotalLocked_ASC_NULLS_FIRST',
  PairLpTotalLockedAscNullsLast = 'pair_lpTotalLocked_ASC_NULLS_LAST',
  PairLpTotalLockedDesc = 'pair_lpTotalLocked_DESC',
  PairLpTotalLockedDescNullsFirst = 'pair_lpTotalLocked_DESC_NULLS_FIRST',
  PairLpTotalLockedDescNullsLast = 'pair_lpTotalLocked_DESC_NULLS_LAST',
  PairLpTotalSupplyAsc = 'pair_lpTotalSupply_ASC',
  PairLpTotalSupplyAscNullsFirst = 'pair_lpTotalSupply_ASC_NULLS_FIRST',
  PairLpTotalSupplyAscNullsLast = 'pair_lpTotalSupply_ASC_NULLS_LAST',
  PairLpTotalSupplyDesc = 'pair_lpTotalSupply_DESC',
  PairLpTotalSupplyDescNullsFirst = 'pair_lpTotalSupply_DESC_NULLS_FIRST',
  PairLpTotalSupplyDescNullsLast = 'pair_lpTotalSupply_DESC_NULLS_LAST',
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
  PairToken0IdAsc = 'pair_token0Id_ASC',
  PairToken0IdAscNullsFirst = 'pair_token0Id_ASC_NULLS_FIRST',
  PairToken0IdAscNullsLast = 'pair_token0Id_ASC_NULLS_LAST',
  PairToken0IdDesc = 'pair_token0Id_DESC',
  PairToken0IdDescNullsFirst = 'pair_token0Id_DESC_NULLS_FIRST',
  PairToken0IdDescNullsLast = 'pair_token0Id_DESC_NULLS_LAST',
  PairToken0PriceAsc = 'pair_token0Price_ASC',
  PairToken0PriceAscNullsFirst = 'pair_token0Price_ASC_NULLS_FIRST',
  PairToken0PriceAscNullsLast = 'pair_token0Price_ASC_NULLS_LAST',
  PairToken0PriceDesc = 'pair_token0Price_DESC',
  PairToken0PriceDescNullsFirst = 'pair_token0Price_DESC_NULLS_FIRST',
  PairToken0PriceDescNullsLast = 'pair_token0Price_DESC_NULLS_LAST',
  PairToken1IdAsc = 'pair_token1Id_ASC',
  PairToken1IdAscNullsFirst = 'pair_token1Id_ASC_NULLS_FIRST',
  PairToken1IdAscNullsLast = 'pair_token1Id_ASC_NULLS_LAST',
  PairToken1IdDesc = 'pair_token1Id_DESC',
  PairToken1IdDescNullsFirst = 'pair_token1Id_DESC_NULLS_FIRST',
  PairToken1IdDescNullsLast = 'pair_token1Id_DESC_NULLS_LAST',
  PairToken1PriceAsc = 'pair_token1Price_ASC',
  PairToken1PriceAscNullsFirst = 'pair_token1Price_ASC_NULLS_FIRST',
  PairToken1PriceAscNullsLast = 'pair_token1Price_ASC_NULLS_LAST',
  PairToken1PriceDesc = 'pair_token1Price_DESC',
  PairToken1PriceDescNullsFirst = 'pair_token1Price_DESC_NULLS_FIRST',
  PairToken1PriceDescNullsLast = 'pair_token1Price_DESC_NULLS_LAST',
  PairTradeVolume24hDeltaAsc = 'pair_tradeVolume24hDelta_ASC',
  PairTradeVolume24hDeltaAscNullsFirst = 'pair_tradeVolume24hDelta_ASC_NULLS_FIRST',
  PairTradeVolume24hDeltaAscNullsLast = 'pair_tradeVolume24hDelta_ASC_NULLS_LAST',
  PairTradeVolume24hDeltaDesc = 'pair_tradeVolume24hDelta_DESC',
  PairTradeVolume24hDeltaDescNullsFirst = 'pair_tradeVolume24hDelta_DESC_NULLS_FIRST',
  PairTradeVolume24hDeltaDescNullsLast = 'pair_tradeVolume24hDelta_DESC_NULLS_LAST',
  PairTradeVolume24hAsc = 'pair_tradeVolume24h_ASC',
  PairTradeVolume24hAscNullsFirst = 'pair_tradeVolume24h_ASC_NULLS_FIRST',
  PairTradeVolume24hAscNullsLast = 'pair_tradeVolume24h_ASC_NULLS_LAST',
  PairTradeVolume24hDesc = 'pair_tradeVolume24h_DESC',
  PairTradeVolume24hDescNullsFirst = 'pair_tradeVolume24h_DESC_NULLS_FIRST',
  PairTradeVolume24hDescNullsLast = 'pair_tradeVolume24h_DESC_NULLS_LAST',
  PairTradeVolumeEth24hAsc = 'pair_tradeVolumeETH24h_ASC',
  PairTradeVolumeEth24hAscNullsFirst = 'pair_tradeVolumeETH24h_ASC_NULLS_FIRST',
  PairTradeVolumeEth24hAscNullsLast = 'pair_tradeVolumeETH24h_ASC_NULLS_LAST',
  PairTradeVolumeEth24hDesc = 'pair_tradeVolumeETH24h_DESC',
  PairTradeVolumeEth24hDescNullsFirst = 'pair_tradeVolumeETH24h_DESC_NULLS_FIRST',
  PairTradeVolumeEth24hDescNullsLast = 'pair_tradeVolumeETH24h_DESC_NULLS_LAST',
  PairTradeVolumeUsd24hAsc = 'pair_tradeVolumeUSD24h_ASC',
  PairTradeVolumeUsd24hAscNullsFirst = 'pair_tradeVolumeUSD24h_ASC_NULLS_FIRST',
  PairTradeVolumeUsd24hAscNullsLast = 'pair_tradeVolumeUSD24h_ASC_NULLS_LAST',
  PairTradeVolumeUsd24hDesc = 'pair_tradeVolumeUSD24h_DESC',
  PairTradeVolumeUsd24hDescNullsFirst = 'pair_tradeVolumeUSD24h_DESC_NULLS_FIRST',
  PairTradeVolumeUsd24hDescNullsLast = 'pair_tradeVolumeUSD24h_DESC_NULLS_LAST',
  PairTxCount24hAsc = 'pair_txCount24h_ASC',
  PairTxCount24hAscNullsFirst = 'pair_txCount24h_ASC_NULLS_FIRST',
  PairTxCount24hAscNullsLast = 'pair_txCount24h_ASC_NULLS_LAST',
  PairTxCount24hDesc = 'pair_txCount24h_DESC',
  PairTxCount24hDescNullsFirst = 'pair_txCount24h_DESC_NULLS_FIRST',
  PairTxCount24hDescNullsLast = 'pair_txCount24h_DESC_NULLS_LAST',
  PairTxCountTotalAsc = 'pair_txCountTotal_ASC',
  PairTxCountTotalAscNullsFirst = 'pair_txCountTotal_ASC_NULLS_FIRST',
  PairTxCountTotalAscNullsLast = 'pair_txCountTotal_ASC_NULLS_LAST',
  PairTxCountTotalDesc = 'pair_txCountTotal_DESC',
  PairTxCountTotalDescNullsFirst = 'pair_txCountTotal_DESC_NULLS_FIRST',
  PairTxCountTotalDescNullsLast = 'pair_txCountTotal_DESC_NULLS_LAST',
  UserIdAsc = 'user_id_ASC',
  UserIdAscNullsFirst = 'user_id_ASC_NULLS_FIRST',
  UserIdAscNullsLast = 'user_id_ASC_NULLS_LAST',
  UserIdDesc = 'user_id_DESC',
  UserIdDescNullsFirst = 'user_id_DESC_NULLS_FIRST',
  UserIdDescNullsLast = 'user_id_DESC_NULLS_LAST',
  UserLastUpdatedAtBlockTimestampAsc = 'user_lastUpdatedAtBlockTimestamp_ASC',
  UserLastUpdatedAtBlockTimestampAscNullsFirst = 'user_lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  UserLastUpdatedAtBlockTimestampAscNullsLast = 'user_lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  UserLastUpdatedAtBlockTimestampDesc = 'user_lastUpdatedAtBlockTimestamp_DESC',
  UserLastUpdatedAtBlockTimestampDescNullsFirst = 'user_lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  UserLastUpdatedAtBlockTimestampDescNullsLast = 'user_lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  UserLastUpdatedAtAsc = 'user_lastUpdatedAt_ASC',
  UserLastUpdatedAtAscNullsFirst = 'user_lastUpdatedAt_ASC_NULLS_FIRST',
  UserLastUpdatedAtAscNullsLast = 'user_lastUpdatedAt_ASC_NULLS_LAST',
  UserLastUpdatedAtDesc = 'user_lastUpdatedAt_DESC',
  UserLastUpdatedAtDescNullsFirst = 'user_lastUpdatedAt_DESC_NULLS_FIRST',
  UserLastUpdatedAtDescNullsLast = 'user_lastUpdatedAt_DESC_NULLS_LAST',
  UserSwapsAmountAsc = 'user_swapsAmount_ASC',
  UserSwapsAmountAscNullsFirst = 'user_swapsAmount_ASC_NULLS_FIRST',
  UserSwapsAmountAscNullsLast = 'user_swapsAmount_ASC_NULLS_LAST',
  UserSwapsAmountDesc = 'user_swapsAmount_DESC',
  UserSwapsAmountDescNullsFirst = 'user_swapsAmount_DESC_NULLS_FIRST',
  UserSwapsAmountDescNullsLast = 'user_swapsAmount_DESC_NULLS_LAST',
  UserUsdSwappedAsc = 'user_usdSwapped_ASC',
  UserUsdSwappedAscNullsFirst = 'user_usdSwapped_ASC_NULLS_FIRST',
  UserUsdSwappedAscNullsLast = 'user_usdSwapped_ASC_NULLS_LAST',
  UserUsdSwappedDesc = 'user_usdSwapped_DESC',
  UserUsdSwappedDescNullsFirst = 'user_usdSwapped_DESC_NULLS_FIRST',
  UserUsdSwappedDescNullsLast = 'user_usdSwapped_DESC_NULLS_LAST',
}

export type CurrentLiquidityPositionWhereInput = {
  AND?: InputMaybe<Array<CurrentLiquidityPositionWhereInput>>;
  OR?: InputMaybe<Array<CurrentLiquidityPositionWhereInput>>;
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
  lastUpdatedAtBlockTimestamp_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAtBlockTimestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAtBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAt_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export type CurrentLiquidityPositionsConnection = {
  __typename?: 'CurrentLiquidityPositionsConnection';
  edges: Array<CurrentLiquidityPositionEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type HistoricalPairMetrics = {
  __typename?: 'HistoricalPairMetrics';
  date: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  lastUpdatedAt: Scalars['BigInt']['output'];
  lastUpdatedAtBlockTimestamp: Scalars['BigInt']['output'];
  liquidityProviderCount: Scalars['BigInt']['output'];
  liquidityUSD?: Maybe<Scalars['BigDecimal']['output']>;
  lpTotalLocked: Scalars['BigDecimal']['output'];
  lpTotalSupply: Scalars['BigDecimal']['output'];
  pairAddress: Scalars['String']['output'];
  reserve0: Scalars['BigDecimal']['output'];
  reserve1: Scalars['BigDecimal']['output'];
  token0: Scalars['String']['output'];
  token0Price: Scalars['BigDecimal']['output'];
  token1: Scalars['String']['output'];
  token1Price: Scalars['BigDecimal']['output'];
  txCount24h: Scalars['BigInt']['output'];
  txCountTotal: Scalars['BigInt']['output'];
};

export type HistoricalPairMetricsConnection = {
  __typename?: 'HistoricalPairMetricsConnection';
  edges: Array<HistoricalPairMetricsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type HistoricalPairMetricsEdge = {
  __typename?: 'HistoricalPairMetricsEdge';
  cursor: Scalars['String']['output'];
  node: HistoricalPairMetrics;
};

export enum HistoricalPairMetricsOrderByInput {
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
  LastUpdatedAtBlockTimestampAsc = 'lastUpdatedAtBlockTimestamp_ASC',
  LastUpdatedAtBlockTimestampAscNullsFirst = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampAscNullsLast = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  LastUpdatedAtBlockTimestampDesc = 'lastUpdatedAtBlockTimestamp_DESC',
  LastUpdatedAtBlockTimestampDescNullsFirst = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampDescNullsLast = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  LastUpdatedAtAsc = 'lastUpdatedAt_ASC',
  LastUpdatedAtAscNullsFirst = 'lastUpdatedAt_ASC_NULLS_FIRST',
  LastUpdatedAtAscNullsLast = 'lastUpdatedAt_ASC_NULLS_LAST',
  LastUpdatedAtDesc = 'lastUpdatedAt_DESC',
  LastUpdatedAtDescNullsFirst = 'lastUpdatedAt_DESC_NULLS_FIRST',
  LastUpdatedAtDescNullsLast = 'lastUpdatedAt_DESC_NULLS_LAST',
  LiquidityProviderCountAsc = 'liquidityProviderCount_ASC',
  LiquidityProviderCountAscNullsFirst = 'liquidityProviderCount_ASC_NULLS_FIRST',
  LiquidityProviderCountAscNullsLast = 'liquidityProviderCount_ASC_NULLS_LAST',
  LiquidityProviderCountDesc = 'liquidityProviderCount_DESC',
  LiquidityProviderCountDescNullsFirst = 'liquidityProviderCount_DESC_NULLS_FIRST',
  LiquidityProviderCountDescNullsLast = 'liquidityProviderCount_DESC_NULLS_LAST',
  LiquidityUsdAsc = 'liquidityUSD_ASC',
  LiquidityUsdAscNullsFirst = 'liquidityUSD_ASC_NULLS_FIRST',
  LiquidityUsdAscNullsLast = 'liquidityUSD_ASC_NULLS_LAST',
  LiquidityUsdDesc = 'liquidityUSD_DESC',
  LiquidityUsdDescNullsFirst = 'liquidityUSD_DESC_NULLS_FIRST',
  LiquidityUsdDescNullsLast = 'liquidityUSD_DESC_NULLS_LAST',
  LpTotalLockedAsc = 'lpTotalLocked_ASC',
  LpTotalLockedAscNullsFirst = 'lpTotalLocked_ASC_NULLS_FIRST',
  LpTotalLockedAscNullsLast = 'lpTotalLocked_ASC_NULLS_LAST',
  LpTotalLockedDesc = 'lpTotalLocked_DESC',
  LpTotalLockedDescNullsFirst = 'lpTotalLocked_DESC_NULLS_FIRST',
  LpTotalLockedDescNullsLast = 'lpTotalLocked_DESC_NULLS_LAST',
  LpTotalSupplyAsc = 'lpTotalSupply_ASC',
  LpTotalSupplyAscNullsFirst = 'lpTotalSupply_ASC_NULLS_FIRST',
  LpTotalSupplyAscNullsLast = 'lpTotalSupply_ASC_NULLS_LAST',
  LpTotalSupplyDesc = 'lpTotalSupply_DESC',
  LpTotalSupplyDescNullsFirst = 'lpTotalSupply_DESC_NULLS_FIRST',
  LpTotalSupplyDescNullsLast = 'lpTotalSupply_DESC_NULLS_LAST',
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
  Token0PriceAsc = 'token0Price_ASC',
  Token0PriceAscNullsFirst = 'token0Price_ASC_NULLS_FIRST',
  Token0PriceAscNullsLast = 'token0Price_ASC_NULLS_LAST',
  Token0PriceDesc = 'token0Price_DESC',
  Token0PriceDescNullsFirst = 'token0Price_DESC_NULLS_FIRST',
  Token0PriceDescNullsLast = 'token0Price_DESC_NULLS_LAST',
  Token0Asc = 'token0_ASC',
  Token0AscNullsFirst = 'token0_ASC_NULLS_FIRST',
  Token0AscNullsLast = 'token0_ASC_NULLS_LAST',
  Token0Desc = 'token0_DESC',
  Token0DescNullsFirst = 'token0_DESC_NULLS_FIRST',
  Token0DescNullsLast = 'token0_DESC_NULLS_LAST',
  Token1PriceAsc = 'token1Price_ASC',
  Token1PriceAscNullsFirst = 'token1Price_ASC_NULLS_FIRST',
  Token1PriceAscNullsLast = 'token1Price_ASC_NULLS_LAST',
  Token1PriceDesc = 'token1Price_DESC',
  Token1PriceDescNullsFirst = 'token1Price_DESC_NULLS_FIRST',
  Token1PriceDescNullsLast = 'token1Price_DESC_NULLS_LAST',
  Token1Asc = 'token1_ASC',
  Token1AscNullsFirst = 'token1_ASC_NULLS_FIRST',
  Token1AscNullsLast = 'token1_ASC_NULLS_LAST',
  Token1Desc = 'token1_DESC',
  Token1DescNullsFirst = 'token1_DESC_NULLS_FIRST',
  Token1DescNullsLast = 'token1_DESC_NULLS_LAST',
  TxCount24hAsc = 'txCount24h_ASC',
  TxCount24hAscNullsFirst = 'txCount24h_ASC_NULLS_FIRST',
  TxCount24hAscNullsLast = 'txCount24h_ASC_NULLS_LAST',
  TxCount24hDesc = 'txCount24h_DESC',
  TxCount24hDescNullsFirst = 'txCount24h_DESC_NULLS_FIRST',
  TxCount24hDescNullsLast = 'txCount24h_DESC_NULLS_LAST',
  TxCountTotalAsc = 'txCountTotal_ASC',
  TxCountTotalAscNullsFirst = 'txCountTotal_ASC_NULLS_FIRST',
  TxCountTotalAscNullsLast = 'txCountTotal_ASC_NULLS_LAST',
  TxCountTotalDesc = 'txCountTotal_DESC',
  TxCountTotalDescNullsFirst = 'txCountTotal_DESC_NULLS_FIRST',
  TxCountTotalDescNullsLast = 'txCountTotal_DESC_NULLS_LAST',
}

export type HistoricalPairMetricsWhereInput = {
  AND?: InputMaybe<Array<HistoricalPairMetricsWhereInput>>;
  OR?: InputMaybe<Array<HistoricalPairMetricsWhereInput>>;
  date_eq?: InputMaybe<Scalars['BigInt']['input']>;
  date_gt?: InputMaybe<Scalars['BigInt']['input']>;
  date_gte?: InputMaybe<Scalars['BigInt']['input']>;
  date_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  date_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  date_lt?: InputMaybe<Scalars['BigInt']['input']>;
  date_lte?: InputMaybe<Scalars['BigInt']['input']>;
  date_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  date_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  lastUpdatedAtBlockTimestamp_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAtBlockTimestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAtBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAt_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityProviderCount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityProviderCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  liquidityUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  liquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lpTotalLocked_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalLocked_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalLocked_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalLocked_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lpTotalLocked_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lpTotalLocked_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalLocked_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalLocked_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalLocked_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lpTotalSupply_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalSupply_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalSupply_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lpTotalSupply_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lpTotalSupply_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalSupply_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalSupply_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  token0Price_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0Price_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  token0Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  token0Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token0_contains?: InputMaybe<Scalars['String']['input']>;
  token0_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  token0_endsWith?: InputMaybe<Scalars['String']['input']>;
  token0_eq?: InputMaybe<Scalars['String']['input']>;
  token0_gt?: InputMaybe<Scalars['String']['input']>;
  token0_gte?: InputMaybe<Scalars['String']['input']>;
  token0_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token0_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  token0_lt?: InputMaybe<Scalars['String']['input']>;
  token0_lte?: InputMaybe<Scalars['String']['input']>;
  token0_not_contains?: InputMaybe<Scalars['String']['input']>;
  token0_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  token0_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  token0_not_eq?: InputMaybe<Scalars['String']['input']>;
  token0_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token0_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  token0_startsWith?: InputMaybe<Scalars['String']['input']>;
  token1Price_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1Price_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  token1Price_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  token1Price_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  token1_contains?: InputMaybe<Scalars['String']['input']>;
  token1_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  token1_endsWith?: InputMaybe<Scalars['String']['input']>;
  token1_eq?: InputMaybe<Scalars['String']['input']>;
  token1_gt?: InputMaybe<Scalars['String']['input']>;
  token1_gte?: InputMaybe<Scalars['String']['input']>;
  token1_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token1_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  token1_lt?: InputMaybe<Scalars['String']['input']>;
  token1_lte?: InputMaybe<Scalars['String']['input']>;
  token1_not_contains?: InputMaybe<Scalars['String']['input']>;
  token1_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  token1_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  token1_not_eq?: InputMaybe<Scalars['String']['input']>;
  token1_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token1_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  token1_startsWith?: InputMaybe<Scalars['String']['input']>;
  txCount24h_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  txCount24h_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCountTotal_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCountTotal_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCountTotal_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCountTotal_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCountTotal_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  txCountTotal_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCountTotal_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCountTotal_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCountTotal_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type HistoricalTokenMetrics = {
  __typename?: 'HistoricalTokenMetrics';
  fdv?: Maybe<Scalars['BigDecimal']['output']>;
  holders: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  lastUpdatedAt: Scalars['BigInt']['output'];
  lastUpdatedAtBlockTimestamp: Scalars['BigInt']['output'];
  marketCapUSD: Scalars['BigDecimal']['output'];
  price24hDelta?: Maybe<Scalars['BigDecimal']['output']>;
  priceETH?: Maybe<Scalars['BigDecimal']['output']>;
  priceUSD?: Maybe<Scalars['BigDecimal']['output']>;
  timestamp: Scalars['BigInt']['output'];
  tokenAddress: Scalars['String']['output'];
  totalLiquidityAllPairs: Scalars['BigDecimal']['output'];
  totalLiquidityAllPairsUSD: Scalars['BigDecimal']['output'];
  tradeVolume24h: Scalars['BigDecimal']['output'];
  tradeVolumeETH24h: Scalars['BigDecimal']['output'];
  tradeVolumeUSD24h: Scalars['BigDecimal']['output'];
  txCount24h: Scalars['BigInt']['output'];
  txCountTotal: Scalars['BigInt']['output'];
};

export type HistoricalTokenMetricsConnection = {
  __typename?: 'HistoricalTokenMetricsConnection';
  edges: Array<HistoricalTokenMetricsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type HistoricalTokenMetricsEdge = {
  __typename?: 'HistoricalTokenMetricsEdge';
  cursor: Scalars['String']['output'];
  node: HistoricalTokenMetrics;
};

export enum HistoricalTokenMetricsOrderByInput {
  FdvAsc = 'fdv_ASC',
  FdvAscNullsFirst = 'fdv_ASC_NULLS_FIRST',
  FdvAscNullsLast = 'fdv_ASC_NULLS_LAST',
  FdvDesc = 'fdv_DESC',
  FdvDescNullsFirst = 'fdv_DESC_NULLS_FIRST',
  FdvDescNullsLast = 'fdv_DESC_NULLS_LAST',
  HoldersAsc = 'holders_ASC',
  HoldersAscNullsFirst = 'holders_ASC_NULLS_FIRST',
  HoldersAscNullsLast = 'holders_ASC_NULLS_LAST',
  HoldersDesc = 'holders_DESC',
  HoldersDescNullsFirst = 'holders_DESC_NULLS_FIRST',
  HoldersDescNullsLast = 'holders_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  LastUpdatedAtBlockTimestampAsc = 'lastUpdatedAtBlockTimestamp_ASC',
  LastUpdatedAtBlockTimestampAscNullsFirst = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampAscNullsLast = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  LastUpdatedAtBlockTimestampDesc = 'lastUpdatedAtBlockTimestamp_DESC',
  LastUpdatedAtBlockTimestampDescNullsFirst = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampDescNullsLast = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  LastUpdatedAtAsc = 'lastUpdatedAt_ASC',
  LastUpdatedAtAscNullsFirst = 'lastUpdatedAt_ASC_NULLS_FIRST',
  LastUpdatedAtAscNullsLast = 'lastUpdatedAt_ASC_NULLS_LAST',
  LastUpdatedAtDesc = 'lastUpdatedAt_DESC',
  LastUpdatedAtDescNullsFirst = 'lastUpdatedAt_DESC_NULLS_FIRST',
  LastUpdatedAtDescNullsLast = 'lastUpdatedAt_DESC_NULLS_LAST',
  MarketCapUsdAsc = 'marketCapUSD_ASC',
  MarketCapUsdAscNullsFirst = 'marketCapUSD_ASC_NULLS_FIRST',
  MarketCapUsdAscNullsLast = 'marketCapUSD_ASC_NULLS_LAST',
  MarketCapUsdDesc = 'marketCapUSD_DESC',
  MarketCapUsdDescNullsFirst = 'marketCapUSD_DESC_NULLS_FIRST',
  MarketCapUsdDescNullsLast = 'marketCapUSD_DESC_NULLS_LAST',
  Price24hDeltaAsc = 'price24hDelta_ASC',
  Price24hDeltaAscNullsFirst = 'price24hDelta_ASC_NULLS_FIRST',
  Price24hDeltaAscNullsLast = 'price24hDelta_ASC_NULLS_LAST',
  Price24hDeltaDesc = 'price24hDelta_DESC',
  Price24hDeltaDescNullsFirst = 'price24hDelta_DESC_NULLS_FIRST',
  Price24hDeltaDescNullsLast = 'price24hDelta_DESC_NULLS_LAST',
  PriceEthAsc = 'priceETH_ASC',
  PriceEthAscNullsFirst = 'priceETH_ASC_NULLS_FIRST',
  PriceEthAscNullsLast = 'priceETH_ASC_NULLS_LAST',
  PriceEthDesc = 'priceETH_DESC',
  PriceEthDescNullsFirst = 'priceETH_DESC_NULLS_FIRST',
  PriceEthDescNullsLast = 'priceETH_DESC_NULLS_LAST',
  PriceUsdAsc = 'priceUSD_ASC',
  PriceUsdAscNullsFirst = 'priceUSD_ASC_NULLS_FIRST',
  PriceUsdAscNullsLast = 'priceUSD_ASC_NULLS_LAST',
  PriceUsdDesc = 'priceUSD_DESC',
  PriceUsdDescNullsFirst = 'priceUSD_DESC_NULLS_FIRST',
  PriceUsdDescNullsLast = 'priceUSD_DESC_NULLS_LAST',
  TimestampAsc = 'timestamp_ASC',
  TimestampAscNullsFirst = 'timestamp_ASC_NULLS_FIRST',
  TimestampAscNullsLast = 'timestamp_ASC_NULLS_LAST',
  TimestampDesc = 'timestamp_DESC',
  TimestampDescNullsFirst = 'timestamp_DESC_NULLS_FIRST',
  TimestampDescNullsLast = 'timestamp_DESC_NULLS_LAST',
  TokenAddressAsc = 'tokenAddress_ASC',
  TokenAddressAscNullsFirst = 'tokenAddress_ASC_NULLS_FIRST',
  TokenAddressAscNullsLast = 'tokenAddress_ASC_NULLS_LAST',
  TokenAddressDesc = 'tokenAddress_DESC',
  TokenAddressDescNullsFirst = 'tokenAddress_DESC_NULLS_FIRST',
  TokenAddressDescNullsLast = 'tokenAddress_DESC_NULLS_LAST',
  TotalLiquidityAllPairsUsdAsc = 'totalLiquidityAllPairsUSD_ASC',
  TotalLiquidityAllPairsUsdAscNullsFirst = 'totalLiquidityAllPairsUSD_ASC_NULLS_FIRST',
  TotalLiquidityAllPairsUsdAscNullsLast = 'totalLiquidityAllPairsUSD_ASC_NULLS_LAST',
  TotalLiquidityAllPairsUsdDesc = 'totalLiquidityAllPairsUSD_DESC',
  TotalLiquidityAllPairsUsdDescNullsFirst = 'totalLiquidityAllPairsUSD_DESC_NULLS_FIRST',
  TotalLiquidityAllPairsUsdDescNullsLast = 'totalLiquidityAllPairsUSD_DESC_NULLS_LAST',
  TotalLiquidityAllPairsAsc = 'totalLiquidityAllPairs_ASC',
  TotalLiquidityAllPairsAscNullsFirst = 'totalLiquidityAllPairs_ASC_NULLS_FIRST',
  TotalLiquidityAllPairsAscNullsLast = 'totalLiquidityAllPairs_ASC_NULLS_LAST',
  TotalLiquidityAllPairsDesc = 'totalLiquidityAllPairs_DESC',
  TotalLiquidityAllPairsDescNullsFirst = 'totalLiquidityAllPairs_DESC_NULLS_FIRST',
  TotalLiquidityAllPairsDescNullsLast = 'totalLiquidityAllPairs_DESC_NULLS_LAST',
  TradeVolume24hAsc = 'tradeVolume24h_ASC',
  TradeVolume24hAscNullsFirst = 'tradeVolume24h_ASC_NULLS_FIRST',
  TradeVolume24hAscNullsLast = 'tradeVolume24h_ASC_NULLS_LAST',
  TradeVolume24hDesc = 'tradeVolume24h_DESC',
  TradeVolume24hDescNullsFirst = 'tradeVolume24h_DESC_NULLS_FIRST',
  TradeVolume24hDescNullsLast = 'tradeVolume24h_DESC_NULLS_LAST',
  TradeVolumeEth24hAsc = 'tradeVolumeETH24h_ASC',
  TradeVolumeEth24hAscNullsFirst = 'tradeVolumeETH24h_ASC_NULLS_FIRST',
  TradeVolumeEth24hAscNullsLast = 'tradeVolumeETH24h_ASC_NULLS_LAST',
  TradeVolumeEth24hDesc = 'tradeVolumeETH24h_DESC',
  TradeVolumeEth24hDescNullsFirst = 'tradeVolumeETH24h_DESC_NULLS_FIRST',
  TradeVolumeEth24hDescNullsLast = 'tradeVolumeETH24h_DESC_NULLS_LAST',
  TradeVolumeUsd24hAsc = 'tradeVolumeUSD24h_ASC',
  TradeVolumeUsd24hAscNullsFirst = 'tradeVolumeUSD24h_ASC_NULLS_FIRST',
  TradeVolumeUsd24hAscNullsLast = 'tradeVolumeUSD24h_ASC_NULLS_LAST',
  TradeVolumeUsd24hDesc = 'tradeVolumeUSD24h_DESC',
  TradeVolumeUsd24hDescNullsFirst = 'tradeVolumeUSD24h_DESC_NULLS_FIRST',
  TradeVolumeUsd24hDescNullsLast = 'tradeVolumeUSD24h_DESC_NULLS_LAST',
  TxCount24hAsc = 'txCount24h_ASC',
  TxCount24hAscNullsFirst = 'txCount24h_ASC_NULLS_FIRST',
  TxCount24hAscNullsLast = 'txCount24h_ASC_NULLS_LAST',
  TxCount24hDesc = 'txCount24h_DESC',
  TxCount24hDescNullsFirst = 'txCount24h_DESC_NULLS_FIRST',
  TxCount24hDescNullsLast = 'txCount24h_DESC_NULLS_LAST',
  TxCountTotalAsc = 'txCountTotal_ASC',
  TxCountTotalAscNullsFirst = 'txCountTotal_ASC_NULLS_FIRST',
  TxCountTotalAscNullsLast = 'txCountTotal_ASC_NULLS_LAST',
  TxCountTotalDesc = 'txCountTotal_DESC',
  TxCountTotalDescNullsFirst = 'txCountTotal_DESC_NULLS_FIRST',
  TxCountTotalDescNullsLast = 'txCountTotal_DESC_NULLS_LAST',
}

export type HistoricalTokenMetricsWhereInput = {
  AND?: InputMaybe<Array<HistoricalTokenMetricsWhereInput>>;
  OR?: InputMaybe<Array<HistoricalTokenMetricsWhereInput>>;
  fdv_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  fdv_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fdv_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fdv_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fdv_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  fdv_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fdv_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fdv_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  fdv_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  holders_eq?: InputMaybe<Scalars['BigInt']['input']>;
  holders_gt?: InputMaybe<Scalars['BigInt']['input']>;
  holders_gte?: InputMaybe<Scalars['BigInt']['input']>;
  holders_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  holders_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  holders_lt?: InputMaybe<Scalars['BigInt']['input']>;
  holders_lte?: InputMaybe<Scalars['BigInt']['input']>;
  holders_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  holders_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  lastUpdatedAtBlockTimestamp_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAtBlockTimestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAtBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAt_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marketCapUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketCapUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketCapUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketCapUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  marketCapUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  marketCapUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketCapUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketCapUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketCapUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price24hDelta_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  price24hDelta_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price24hDelta_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price24hDelta_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price24hDelta_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  price24hDelta_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price24hDelta_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price24hDelta_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  price24hDelta_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  priceETH_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceETH_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceETH_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceETH_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  priceETH_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  priceETH_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceETH_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceETH_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  priceUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  priceUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  priceUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  timestamp_eq?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  totalLiquidityAllPairsUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairsUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairsUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairsUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >;
  totalLiquidityAllPairsUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalLiquidityAllPairsUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairsUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairsUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairsUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >;
  totalLiquidityAllPairs_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairs_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairs_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairs_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidityAllPairs_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalLiquidityAllPairs_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairs_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairs_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairs_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >;
  tradeVolume24h_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolume24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tradeVolume24h_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolumeETH24h_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolumeETH24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tradeVolumeETH24h_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolumeUSD24h_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolumeUSD24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tradeVolumeUSD24h_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  txCount24h_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  txCount24h_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCountTotal_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCountTotal_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCountTotal_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCountTotal_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCountTotal_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  txCountTotal_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCountTotal_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCountTotal_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCountTotal_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type Holder = {
  __typename?: 'Holder';
  balance: Scalars['BigDecimal']['output'];
  id: Scalars['String']['output'];
  lastUpdatedAt: Scalars['BigInt']['output'];
  lastUpdatedAtBlockTimestamp: Scalars['BigInt']['output'];
  tokenId: Scalars['String']['output'];
  userId: Scalars['String']['output'];
};

export type HolderEdge = {
  __typename?: 'HolderEdge';
  cursor: Scalars['String']['output'];
  node: Holder;
};

export enum HolderOrderByInput {
  BalanceAsc = 'balance_ASC',
  BalanceAscNullsFirst = 'balance_ASC_NULLS_FIRST',
  BalanceAscNullsLast = 'balance_ASC_NULLS_LAST',
  BalanceDesc = 'balance_DESC',
  BalanceDescNullsFirst = 'balance_DESC_NULLS_FIRST',
  BalanceDescNullsLast = 'balance_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  LastUpdatedAtBlockTimestampAsc = 'lastUpdatedAtBlockTimestamp_ASC',
  LastUpdatedAtBlockTimestampAscNullsFirst = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampAscNullsLast = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  LastUpdatedAtBlockTimestampDesc = 'lastUpdatedAtBlockTimestamp_DESC',
  LastUpdatedAtBlockTimestampDescNullsFirst = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampDescNullsLast = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  LastUpdatedAtAsc = 'lastUpdatedAt_ASC',
  LastUpdatedAtAscNullsFirst = 'lastUpdatedAt_ASC_NULLS_FIRST',
  LastUpdatedAtAscNullsLast = 'lastUpdatedAt_ASC_NULLS_LAST',
  LastUpdatedAtDesc = 'lastUpdatedAt_DESC',
  LastUpdatedAtDescNullsFirst = 'lastUpdatedAt_DESC_NULLS_FIRST',
  LastUpdatedAtDescNullsLast = 'lastUpdatedAt_DESC_NULLS_LAST',
  TokenIdAsc = 'tokenId_ASC',
  TokenIdAscNullsFirst = 'tokenId_ASC_NULLS_FIRST',
  TokenIdAscNullsLast = 'tokenId_ASC_NULLS_LAST',
  TokenIdDesc = 'tokenId_DESC',
  TokenIdDescNullsFirst = 'tokenId_DESC_NULLS_FIRST',
  TokenIdDescNullsLast = 'tokenId_DESC_NULLS_LAST',
  UserIdAsc = 'userId_ASC',
  UserIdAscNullsFirst = 'userId_ASC_NULLS_FIRST',
  UserIdAscNullsLast = 'userId_ASC_NULLS_LAST',
  UserIdDesc = 'userId_DESC',
  UserIdDescNullsFirst = 'userId_DESC_NULLS_FIRST',
  UserIdDescNullsLast = 'userId_DESC_NULLS_LAST',
}

export type HolderWhereInput = {
  AND?: InputMaybe<Array<HolderWhereInput>>;
  OR?: InputMaybe<Array<HolderWhereInput>>;
  balance_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  balance_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  balance_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  balance_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  lastUpdatedAtBlockTimestamp_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAtBlockTimestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAtBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAt_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  tokenId_contains?: InputMaybe<Scalars['String']['input']>;
  tokenId_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  tokenId_endsWith?: InputMaybe<Scalars['String']['input']>;
  tokenId_eq?: InputMaybe<Scalars['String']['input']>;
  tokenId_gt?: InputMaybe<Scalars['String']['input']>;
  tokenId_gte?: InputMaybe<Scalars['String']['input']>;
  tokenId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tokenId_lt?: InputMaybe<Scalars['String']['input']>;
  tokenId_lte?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_eq?: InputMaybe<Scalars['String']['input']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenId_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  tokenId_startsWith?: InputMaybe<Scalars['String']['input']>;
  userId_contains?: InputMaybe<Scalars['String']['input']>;
  userId_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  userId_endsWith?: InputMaybe<Scalars['String']['input']>;
  userId_eq?: InputMaybe<Scalars['String']['input']>;
  userId_gt?: InputMaybe<Scalars['String']['input']>;
  userId_gte?: InputMaybe<Scalars['String']['input']>;
  userId_in?: InputMaybe<Array<Scalars['String']['input']>>;
  userId_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  userId_lt?: InputMaybe<Scalars['String']['input']>;
  userId_lte?: InputMaybe<Scalars['String']['input']>;
  userId_not_contains?: InputMaybe<Scalars['String']['input']>;
  userId_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  userId_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  userId_not_eq?: InputMaybe<Scalars['String']['input']>;
  userId_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  userId_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  userId_startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type HoldersConnection = {
  __typename?: 'HoldersConnection';
  edges: Array<HolderEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LiquidityPositionHistoriesConnection = {
  __typename?: 'LiquidityPositionHistoriesConnection';
  edges: Array<LiquidityPositionHistoryEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type LiquidityPositionHistory = {
  __typename?: 'LiquidityPositionHistory';
  block: Scalars['Int']['output'];
  id: Scalars['String']['output'];
  lastUpdatedAt: Scalars['BigInt']['output'];
  lastUpdatedAtBlockTimestamp: Scalars['BigInt']['output'];
  liquidityPosition: CurrentLiquidityPosition;
  liquidityTokenBalance: Scalars['BigDecimal']['output'];
  liquidityTokenTotalSupply: Scalars['BigDecimal']['output'];
  liquidityUSD?: Maybe<Scalars['BigDecimal']['output']>;
  pair: Pair;
  reserve0: Scalars['BigDecimal']['output'];
  reserve1: Scalars['BigDecimal']['output'];
  timestamp: Scalars['BigInt']['output'];
  token0PriceUSD?: Maybe<Scalars['BigDecimal']['output']>;
  token1PriceUSD?: Maybe<Scalars['BigDecimal']['output']>;
  user: User;
};

export type LiquidityPositionHistoryEdge = {
  __typename?: 'LiquidityPositionHistoryEdge';
  cursor: Scalars['String']['output'];
  node: LiquidityPositionHistory;
};

export enum LiquidityPositionHistoryOrderByInput {
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
  LastUpdatedAtBlockTimestampAsc = 'lastUpdatedAtBlockTimestamp_ASC',
  LastUpdatedAtBlockTimestampAscNullsFirst = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampAscNullsLast = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  LastUpdatedAtBlockTimestampDesc = 'lastUpdatedAtBlockTimestamp_DESC',
  LastUpdatedAtBlockTimestampDescNullsFirst = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampDescNullsLast = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  LastUpdatedAtAsc = 'lastUpdatedAt_ASC',
  LastUpdatedAtAscNullsFirst = 'lastUpdatedAt_ASC_NULLS_FIRST',
  LastUpdatedAtAscNullsLast = 'lastUpdatedAt_ASC_NULLS_LAST',
  LastUpdatedAtDesc = 'lastUpdatedAt_DESC',
  LastUpdatedAtDescNullsFirst = 'lastUpdatedAt_DESC_NULLS_FIRST',
  LastUpdatedAtDescNullsLast = 'lastUpdatedAt_DESC_NULLS_LAST',
  LiquidityPositionIdAsc = 'liquidityPosition_id_ASC',
  LiquidityPositionIdAscNullsFirst = 'liquidityPosition_id_ASC_NULLS_FIRST',
  LiquidityPositionIdAscNullsLast = 'liquidityPosition_id_ASC_NULLS_LAST',
  LiquidityPositionIdDesc = 'liquidityPosition_id_DESC',
  LiquidityPositionIdDescNullsFirst = 'liquidityPosition_id_DESC_NULLS_FIRST',
  LiquidityPositionIdDescNullsLast = 'liquidityPosition_id_DESC_NULLS_LAST',
  LiquidityPositionLastUpdatedAtBlockTimestampAsc = 'liquidityPosition_lastUpdatedAtBlockTimestamp_ASC',
  LiquidityPositionLastUpdatedAtBlockTimestampAscNullsFirst = 'liquidityPosition_lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  LiquidityPositionLastUpdatedAtBlockTimestampAscNullsLast = 'liquidityPosition_lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  LiquidityPositionLastUpdatedAtBlockTimestampDesc = 'liquidityPosition_lastUpdatedAtBlockTimestamp_DESC',
  LiquidityPositionLastUpdatedAtBlockTimestampDescNullsFirst = 'liquidityPosition_lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  LiquidityPositionLastUpdatedAtBlockTimestampDescNullsLast = 'liquidityPosition_lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  LiquidityPositionLastUpdatedAtAsc = 'liquidityPosition_lastUpdatedAt_ASC',
  LiquidityPositionLastUpdatedAtAscNullsFirst = 'liquidityPosition_lastUpdatedAt_ASC_NULLS_FIRST',
  LiquidityPositionLastUpdatedAtAscNullsLast = 'liquidityPosition_lastUpdatedAt_ASC_NULLS_LAST',
  LiquidityPositionLastUpdatedAtDesc = 'liquidityPosition_lastUpdatedAt_DESC',
  LiquidityPositionLastUpdatedAtDescNullsFirst = 'liquidityPosition_lastUpdatedAt_DESC_NULLS_FIRST',
  LiquidityPositionLastUpdatedAtDescNullsLast = 'liquidityPosition_lastUpdatedAt_DESC_NULLS_LAST',
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
  LiquidityUsdAsc = 'liquidityUSD_ASC',
  LiquidityUsdAscNullsFirst = 'liquidityUSD_ASC_NULLS_FIRST',
  LiquidityUsdAscNullsLast = 'liquidityUSD_ASC_NULLS_LAST',
  LiquidityUsdDesc = 'liquidityUSD_DESC',
  LiquidityUsdDescNullsFirst = 'liquidityUSD_DESC_NULLS_FIRST',
  LiquidityUsdDescNullsLast = 'liquidityUSD_DESC_NULLS_LAST',
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
  PairFactoryAddressAsc = 'pair_factoryAddress_ASC',
  PairFactoryAddressAscNullsFirst = 'pair_factoryAddress_ASC_NULLS_FIRST',
  PairFactoryAddressAscNullsLast = 'pair_factoryAddress_ASC_NULLS_LAST',
  PairFactoryAddressDesc = 'pair_factoryAddress_DESC',
  PairFactoryAddressDescNullsFirst = 'pair_factoryAddress_DESC_NULLS_FIRST',
  PairFactoryAddressDescNullsLast = 'pair_factoryAddress_DESC_NULLS_LAST',
  PairFees24hDeltaAsc = 'pair_fees24hDelta_ASC',
  PairFees24hDeltaAscNullsFirst = 'pair_fees24hDelta_ASC_NULLS_FIRST',
  PairFees24hDeltaAscNullsLast = 'pair_fees24hDelta_ASC_NULLS_LAST',
  PairFees24hDeltaDesc = 'pair_fees24hDelta_DESC',
  PairFees24hDeltaDescNullsFirst = 'pair_fees24hDelta_DESC_NULLS_FIRST',
  PairFees24hDeltaDescNullsLast = 'pair_fees24hDelta_DESC_NULLS_LAST',
  PairFees24hAsc = 'pair_fees24h_ASC',
  PairFees24hAscNullsFirst = 'pair_fees24h_ASC_NULLS_FIRST',
  PairFees24hAscNullsLast = 'pair_fees24h_ASC_NULLS_LAST',
  PairFees24hDesc = 'pair_fees24h_DESC',
  PairFees24hDescNullsFirst = 'pair_fees24h_DESC_NULLS_FIRST',
  PairFees24hDescNullsLast = 'pair_fees24h_DESC_NULLS_LAST',
  PairFeesEth24hAsc = 'pair_feesETH24h_ASC',
  PairFeesEth24hAscNullsFirst = 'pair_feesETH24h_ASC_NULLS_FIRST',
  PairFeesEth24hAscNullsLast = 'pair_feesETH24h_ASC_NULLS_LAST',
  PairFeesEth24hDesc = 'pair_feesETH24h_DESC',
  PairFeesEth24hDescNullsFirst = 'pair_feesETH24h_DESC_NULLS_FIRST',
  PairFeesEth24hDescNullsLast = 'pair_feesETH24h_DESC_NULLS_LAST',
  PairFeesUsd24hAsc = 'pair_feesUSD24h_ASC',
  PairFeesUsd24hAscNullsFirst = 'pair_feesUSD24h_ASC_NULLS_FIRST',
  PairFeesUsd24hAscNullsLast = 'pair_feesUSD24h_ASC_NULLS_LAST',
  PairFeesUsd24hDesc = 'pair_feesUSD24h_DESC',
  PairFeesUsd24hDescNullsFirst = 'pair_feesUSD24h_DESC_NULLS_FIRST',
  PairFeesUsd24hDescNullsLast = 'pair_feesUSD24h_DESC_NULLS_LAST',
  PairIdAsc = 'pair_id_ASC',
  PairIdAscNullsFirst = 'pair_id_ASC_NULLS_FIRST',
  PairIdAscNullsLast = 'pair_id_ASC_NULLS_LAST',
  PairIdDesc = 'pair_id_DESC',
  PairIdDescNullsFirst = 'pair_id_DESC_NULLS_FIRST',
  PairIdDescNullsLast = 'pair_id_DESC_NULLS_LAST',
  PairLastUpdatedAtBlockTimestampAsc = 'pair_lastUpdatedAtBlockTimestamp_ASC',
  PairLastUpdatedAtBlockTimestampAscNullsFirst = 'pair_lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  PairLastUpdatedAtBlockTimestampAscNullsLast = 'pair_lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  PairLastUpdatedAtBlockTimestampDesc = 'pair_lastUpdatedAtBlockTimestamp_DESC',
  PairLastUpdatedAtBlockTimestampDescNullsFirst = 'pair_lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  PairLastUpdatedAtBlockTimestampDescNullsLast = 'pair_lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  PairLastUpdatedAtAsc = 'pair_lastUpdatedAt_ASC',
  PairLastUpdatedAtAscNullsFirst = 'pair_lastUpdatedAt_ASC_NULLS_FIRST',
  PairLastUpdatedAtAscNullsLast = 'pair_lastUpdatedAt_ASC_NULLS_LAST',
  PairLastUpdatedAtDesc = 'pair_lastUpdatedAt_DESC',
  PairLastUpdatedAtDescNullsFirst = 'pair_lastUpdatedAt_DESC_NULLS_FIRST',
  PairLastUpdatedAtDescNullsLast = 'pair_lastUpdatedAt_DESC_NULLS_LAST',
  PairLiquidity24hDeltaAsc = 'pair_liquidity24hDelta_ASC',
  PairLiquidity24hDeltaAscNullsFirst = 'pair_liquidity24hDelta_ASC_NULLS_FIRST',
  PairLiquidity24hDeltaAscNullsLast = 'pair_liquidity24hDelta_ASC_NULLS_LAST',
  PairLiquidity24hDeltaDesc = 'pair_liquidity24hDelta_DESC',
  PairLiquidity24hDeltaDescNullsFirst = 'pair_liquidity24hDelta_DESC_NULLS_FIRST',
  PairLiquidity24hDeltaDescNullsLast = 'pair_liquidity24hDelta_DESC_NULLS_LAST',
  PairLiquidityProviderCountAsc = 'pair_liquidityProviderCount_ASC',
  PairLiquidityProviderCountAscNullsFirst = 'pair_liquidityProviderCount_ASC_NULLS_FIRST',
  PairLiquidityProviderCountAscNullsLast = 'pair_liquidityProviderCount_ASC_NULLS_LAST',
  PairLiquidityProviderCountDesc = 'pair_liquidityProviderCount_DESC',
  PairLiquidityProviderCountDescNullsFirst = 'pair_liquidityProviderCount_DESC_NULLS_FIRST',
  PairLiquidityProviderCountDescNullsLast = 'pair_liquidityProviderCount_DESC_NULLS_LAST',
  PairLiquidityUsdAsc = 'pair_liquidityUSD_ASC',
  PairLiquidityUsdAscNullsFirst = 'pair_liquidityUSD_ASC_NULLS_FIRST',
  PairLiquidityUsdAscNullsLast = 'pair_liquidityUSD_ASC_NULLS_LAST',
  PairLiquidityUsdDesc = 'pair_liquidityUSD_DESC',
  PairLiquidityUsdDescNullsFirst = 'pair_liquidityUSD_DESC_NULLS_FIRST',
  PairLiquidityUsdDescNullsLast = 'pair_liquidityUSD_DESC_NULLS_LAST',
  PairLpDecimalsAsc = 'pair_lpDecimals_ASC',
  PairLpDecimalsAscNullsFirst = 'pair_lpDecimals_ASC_NULLS_FIRST',
  PairLpDecimalsAscNullsLast = 'pair_lpDecimals_ASC_NULLS_LAST',
  PairLpDecimalsDesc = 'pair_lpDecimals_DESC',
  PairLpDecimalsDescNullsFirst = 'pair_lpDecimals_DESC_NULLS_FIRST',
  PairLpDecimalsDescNullsLast = 'pair_lpDecimals_DESC_NULLS_LAST',
  PairLpTotalLockedAsc = 'pair_lpTotalLocked_ASC',
  PairLpTotalLockedAscNullsFirst = 'pair_lpTotalLocked_ASC_NULLS_FIRST',
  PairLpTotalLockedAscNullsLast = 'pair_lpTotalLocked_ASC_NULLS_LAST',
  PairLpTotalLockedDesc = 'pair_lpTotalLocked_DESC',
  PairLpTotalLockedDescNullsFirst = 'pair_lpTotalLocked_DESC_NULLS_FIRST',
  PairLpTotalLockedDescNullsLast = 'pair_lpTotalLocked_DESC_NULLS_LAST',
  PairLpTotalSupplyAsc = 'pair_lpTotalSupply_ASC',
  PairLpTotalSupplyAscNullsFirst = 'pair_lpTotalSupply_ASC_NULLS_FIRST',
  PairLpTotalSupplyAscNullsLast = 'pair_lpTotalSupply_ASC_NULLS_LAST',
  PairLpTotalSupplyDesc = 'pair_lpTotalSupply_DESC',
  PairLpTotalSupplyDescNullsFirst = 'pair_lpTotalSupply_DESC_NULLS_FIRST',
  PairLpTotalSupplyDescNullsLast = 'pair_lpTotalSupply_DESC_NULLS_LAST',
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
  PairToken0IdAsc = 'pair_token0Id_ASC',
  PairToken0IdAscNullsFirst = 'pair_token0Id_ASC_NULLS_FIRST',
  PairToken0IdAscNullsLast = 'pair_token0Id_ASC_NULLS_LAST',
  PairToken0IdDesc = 'pair_token0Id_DESC',
  PairToken0IdDescNullsFirst = 'pair_token0Id_DESC_NULLS_FIRST',
  PairToken0IdDescNullsLast = 'pair_token0Id_DESC_NULLS_LAST',
  PairToken0PriceAsc = 'pair_token0Price_ASC',
  PairToken0PriceAscNullsFirst = 'pair_token0Price_ASC_NULLS_FIRST',
  PairToken0PriceAscNullsLast = 'pair_token0Price_ASC_NULLS_LAST',
  PairToken0PriceDesc = 'pair_token0Price_DESC',
  PairToken0PriceDescNullsFirst = 'pair_token0Price_DESC_NULLS_FIRST',
  PairToken0PriceDescNullsLast = 'pair_token0Price_DESC_NULLS_LAST',
  PairToken1IdAsc = 'pair_token1Id_ASC',
  PairToken1IdAscNullsFirst = 'pair_token1Id_ASC_NULLS_FIRST',
  PairToken1IdAscNullsLast = 'pair_token1Id_ASC_NULLS_LAST',
  PairToken1IdDesc = 'pair_token1Id_DESC',
  PairToken1IdDescNullsFirst = 'pair_token1Id_DESC_NULLS_FIRST',
  PairToken1IdDescNullsLast = 'pair_token1Id_DESC_NULLS_LAST',
  PairToken1PriceAsc = 'pair_token1Price_ASC',
  PairToken1PriceAscNullsFirst = 'pair_token1Price_ASC_NULLS_FIRST',
  PairToken1PriceAscNullsLast = 'pair_token1Price_ASC_NULLS_LAST',
  PairToken1PriceDesc = 'pair_token1Price_DESC',
  PairToken1PriceDescNullsFirst = 'pair_token1Price_DESC_NULLS_FIRST',
  PairToken1PriceDescNullsLast = 'pair_token1Price_DESC_NULLS_LAST',
  PairTradeVolume24hDeltaAsc = 'pair_tradeVolume24hDelta_ASC',
  PairTradeVolume24hDeltaAscNullsFirst = 'pair_tradeVolume24hDelta_ASC_NULLS_FIRST',
  PairTradeVolume24hDeltaAscNullsLast = 'pair_tradeVolume24hDelta_ASC_NULLS_LAST',
  PairTradeVolume24hDeltaDesc = 'pair_tradeVolume24hDelta_DESC',
  PairTradeVolume24hDeltaDescNullsFirst = 'pair_tradeVolume24hDelta_DESC_NULLS_FIRST',
  PairTradeVolume24hDeltaDescNullsLast = 'pair_tradeVolume24hDelta_DESC_NULLS_LAST',
  PairTradeVolume24hAsc = 'pair_tradeVolume24h_ASC',
  PairTradeVolume24hAscNullsFirst = 'pair_tradeVolume24h_ASC_NULLS_FIRST',
  PairTradeVolume24hAscNullsLast = 'pair_tradeVolume24h_ASC_NULLS_LAST',
  PairTradeVolume24hDesc = 'pair_tradeVolume24h_DESC',
  PairTradeVolume24hDescNullsFirst = 'pair_tradeVolume24h_DESC_NULLS_FIRST',
  PairTradeVolume24hDescNullsLast = 'pair_tradeVolume24h_DESC_NULLS_LAST',
  PairTradeVolumeEth24hAsc = 'pair_tradeVolumeETH24h_ASC',
  PairTradeVolumeEth24hAscNullsFirst = 'pair_tradeVolumeETH24h_ASC_NULLS_FIRST',
  PairTradeVolumeEth24hAscNullsLast = 'pair_tradeVolumeETH24h_ASC_NULLS_LAST',
  PairTradeVolumeEth24hDesc = 'pair_tradeVolumeETH24h_DESC',
  PairTradeVolumeEth24hDescNullsFirst = 'pair_tradeVolumeETH24h_DESC_NULLS_FIRST',
  PairTradeVolumeEth24hDescNullsLast = 'pair_tradeVolumeETH24h_DESC_NULLS_LAST',
  PairTradeVolumeUsd24hAsc = 'pair_tradeVolumeUSD24h_ASC',
  PairTradeVolumeUsd24hAscNullsFirst = 'pair_tradeVolumeUSD24h_ASC_NULLS_FIRST',
  PairTradeVolumeUsd24hAscNullsLast = 'pair_tradeVolumeUSD24h_ASC_NULLS_LAST',
  PairTradeVolumeUsd24hDesc = 'pair_tradeVolumeUSD24h_DESC',
  PairTradeVolumeUsd24hDescNullsFirst = 'pair_tradeVolumeUSD24h_DESC_NULLS_FIRST',
  PairTradeVolumeUsd24hDescNullsLast = 'pair_tradeVolumeUSD24h_DESC_NULLS_LAST',
  PairTxCount24hAsc = 'pair_txCount24h_ASC',
  PairTxCount24hAscNullsFirst = 'pair_txCount24h_ASC_NULLS_FIRST',
  PairTxCount24hAscNullsLast = 'pair_txCount24h_ASC_NULLS_LAST',
  PairTxCount24hDesc = 'pair_txCount24h_DESC',
  PairTxCount24hDescNullsFirst = 'pair_txCount24h_DESC_NULLS_FIRST',
  PairTxCount24hDescNullsLast = 'pair_txCount24h_DESC_NULLS_LAST',
  PairTxCountTotalAsc = 'pair_txCountTotal_ASC',
  PairTxCountTotalAscNullsFirst = 'pair_txCountTotal_ASC_NULLS_FIRST',
  PairTxCountTotalAscNullsLast = 'pair_txCountTotal_ASC_NULLS_LAST',
  PairTxCountTotalDesc = 'pair_txCountTotal_DESC',
  PairTxCountTotalDescNullsFirst = 'pair_txCountTotal_DESC_NULLS_FIRST',
  PairTxCountTotalDescNullsLast = 'pair_txCountTotal_DESC_NULLS_LAST',
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
  UserLastUpdatedAtBlockTimestampAsc = 'user_lastUpdatedAtBlockTimestamp_ASC',
  UserLastUpdatedAtBlockTimestampAscNullsFirst = 'user_lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  UserLastUpdatedAtBlockTimestampAscNullsLast = 'user_lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  UserLastUpdatedAtBlockTimestampDesc = 'user_lastUpdatedAtBlockTimestamp_DESC',
  UserLastUpdatedAtBlockTimestampDescNullsFirst = 'user_lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  UserLastUpdatedAtBlockTimestampDescNullsLast = 'user_lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  UserLastUpdatedAtAsc = 'user_lastUpdatedAt_ASC',
  UserLastUpdatedAtAscNullsFirst = 'user_lastUpdatedAt_ASC_NULLS_FIRST',
  UserLastUpdatedAtAscNullsLast = 'user_lastUpdatedAt_ASC_NULLS_LAST',
  UserLastUpdatedAtDesc = 'user_lastUpdatedAt_DESC',
  UserLastUpdatedAtDescNullsFirst = 'user_lastUpdatedAt_DESC_NULLS_FIRST',
  UserLastUpdatedAtDescNullsLast = 'user_lastUpdatedAt_DESC_NULLS_LAST',
  UserSwapsAmountAsc = 'user_swapsAmount_ASC',
  UserSwapsAmountAscNullsFirst = 'user_swapsAmount_ASC_NULLS_FIRST',
  UserSwapsAmountAscNullsLast = 'user_swapsAmount_ASC_NULLS_LAST',
  UserSwapsAmountDesc = 'user_swapsAmount_DESC',
  UserSwapsAmountDescNullsFirst = 'user_swapsAmount_DESC_NULLS_FIRST',
  UserSwapsAmountDescNullsLast = 'user_swapsAmount_DESC_NULLS_LAST',
  UserUsdSwappedAsc = 'user_usdSwapped_ASC',
  UserUsdSwappedAscNullsFirst = 'user_usdSwapped_ASC_NULLS_FIRST',
  UserUsdSwappedAscNullsLast = 'user_usdSwapped_ASC_NULLS_LAST',
  UserUsdSwappedDesc = 'user_usdSwapped_DESC',
  UserUsdSwappedDescNullsFirst = 'user_usdSwapped_DESC_NULLS_FIRST',
  UserUsdSwappedDescNullsLast = 'user_usdSwapped_DESC_NULLS_LAST',
}

export type LiquidityPositionHistoryWhereInput = {
  AND?: InputMaybe<Array<LiquidityPositionHistoryWhereInput>>;
  OR?: InputMaybe<Array<LiquidityPositionHistoryWhereInput>>;
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
  lastUpdatedAtBlockTimestamp_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAtBlockTimestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAtBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAt_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityPosition?: InputMaybe<CurrentLiquidityPositionWhereInput>;
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
  liquidityUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  liquidityUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  liquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  timestamp_eq?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  factoryAddress?: Maybe<Scalars['String']['output']>;
  fees24h: Scalars['BigDecimal']['output'];
  fees24hDelta?: Maybe<Scalars['BigDecimal']['output']>;
  feesETH24h: Scalars['BigDecimal']['output'];
  feesUSD24h: Scalars['BigDecimal']['output'];
  id: Scalars['String']['output'];
  lastUpdatedAt: Scalars['BigInt']['output'];
  lastUpdatedAtBlockTimestamp: Scalars['BigInt']['output'];
  liquidity24hDelta: Scalars['BigDecimal']['output'];
  liquidityProviderCount: Scalars['BigInt']['output'];
  liquidityUSD?: Maybe<Scalars['BigDecimal']['output']>;
  lpDecimals: Scalars['BigInt']['output'];
  lpTotalLocked: Scalars['BigDecimal']['output'];
  lpTotalSupply: Scalars['BigDecimal']['output'];
  reserve0: Scalars['BigDecimal']['output'];
  reserve1: Scalars['BigDecimal']['output'];
  token0: Token;
  token0Id?: Maybe<Scalars['String']['output']>;
  token0Price: Scalars['BigDecimal']['output'];
  token1: Token;
  token1Id?: Maybe<Scalars['String']['output']>;
  token1Price: Scalars['BigDecimal']['output'];
  tradeVolume24h: Scalars['BigDecimal']['output'];
  tradeVolume24hDelta: Scalars['BigDecimal']['output'];
  tradeVolumeETH24h: Scalars['BigDecimal']['output'];
  tradeVolumeUSD24h: Scalars['BigDecimal']['output'];
  txCount24h: Scalars['BigInt']['output'];
  txCountTotal: Scalars['BigInt']['output'];
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
  FactoryAddressAsc = 'factoryAddress_ASC',
  FactoryAddressAscNullsFirst = 'factoryAddress_ASC_NULLS_FIRST',
  FactoryAddressAscNullsLast = 'factoryAddress_ASC_NULLS_LAST',
  FactoryAddressDesc = 'factoryAddress_DESC',
  FactoryAddressDescNullsFirst = 'factoryAddress_DESC_NULLS_FIRST',
  FactoryAddressDescNullsLast = 'factoryAddress_DESC_NULLS_LAST',
  Fees24hDeltaAsc = 'fees24hDelta_ASC',
  Fees24hDeltaAscNullsFirst = 'fees24hDelta_ASC_NULLS_FIRST',
  Fees24hDeltaAscNullsLast = 'fees24hDelta_ASC_NULLS_LAST',
  Fees24hDeltaDesc = 'fees24hDelta_DESC',
  Fees24hDeltaDescNullsFirst = 'fees24hDelta_DESC_NULLS_FIRST',
  Fees24hDeltaDescNullsLast = 'fees24hDelta_DESC_NULLS_LAST',
  Fees24hAsc = 'fees24h_ASC',
  Fees24hAscNullsFirst = 'fees24h_ASC_NULLS_FIRST',
  Fees24hAscNullsLast = 'fees24h_ASC_NULLS_LAST',
  Fees24hDesc = 'fees24h_DESC',
  Fees24hDescNullsFirst = 'fees24h_DESC_NULLS_FIRST',
  Fees24hDescNullsLast = 'fees24h_DESC_NULLS_LAST',
  FeesEth24hAsc = 'feesETH24h_ASC',
  FeesEth24hAscNullsFirst = 'feesETH24h_ASC_NULLS_FIRST',
  FeesEth24hAscNullsLast = 'feesETH24h_ASC_NULLS_LAST',
  FeesEth24hDesc = 'feesETH24h_DESC',
  FeesEth24hDescNullsFirst = 'feesETH24h_DESC_NULLS_FIRST',
  FeesEth24hDescNullsLast = 'feesETH24h_DESC_NULLS_LAST',
  FeesUsd24hAsc = 'feesUSD24h_ASC',
  FeesUsd24hAscNullsFirst = 'feesUSD24h_ASC_NULLS_FIRST',
  FeesUsd24hAscNullsLast = 'feesUSD24h_ASC_NULLS_LAST',
  FeesUsd24hDesc = 'feesUSD24h_DESC',
  FeesUsd24hDescNullsFirst = 'feesUSD24h_DESC_NULLS_FIRST',
  FeesUsd24hDescNullsLast = 'feesUSD24h_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  LastUpdatedAtBlockTimestampAsc = 'lastUpdatedAtBlockTimestamp_ASC',
  LastUpdatedAtBlockTimestampAscNullsFirst = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampAscNullsLast = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  LastUpdatedAtBlockTimestampDesc = 'lastUpdatedAtBlockTimestamp_DESC',
  LastUpdatedAtBlockTimestampDescNullsFirst = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampDescNullsLast = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  LastUpdatedAtAsc = 'lastUpdatedAt_ASC',
  LastUpdatedAtAscNullsFirst = 'lastUpdatedAt_ASC_NULLS_FIRST',
  LastUpdatedAtAscNullsLast = 'lastUpdatedAt_ASC_NULLS_LAST',
  LastUpdatedAtDesc = 'lastUpdatedAt_DESC',
  LastUpdatedAtDescNullsFirst = 'lastUpdatedAt_DESC_NULLS_FIRST',
  LastUpdatedAtDescNullsLast = 'lastUpdatedAt_DESC_NULLS_LAST',
  Liquidity24hDeltaAsc = 'liquidity24hDelta_ASC',
  Liquidity24hDeltaAscNullsFirst = 'liquidity24hDelta_ASC_NULLS_FIRST',
  Liquidity24hDeltaAscNullsLast = 'liquidity24hDelta_ASC_NULLS_LAST',
  Liquidity24hDeltaDesc = 'liquidity24hDelta_DESC',
  Liquidity24hDeltaDescNullsFirst = 'liquidity24hDelta_DESC_NULLS_FIRST',
  Liquidity24hDeltaDescNullsLast = 'liquidity24hDelta_DESC_NULLS_LAST',
  LiquidityProviderCountAsc = 'liquidityProviderCount_ASC',
  LiquidityProviderCountAscNullsFirst = 'liquidityProviderCount_ASC_NULLS_FIRST',
  LiquidityProviderCountAscNullsLast = 'liquidityProviderCount_ASC_NULLS_LAST',
  LiquidityProviderCountDesc = 'liquidityProviderCount_DESC',
  LiquidityProviderCountDescNullsFirst = 'liquidityProviderCount_DESC_NULLS_FIRST',
  LiquidityProviderCountDescNullsLast = 'liquidityProviderCount_DESC_NULLS_LAST',
  LiquidityUsdAsc = 'liquidityUSD_ASC',
  LiquidityUsdAscNullsFirst = 'liquidityUSD_ASC_NULLS_FIRST',
  LiquidityUsdAscNullsLast = 'liquidityUSD_ASC_NULLS_LAST',
  LiquidityUsdDesc = 'liquidityUSD_DESC',
  LiquidityUsdDescNullsFirst = 'liquidityUSD_DESC_NULLS_FIRST',
  LiquidityUsdDescNullsLast = 'liquidityUSD_DESC_NULLS_LAST',
  LpDecimalsAsc = 'lpDecimals_ASC',
  LpDecimalsAscNullsFirst = 'lpDecimals_ASC_NULLS_FIRST',
  LpDecimalsAscNullsLast = 'lpDecimals_ASC_NULLS_LAST',
  LpDecimalsDesc = 'lpDecimals_DESC',
  LpDecimalsDescNullsFirst = 'lpDecimals_DESC_NULLS_FIRST',
  LpDecimalsDescNullsLast = 'lpDecimals_DESC_NULLS_LAST',
  LpTotalLockedAsc = 'lpTotalLocked_ASC',
  LpTotalLockedAscNullsFirst = 'lpTotalLocked_ASC_NULLS_FIRST',
  LpTotalLockedAscNullsLast = 'lpTotalLocked_ASC_NULLS_LAST',
  LpTotalLockedDesc = 'lpTotalLocked_DESC',
  LpTotalLockedDescNullsFirst = 'lpTotalLocked_DESC_NULLS_FIRST',
  LpTotalLockedDescNullsLast = 'lpTotalLocked_DESC_NULLS_LAST',
  LpTotalSupplyAsc = 'lpTotalSupply_ASC',
  LpTotalSupplyAscNullsFirst = 'lpTotalSupply_ASC_NULLS_FIRST',
  LpTotalSupplyAscNullsLast = 'lpTotalSupply_ASC_NULLS_LAST',
  LpTotalSupplyDesc = 'lpTotalSupply_DESC',
  LpTotalSupplyDescNullsFirst = 'lpTotalSupply_DESC_NULLS_FIRST',
  LpTotalSupplyDescNullsLast = 'lpTotalSupply_DESC_NULLS_LAST',
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
  Token0IdAsc = 'token0Id_ASC',
  Token0IdAscNullsFirst = 'token0Id_ASC_NULLS_FIRST',
  Token0IdAscNullsLast = 'token0Id_ASC_NULLS_LAST',
  Token0IdDesc = 'token0Id_DESC',
  Token0IdDescNullsFirst = 'token0Id_DESC_NULLS_FIRST',
  Token0IdDescNullsLast = 'token0Id_DESC_NULLS_LAST',
  Token0PriceAsc = 'token0Price_ASC',
  Token0PriceAscNullsFirst = 'token0Price_ASC_NULLS_FIRST',
  Token0PriceAscNullsLast = 'token0Price_ASC_NULLS_LAST',
  Token0PriceDesc = 'token0Price_DESC',
  Token0PriceDescNullsFirst = 'token0Price_DESC_NULLS_FIRST',
  Token0PriceDescNullsLast = 'token0Price_DESC_NULLS_LAST',
  Token0CirculationSupplyAsc = 'token0_circulationSupply_ASC',
  Token0CirculationSupplyAscNullsFirst = 'token0_circulationSupply_ASC_NULLS_FIRST',
  Token0CirculationSupplyAscNullsLast = 'token0_circulationSupply_ASC_NULLS_LAST',
  Token0CirculationSupplyDesc = 'token0_circulationSupply_DESC',
  Token0CirculationSupplyDescNullsFirst = 'token0_circulationSupply_DESC_NULLS_FIRST',
  Token0CirculationSupplyDescNullsLast = 'token0_circulationSupply_DESC_NULLS_LAST',
  Token0DecimalsAsc = 'token0_decimals_ASC',
  Token0DecimalsAscNullsFirst = 'token0_decimals_ASC_NULLS_FIRST',
  Token0DecimalsAscNullsLast = 'token0_decimals_ASC_NULLS_LAST',
  Token0DecimalsDesc = 'token0_decimals_DESC',
  Token0DecimalsDescNullsFirst = 'token0_decimals_DESC_NULLS_FIRST',
  Token0DecimalsDescNullsLast = 'token0_decimals_DESC_NULLS_LAST',
  Token0FactoryAddressAsc = 'token0_factoryAddress_ASC',
  Token0FactoryAddressAscNullsFirst = 'token0_factoryAddress_ASC_NULLS_FIRST',
  Token0FactoryAddressAscNullsLast = 'token0_factoryAddress_ASC_NULLS_LAST',
  Token0FactoryAddressDesc = 'token0_factoryAddress_DESC',
  Token0FactoryAddressDescNullsFirst = 'token0_factoryAddress_DESC_NULLS_FIRST',
  Token0FactoryAddressDescNullsLast = 'token0_factoryAddress_DESC_NULLS_LAST',
  Token0HoldersAsc = 'token0_holders_ASC',
  Token0HoldersAscNullsFirst = 'token0_holders_ASC_NULLS_FIRST',
  Token0HoldersAscNullsLast = 'token0_holders_ASC_NULLS_LAST',
  Token0HoldersDesc = 'token0_holders_DESC',
  Token0HoldersDescNullsFirst = 'token0_holders_DESC_NULLS_FIRST',
  Token0HoldersDescNullsLast = 'token0_holders_DESC_NULLS_LAST',
  Token0IdAsc = 'token0_id_ASC',
  Token0IdAscNullsFirst = 'token0_id_ASC_NULLS_FIRST',
  Token0IdAscNullsLast = 'token0_id_ASC_NULLS_LAST',
  Token0IdDesc = 'token0_id_DESC',
  Token0IdDescNullsFirst = 'token0_id_DESC_NULLS_FIRST',
  Token0IdDescNullsLast = 'token0_id_DESC_NULLS_LAST',
  Token0LastUpdatedAtBlockTimestampAsc = 'token0_lastUpdatedAtBlockTimestamp_ASC',
  Token0LastUpdatedAtBlockTimestampAscNullsFirst = 'token0_lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  Token0LastUpdatedAtBlockTimestampAscNullsLast = 'token0_lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  Token0LastUpdatedAtBlockTimestampDesc = 'token0_lastUpdatedAtBlockTimestamp_DESC',
  Token0LastUpdatedAtBlockTimestampDescNullsFirst = 'token0_lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  Token0LastUpdatedAtBlockTimestampDescNullsLast = 'token0_lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  Token0LastUpdatedAtAsc = 'token0_lastUpdatedAt_ASC',
  Token0LastUpdatedAtAscNullsFirst = 'token0_lastUpdatedAt_ASC_NULLS_FIRST',
  Token0LastUpdatedAtAscNullsLast = 'token0_lastUpdatedAt_ASC_NULLS_LAST',
  Token0LastUpdatedAtDesc = 'token0_lastUpdatedAt_DESC',
  Token0LastUpdatedAtDescNullsFirst = 'token0_lastUpdatedAt_DESC_NULLS_FIRST',
  Token0LastUpdatedAtDescNullsLast = 'token0_lastUpdatedAt_DESC_NULLS_LAST',
  Token0NameAsc = 'token0_name_ASC',
  Token0NameAscNullsFirst = 'token0_name_ASC_NULLS_FIRST',
  Token0NameAscNullsLast = 'token0_name_ASC_NULLS_LAST',
  Token0NameDesc = 'token0_name_DESC',
  Token0NameDescNullsFirst = 'token0_name_DESC_NULLS_FIRST',
  Token0NameDescNullsLast = 'token0_name_DESC_NULLS_LAST',
  Token0PictureRetryCountAsc = 'token0_pictureRetryCount_ASC',
  Token0PictureRetryCountAscNullsFirst = 'token0_pictureRetryCount_ASC_NULLS_FIRST',
  Token0PictureRetryCountAscNullsLast = 'token0_pictureRetryCount_ASC_NULLS_LAST',
  Token0PictureRetryCountDesc = 'token0_pictureRetryCount_DESC',
  Token0PictureRetryCountDescNullsFirst = 'token0_pictureRetryCount_DESC_NULLS_FIRST',
  Token0PictureRetryCountDescNullsLast = 'token0_pictureRetryCount_DESC_NULLS_LAST',
  Token0SymbolAsc = 'token0_symbol_ASC',
  Token0SymbolAscNullsFirst = 'token0_symbol_ASC_NULLS_FIRST',
  Token0SymbolAscNullsLast = 'token0_symbol_ASC_NULLS_LAST',
  Token0SymbolDesc = 'token0_symbol_DESC',
  Token0SymbolDescNullsFirst = 'token0_symbol_DESC_NULLS_FIRST',
  Token0SymbolDescNullsLast = 'token0_symbol_DESC_NULLS_LAST',
  Token0TokenPictureAsc = 'token0_tokenPicture_ASC',
  Token0TokenPictureAscNullsFirst = 'token0_tokenPicture_ASC_NULLS_FIRST',
  Token0TokenPictureAscNullsLast = 'token0_tokenPicture_ASC_NULLS_LAST',
  Token0TokenPictureDesc = 'token0_tokenPicture_DESC',
  Token0TokenPictureDescNullsFirst = 'token0_tokenPicture_DESC_NULLS_FIRST',
  Token0TokenPictureDescNullsLast = 'token0_tokenPicture_DESC_NULLS_LAST',
  Token0TotalSupplyAsc = 'token0_totalSupply_ASC',
  Token0TotalSupplyAscNullsFirst = 'token0_totalSupply_ASC_NULLS_FIRST',
  Token0TotalSupplyAscNullsLast = 'token0_totalSupply_ASC_NULLS_LAST',
  Token0TotalSupplyDesc = 'token0_totalSupply_DESC',
  Token0TotalSupplyDescNullsFirst = 'token0_totalSupply_DESC_NULLS_FIRST',
  Token0TotalSupplyDescNullsLast = 'token0_totalSupply_DESC_NULLS_LAST',
  Token1IdAsc = 'token1Id_ASC',
  Token1IdAscNullsFirst = 'token1Id_ASC_NULLS_FIRST',
  Token1IdAscNullsLast = 'token1Id_ASC_NULLS_LAST',
  Token1IdDesc = 'token1Id_DESC',
  Token1IdDescNullsFirst = 'token1Id_DESC_NULLS_FIRST',
  Token1IdDescNullsLast = 'token1Id_DESC_NULLS_LAST',
  Token1PriceAsc = 'token1Price_ASC',
  Token1PriceAscNullsFirst = 'token1Price_ASC_NULLS_FIRST',
  Token1PriceAscNullsLast = 'token1Price_ASC_NULLS_LAST',
  Token1PriceDesc = 'token1Price_DESC',
  Token1PriceDescNullsFirst = 'token1Price_DESC_NULLS_FIRST',
  Token1PriceDescNullsLast = 'token1Price_DESC_NULLS_LAST',
  Token1CirculationSupplyAsc = 'token1_circulationSupply_ASC',
  Token1CirculationSupplyAscNullsFirst = 'token1_circulationSupply_ASC_NULLS_FIRST',
  Token1CirculationSupplyAscNullsLast = 'token1_circulationSupply_ASC_NULLS_LAST',
  Token1CirculationSupplyDesc = 'token1_circulationSupply_DESC',
  Token1CirculationSupplyDescNullsFirst = 'token1_circulationSupply_DESC_NULLS_FIRST',
  Token1CirculationSupplyDescNullsLast = 'token1_circulationSupply_DESC_NULLS_LAST',
  Token1DecimalsAsc = 'token1_decimals_ASC',
  Token1DecimalsAscNullsFirst = 'token1_decimals_ASC_NULLS_FIRST',
  Token1DecimalsAscNullsLast = 'token1_decimals_ASC_NULLS_LAST',
  Token1DecimalsDesc = 'token1_decimals_DESC',
  Token1DecimalsDescNullsFirst = 'token1_decimals_DESC_NULLS_FIRST',
  Token1DecimalsDescNullsLast = 'token1_decimals_DESC_NULLS_LAST',
  Token1FactoryAddressAsc = 'token1_factoryAddress_ASC',
  Token1FactoryAddressAscNullsFirst = 'token1_factoryAddress_ASC_NULLS_FIRST',
  Token1FactoryAddressAscNullsLast = 'token1_factoryAddress_ASC_NULLS_LAST',
  Token1FactoryAddressDesc = 'token1_factoryAddress_DESC',
  Token1FactoryAddressDescNullsFirst = 'token1_factoryAddress_DESC_NULLS_FIRST',
  Token1FactoryAddressDescNullsLast = 'token1_factoryAddress_DESC_NULLS_LAST',
  Token1HoldersAsc = 'token1_holders_ASC',
  Token1HoldersAscNullsFirst = 'token1_holders_ASC_NULLS_FIRST',
  Token1HoldersAscNullsLast = 'token1_holders_ASC_NULLS_LAST',
  Token1HoldersDesc = 'token1_holders_DESC',
  Token1HoldersDescNullsFirst = 'token1_holders_DESC_NULLS_FIRST',
  Token1HoldersDescNullsLast = 'token1_holders_DESC_NULLS_LAST',
  Token1IdAsc = 'token1_id_ASC',
  Token1IdAscNullsFirst = 'token1_id_ASC_NULLS_FIRST',
  Token1IdAscNullsLast = 'token1_id_ASC_NULLS_LAST',
  Token1IdDesc = 'token1_id_DESC',
  Token1IdDescNullsFirst = 'token1_id_DESC_NULLS_FIRST',
  Token1IdDescNullsLast = 'token1_id_DESC_NULLS_LAST',
  Token1LastUpdatedAtBlockTimestampAsc = 'token1_lastUpdatedAtBlockTimestamp_ASC',
  Token1LastUpdatedAtBlockTimestampAscNullsFirst = 'token1_lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  Token1LastUpdatedAtBlockTimestampAscNullsLast = 'token1_lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  Token1LastUpdatedAtBlockTimestampDesc = 'token1_lastUpdatedAtBlockTimestamp_DESC',
  Token1LastUpdatedAtBlockTimestampDescNullsFirst = 'token1_lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  Token1LastUpdatedAtBlockTimestampDescNullsLast = 'token1_lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  Token1LastUpdatedAtAsc = 'token1_lastUpdatedAt_ASC',
  Token1LastUpdatedAtAscNullsFirst = 'token1_lastUpdatedAt_ASC_NULLS_FIRST',
  Token1LastUpdatedAtAscNullsLast = 'token1_lastUpdatedAt_ASC_NULLS_LAST',
  Token1LastUpdatedAtDesc = 'token1_lastUpdatedAt_DESC',
  Token1LastUpdatedAtDescNullsFirst = 'token1_lastUpdatedAt_DESC_NULLS_FIRST',
  Token1LastUpdatedAtDescNullsLast = 'token1_lastUpdatedAt_DESC_NULLS_LAST',
  Token1NameAsc = 'token1_name_ASC',
  Token1NameAscNullsFirst = 'token1_name_ASC_NULLS_FIRST',
  Token1NameAscNullsLast = 'token1_name_ASC_NULLS_LAST',
  Token1NameDesc = 'token1_name_DESC',
  Token1NameDescNullsFirst = 'token1_name_DESC_NULLS_FIRST',
  Token1NameDescNullsLast = 'token1_name_DESC_NULLS_LAST',
  Token1PictureRetryCountAsc = 'token1_pictureRetryCount_ASC',
  Token1PictureRetryCountAscNullsFirst = 'token1_pictureRetryCount_ASC_NULLS_FIRST',
  Token1PictureRetryCountAscNullsLast = 'token1_pictureRetryCount_ASC_NULLS_LAST',
  Token1PictureRetryCountDesc = 'token1_pictureRetryCount_DESC',
  Token1PictureRetryCountDescNullsFirst = 'token1_pictureRetryCount_DESC_NULLS_FIRST',
  Token1PictureRetryCountDescNullsLast = 'token1_pictureRetryCount_DESC_NULLS_LAST',
  Token1SymbolAsc = 'token1_symbol_ASC',
  Token1SymbolAscNullsFirst = 'token1_symbol_ASC_NULLS_FIRST',
  Token1SymbolAscNullsLast = 'token1_symbol_ASC_NULLS_LAST',
  Token1SymbolDesc = 'token1_symbol_DESC',
  Token1SymbolDescNullsFirst = 'token1_symbol_DESC_NULLS_FIRST',
  Token1SymbolDescNullsLast = 'token1_symbol_DESC_NULLS_LAST',
  Token1TokenPictureAsc = 'token1_tokenPicture_ASC',
  Token1TokenPictureAscNullsFirst = 'token1_tokenPicture_ASC_NULLS_FIRST',
  Token1TokenPictureAscNullsLast = 'token1_tokenPicture_ASC_NULLS_LAST',
  Token1TokenPictureDesc = 'token1_tokenPicture_DESC',
  Token1TokenPictureDescNullsFirst = 'token1_tokenPicture_DESC_NULLS_FIRST',
  Token1TokenPictureDescNullsLast = 'token1_tokenPicture_DESC_NULLS_LAST',
  Token1TotalSupplyAsc = 'token1_totalSupply_ASC',
  Token1TotalSupplyAscNullsFirst = 'token1_totalSupply_ASC_NULLS_FIRST',
  Token1TotalSupplyAscNullsLast = 'token1_totalSupply_ASC_NULLS_LAST',
  Token1TotalSupplyDesc = 'token1_totalSupply_DESC',
  Token1TotalSupplyDescNullsFirst = 'token1_totalSupply_DESC_NULLS_FIRST',
  Token1TotalSupplyDescNullsLast = 'token1_totalSupply_DESC_NULLS_LAST',
  TradeVolume24hDeltaAsc = 'tradeVolume24hDelta_ASC',
  TradeVolume24hDeltaAscNullsFirst = 'tradeVolume24hDelta_ASC_NULLS_FIRST',
  TradeVolume24hDeltaAscNullsLast = 'tradeVolume24hDelta_ASC_NULLS_LAST',
  TradeVolume24hDeltaDesc = 'tradeVolume24hDelta_DESC',
  TradeVolume24hDeltaDescNullsFirst = 'tradeVolume24hDelta_DESC_NULLS_FIRST',
  TradeVolume24hDeltaDescNullsLast = 'tradeVolume24hDelta_DESC_NULLS_LAST',
  TradeVolume24hAsc = 'tradeVolume24h_ASC',
  TradeVolume24hAscNullsFirst = 'tradeVolume24h_ASC_NULLS_FIRST',
  TradeVolume24hAscNullsLast = 'tradeVolume24h_ASC_NULLS_LAST',
  TradeVolume24hDesc = 'tradeVolume24h_DESC',
  TradeVolume24hDescNullsFirst = 'tradeVolume24h_DESC_NULLS_FIRST',
  TradeVolume24hDescNullsLast = 'tradeVolume24h_DESC_NULLS_LAST',
  TradeVolumeEth24hAsc = 'tradeVolumeETH24h_ASC',
  TradeVolumeEth24hAscNullsFirst = 'tradeVolumeETH24h_ASC_NULLS_FIRST',
  TradeVolumeEth24hAscNullsLast = 'tradeVolumeETH24h_ASC_NULLS_LAST',
  TradeVolumeEth24hDesc = 'tradeVolumeETH24h_DESC',
  TradeVolumeEth24hDescNullsFirst = 'tradeVolumeETH24h_DESC_NULLS_FIRST',
  TradeVolumeEth24hDescNullsLast = 'tradeVolumeETH24h_DESC_NULLS_LAST',
  TradeVolumeUsd24hAsc = 'tradeVolumeUSD24h_ASC',
  TradeVolumeUsd24hAscNullsFirst = 'tradeVolumeUSD24h_ASC_NULLS_FIRST',
  TradeVolumeUsd24hAscNullsLast = 'tradeVolumeUSD24h_ASC_NULLS_LAST',
  TradeVolumeUsd24hDesc = 'tradeVolumeUSD24h_DESC',
  TradeVolumeUsd24hDescNullsFirst = 'tradeVolumeUSD24h_DESC_NULLS_FIRST',
  TradeVolumeUsd24hDescNullsLast = 'tradeVolumeUSD24h_DESC_NULLS_LAST',
  TxCount24hAsc = 'txCount24h_ASC',
  TxCount24hAscNullsFirst = 'txCount24h_ASC_NULLS_FIRST',
  TxCount24hAscNullsLast = 'txCount24h_ASC_NULLS_LAST',
  TxCount24hDesc = 'txCount24h_DESC',
  TxCount24hDescNullsFirst = 'txCount24h_DESC_NULLS_FIRST',
  TxCount24hDescNullsLast = 'txCount24h_DESC_NULLS_LAST',
  TxCountTotalAsc = 'txCountTotal_ASC',
  TxCountTotalAscNullsFirst = 'txCountTotal_ASC_NULLS_FIRST',
  TxCountTotalAscNullsLast = 'txCountTotal_ASC_NULLS_LAST',
  TxCountTotalDesc = 'txCountTotal_DESC',
  TxCountTotalDescNullsFirst = 'txCountTotal_DESC_NULLS_FIRST',
  TxCountTotalDescNullsLast = 'txCountTotal_DESC_NULLS_LAST',
}

export type PairPricePoint = {
  __typename?: 'PairPricePoint';
  timestamp: Scalars['String']['output'];
  token0?: Maybe<TokenInPair>;
  token1?: Maybe<TokenInPair>;
};

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
  factoryAddress_contains?: InputMaybe<Scalars['String']['input']>;
  factoryAddress_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  factoryAddress_endsWith?: InputMaybe<Scalars['String']['input']>;
  factoryAddress_eq?: InputMaybe<Scalars['String']['input']>;
  factoryAddress_gt?: InputMaybe<Scalars['String']['input']>;
  factoryAddress_gte?: InputMaybe<Scalars['String']['input']>;
  factoryAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  factoryAddress_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  factoryAddress_lt?: InputMaybe<Scalars['String']['input']>;
  factoryAddress_lte?: InputMaybe<Scalars['String']['input']>;
  factoryAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  factoryAddress_not_containsInsensitive?: InputMaybe<
    Scalars['String']['input']
  >;
  factoryAddress_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  factoryAddress_not_eq?: InputMaybe<Scalars['String']['input']>;
  factoryAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  factoryAddress_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  factoryAddress_startsWith?: InputMaybe<Scalars['String']['input']>;
  fees24hDelta_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees24hDelta_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees24hDelta_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees24hDelta_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fees24hDelta_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  fees24hDelta_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees24hDelta_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees24hDelta_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees24hDelta_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fees24h_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees24h_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees24h_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees24h_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fees24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  fees24h_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees24h_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees24h_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  fees24h_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesETH24h_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesETH24h_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesETH24h_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesETH24h_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesETH24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  feesETH24h_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesETH24h_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesETH24h_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesETH24h_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesUSD24h_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD24h_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD24h_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD24h_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  feesUSD24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  feesUSD24h_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD24h_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD24h_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  feesUSD24h_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  lastUpdatedAtBlockTimestamp_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAtBlockTimestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAtBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAt_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidity24hDelta_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity24hDelta_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity24hDelta_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity24hDelta_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  liquidity24hDelta_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  liquidity24hDelta_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity24hDelta_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity24hDelta_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidity24hDelta_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  liquidityProviderCount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityProviderCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  liquidityProviderCount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  liquidityProviderCount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  liquidityUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  liquidityUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  liquidityUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lpDecimals_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lpDecimals_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lpDecimals_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lpDecimals_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpDecimals_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lpDecimals_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lpDecimals_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lpDecimals_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lpDecimals_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lpTotalLocked_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalLocked_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalLocked_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalLocked_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lpTotalLocked_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lpTotalLocked_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalLocked_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalLocked_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalLocked_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lpTotalSupply_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalSupply_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalSupply_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalSupply_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  lpTotalSupply_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lpTotalSupply_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalSupply_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalSupply_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  lpTotalSupply_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  token0?: InputMaybe<TokenWhereInput>;
  token0Id_contains?: InputMaybe<Scalars['String']['input']>;
  token0Id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  token0Id_endsWith?: InputMaybe<Scalars['String']['input']>;
  token0Id_eq?: InputMaybe<Scalars['String']['input']>;
  token0Id_gt?: InputMaybe<Scalars['String']['input']>;
  token0Id_gte?: InputMaybe<Scalars['String']['input']>;
  token0Id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token0Id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  token0Id_lt?: InputMaybe<Scalars['String']['input']>;
  token0Id_lte?: InputMaybe<Scalars['String']['input']>;
  token0Id_not_contains?: InputMaybe<Scalars['String']['input']>;
  token0Id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  token0Id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  token0Id_not_eq?: InputMaybe<Scalars['String']['input']>;
  token0Id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token0Id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  token0Id_startsWith?: InputMaybe<Scalars['String']['input']>;
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
  token1Id_contains?: InputMaybe<Scalars['String']['input']>;
  token1Id_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  token1Id_endsWith?: InputMaybe<Scalars['String']['input']>;
  token1Id_eq?: InputMaybe<Scalars['String']['input']>;
  token1Id_gt?: InputMaybe<Scalars['String']['input']>;
  token1Id_gte?: InputMaybe<Scalars['String']['input']>;
  token1Id_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token1Id_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  token1Id_lt?: InputMaybe<Scalars['String']['input']>;
  token1Id_lte?: InputMaybe<Scalars['String']['input']>;
  token1Id_not_contains?: InputMaybe<Scalars['String']['input']>;
  token1Id_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  token1Id_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  token1Id_not_eq?: InputMaybe<Scalars['String']['input']>;
  token1Id_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  token1Id_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  token1Id_startsWith?: InputMaybe<Scalars['String']['input']>;
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
  tradeVolume24hDelta_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24hDelta_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24hDelta_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24hDelta_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolume24hDelta_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tradeVolume24hDelta_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24hDelta_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24hDelta_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24hDelta_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >;
  tradeVolume24h_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolume24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tradeVolume24h_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolumeETH24h_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolumeETH24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tradeVolumeETH24h_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolumeUSD24h_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolumeUSD24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tradeVolumeUSD24h_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  txCount24h_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  txCount24h_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCountTotal_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCountTotal_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCountTotal_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCountTotal_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCountTotal_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  txCountTotal_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCountTotal_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCountTotal_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCountTotal_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type PairsConnection = {
  __typename?: 'PairsConnection';
  edges: Array<PairEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  currentLiquidityPositionById?: Maybe<CurrentLiquidityPosition>;
  currentLiquidityPositions: Array<CurrentLiquidityPosition>;
  currentLiquidityPositionsConnection: CurrentLiquidityPositionsConnection;
  historicalPairMetrics: Array<HistoricalPairMetrics>;
  historicalPairMetricsById?: Maybe<HistoricalPairMetrics>;
  historicalPairMetricsConnection: HistoricalPairMetricsConnection;
  historicalTokenMetrics: Array<HistoricalTokenMetrics>;
  historicalTokenMetricsById?: Maybe<HistoricalTokenMetrics>;
  historicalTokenMetricsConnection: HistoricalTokenMetricsConnection;
  holderById?: Maybe<Holder>;
  holders: Array<Holder>;
  holdersConnection: HoldersConnection;
  liquidityPositionHistories: Array<LiquidityPositionHistory>;
  liquidityPositionHistoriesConnection: LiquidityPositionHistoriesConnection;
  liquidityPositionHistoryById?: Maybe<LiquidityPositionHistory>;
  pairById?: Maybe<Pair>;
  pairPrices: Array<PairPricePoint>;
  pairs: Array<Pair>;
  pairsConnection: PairsConnection;
  squidStatus?: Maybe<SquidStatus>;
  tokenById?: Maybe<Token>;
  tokenMetrics: Array<TokenMetrics>;
  tokenMetricsById?: Maybe<TokenMetrics>;
  tokenMetricsConnection: TokenMetricsConnection;
  tokenPrices: Array<TokenPricePoint>;
  tokens: Array<Token>;
  tokensConnection: TokensConnection;
  tradeById?: Maybe<Trade>;
  trades: Array<Trade>;
  tradesConnection: TradesConnection;
  userById?: Maybe<User>;
  users: Array<User>;
  usersConnection: UsersConnection;
};

export type QueryCurrentLiquidityPositionByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryCurrentLiquidityPositionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CurrentLiquidityPositionOrderByInput>>;
  where?: InputMaybe<CurrentLiquidityPositionWhereInput>;
};

export type QueryCurrentLiquidityPositionsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<CurrentLiquidityPositionOrderByInput>;
  where?: InputMaybe<CurrentLiquidityPositionWhereInput>;
};

export type QueryHistoricalPairMetricsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HistoricalPairMetricsOrderByInput>>;
  where?: InputMaybe<HistoricalPairMetricsWhereInput>;
};

export type QueryHistoricalPairMetricsByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryHistoricalPairMetricsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<HistoricalPairMetricsOrderByInput>;
  where?: InputMaybe<HistoricalPairMetricsWhereInput>;
};

export type QueryHistoricalTokenMetricsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HistoricalTokenMetricsOrderByInput>>;
  where?: InputMaybe<HistoricalTokenMetricsWhereInput>;
};

export type QueryHistoricalTokenMetricsByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryHistoricalTokenMetricsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<HistoricalTokenMetricsOrderByInput>;
  where?: InputMaybe<HistoricalTokenMetricsWhereInput>;
};

export type QueryHolderByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryHoldersArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<HolderOrderByInput>>;
  where?: InputMaybe<HolderWhereInput>;
};

export type QueryHoldersConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<HolderOrderByInput>;
  where?: InputMaybe<HolderWhereInput>;
};

export type QueryLiquidityPositionHistoriesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<LiquidityPositionHistoryOrderByInput>>;
  where?: InputMaybe<LiquidityPositionHistoryWhereInput>;
};

export type QueryLiquidityPositionHistoriesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<LiquidityPositionHistoryOrderByInput>;
  where?: InputMaybe<LiquidityPositionHistoryWhereInput>;
};

export type QueryLiquidityPositionHistoryByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryPairByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryPairPricesArgs = {
  from: Scalars['String']['input'];
  maxPoints: Scalars['Int']['input'];
  to: Scalars['String']['input'];
  token0Address: Scalars['String']['input'];
  token1Address: Scalars['String']['input'];
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

export type QueryTokenMetricsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TokenMetricsOrderByInput>>;
  where?: InputMaybe<TokenMetricsWhereInput>;
};

export type QueryTokenMetricsByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryTokenMetricsConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<TokenMetricsOrderByInput>;
  where?: InputMaybe<TokenMetricsWhereInput>;
};

export type QueryTokenPricesArgs = {
  from: Scalars['String']['input'];
  maxPoints: Scalars['Int']['input'];
  to: Scalars['String']['input'];
  tokenAddress: Scalars['String']['input'];
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

export type QueryTradeByIdArgs = {
  id: Scalars['String']['input'];
};

export type QueryTradesArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<TradeOrderByInput>>;
  where?: InputMaybe<TradeWhereInput>;
};

export type QueryTradesConnectionArgs = {
  after?: InputMaybe<Scalars['String']['input']>;
  first?: InputMaybe<Scalars['Int']['input']>;
  orderBy: Array<TradeOrderByInput>;
  where?: InputMaybe<TradeWhereInput>;
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
  circulationSupply: Scalars['BigInt']['output'];
  decimals: Scalars['BigInt']['output'];
  factoryAddress?: Maybe<Scalars['String']['output']>;
  holders: Scalars['BigInt']['output'];
  id: Scalars['String']['output'];
  lastUpdatedAt: Scalars['BigInt']['output'];
  lastUpdatedAtBlockTimestamp: Scalars['BigInt']['output'];
  name: Scalars['String']['output'];
  pictureRetryCount: Scalars['Int']['output'];
  symbol: Scalars['String']['output'];
  tokenMetrics: TokenMetrics;
  tokenPicture?: Maybe<Scalars['String']['output']>;
  totalSupply: Scalars['BigInt']['output'];
};

export type TokenEdge = {
  __typename?: 'TokenEdge';
  cursor: Scalars['String']['output'];
  node: Token;
};

export type TokenInPair = {
  __typename?: 'TokenInPair';
  tokenAddress: Scalars['String']['output'];
  tokenPrice?: Maybe<Scalars['String']['output']>;
};

export type TokenMetrics = {
  __typename?: 'TokenMetrics';
  fdv?: Maybe<Scalars['BigDecimal']['output']>;
  id: Scalars['String']['output'];
  lastUpdatedAt: Scalars['BigInt']['output'];
  lastUpdatedAtBlockTimestamp: Scalars['BigInt']['output'];
  marketCapUSD: Scalars['BigDecimal']['output'];
  price24hDelta?: Maybe<Scalars['BigDecimal']['output']>;
  priceETH?: Maybe<Scalars['BigDecimal']['output']>;
  priceUSD?: Maybe<Scalars['BigDecimal']['output']>;
  tokenAddress: Scalars['String']['output'];
  totalLiquidityAllPairs: Scalars['BigDecimal']['output'];
  totalLiquidityAllPairsUSD: Scalars['BigDecimal']['output'];
  tradeVolume24h: Scalars['BigDecimal']['output'];
  tradeVolumeETH24h: Scalars['BigDecimal']['output'];
  tradeVolumeUSD24h: Scalars['BigDecimal']['output'];
  txCount24h: Scalars['BigInt']['output'];
  txCountTotal: Scalars['BigInt']['output'];
};

export type TokenMetricsConnection = {
  __typename?: 'TokenMetricsConnection';
  edges: Array<TokenMetricsEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type TokenMetricsEdge = {
  __typename?: 'TokenMetricsEdge';
  cursor: Scalars['String']['output'];
  node: TokenMetrics;
};

export enum TokenMetricsOrderByInput {
  FdvAsc = 'fdv_ASC',
  FdvAscNullsFirst = 'fdv_ASC_NULLS_FIRST',
  FdvAscNullsLast = 'fdv_ASC_NULLS_LAST',
  FdvDesc = 'fdv_DESC',
  FdvDescNullsFirst = 'fdv_DESC_NULLS_FIRST',
  FdvDescNullsLast = 'fdv_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  LastUpdatedAtBlockTimestampAsc = 'lastUpdatedAtBlockTimestamp_ASC',
  LastUpdatedAtBlockTimestampAscNullsFirst = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampAscNullsLast = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  LastUpdatedAtBlockTimestampDesc = 'lastUpdatedAtBlockTimestamp_DESC',
  LastUpdatedAtBlockTimestampDescNullsFirst = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampDescNullsLast = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  LastUpdatedAtAsc = 'lastUpdatedAt_ASC',
  LastUpdatedAtAscNullsFirst = 'lastUpdatedAt_ASC_NULLS_FIRST',
  LastUpdatedAtAscNullsLast = 'lastUpdatedAt_ASC_NULLS_LAST',
  LastUpdatedAtDesc = 'lastUpdatedAt_DESC',
  LastUpdatedAtDescNullsFirst = 'lastUpdatedAt_DESC_NULLS_FIRST',
  LastUpdatedAtDescNullsLast = 'lastUpdatedAt_DESC_NULLS_LAST',
  MarketCapUsdAsc = 'marketCapUSD_ASC',
  MarketCapUsdAscNullsFirst = 'marketCapUSD_ASC_NULLS_FIRST',
  MarketCapUsdAscNullsLast = 'marketCapUSD_ASC_NULLS_LAST',
  MarketCapUsdDesc = 'marketCapUSD_DESC',
  MarketCapUsdDescNullsFirst = 'marketCapUSD_DESC_NULLS_FIRST',
  MarketCapUsdDescNullsLast = 'marketCapUSD_DESC_NULLS_LAST',
  Price24hDeltaAsc = 'price24hDelta_ASC',
  Price24hDeltaAscNullsFirst = 'price24hDelta_ASC_NULLS_FIRST',
  Price24hDeltaAscNullsLast = 'price24hDelta_ASC_NULLS_LAST',
  Price24hDeltaDesc = 'price24hDelta_DESC',
  Price24hDeltaDescNullsFirst = 'price24hDelta_DESC_NULLS_FIRST',
  Price24hDeltaDescNullsLast = 'price24hDelta_DESC_NULLS_LAST',
  PriceEthAsc = 'priceETH_ASC',
  PriceEthAscNullsFirst = 'priceETH_ASC_NULLS_FIRST',
  PriceEthAscNullsLast = 'priceETH_ASC_NULLS_LAST',
  PriceEthDesc = 'priceETH_DESC',
  PriceEthDescNullsFirst = 'priceETH_DESC_NULLS_FIRST',
  PriceEthDescNullsLast = 'priceETH_DESC_NULLS_LAST',
  PriceUsdAsc = 'priceUSD_ASC',
  PriceUsdAscNullsFirst = 'priceUSD_ASC_NULLS_FIRST',
  PriceUsdAscNullsLast = 'priceUSD_ASC_NULLS_LAST',
  PriceUsdDesc = 'priceUSD_DESC',
  PriceUsdDescNullsFirst = 'priceUSD_DESC_NULLS_FIRST',
  PriceUsdDescNullsLast = 'priceUSD_DESC_NULLS_LAST',
  TokenAddressAsc = 'tokenAddress_ASC',
  TokenAddressAscNullsFirst = 'tokenAddress_ASC_NULLS_FIRST',
  TokenAddressAscNullsLast = 'tokenAddress_ASC_NULLS_LAST',
  TokenAddressDesc = 'tokenAddress_DESC',
  TokenAddressDescNullsFirst = 'tokenAddress_DESC_NULLS_FIRST',
  TokenAddressDescNullsLast = 'tokenAddress_DESC_NULLS_LAST',
  TotalLiquidityAllPairsUsdAsc = 'totalLiquidityAllPairsUSD_ASC',
  TotalLiquidityAllPairsUsdAscNullsFirst = 'totalLiquidityAllPairsUSD_ASC_NULLS_FIRST',
  TotalLiquidityAllPairsUsdAscNullsLast = 'totalLiquidityAllPairsUSD_ASC_NULLS_LAST',
  TotalLiquidityAllPairsUsdDesc = 'totalLiquidityAllPairsUSD_DESC',
  TotalLiquidityAllPairsUsdDescNullsFirst = 'totalLiquidityAllPairsUSD_DESC_NULLS_FIRST',
  TotalLiquidityAllPairsUsdDescNullsLast = 'totalLiquidityAllPairsUSD_DESC_NULLS_LAST',
  TotalLiquidityAllPairsAsc = 'totalLiquidityAllPairs_ASC',
  TotalLiquidityAllPairsAscNullsFirst = 'totalLiquidityAllPairs_ASC_NULLS_FIRST',
  TotalLiquidityAllPairsAscNullsLast = 'totalLiquidityAllPairs_ASC_NULLS_LAST',
  TotalLiquidityAllPairsDesc = 'totalLiquidityAllPairs_DESC',
  TotalLiquidityAllPairsDescNullsFirst = 'totalLiquidityAllPairs_DESC_NULLS_FIRST',
  TotalLiquidityAllPairsDescNullsLast = 'totalLiquidityAllPairs_DESC_NULLS_LAST',
  TradeVolume24hAsc = 'tradeVolume24h_ASC',
  TradeVolume24hAscNullsFirst = 'tradeVolume24h_ASC_NULLS_FIRST',
  TradeVolume24hAscNullsLast = 'tradeVolume24h_ASC_NULLS_LAST',
  TradeVolume24hDesc = 'tradeVolume24h_DESC',
  TradeVolume24hDescNullsFirst = 'tradeVolume24h_DESC_NULLS_FIRST',
  TradeVolume24hDescNullsLast = 'tradeVolume24h_DESC_NULLS_LAST',
  TradeVolumeEth24hAsc = 'tradeVolumeETH24h_ASC',
  TradeVolumeEth24hAscNullsFirst = 'tradeVolumeETH24h_ASC_NULLS_FIRST',
  TradeVolumeEth24hAscNullsLast = 'tradeVolumeETH24h_ASC_NULLS_LAST',
  TradeVolumeEth24hDesc = 'tradeVolumeETH24h_DESC',
  TradeVolumeEth24hDescNullsFirst = 'tradeVolumeETH24h_DESC_NULLS_FIRST',
  TradeVolumeEth24hDescNullsLast = 'tradeVolumeETH24h_DESC_NULLS_LAST',
  TradeVolumeUsd24hAsc = 'tradeVolumeUSD24h_ASC',
  TradeVolumeUsd24hAscNullsFirst = 'tradeVolumeUSD24h_ASC_NULLS_FIRST',
  TradeVolumeUsd24hAscNullsLast = 'tradeVolumeUSD24h_ASC_NULLS_LAST',
  TradeVolumeUsd24hDesc = 'tradeVolumeUSD24h_DESC',
  TradeVolumeUsd24hDescNullsFirst = 'tradeVolumeUSD24h_DESC_NULLS_FIRST',
  TradeVolumeUsd24hDescNullsLast = 'tradeVolumeUSD24h_DESC_NULLS_LAST',
  TxCount24hAsc = 'txCount24h_ASC',
  TxCount24hAscNullsFirst = 'txCount24h_ASC_NULLS_FIRST',
  TxCount24hAscNullsLast = 'txCount24h_ASC_NULLS_LAST',
  TxCount24hDesc = 'txCount24h_DESC',
  TxCount24hDescNullsFirst = 'txCount24h_DESC_NULLS_FIRST',
  TxCount24hDescNullsLast = 'txCount24h_DESC_NULLS_LAST',
  TxCountTotalAsc = 'txCountTotal_ASC',
  TxCountTotalAscNullsFirst = 'txCountTotal_ASC_NULLS_FIRST',
  TxCountTotalAscNullsLast = 'txCountTotal_ASC_NULLS_LAST',
  TxCountTotalDesc = 'txCountTotal_DESC',
  TxCountTotalDescNullsFirst = 'txCountTotal_DESC_NULLS_FIRST',
  TxCountTotalDescNullsLast = 'txCountTotal_DESC_NULLS_LAST',
}

export type TokenMetricsWhereInput = {
  AND?: InputMaybe<Array<TokenMetricsWhereInput>>;
  OR?: InputMaybe<Array<TokenMetricsWhereInput>>;
  fdv_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  fdv_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fdv_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fdv_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  fdv_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  fdv_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  fdv_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  fdv_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  fdv_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  lastUpdatedAtBlockTimestamp_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAtBlockTimestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAtBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAt_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  marketCapUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketCapUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketCapUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketCapUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  marketCapUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  marketCapUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketCapUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketCapUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  marketCapUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price24hDelta_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  price24hDelta_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price24hDelta_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price24hDelta_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  price24hDelta_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  price24hDelta_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  price24hDelta_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  price24hDelta_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  price24hDelta_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  priceETH_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceETH_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceETH_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceETH_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  priceETH_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  priceETH_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceETH_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceETH_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  priceUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  priceUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  priceUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  priceUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  totalLiquidityAllPairsUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairsUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairsUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairsUSD_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >;
  totalLiquidityAllPairsUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalLiquidityAllPairsUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairsUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairsUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairsUSD_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >;
  totalLiquidityAllPairs_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairs_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairs_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairs_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  totalLiquidityAllPairs_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalLiquidityAllPairs_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairs_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairs_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  totalLiquidityAllPairs_not_in?: InputMaybe<
    Array<Scalars['BigDecimal']['input']>
  >;
  tradeVolume24h_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolume24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tradeVolume24h_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolume24h_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolumeETH24h_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolumeETH24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tradeVolumeETH24h_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeETH24h_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolumeUSD24h_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  tradeVolumeUSD24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tradeVolumeUSD24h_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  tradeVolumeUSD24h_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  txCount24h_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCount24h_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  txCount24h_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCount24h_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCountTotal_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCountTotal_gt?: InputMaybe<Scalars['BigInt']['input']>;
  txCountTotal_gte?: InputMaybe<Scalars['BigInt']['input']>;
  txCountTotal_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  txCountTotal_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  txCountTotal_lt?: InputMaybe<Scalars['BigInt']['input']>;
  txCountTotal_lte?: InputMaybe<Scalars['BigInt']['input']>;
  txCountTotal_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  txCountTotal_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export enum TokenOrderByInput {
  CirculationSupplyAsc = 'circulationSupply_ASC',
  CirculationSupplyAscNullsFirst = 'circulationSupply_ASC_NULLS_FIRST',
  CirculationSupplyAscNullsLast = 'circulationSupply_ASC_NULLS_LAST',
  CirculationSupplyDesc = 'circulationSupply_DESC',
  CirculationSupplyDescNullsFirst = 'circulationSupply_DESC_NULLS_FIRST',
  CirculationSupplyDescNullsLast = 'circulationSupply_DESC_NULLS_LAST',
  DecimalsAsc = 'decimals_ASC',
  DecimalsAscNullsFirst = 'decimals_ASC_NULLS_FIRST',
  DecimalsAscNullsLast = 'decimals_ASC_NULLS_LAST',
  DecimalsDesc = 'decimals_DESC',
  DecimalsDescNullsFirst = 'decimals_DESC_NULLS_FIRST',
  DecimalsDescNullsLast = 'decimals_DESC_NULLS_LAST',
  FactoryAddressAsc = 'factoryAddress_ASC',
  FactoryAddressAscNullsFirst = 'factoryAddress_ASC_NULLS_FIRST',
  FactoryAddressAscNullsLast = 'factoryAddress_ASC_NULLS_LAST',
  FactoryAddressDesc = 'factoryAddress_DESC',
  FactoryAddressDescNullsFirst = 'factoryAddress_DESC_NULLS_FIRST',
  FactoryAddressDescNullsLast = 'factoryAddress_DESC_NULLS_LAST',
  HoldersAsc = 'holders_ASC',
  HoldersAscNullsFirst = 'holders_ASC_NULLS_FIRST',
  HoldersAscNullsLast = 'holders_ASC_NULLS_LAST',
  HoldersDesc = 'holders_DESC',
  HoldersDescNullsFirst = 'holders_DESC_NULLS_FIRST',
  HoldersDescNullsLast = 'holders_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  LastUpdatedAtBlockTimestampAsc = 'lastUpdatedAtBlockTimestamp_ASC',
  LastUpdatedAtBlockTimestampAscNullsFirst = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampAscNullsLast = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  LastUpdatedAtBlockTimestampDesc = 'lastUpdatedAtBlockTimestamp_DESC',
  LastUpdatedAtBlockTimestampDescNullsFirst = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampDescNullsLast = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  LastUpdatedAtAsc = 'lastUpdatedAt_ASC',
  LastUpdatedAtAscNullsFirst = 'lastUpdatedAt_ASC_NULLS_FIRST',
  LastUpdatedAtAscNullsLast = 'lastUpdatedAt_ASC_NULLS_LAST',
  LastUpdatedAtDesc = 'lastUpdatedAt_DESC',
  LastUpdatedAtDescNullsFirst = 'lastUpdatedAt_DESC_NULLS_FIRST',
  LastUpdatedAtDescNullsLast = 'lastUpdatedAt_DESC_NULLS_LAST',
  NameAsc = 'name_ASC',
  NameAscNullsFirst = 'name_ASC_NULLS_FIRST',
  NameAscNullsLast = 'name_ASC_NULLS_LAST',
  NameDesc = 'name_DESC',
  NameDescNullsFirst = 'name_DESC_NULLS_FIRST',
  NameDescNullsLast = 'name_DESC_NULLS_LAST',
  PictureRetryCountAsc = 'pictureRetryCount_ASC',
  PictureRetryCountAscNullsFirst = 'pictureRetryCount_ASC_NULLS_FIRST',
  PictureRetryCountAscNullsLast = 'pictureRetryCount_ASC_NULLS_LAST',
  PictureRetryCountDesc = 'pictureRetryCount_DESC',
  PictureRetryCountDescNullsFirst = 'pictureRetryCount_DESC_NULLS_FIRST',
  PictureRetryCountDescNullsLast = 'pictureRetryCount_DESC_NULLS_LAST',
  SymbolAsc = 'symbol_ASC',
  SymbolAscNullsFirst = 'symbol_ASC_NULLS_FIRST',
  SymbolAscNullsLast = 'symbol_ASC_NULLS_LAST',
  SymbolDesc = 'symbol_DESC',
  SymbolDescNullsFirst = 'symbol_DESC_NULLS_FIRST',
  SymbolDescNullsLast = 'symbol_DESC_NULLS_LAST',
  TokenMetricsFdvAsc = 'tokenMetrics_fdv_ASC',
  TokenMetricsFdvAscNullsFirst = 'tokenMetrics_fdv_ASC_NULLS_FIRST',
  TokenMetricsFdvAscNullsLast = 'tokenMetrics_fdv_ASC_NULLS_LAST',
  TokenMetricsFdvDesc = 'tokenMetrics_fdv_DESC',
  TokenMetricsFdvDescNullsFirst = 'tokenMetrics_fdv_DESC_NULLS_FIRST',
  TokenMetricsFdvDescNullsLast = 'tokenMetrics_fdv_DESC_NULLS_LAST',
  TokenMetricsIdAsc = 'tokenMetrics_id_ASC',
  TokenMetricsIdAscNullsFirst = 'tokenMetrics_id_ASC_NULLS_FIRST',
  TokenMetricsIdAscNullsLast = 'tokenMetrics_id_ASC_NULLS_LAST',
  TokenMetricsIdDesc = 'tokenMetrics_id_DESC',
  TokenMetricsIdDescNullsFirst = 'tokenMetrics_id_DESC_NULLS_FIRST',
  TokenMetricsIdDescNullsLast = 'tokenMetrics_id_DESC_NULLS_LAST',
  TokenMetricsLastUpdatedAtBlockTimestampAsc = 'tokenMetrics_lastUpdatedAtBlockTimestamp_ASC',
  TokenMetricsLastUpdatedAtBlockTimestampAscNullsFirst = 'tokenMetrics_lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  TokenMetricsLastUpdatedAtBlockTimestampAscNullsLast = 'tokenMetrics_lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  TokenMetricsLastUpdatedAtBlockTimestampDesc = 'tokenMetrics_lastUpdatedAtBlockTimestamp_DESC',
  TokenMetricsLastUpdatedAtBlockTimestampDescNullsFirst = 'tokenMetrics_lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  TokenMetricsLastUpdatedAtBlockTimestampDescNullsLast = 'tokenMetrics_lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  TokenMetricsLastUpdatedAtAsc = 'tokenMetrics_lastUpdatedAt_ASC',
  TokenMetricsLastUpdatedAtAscNullsFirst = 'tokenMetrics_lastUpdatedAt_ASC_NULLS_FIRST',
  TokenMetricsLastUpdatedAtAscNullsLast = 'tokenMetrics_lastUpdatedAt_ASC_NULLS_LAST',
  TokenMetricsLastUpdatedAtDesc = 'tokenMetrics_lastUpdatedAt_DESC',
  TokenMetricsLastUpdatedAtDescNullsFirst = 'tokenMetrics_lastUpdatedAt_DESC_NULLS_FIRST',
  TokenMetricsLastUpdatedAtDescNullsLast = 'tokenMetrics_lastUpdatedAt_DESC_NULLS_LAST',
  TokenMetricsMarketCapUsdAsc = 'tokenMetrics_marketCapUSD_ASC',
  TokenMetricsMarketCapUsdAscNullsFirst = 'tokenMetrics_marketCapUSD_ASC_NULLS_FIRST',
  TokenMetricsMarketCapUsdAscNullsLast = 'tokenMetrics_marketCapUSD_ASC_NULLS_LAST',
  TokenMetricsMarketCapUsdDesc = 'tokenMetrics_marketCapUSD_DESC',
  TokenMetricsMarketCapUsdDescNullsFirst = 'tokenMetrics_marketCapUSD_DESC_NULLS_FIRST',
  TokenMetricsMarketCapUsdDescNullsLast = 'tokenMetrics_marketCapUSD_DESC_NULLS_LAST',
  TokenMetricsPrice24hDeltaAsc = 'tokenMetrics_price24hDelta_ASC',
  TokenMetricsPrice24hDeltaAscNullsFirst = 'tokenMetrics_price24hDelta_ASC_NULLS_FIRST',
  TokenMetricsPrice24hDeltaAscNullsLast = 'tokenMetrics_price24hDelta_ASC_NULLS_LAST',
  TokenMetricsPrice24hDeltaDesc = 'tokenMetrics_price24hDelta_DESC',
  TokenMetricsPrice24hDeltaDescNullsFirst = 'tokenMetrics_price24hDelta_DESC_NULLS_FIRST',
  TokenMetricsPrice24hDeltaDescNullsLast = 'tokenMetrics_price24hDelta_DESC_NULLS_LAST',
  TokenMetricsPriceEthAsc = 'tokenMetrics_priceETH_ASC',
  TokenMetricsPriceEthAscNullsFirst = 'tokenMetrics_priceETH_ASC_NULLS_FIRST',
  TokenMetricsPriceEthAscNullsLast = 'tokenMetrics_priceETH_ASC_NULLS_LAST',
  TokenMetricsPriceEthDesc = 'tokenMetrics_priceETH_DESC',
  TokenMetricsPriceEthDescNullsFirst = 'tokenMetrics_priceETH_DESC_NULLS_FIRST',
  TokenMetricsPriceEthDescNullsLast = 'tokenMetrics_priceETH_DESC_NULLS_LAST',
  TokenMetricsPriceUsdAsc = 'tokenMetrics_priceUSD_ASC',
  TokenMetricsPriceUsdAscNullsFirst = 'tokenMetrics_priceUSD_ASC_NULLS_FIRST',
  TokenMetricsPriceUsdAscNullsLast = 'tokenMetrics_priceUSD_ASC_NULLS_LAST',
  TokenMetricsPriceUsdDesc = 'tokenMetrics_priceUSD_DESC',
  TokenMetricsPriceUsdDescNullsFirst = 'tokenMetrics_priceUSD_DESC_NULLS_FIRST',
  TokenMetricsPriceUsdDescNullsLast = 'tokenMetrics_priceUSD_DESC_NULLS_LAST',
  TokenMetricsTokenAddressAsc = 'tokenMetrics_tokenAddress_ASC',
  TokenMetricsTokenAddressAscNullsFirst = 'tokenMetrics_tokenAddress_ASC_NULLS_FIRST',
  TokenMetricsTokenAddressAscNullsLast = 'tokenMetrics_tokenAddress_ASC_NULLS_LAST',
  TokenMetricsTokenAddressDesc = 'tokenMetrics_tokenAddress_DESC',
  TokenMetricsTokenAddressDescNullsFirst = 'tokenMetrics_tokenAddress_DESC_NULLS_FIRST',
  TokenMetricsTokenAddressDescNullsLast = 'tokenMetrics_tokenAddress_DESC_NULLS_LAST',
  TokenMetricsTotalLiquidityAllPairsUsdAsc = 'tokenMetrics_totalLiquidityAllPairsUSD_ASC',
  TokenMetricsTotalLiquidityAllPairsUsdAscNullsFirst = 'tokenMetrics_totalLiquidityAllPairsUSD_ASC_NULLS_FIRST',
  TokenMetricsTotalLiquidityAllPairsUsdAscNullsLast = 'tokenMetrics_totalLiquidityAllPairsUSD_ASC_NULLS_LAST',
  TokenMetricsTotalLiquidityAllPairsUsdDesc = 'tokenMetrics_totalLiquidityAllPairsUSD_DESC',
  TokenMetricsTotalLiquidityAllPairsUsdDescNullsFirst = 'tokenMetrics_totalLiquidityAllPairsUSD_DESC_NULLS_FIRST',
  TokenMetricsTotalLiquidityAllPairsUsdDescNullsLast = 'tokenMetrics_totalLiquidityAllPairsUSD_DESC_NULLS_LAST',
  TokenMetricsTotalLiquidityAllPairsAsc = 'tokenMetrics_totalLiquidityAllPairs_ASC',
  TokenMetricsTotalLiquidityAllPairsAscNullsFirst = 'tokenMetrics_totalLiquidityAllPairs_ASC_NULLS_FIRST',
  TokenMetricsTotalLiquidityAllPairsAscNullsLast = 'tokenMetrics_totalLiquidityAllPairs_ASC_NULLS_LAST',
  TokenMetricsTotalLiquidityAllPairsDesc = 'tokenMetrics_totalLiquidityAllPairs_DESC',
  TokenMetricsTotalLiquidityAllPairsDescNullsFirst = 'tokenMetrics_totalLiquidityAllPairs_DESC_NULLS_FIRST',
  TokenMetricsTotalLiquidityAllPairsDescNullsLast = 'tokenMetrics_totalLiquidityAllPairs_DESC_NULLS_LAST',
  TokenMetricsTradeVolume24hAsc = 'tokenMetrics_tradeVolume24h_ASC',
  TokenMetricsTradeVolume24hAscNullsFirst = 'tokenMetrics_tradeVolume24h_ASC_NULLS_FIRST',
  TokenMetricsTradeVolume24hAscNullsLast = 'tokenMetrics_tradeVolume24h_ASC_NULLS_LAST',
  TokenMetricsTradeVolume24hDesc = 'tokenMetrics_tradeVolume24h_DESC',
  TokenMetricsTradeVolume24hDescNullsFirst = 'tokenMetrics_tradeVolume24h_DESC_NULLS_FIRST',
  TokenMetricsTradeVolume24hDescNullsLast = 'tokenMetrics_tradeVolume24h_DESC_NULLS_LAST',
  TokenMetricsTradeVolumeEth24hAsc = 'tokenMetrics_tradeVolumeETH24h_ASC',
  TokenMetricsTradeVolumeEth24hAscNullsFirst = 'tokenMetrics_tradeVolumeETH24h_ASC_NULLS_FIRST',
  TokenMetricsTradeVolumeEth24hAscNullsLast = 'tokenMetrics_tradeVolumeETH24h_ASC_NULLS_LAST',
  TokenMetricsTradeVolumeEth24hDesc = 'tokenMetrics_tradeVolumeETH24h_DESC',
  TokenMetricsTradeVolumeEth24hDescNullsFirst = 'tokenMetrics_tradeVolumeETH24h_DESC_NULLS_FIRST',
  TokenMetricsTradeVolumeEth24hDescNullsLast = 'tokenMetrics_tradeVolumeETH24h_DESC_NULLS_LAST',
  TokenMetricsTradeVolumeUsd24hAsc = 'tokenMetrics_tradeVolumeUSD24h_ASC',
  TokenMetricsTradeVolumeUsd24hAscNullsFirst = 'tokenMetrics_tradeVolumeUSD24h_ASC_NULLS_FIRST',
  TokenMetricsTradeVolumeUsd24hAscNullsLast = 'tokenMetrics_tradeVolumeUSD24h_ASC_NULLS_LAST',
  TokenMetricsTradeVolumeUsd24hDesc = 'tokenMetrics_tradeVolumeUSD24h_DESC',
  TokenMetricsTradeVolumeUsd24hDescNullsFirst = 'tokenMetrics_tradeVolumeUSD24h_DESC_NULLS_FIRST',
  TokenMetricsTradeVolumeUsd24hDescNullsLast = 'tokenMetrics_tradeVolumeUSD24h_DESC_NULLS_LAST',
  TokenMetricsTxCount24hAsc = 'tokenMetrics_txCount24h_ASC',
  TokenMetricsTxCount24hAscNullsFirst = 'tokenMetrics_txCount24h_ASC_NULLS_FIRST',
  TokenMetricsTxCount24hAscNullsLast = 'tokenMetrics_txCount24h_ASC_NULLS_LAST',
  TokenMetricsTxCount24hDesc = 'tokenMetrics_txCount24h_DESC',
  TokenMetricsTxCount24hDescNullsFirst = 'tokenMetrics_txCount24h_DESC_NULLS_FIRST',
  TokenMetricsTxCount24hDescNullsLast = 'tokenMetrics_txCount24h_DESC_NULLS_LAST',
  TokenMetricsTxCountTotalAsc = 'tokenMetrics_txCountTotal_ASC',
  TokenMetricsTxCountTotalAscNullsFirst = 'tokenMetrics_txCountTotal_ASC_NULLS_FIRST',
  TokenMetricsTxCountTotalAscNullsLast = 'tokenMetrics_txCountTotal_ASC_NULLS_LAST',
  TokenMetricsTxCountTotalDesc = 'tokenMetrics_txCountTotal_DESC',
  TokenMetricsTxCountTotalDescNullsFirst = 'tokenMetrics_txCountTotal_DESC_NULLS_FIRST',
  TokenMetricsTxCountTotalDescNullsLast = 'tokenMetrics_txCountTotal_DESC_NULLS_LAST',
  TokenPictureAsc = 'tokenPicture_ASC',
  TokenPictureAscNullsFirst = 'tokenPicture_ASC_NULLS_FIRST',
  TokenPictureAscNullsLast = 'tokenPicture_ASC_NULLS_LAST',
  TokenPictureDesc = 'tokenPicture_DESC',
  TokenPictureDescNullsFirst = 'tokenPicture_DESC_NULLS_FIRST',
  TokenPictureDescNullsLast = 'tokenPicture_DESC_NULLS_LAST',
  TotalSupplyAsc = 'totalSupply_ASC',
  TotalSupplyAscNullsFirst = 'totalSupply_ASC_NULLS_FIRST',
  TotalSupplyAscNullsLast = 'totalSupply_ASC_NULLS_LAST',
  TotalSupplyDesc = 'totalSupply_DESC',
  TotalSupplyDescNullsFirst = 'totalSupply_DESC_NULLS_FIRST',
  TotalSupplyDescNullsLast = 'totalSupply_DESC_NULLS_LAST',
}

export type TokenPricePoint = {
  __typename?: 'TokenPricePoint';
  priceUSD?: Maybe<Scalars['String']['output']>;
  timestamp: Scalars['String']['output'];
};

export type TokenWhereInput = {
  AND?: InputMaybe<Array<TokenWhereInput>>;
  OR?: InputMaybe<Array<TokenWhereInput>>;
  circulationSupply_eq?: InputMaybe<Scalars['BigInt']['input']>;
  circulationSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  circulationSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  circulationSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  circulationSupply_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  circulationSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  circulationSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  circulationSupply_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  circulationSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  decimals_eq?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_gt?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_gte?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  decimals_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  decimals_lt?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_lte?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  decimals_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  factoryAddress_contains?: InputMaybe<Scalars['String']['input']>;
  factoryAddress_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  factoryAddress_endsWith?: InputMaybe<Scalars['String']['input']>;
  factoryAddress_eq?: InputMaybe<Scalars['String']['input']>;
  factoryAddress_gt?: InputMaybe<Scalars['String']['input']>;
  factoryAddress_gte?: InputMaybe<Scalars['String']['input']>;
  factoryAddress_in?: InputMaybe<Array<Scalars['String']['input']>>;
  factoryAddress_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  factoryAddress_lt?: InputMaybe<Scalars['String']['input']>;
  factoryAddress_lte?: InputMaybe<Scalars['String']['input']>;
  factoryAddress_not_contains?: InputMaybe<Scalars['String']['input']>;
  factoryAddress_not_containsInsensitive?: InputMaybe<
    Scalars['String']['input']
  >;
  factoryAddress_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  factoryAddress_not_eq?: InputMaybe<Scalars['String']['input']>;
  factoryAddress_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  factoryAddress_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  factoryAddress_startsWith?: InputMaybe<Scalars['String']['input']>;
  holders_eq?: InputMaybe<Scalars['BigInt']['input']>;
  holders_gt?: InputMaybe<Scalars['BigInt']['input']>;
  holders_gte?: InputMaybe<Scalars['BigInt']['input']>;
  holders_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  holders_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  holders_lt?: InputMaybe<Scalars['BigInt']['input']>;
  holders_lte?: InputMaybe<Scalars['BigInt']['input']>;
  holders_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  holders_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  lastUpdatedAtBlockTimestamp_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAtBlockTimestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAtBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAt_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  pictureRetryCount_eq?: InputMaybe<Scalars['Int']['input']>;
  pictureRetryCount_gt?: InputMaybe<Scalars['Int']['input']>;
  pictureRetryCount_gte?: InputMaybe<Scalars['Int']['input']>;
  pictureRetryCount_in?: InputMaybe<Array<Scalars['Int']['input']>>;
  pictureRetryCount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  pictureRetryCount_lt?: InputMaybe<Scalars['Int']['input']>;
  pictureRetryCount_lte?: InputMaybe<Scalars['Int']['input']>;
  pictureRetryCount_not_eq?: InputMaybe<Scalars['Int']['input']>;
  pictureRetryCount_not_in?: InputMaybe<Array<Scalars['Int']['input']>>;
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
  tokenMetrics?: InputMaybe<TokenMetricsWhereInput>;
  tokenMetrics_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tokenPicture_contains?: InputMaybe<Scalars['String']['input']>;
  tokenPicture_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  tokenPicture_endsWith?: InputMaybe<Scalars['String']['input']>;
  tokenPicture_eq?: InputMaybe<Scalars['String']['input']>;
  tokenPicture_gt?: InputMaybe<Scalars['String']['input']>;
  tokenPicture_gte?: InputMaybe<Scalars['String']['input']>;
  tokenPicture_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenPicture_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  tokenPicture_lt?: InputMaybe<Scalars['String']['input']>;
  tokenPicture_lte?: InputMaybe<Scalars['String']['input']>;
  tokenPicture_not_contains?: InputMaybe<Scalars['String']['input']>;
  tokenPicture_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  tokenPicture_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  tokenPicture_not_eq?: InputMaybe<Scalars['String']['input']>;
  tokenPicture_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  tokenPicture_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  tokenPicture_startsWith?: InputMaybe<Scalars['String']['input']>;
  totalSupply_eq?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_gte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  totalSupply_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  totalSupply_lt?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_lte?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  totalSupply_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
};

export type TokensConnection = {
  __typename?: 'TokensConnection';
  edges: Array<TokenEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type Trade = {
  __typename?: 'Trade';
  amountETH: Scalars['BigDecimal']['output'];
  amountToken: Scalars['BigDecimal']['output'];
  amountUSD?: Maybe<Scalars['BigDecimal']['output']>;
  id: Scalars['String']['output'];
  lastUpdatedAt: Scalars['BigInt']['output'];
  lastUpdatedAtBlockTimestamp: Scalars['BigInt']['output'];
  timestamp: Scalars['BigInt']['output'];
  tokenAddress: Scalars['String']['output'];
  txHash?: Maybe<Scalars['String']['output']>;
  type: TradeType;
  userAddress: Scalars['String']['output'];
};

export type TradeEdge = {
  __typename?: 'TradeEdge';
  cursor: Scalars['String']['output'];
  node: Trade;
};

export enum TradeOrderByInput {
  AmountEthAsc = 'amountETH_ASC',
  AmountEthAscNullsFirst = 'amountETH_ASC_NULLS_FIRST',
  AmountEthAscNullsLast = 'amountETH_ASC_NULLS_LAST',
  AmountEthDesc = 'amountETH_DESC',
  AmountEthDescNullsFirst = 'amountETH_DESC_NULLS_FIRST',
  AmountEthDescNullsLast = 'amountETH_DESC_NULLS_LAST',
  AmountTokenAsc = 'amountToken_ASC',
  AmountTokenAscNullsFirst = 'amountToken_ASC_NULLS_FIRST',
  AmountTokenAscNullsLast = 'amountToken_ASC_NULLS_LAST',
  AmountTokenDesc = 'amountToken_DESC',
  AmountTokenDescNullsFirst = 'amountToken_DESC_NULLS_FIRST',
  AmountTokenDescNullsLast = 'amountToken_DESC_NULLS_LAST',
  AmountUsdAsc = 'amountUSD_ASC',
  AmountUsdAscNullsFirst = 'amountUSD_ASC_NULLS_FIRST',
  AmountUsdAscNullsLast = 'amountUSD_ASC_NULLS_LAST',
  AmountUsdDesc = 'amountUSD_DESC',
  AmountUsdDescNullsFirst = 'amountUSD_DESC_NULLS_FIRST',
  AmountUsdDescNullsLast = 'amountUSD_DESC_NULLS_LAST',
  IdAsc = 'id_ASC',
  IdAscNullsFirst = 'id_ASC_NULLS_FIRST',
  IdAscNullsLast = 'id_ASC_NULLS_LAST',
  IdDesc = 'id_DESC',
  IdDescNullsFirst = 'id_DESC_NULLS_FIRST',
  IdDescNullsLast = 'id_DESC_NULLS_LAST',
  LastUpdatedAtBlockTimestampAsc = 'lastUpdatedAtBlockTimestamp_ASC',
  LastUpdatedAtBlockTimestampAscNullsFirst = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampAscNullsLast = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  LastUpdatedAtBlockTimestampDesc = 'lastUpdatedAtBlockTimestamp_DESC',
  LastUpdatedAtBlockTimestampDescNullsFirst = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampDescNullsLast = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  LastUpdatedAtAsc = 'lastUpdatedAt_ASC',
  LastUpdatedAtAscNullsFirst = 'lastUpdatedAt_ASC_NULLS_FIRST',
  LastUpdatedAtAscNullsLast = 'lastUpdatedAt_ASC_NULLS_LAST',
  LastUpdatedAtDesc = 'lastUpdatedAt_DESC',
  LastUpdatedAtDescNullsFirst = 'lastUpdatedAt_DESC_NULLS_FIRST',
  LastUpdatedAtDescNullsLast = 'lastUpdatedAt_DESC_NULLS_LAST',
  TimestampAsc = 'timestamp_ASC',
  TimestampAscNullsFirst = 'timestamp_ASC_NULLS_FIRST',
  TimestampAscNullsLast = 'timestamp_ASC_NULLS_LAST',
  TimestampDesc = 'timestamp_DESC',
  TimestampDescNullsFirst = 'timestamp_DESC_NULLS_FIRST',
  TimestampDescNullsLast = 'timestamp_DESC_NULLS_LAST',
  TokenAddressAsc = 'tokenAddress_ASC',
  TokenAddressAscNullsFirst = 'tokenAddress_ASC_NULLS_FIRST',
  TokenAddressAscNullsLast = 'tokenAddress_ASC_NULLS_LAST',
  TokenAddressDesc = 'tokenAddress_DESC',
  TokenAddressDescNullsFirst = 'tokenAddress_DESC_NULLS_FIRST',
  TokenAddressDescNullsLast = 'tokenAddress_DESC_NULLS_LAST',
  TxHashAsc = 'txHash_ASC',
  TxHashAscNullsFirst = 'txHash_ASC_NULLS_FIRST',
  TxHashAscNullsLast = 'txHash_ASC_NULLS_LAST',
  TxHashDesc = 'txHash_DESC',
  TxHashDescNullsFirst = 'txHash_DESC_NULLS_FIRST',
  TxHashDescNullsLast = 'txHash_DESC_NULLS_LAST',
  TypeAsc = 'type_ASC',
  TypeAscNullsFirst = 'type_ASC_NULLS_FIRST',
  TypeAscNullsLast = 'type_ASC_NULLS_LAST',
  TypeDesc = 'type_DESC',
  TypeDescNullsFirst = 'type_DESC_NULLS_FIRST',
  TypeDescNullsLast = 'type_DESC_NULLS_LAST',
  UserAddressAsc = 'userAddress_ASC',
  UserAddressAscNullsFirst = 'userAddress_ASC_NULLS_FIRST',
  UserAddressAscNullsLast = 'userAddress_ASC_NULLS_LAST',
  UserAddressDesc = 'userAddress_DESC',
  UserAddressDescNullsFirst = 'userAddress_DESC_NULLS_FIRST',
  UserAddressDescNullsLast = 'userAddress_DESC_NULLS_LAST',
}

export enum TradeType {
  Buy = 'BUY',
  Sell = 'SELL',
}

export type TradeWhereInput = {
  AND?: InputMaybe<Array<TradeWhereInput>>;
  OR?: InputMaybe<Array<TradeWhereInput>>;
  amountETH_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountETH_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountETH_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountETH_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amountETH_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  amountETH_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountETH_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountETH_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountETH_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amountToken_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountToken_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountToken_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountToken_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amountToken_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  amountToken_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountToken_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountToken_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountToken_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amountUSD_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_gt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_gte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
  amountUSD_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  amountUSD_lt?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_lte?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_not_eq?: InputMaybe<Scalars['BigDecimal']['input']>;
  amountUSD_not_in?: InputMaybe<Array<Scalars['BigDecimal']['input']>>;
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
  lastUpdatedAtBlockTimestamp_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAtBlockTimestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAtBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAt_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_eq?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  timestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  timestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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
  txHash_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  txHash_endsWith?: InputMaybe<Scalars['String']['input']>;
  txHash_eq?: InputMaybe<Scalars['String']['input']>;
  txHash_gt?: InputMaybe<Scalars['String']['input']>;
  txHash_gte?: InputMaybe<Scalars['String']['input']>;
  txHash_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txHash_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  txHash_lt?: InputMaybe<Scalars['String']['input']>;
  txHash_lte?: InputMaybe<Scalars['String']['input']>;
  txHash_not_contains?: InputMaybe<Scalars['String']['input']>;
  txHash_not_containsInsensitive?: InputMaybe<Scalars['String']['input']>;
  txHash_not_endsWith?: InputMaybe<Scalars['String']['input']>;
  txHash_not_eq?: InputMaybe<Scalars['String']['input']>;
  txHash_not_in?: InputMaybe<Array<Scalars['String']['input']>>;
  txHash_not_startsWith?: InputMaybe<Scalars['String']['input']>;
  txHash_startsWith?: InputMaybe<Scalars['String']['input']>;
  type_eq?: InputMaybe<TradeType>;
  type_in?: InputMaybe<Array<TradeType>>;
  type_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  type_not_eq?: InputMaybe<TradeType>;
  type_not_in?: InputMaybe<Array<TradeType>>;
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
};

export type TradesConnection = {
  __typename?: 'TradesConnection';
  edges: Array<TradeEdge>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int']['output'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['String']['output'];
  lastUpdatedAt: Scalars['BigInt']['output'];
  lastUpdatedAtBlockTimestamp: Scalars['BigInt']['output'];
  liquidityPositions: Array<CurrentLiquidityPosition>;
  swapsAmount: Scalars['BigInt']['output'];
  usdSwapped: Scalars['BigDecimal']['output'];
};

export type UserLiquidityPositionsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<Array<CurrentLiquidityPositionOrderByInput>>;
  where?: InputMaybe<CurrentLiquidityPositionWhereInput>;
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
  LastUpdatedAtBlockTimestampAsc = 'lastUpdatedAtBlockTimestamp_ASC',
  LastUpdatedAtBlockTimestampAscNullsFirst = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampAscNullsLast = 'lastUpdatedAtBlockTimestamp_ASC_NULLS_LAST',
  LastUpdatedAtBlockTimestampDesc = 'lastUpdatedAtBlockTimestamp_DESC',
  LastUpdatedAtBlockTimestampDescNullsFirst = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_FIRST',
  LastUpdatedAtBlockTimestampDescNullsLast = 'lastUpdatedAtBlockTimestamp_DESC_NULLS_LAST',
  LastUpdatedAtAsc = 'lastUpdatedAt_ASC',
  LastUpdatedAtAscNullsFirst = 'lastUpdatedAt_ASC_NULLS_FIRST',
  LastUpdatedAtAscNullsLast = 'lastUpdatedAt_ASC_NULLS_LAST',
  LastUpdatedAtDesc = 'lastUpdatedAt_DESC',
  LastUpdatedAtDescNullsFirst = 'lastUpdatedAt_DESC_NULLS_FIRST',
  LastUpdatedAtDescNullsLast = 'lastUpdatedAt_DESC_NULLS_LAST',
  SwapsAmountAsc = 'swapsAmount_ASC',
  SwapsAmountAscNullsFirst = 'swapsAmount_ASC_NULLS_FIRST',
  SwapsAmountAscNullsLast = 'swapsAmount_ASC_NULLS_LAST',
  SwapsAmountDesc = 'swapsAmount_DESC',
  SwapsAmountDescNullsFirst = 'swapsAmount_DESC_NULLS_FIRST',
  SwapsAmountDescNullsLast = 'swapsAmount_DESC_NULLS_LAST',
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
  lastUpdatedAtBlockTimestamp_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAtBlockTimestamp_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAtBlockTimestamp_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAtBlockTimestamp_not_in?: InputMaybe<
    Array<Scalars['BigInt']['input']>
  >;
  lastUpdatedAt_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_gte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  lastUpdatedAt_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  lastUpdatedAt_lt?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_lte?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  lastUpdatedAt_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  liquidityPositions_every?: InputMaybe<CurrentLiquidityPositionWhereInput>;
  liquidityPositions_none?: InputMaybe<CurrentLiquidityPositionWhereInput>;
  liquidityPositions_some?: InputMaybe<CurrentLiquidityPositionWhereInput>;
  swapsAmount_eq?: InputMaybe<Scalars['BigInt']['input']>;
  swapsAmount_gt?: InputMaybe<Scalars['BigInt']['input']>;
  swapsAmount_gte?: InputMaybe<Scalars['BigInt']['input']>;
  swapsAmount_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
  swapsAmount_isNull?: InputMaybe<Scalars['Boolean']['input']>;
  swapsAmount_lt?: InputMaybe<Scalars['BigInt']['input']>;
  swapsAmount_lte?: InputMaybe<Scalars['BigInt']['input']>;
  swapsAmount_not_eq?: InputMaybe<Scalars['BigInt']['input']>;
  swapsAmount_not_in?: InputMaybe<Array<Scalars['BigInt']['input']>>;
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

export type HistoricalPairMetricsQueryVariables = Exact<{
  where?: InputMaybe<HistoricalPairMetricsWhereInput>;
  orderBy?: InputMaybe<
    Array<HistoricalPairMetricsOrderByInput> | HistoricalPairMetricsOrderByInput
  >;
}>;

export type HistoricalPairMetricsQuery = {
  __typename?: 'Query';
  historicalPairMetrics: Array<{
    __typename?: 'HistoricalPairMetrics';
    id: string;
    date: any;
    pairAddress: string;
    token0: string;
    token1: string;
    reserve0: any;
    reserve1: any;
    liquidityUSD?: any | null;
    lpTotalSupply: any;
    lpTotalLocked: any;
    token0Price: any;
    token1Price: any;
    txCount24h: any;
    txCountTotal: any;
    liquidityProviderCount: any;
    lastUpdatedAt: any;
    lastUpdatedAtBlockTimestamp: any;
  }>;
};

export type PairByIdQueryVariables = Exact<{
  pairByIdId: Scalars['String']['input'];
}>;

export type PairByIdQuery = {
  __typename?: 'Query';
  pairById?: {
    __typename?: 'Pair';
    id: string;
    token0Id?: string | null;
    token1Id?: string | null;
    reserve0: any;
    reserve1: any;
    liquidityUSD?: any | null;
    liquidity24hDelta: any;
    lpTotalSupply: any;
    lpTotalLocked: any;
    lpDecimals: any;
    token0Price: any;
    token1Price: any;
    txCount24h: any;
    txCountTotal: any;
    tradeVolume24h: any;
    tradeVolumeUSD24h: any;
    tradeVolumeETH24h: any;
    tradeVolume24hDelta: any;
    fees24h: any;
    feesUSD24h: any;
    feesETH24h: any;
    fees24hDelta?: any | null;
    createdAtTimestamp: any;
    createdAtBlockNumber: any;
    liquidityProviderCount: any;
    factoryAddress?: string | null;
    lastUpdatedAt: any;
    lastUpdatedAtBlockTimestamp: any;
    token0: {
      __typename?: 'Token';
      id: string;
      symbol: string;
      name: string;
      decimals: any;
      totalSupply: any;
      circulationSupply: any;
      holders: any;
      tokenPicture?: string | null;
      factoryAddress?: string | null;
      lastUpdatedAt: any;
      lastUpdatedAtBlockTimestamp: any;
      tokenMetrics: {
        __typename?: 'TokenMetrics';
        id: string;
        tokenAddress: string;
        priceUSD?: any | null;
        priceETH?: any | null;
        price24hDelta?: any | null;
        marketCapUSD: any;
        fdv?: any | null;
        tradeVolume24h: any;
        tradeVolumeUSD24h: any;
        tradeVolumeETH24h: any;
        txCount24h: any;
        txCountTotal: any;
        totalLiquidityAllPairs: any;
        totalLiquidityAllPairsUSD: any;
        lastUpdatedAt: any;
        lastUpdatedAtBlockTimestamp: any;
      };
    };
    token1: {
      __typename?: 'Token';
      id: string;
      symbol: string;
      name: string;
      tokenPicture?: string | null;
      decimals: any;
      totalSupply: any;
      circulationSupply: any;
      holders: any;
      factoryAddress?: string | null;
      lastUpdatedAt: any;
      lastUpdatedAtBlockTimestamp: any;
      tokenMetrics: {
        __typename?: 'TokenMetrics';
        id: string;
        tokenAddress: string;
        priceUSD?: any | null;
        priceETH?: any | null;
        price24hDelta?: any | null;
        marketCapUSD: any;
        fdv?: any | null;
        tradeVolume24h: any;
        tradeVolumeUSD24h: any;
        tradeVolumeETH24h: any;
        txCount24h: any;
        txCountTotal: any;
        totalLiquidityAllPairs: any;
        totalLiquidityAllPairsUSD: any;
        lastUpdatedAt: any;
        lastUpdatedAtBlockTimestamp: any;
      };
    };
  } | null;
};

export type GetPairPricesQueryQueryVariables = Exact<{
  maxPoints: Scalars['Int']['input'];
  from: Scalars['String']['input'];
  to: Scalars['String']['input'];
  token0Address: Scalars['String']['input'];
  token1Address: Scalars['String']['input'];
}>;

export type GetPairPricesQueryQuery = {
  __typename?: 'Query';
  pairPrices: Array<{
    __typename?: 'PairPricePoint';
    timestamp: string;
    token0?: {
      __typename?: 'TokenInPair';
      tokenAddress: string;
      tokenPrice?: string | null;
    } | null;
    token1?: {
      __typename?: 'TokenInPair';
      tokenAddress: string;
      tokenPrice?: string | null;
    } | null;
  }>;
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
    token0Id?: string | null;
    token1Id?: string | null;
    reserve0: any;
    reserve1: any;
    liquidityUSD?: any | null;
    liquidity24hDelta: any;
    lpTotalSupply: any;
    lpTotalLocked: any;
    lpDecimals: any;
    token0Price: any;
    token1Price: any;
    txCount24h: any;
    txCountTotal: any;
    tradeVolume24h: any;
    tradeVolumeUSD24h: any;
    tradeVolumeETH24h: any;
    tradeVolume24hDelta: any;
    fees24h: any;
    feesUSD24h: any;
    feesETH24h: any;
    fees24hDelta?: any | null;
    createdAtTimestamp: any;
    createdAtBlockNumber: any;
    liquidityProviderCount: any;
    factoryAddress?: string | null;
    lastUpdatedAt: any;
    lastUpdatedAtBlockTimestamp: any;
    token0: {
      __typename?: 'Token';
      id: string;
      symbol: string;
      name: string;
      decimals: any;
      totalSupply: any;
      circulationSupply: any;
      holders: any;
      tokenPicture?: string | null;
      factoryAddress?: string | null;
      lastUpdatedAt: any;
      lastUpdatedAtBlockTimestamp: any;
      tokenMetrics: {
        __typename?: 'TokenMetrics';
        id: string;
        tokenAddress: string;
        priceUSD?: any | null;
        priceETH?: any | null;
        price24hDelta?: any | null;
        marketCapUSD: any;
        fdv?: any | null;
        tradeVolume24h: any;
        tradeVolumeUSD24h: any;
        tradeVolumeETH24h: any;
        txCount24h: any;
        txCountTotal: any;
        totalLiquidityAllPairs: any;
        totalLiquidityAllPairsUSD: any;
        lastUpdatedAt: any;
        lastUpdatedAtBlockTimestamp: any;
      };
    };
    token1: {
      __typename?: 'Token';
      id: string;
      symbol: string;
      name: string;
      decimals: any;
      totalSupply: any;
      circulationSupply: any;
      holders: any;
      tokenPicture?: string | null;
      factoryAddress?: string | null;
      lastUpdatedAt: any;
      lastUpdatedAtBlockTimestamp: any;
      tokenMetrics: {
        __typename?: 'TokenMetrics';
        id: string;
        tokenAddress: string;
        priceUSD?: any | null;
        priceETH?: any | null;
        price24hDelta?: any | null;
        marketCapUSD: any;
        fdv?: any | null;
        tradeVolume24h: any;
        tradeVolumeUSD24h: any;
        tradeVolumeETH24h: any;
        txCount24h: any;
        txCountTotal: any;
        totalLiquidityAllPairs: any;
        totalLiquidityAllPairsUSD: any;
        lastUpdatedAt: any;
        lastUpdatedAtBlockTimestamp: any;
      };
    };
  }>;
};

export type CurrentLiquidityPositionsQueryVariables = Exact<{
  where?: InputMaybe<CurrentLiquidityPositionWhereInput>;
  orderBy?: InputMaybe<
    | Array<CurrentLiquidityPositionOrderByInput>
    | CurrentLiquidityPositionOrderByInput
  >;
  offset?: InputMaybe<Scalars['Int']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
}>;

export type CurrentLiquidityPositionsQuery = {
  __typename?: 'Query';
  currentLiquidityPositions: Array<{
    __typename?: 'CurrentLiquidityPosition';
    id: string;
    liquidityTokenBalance: any;
    lastUpdatedAt: any;
    lastUpdatedAtBlockTimestamp: any;
    user: {
      __typename?: 'User';
      id: string;
      usdSwapped: any;
      swapsAmount: any;
      lastUpdatedAt: any;
      lastUpdatedAtBlockTimestamp: any;
    };
    pair: {
      __typename?: 'Pair';
      id: string;
      token0Id?: string | null;
      token1Id?: string | null;
      reserve0: any;
      reserve1: any;
      liquidityUSD?: any | null;
      liquidity24hDelta: any;
      lpTotalSupply: any;
      lpTotalLocked: any;
      lpDecimals: any;
      token0Price: any;
      token1Price: any;
      txCount24h: any;
      txCountTotal: any;
      tradeVolume24h: any;
      tradeVolumeUSD24h: any;
      tradeVolumeETH24h: any;
      tradeVolume24hDelta: any;
      fees24h: any;
      feesUSD24h: any;
      feesETH24h: any;
      fees24hDelta?: any | null;
      createdAtTimestamp: any;
      createdAtBlockNumber: any;
      liquidityProviderCount: any;
      factoryAddress?: string | null;
      lastUpdatedAt: any;
      lastUpdatedAtBlockTimestamp: any;
      token0: {
        __typename?: 'Token';
        id: string;
        symbol: string;
        name: string;
        decimals: any;
        totalSupply: any;
        circulationSupply: any;
        holders: any;
        factoryAddress?: string | null;
        lastUpdatedAt: any;
        lastUpdatedAtBlockTimestamp: any;
        tokenMetrics: {
          __typename?: 'TokenMetrics';
          id: string;
          tokenAddress: string;
          priceUSD?: any | null;
          priceETH?: any | null;
          price24hDelta?: any | null;
          marketCapUSD: any;
          fdv?: any | null;
          tradeVolume24h: any;
          tradeVolumeUSD24h: any;
          tradeVolumeETH24h: any;
          txCount24h: any;
          txCountTotal: any;
          totalLiquidityAllPairs: any;
          totalLiquidityAllPairsUSD: any;
          lastUpdatedAt: any;
          lastUpdatedAtBlockTimestamp: any;
        };
      };
      token1: {
        __typename?: 'Token';
        id: string;
        symbol: string;
        name: string;
        decimals: any;
        totalSupply: any;
        circulationSupply: any;
        holders: any;
        factoryAddress?: string | null;
        lastUpdatedAt: any;
        lastUpdatedAtBlockTimestamp: any;
        tokenMetrics: {
          __typename?: 'TokenMetrics';
          id: string;
          tokenAddress: string;
          priceUSD?: any | null;
          priceETH?: any | null;
          price24hDelta?: any | null;
          marketCapUSD: any;
          fdv?: any | null;
          tradeVolume24h: any;
          tradeVolumeUSD24h: any;
          tradeVolumeETH24h: any;
          txCount24h: any;
          txCountTotal: any;
          totalLiquidityAllPairs: any;
          totalLiquidityAllPairsUSD: any;
          lastUpdatedAt: any;
          lastUpdatedAtBlockTimestamp: any;
        };
      };
    };
  }>;
};

export const HistoricalPairMetricsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'HistoricalPairMetrics' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'HistoricalPairMetricsWhereInput' },
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
                name: {
                  kind: 'Name',
                  value: 'HistoricalPairMetricsOrderByInput',
                },
              },
            },
          },
        },
      ],
      selectionSet: {
        kind: 'SelectionSet',
        selections: [
          {
            kind: 'Field',
            name: { kind: 'Name', value: 'historicalPairMetrics' },
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
                name: { kind: 'Name', value: 'limit' },
                value: { kind: 'IntValue', value: '350' },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                { kind: 'Field', name: { kind: 'Name', value: 'id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'date' } },
                { kind: 'Field', name: { kind: 'Name', value: 'pairAddress' } },
                { kind: 'Field', name: { kind: 'Name', value: 'token0' } },
                { kind: 'Field', name: { kind: 'Name', value: 'token1' } },
                { kind: 'Field', name: { kind: 'Name', value: 'reserve0' } },
                { kind: 'Field', name: { kind: 'Name', value: 'reserve1' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'liquidityUSD' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lpTotalSupply' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lpTotalLocked' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'token0Price' } },
                { kind: 'Field', name: { kind: 'Name', value: 'token1Price' } },
                { kind: 'Field', name: { kind: 'Name', value: 'txCount24h' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'txCountTotal' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'liquidityProviderCount' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lastUpdatedAt' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lastUpdatedAtBlockTimestamp' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  HistoricalPairMetricsQuery,
  HistoricalPairMetricsQueryVariables
>;
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
                        name: { kind: 'Name', value: 'circulationSupply' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'holders' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tokenPicture' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tokenMetrics' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tokenAddress' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'priceUSD' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'priceETH' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'price24hDelta' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'marketCapUSD' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'fdv' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tradeVolume24h' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'tradeVolumeUSD24h',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'tradeVolumeETH24h',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'txCount24h' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'txCountTotal' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'totalLiquidityAllPairs',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'totalLiquidityAllPairsUSD',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'lastUpdatedAt' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'lastUpdatedAtBlockTimestamp',
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'factoryAddress' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastUpdatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'lastUpdatedAtBlockTimestamp',
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
                        name: { kind: 'Name', value: 'tokenPicture' },
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
                        name: { kind: 'Name', value: 'circulationSupply' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'holders' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tokenMetrics' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tokenAddress' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'priceUSD' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'priceETH' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'price24hDelta' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'marketCapUSD' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'fdv' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tradeVolume24h' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'tradeVolumeUSD24h',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'tradeVolumeETH24h',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'txCount24h' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'txCountTotal' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'totalLiquidityAllPairs',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'totalLiquidityAllPairsUSD',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'lastUpdatedAt' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'lastUpdatedAtBlockTimestamp',
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'factoryAddress' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastUpdatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'lastUpdatedAtBlockTimestamp',
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'token0Id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'token1Id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'reserve0' } },
                { kind: 'Field', name: { kind: 'Name', value: 'reserve1' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'liquidityUSD' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'liquidity24hDelta' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lpTotalSupply' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lpTotalLocked' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'lpDecimals' } },
                { kind: 'Field', name: { kind: 'Name', value: 'token0Price' } },
                { kind: 'Field', name: { kind: 'Name', value: 'token1Price' } },
                { kind: 'Field', name: { kind: 'Name', value: 'txCount24h' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'txCountTotal' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tradeVolume24h' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tradeVolumeUSD24h' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tradeVolumeETH24h' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tradeVolume24hDelta' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'fees24h' } },
                { kind: 'Field', name: { kind: 'Name', value: 'feesUSD24h' } },
                { kind: 'Field', name: { kind: 'Name', value: 'feesETH24h' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'fees24hDelta' },
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
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'factoryAddress' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lastUpdatedAt' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lastUpdatedAtBlockTimestamp' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PairByIdQuery, PairByIdQueryVariables>;
export const GetPairPricesQueryDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'GetPairPricesQuery' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'maxPoints' },
          },
          type: {
            kind: 'NonNullType',
            type: { kind: 'NamedType', name: { kind: 'Name', value: 'Int' } },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'from' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: { kind: 'Variable', name: { kind: 'Name', value: 'to' } },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'token0Address' },
          },
          type: {
            kind: 'NonNullType',
            type: {
              kind: 'NamedType',
              name: { kind: 'Name', value: 'String' },
            },
          },
        },
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'token1Address' },
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
            name: { kind: 'Name', value: 'pairPrices' },
            arguments: [
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'maxPoints' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'maxPoints' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'to' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'to' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'from' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'from' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'token0Address' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'token0Address' },
                },
              },
              {
                kind: 'Argument',
                name: { kind: 'Name', value: 'token1Address' },
                value: {
                  kind: 'Variable',
                  name: { kind: 'Name', value: 'token1Address' },
                },
              },
            ],
            selectionSet: {
              kind: 'SelectionSet',
              selections: [
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'token0' },
                  selectionSet: {
                    kind: 'SelectionSet',
                    selections: [
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tokenAddress' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tokenPrice' },
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
                        name: { kind: 'Name', value: 'tokenAddress' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tokenPrice' },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'timestamp' } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetPairPricesQueryQuery,
  GetPairPricesQueryQueryVariables
>;
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
                        name: { kind: 'Name', value: 'circulationSupply' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'holders' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tokenPicture' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tokenMetrics' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tokenAddress' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'priceUSD' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'priceETH' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'price24hDelta' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'marketCapUSD' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'fdv' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tradeVolume24h' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'tradeVolumeUSD24h',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'tradeVolumeETH24h',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'txCount24h' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'txCountTotal' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'totalLiquidityAllPairs',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'totalLiquidityAllPairsUSD',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'lastUpdatedAt' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'lastUpdatedAtBlockTimestamp',
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'factoryAddress' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastUpdatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'lastUpdatedAtBlockTimestamp',
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
                        name: { kind: 'Name', value: 'circulationSupply' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'holders' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tokenPicture' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tokenMetrics' },
                        selectionSet: {
                          kind: 'SelectionSet',
                          selections: [
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'id' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tokenAddress' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'priceUSD' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'priceETH' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'price24hDelta' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'marketCapUSD' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'fdv' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tradeVolume24h' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'tradeVolumeUSD24h',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'tradeVolumeETH24h',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'txCount24h' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'txCountTotal' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'totalLiquidityAllPairs',
                              },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'totalLiquidityAllPairsUSD',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'lastUpdatedAt' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'lastUpdatedAtBlockTimestamp',
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'factoryAddress' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastUpdatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'lastUpdatedAtBlockTimestamp',
                        },
                      },
                    ],
                  },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'token0Id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'token1Id' } },
                { kind: 'Field', name: { kind: 'Name', value: 'reserve0' } },
                { kind: 'Field', name: { kind: 'Name', value: 'reserve1' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'liquidityUSD' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'liquidity24hDelta' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lpTotalSupply' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lpTotalLocked' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'lpDecimals' } },
                { kind: 'Field', name: { kind: 'Name', value: 'token0Price' } },
                { kind: 'Field', name: { kind: 'Name', value: 'token1Price' } },
                { kind: 'Field', name: { kind: 'Name', value: 'txCount24h' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'txCountTotal' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tradeVolume24h' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tradeVolumeUSD24h' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tradeVolumeETH24h' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'tradeVolume24hDelta' },
                },
                { kind: 'Field', name: { kind: 'Name', value: 'fees24h' } },
                { kind: 'Field', name: { kind: 'Name', value: 'feesUSD24h' } },
                { kind: 'Field', name: { kind: 'Name', value: 'feesETH24h' } },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'fees24hDelta' },
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
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'factoryAddress' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lastUpdatedAt' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lastUpdatedAtBlockTimestamp' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<PairsQuery, PairsQueryVariables>;
export const CurrentLiquidityPositionsDocument = {
  kind: 'Document',
  definitions: [
    {
      kind: 'OperationDefinition',
      operation: 'query',
      name: { kind: 'Name', value: 'CurrentLiquidityPositions' },
      variableDefinitions: [
        {
          kind: 'VariableDefinition',
          variable: {
            kind: 'Variable',
            name: { kind: 'Name', value: 'where' },
          },
          type: {
            kind: 'NamedType',
            name: { kind: 'Name', value: 'CurrentLiquidityPositionWhereInput' },
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
                name: {
                  kind: 'Name',
                  value: 'CurrentLiquidityPositionOrderByInput',
                },
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
            name: { kind: 'Name', value: 'currentLiquidityPositions' },
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
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'swapsAmount' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastUpdatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'lastUpdatedAtBlockTimestamp',
                        },
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
                              name: {
                                kind: 'Name',
                                value: 'circulationSupply',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'holders' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tokenMetrics' },
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
                                      value: 'tokenAddress',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'priceUSD' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'priceETH' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'price24hDelta',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'marketCapUSD',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'fdv' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'tradeVolume24h',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'tradeVolumeUSD24h',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'tradeVolumeETH24h',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'txCount24h' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'txCountTotal',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'totalLiquidityAllPairs',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'totalLiquidityAllPairsUSD',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'lastUpdatedAt',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'lastUpdatedAtBlockTimestamp',
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'factoryAddress' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'lastUpdatedAt' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'lastUpdatedAtBlockTimestamp',
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
                              name: {
                                kind: 'Name',
                                value: 'circulationSupply',
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'holders' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'tokenMetrics' },
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
                                      value: 'tokenAddress',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'priceUSD' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'priceETH' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'price24hDelta',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'marketCapUSD',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'fdv' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'tradeVolume24h',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'tradeVolumeUSD24h',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'tradeVolumeETH24h',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: { kind: 'Name', value: 'txCount24h' },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'txCountTotal',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'totalLiquidityAllPairs',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'totalLiquidityAllPairsUSD',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'lastUpdatedAt',
                                    },
                                  },
                                  {
                                    kind: 'Field',
                                    name: {
                                      kind: 'Name',
                                      value: 'lastUpdatedAtBlockTimestamp',
                                    },
                                  },
                                ],
                              },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'factoryAddress' },
                            },
                            {
                              kind: 'Field',
                              name: { kind: 'Name', value: 'lastUpdatedAt' },
                            },
                            {
                              kind: 'Field',
                              name: {
                                kind: 'Name',
                                value: 'lastUpdatedAtBlockTimestamp',
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'token0Id' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'token1Id' },
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
                        name: { kind: 'Name', value: 'liquidityUSD' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'liquidity24hDelta' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lpTotalSupply' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lpTotalLocked' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lpDecimals' },
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
                        name: { kind: 'Name', value: 'txCount24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'txCountTotal' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolume24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolumeUSD24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolumeETH24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'tradeVolume24hDelta' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'fees24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'feesUSD24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'feesETH24h' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'fees24hDelta' },
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
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'factoryAddress' },
                      },
                      {
                        kind: 'Field',
                        name: { kind: 'Name', value: 'lastUpdatedAt' },
                      },
                      {
                        kind: 'Field',
                        name: {
                          kind: 'Name',
                          value: 'lastUpdatedAtBlockTimestamp',
                        },
                      },
                    ],
                  },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'liquidityTokenBalance' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lastUpdatedAt' },
                },
                {
                  kind: 'Field',
                  name: { kind: 'Name', value: 'lastUpdatedAtBlockTimestamp' },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  CurrentLiquidityPositionsQuery,
  CurrentLiquidityPositionsQueryVariables
>;
