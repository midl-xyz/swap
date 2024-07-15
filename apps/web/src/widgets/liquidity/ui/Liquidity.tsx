'use client';

import { useGetPools, useLiquidityPositions } from '@/features/liquidity';
import { LiquidityItem } from '@/features/liquidity/ui/liquidity';
import { Loader2Icon } from 'lucide-react';
import { Address, getAddress } from 'viem';
import { useAccount } from 'wagmi';
import { css } from '~/styled-system/css';
import { vstack } from '~/styled-system/patterns';

export const Liquidity = () => {
  const { address } = useAccount();

  const { data: positions, isFetching } = useLiquidityPositions(address!);

  if (isFetching) {
    return (
      <div
        className={css({
          color: 'neutral.500',
          padding: 4,
          borderRadius: 'xl',
          backgroundColor: 'neutral.100',
          display: 'flex',
          verticalAlign: 'middle',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
        })}
      >
        <Loader2Icon
          className={css({
            animation: 'spin 1s linear infinite',
            display: 'inline-block',
            verticalAlign: 'middle',
          })}
        />
        <span>Loading...</span>
      </div>
    );
  }

  const positionList = positions?.liquidityPositions?.filter(
    ({ liquidityTokenBalance, pair }) => {
      return (
        (parseFloat(liquidityTokenBalance.toString()) /
          parseFloat(pair.totalSupply.toString())) *
          100 >
        0.001
      );
    },
  );

  return (
    <div>
      {!positionList || positionList.length === 0 ? (
        <p
          className={css({
            px: 4,
            py: 2,
            bg: 'neutral.100',
            borderRadius: 'md',
            color: 'neutral.400',
            textAlign: 'center',
          })}
        >
          No liquidity found
        </p>
      ) : (
        <div>
          <div className={vstack({ gap: 4, alignItems: 'stretch' })}>
            {positionList.map((liquidity) => (
              <div key={liquidity.id}>
                <LiquidityItem
                  liquidityToken={getAddress(liquidity.pair.id)}
                  tokenA={getAddress(liquidity.pair.token0.id)}
                  tokenB={getAddress(liquidity.pair.token1.id)}
                  reserveA={liquidity.pair.reserve0}
                  reserveB={liquidity.pair.reserve1}
                  liquidityTokenBalance={liquidity.liquidityTokenBalance}
                  totalSupply={liquidity.pair.totalSupply}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
