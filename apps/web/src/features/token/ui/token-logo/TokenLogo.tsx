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
          width: size,
          height: size,
          p: 1,
        }),
        className,
      )}
    >
      <img
        src={logoURI}
        alt={symbol}
        style={{
          width: '100%',
          height: '100%',
          aspectRatio: '1/1',
          objectFit: 'contain',
        }}
      />
    </div>
  );
};
