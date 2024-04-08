'use client';

import { useGetPools } from '@/features/liquidity';
import { PairItem } from '@/widgets/pairs/ui/pair/PairItem';
import { getAddress } from 'viem';
import { css } from '~/styled-system/css';
import { hstack } from '~/styled-system/patterns';

export const Pairs = () => {
  const { data: pools } = useGetPools();

  return (
    <div
      className={css({
        padding: 4,
        borderRadius: 'xl',
        backgroundColor: 'neutral.100',
        display: 'table',
      })}
    >
      <div
        className={css({
          display: 'table-row',
          color: 'neutral.500',
        })}
      >
        <div className={css({ width: '5%', display: 'table-cell' })}>#</div>
        <div className={css({ display: 'table-cell' })}>Pair</div>
        <div className={css({ display: 'table-cell' })}>Tx Count</div>
        <div className={css({ display: 'table-cell' })}>Volume (24h)</div>
        <div className={css({ display: 'table-cell' })}>Liquidity</div>
      </div>

      {pools?.pairs.map((pair, index) => (
        <PairItem
          index={index}
          key={pair.id}
          tokenA={getAddress(pair.token0.id)}
          tokenB={getAddress(pair.token1.id)}
          id={getAddress(pair.id)}
          pair={pair}
        />
      ))}
    </div>
  );
};
