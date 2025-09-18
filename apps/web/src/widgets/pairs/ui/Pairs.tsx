'use client';

import { useGetPools } from '@/features/liquidity';
import { AppPreloader } from '@/widgets';
import { PairItem } from '@/widgets/pairs/ui/pair/PairItem';
import { getAddress } from 'viem';
import { css } from '~/styled-system/css';

const COMMUNITY_PAIRS = [
  ['MIDLRUNESTABLECOIN', 'WARTOK'],
  ['WARTOK', 'BTC'],
];
export const Pairs = () => {
  const tokens = [
    ['LOBOTHEWOLFPUP', 'BTC'],
    ['DOGGOTOTHEMOON', 'BTC'],
    ['DOGECOINDOGEDOSU', 'BTC'],
    ['LOBOTHEWOLFPUP', 'BUSD'],
    ['DOGGOTOTHEMOON', 'BUSD'],
    ['DOGECOINDOGEDOSU', 'BUSD'],
    ['BUSD', 'BTC'],
    ['MIDLGROUNDSGEARSTOKEN', 'BTC'],
    ['BUSD', 'MIDLGROUNDSGEARSTOKEN'],
    ...COMMUNITY_PAIRS,
  ].reduce(
    (acc, symbols) => {
      acc.push({
        token0: {
          name_eq: symbols[0],
        },
        token1: {
          name_eq: symbols[1],
        },
      });

      acc.push({
        token0: {
          name_eq: symbols[1],
        },
        token1: {
          name_eq: symbols[0],
        },
      });

      return acc;
    },
    [] as {
      token0: { name_eq: string };
      token1: { name_eq: string };
    }[],
  );

  const {
    data: pools,
    isFetching,
    isLoading,
  } = useGetPools({
    ...(process.env.NEXT_PUBLIC_DISPLAY_ALL_PAIRS
      ? {}
      : {
          where: {
            OR: tokens,
          },
        }),
  });

  if (isFetching || isLoading) {
    return <AppPreloader />;
  }

  return (
    <div
      className={css({
        padding: 4,
        borderRadius: 'xl',
        backgroundColor: 'neutral.100',
        display: 'table',
        borderSpacing: 4,
      })}
    >
      <div
        className={css({
          display: 'table-row',
          color: 'neutral.500',
          padding: 2,
          verticalAlign: 'middle',
        })}
      >
        <div className={css({ width: '5%', display: 'table-cell' })}>#</div>
        <div className={css({ display: 'table-cell' })}>Pair</div>
        <div className={css({ display: 'table-cell' })}>Volume (24h)</div>
        <div className={css({ display: 'table-cell' })}>Liquidity</div>
        <div className={css({ display: 'table-cell' })}>Price</div>
      </div>

      {pools?.pairs.map((pair, index) => {
        let tokenA = pair.token0.id;
        let tokenB = pair.token1.id;

        if (pair.token0.name === 'BUSD') {
          tokenA = pair.token1.id;
          tokenB = pair.token0.id;
        }

        if (pair.token1.name === 'BTC') {
          tokenA = pair.token0.id;
          tokenB = pair.token1.id;
        }

        if (pair.token0.name === 'BTC') {
          tokenA = pair.token1.id;
          tokenB = pair.token0.id;
        }

        return (
          <PairItem
            index={index}
            key={pair.id}
            tokenA={getAddress(tokenA)}
            tokenB={getAddress(tokenB)}
            id={getAddress(pair.id)}
            pair={pair}
          />
        );
      })}
    </div>
  );
};
