/* eslint-disable @next/next/no-img-element */
import { useToken } from '@/entities';
import { HTMLAttributes } from 'react';
import { Address } from 'viem';
import { css, cx } from '~/styled-system/css';

type TokenLogoProps = {
  address: Address;
  chainId: number;
  size?: number;
  className?: HTMLAttributes<HTMLDivElement>['className'];
  overridePic?: string | null | undefined;
};

export const TokenLogo = ({
  address,
  chainId,
  size = 6,
  className,
  overridePic,
}: TokenLogoProps) => {
  let { logoURI, symbol } = useToken(address, chainId);

  if (overridePic) {
    logoURI = overridePic;
  }

  if (!logoURI) {
    return (
      <div
        className={css({
          backgroundColor: 'neutral.800',
          borderRadius: 'full',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          aspectRatio: '1/1',
          overflow: 'hidden',
          flexShrink: 0,
        })}
        style={{
          width: `${size * 4}px`,
          height: `${size * 4}px`,
          padding: '2px',
        }}
      >
        <span
          className={css({
            color: 'white',
            fontWeight: 'bold',
            fontSize: '8px',
          })}
        >
          {symbol}
        </span>
      </div>
    );
  }

  return (
    <div
      className={cx(
        css({
          backgroundColor: 'white',
          borderRadius: 'full',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          aspectRatio: '1/1',
        }),
        className,
      )}
      style={{
        width: `${size * 4}px`,
        height: `${size * 4}px`,
        padding: '2px',
      }}
    >
      <img
        src={logoURI}
        alt={symbol}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '50%', // Ensures the image stays circular
        }}
      />
    </div>
  );
};
