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
};

export const TokenLogo = ({
  address,
  chainId,
  size = 6,
  className,
}: TokenLogoProps) => {
  const { logoURI, symbol } = useToken(address, chainId);

  return (
    <div
      className={cx(
        css({
          backgroundColor: 'white',
          borderRadius: 'full',
          position: 'relative',
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
          objectFit: 'contain',
        }}
      />
    </div>
  );
};
