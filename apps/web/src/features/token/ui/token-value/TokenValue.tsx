import { useToken } from '@/entities';
import { TokenLogo } from '@/features/token';
import { HTMLAttributes } from 'react';
import { Address, formatUnits } from 'viem';
import { css, cx } from '~/styled-system/css';

type TokenValueProps = {
  value: bigint;
  address: Address;
  chainId: number;
  hideSymbol?: boolean;
  hideLogo?: boolean;
} & HTMLAttributes<HTMLSpanElement>;

export const TokenValue = ({
  value,
  address,
  chainId,
  hideSymbol,
  hideLogo,
  className,
  ...rest
}: TokenValueProps) => {
  const tokenInfo = useToken(address, chainId);
  return (
    <span
      {...rest}
      className={cx(
        css({
          display: 'flex',
          alignItems: 'center',
          gap: '5px',
        }),
        className,
      )}
    >
      {!hideLogo && <TokenLogo address={address} chainId={chainId} />}
      <span>{formatUnits(value, tokenInfo.decimals)} </span>
      {hideSymbol ? null : (
        <span
          title={tokenInfo.symbol}
          className={css({
            display: 'inline-block',
            maxWidth: '140px',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            verticalAlign: 'bottom',
          })}
        >
          {tokenInfo.symbol}
        </span>
      )}
    </span>
  );
};
