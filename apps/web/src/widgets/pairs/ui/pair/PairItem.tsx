import { useToken } from '@/entities';
import { TokenLogo } from '@/features';
import type { PairsQuery } from '@/features/liquidity/api/gql/graphql';
import Link from 'next/link';
import type { Address } from 'viem';
import { useChainId } from 'wagmi';
import { css } from '~/styled-system/css';
import { hstack } from '~/styled-system/patterns';

type PairItemProps = {
  tokenA: Address;
  tokenB: Address;
  id: Address;
  pair: PairsQuery['pairs'][number];
  index: number;
  overrideAPic?: string | null | undefined;
  overrideBPic?: string | null | undefined;
};

export const PairItem = ({
  tokenA,
  tokenB,
  index,
  id,
  pair,
  overrideAPic,
  overrideBPic,
}: PairItemProps) => {
  const chainId = useChainId();

  const tokenAInfo = useToken(tokenA, chainId);
  const tokenBInfo = useToken(tokenB, chainId);

  return (
    <Link href={`/pairs/${pair.id}`} legacyBehavior>
      {/* biome-ignore lint/a11y/useValidAnchor: <explanation> */}
      <a
        className={css({
          display: 'table-row',
          padding: 2,
        })}
      >
        <div
          className={css({
            width: '5%',
            display: 'table-cell',
            verticalAlign: 'middle',
          })}
        >
          {index + 1}
        </div>
        <div className={css({ display: 'table-cell' })}>
          <div className={hstack({ gap: 2, alignItems: 'center' })}>
            <div
              className={css({
                position: 'relative',
                display: 'flex',
                width: '1/12',
                marginRight: 6,
              })}
            >
              <TokenLogo
                address={tokenA}
                chainId={chainId}
                size={8}
                overridePic={overrideAPic}
              />
              <TokenLogo
                address={tokenB}
                chainId={chainId}
                size={8}
                overridePic={overrideBPic}
                className={css({
                  marginLeft: -2,
                })}
              />
            </div>

            <div>
              {tokenAInfo.symbol} — {tokenBInfo.symbol}
            </div>
          </div>
        </div>

        <div className={css({ display: 'table-cell' })}>
          {parseFloat(pair.tradeVolumeUSD24h) || '☕'}
        </div>
        <div className={css({ display: 'table-cell' })}>
          {parseFloat(pair.liquidityUSD) || '☕'}
        </div>
        <div className={css({ display: 'table-cell' })}>{pair.feesUSD24h}</div>
      </a>
    </Link>
  );
};
