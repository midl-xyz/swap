/* eslint-disable @next/next/no-img-element */
import { useToken } from '@/entities';
import { TokenLogo } from '@/features';
import { Address } from 'viem';
import { css } from '~/styled-system/css';
import { hstack, vstack } from '~/styled-system/patterns';
import { useToken as useMidlToken } from '@midl-xyz/midl-js-executor-react';
import { useMemo } from 'react';

type TokenNameProps = {
  address: Address;
  chainId: number;
  showName?: boolean;
  shorten?: boolean;
};

export const TokenName = ({
  address,
  chainId,
  showName,
  shorten,
}: TokenNameProps) => {
  const { symbol, name } = useToken(address, chainId);
  const { rune } = useMidlToken(address);

  const rawLabel = rune?.name ?? name;

  const displayLabel = useMemo(() => {
    if (!shorten || !rawLabel || rawLabel.length <= 8) return rawLabel;
    return `${rawLabel.slice(0, 3)}…${rawLabel.slice(-3)}`;
  }, [shorten, rawLabel]);

  return (
    <span
      className={hstack({
        gap: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 'full',
      })}
    >
      <TokenLogo address={address} chainId={chainId} runeId={rune?.id} />
      <span
        className={vstack({
          gap: 0,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        })}
      >
        {displayLabel}
        {showName && (
          <span
            className={css({
              textStyle: 'caption',
            })}
          >
            {rune?.spaced_name ?? name}
          </span>
        )}
      </span>
    </span>
  );
};
