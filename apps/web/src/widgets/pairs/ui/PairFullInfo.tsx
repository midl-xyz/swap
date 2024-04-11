import { useToken } from '@/entities';
import { TokenLogo } from '@/features';
import { GetPairQuery } from '@/features/liquidity/api/gql/graphql';
import { getAddress } from 'viem';
import { useChainId } from 'wagmi';
import { css } from '~/styled-system/css';
import { hstack, vstack } from '~/styled-system/patterns';

type PairFullInfoProps = {
  pair: NonNullable<Required<GetPairQuery>['pair']>;
};

export const PairFullInfo = ({ pair }: PairFullInfoProps) => {
  const chainId = useChainId();
  const { token0, token1 } = pair;

  const tokenAInfo = useToken(getAddress(token0.id), chainId);
  const tokenBInfo = useToken(getAddress(token1.id), chainId);

  return (
    <div className={vstack({ gap: 4, alignItems: 'stretch' })}>
      <div className={hstack({ gap: 2, alignItems: 'center' })}>
        <div
          className={css({
            position: 'relative',
            display: 'flex',
            marginRight: 0,
          })}
        >
          <TokenLogo
            address={getAddress(token0.id)}
            chainId={chainId}
            size={6}
          />
          <TokenLogo
            address={getAddress(token1.id)}
            chainId={chainId}
            size={6}
            className={css({
              marginLeft: -2,
            })}
          />
        </div>

        <h1
          className={css({
            textStyle: 'h3',
          })}
        >
          {tokenAInfo.symbol} — {tokenBInfo.symbol}
        </h1>
      </div>

      <div
        className={hstack({
          gap: 4,
        })}
      >
        <div
          className={vstack({
            backgroundColor: 'neutral.100',
            gap: 2,
            padding: 4,
            borderRadius: 'xl',
            alignItems: 'stretch',
            flexBasis: '50%',
          })}
        >
          <span
            className={css({
              textStyle: 'caption',
            })}
          >
            Total liquidity
          </span>
          <span
            className={css({
              textStyle: 'body',
              color: 'neutral.900',
            })}
          >
            Coming soon...
          </span>
        </div>

        <div
          className={vstack({
            backgroundColor: 'neutral.100',
            gap: 2,
            padding: 4,
            borderRadius: 'xl',
            alignItems: 'stretch',
            flexBasis: '50%',
          })}
        >
          <span
            className={css({
              textStyle: 'caption',
            })}
          >
            Total liquidity
          </span>
          <span
            className={css({
              textStyle: 'body',
              color: 'neutral.900',
            })}
          >
            Coming soon...
          </span>
        </div>
      </div>
    </div>
  );
};
