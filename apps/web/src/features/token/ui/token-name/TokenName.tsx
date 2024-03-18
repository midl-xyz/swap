/* eslint-disable @next/next/no-img-element */
import { useToken } from '@/entities';
import { css } from '~/styled-system/css';
import { hstack, vstack } from '~/styled-system/patterns';

type TokenNameProps = {
  address: string;
  chainId: number;
  showName?: boolean;
};

export const TokenName = ({ address, chainId, showName }: TokenNameProps) => {
  const { logoURI, symbol, name } = useToken(address, chainId);

  return (
    <span
      className={hstack({
        gap: 2,
        alignItems: 'center',
        justifyContent: 'flex-start',
        width: 'full',
      })}
    >
      <img
        src={logoURI}
        alt={symbol}
        className={css({
          width: 4,
          height: 4,
          borderRadius: 'full',
        })}
      />
      <span
        className={vstack({
          gap: 0,
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        })}
      >
        {symbol}
        {showName && (
          <span
            className={css({
              textStyle: 'caption',
            })}
          >
            {name}
          </span>
        )}
      </span>
    </span>
  );
};
