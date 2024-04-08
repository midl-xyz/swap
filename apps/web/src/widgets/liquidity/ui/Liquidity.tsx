'use client';

import { useGetPools, useLiquidityPositions } from '@/features/liquidity';
import { LiquidityItem } from '@/features/liquidity/ui/liquidity';
import { Address, getAddress } from 'viem';
import { useAccount } from 'wagmi';
import { css } from '~/styled-system/css';
import { vstack } from '~/styled-system/patterns';

export const Liquidity = () => {
  const { address } = useAccount();

  const { data: positions } = useLiquidityPositions(address!);

  return (
    <div>
      {!positions?.liquidityPositions ||
      positions?.liquidityPositions.length === 0 ? (
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
            {positions?.liquidityPositions.map((liquidity) => (
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
