import { useToken } from '@/entities';
import { TokenLogo } from '@/features';
import { removeLiquidityDialogAtom } from '@/features/liquidity/model';
import { Button } from '@/shared';
import * as Collapsible from '@radix-ui/react-collapsible';
import { useAtom } from 'jotai';
import { Address } from 'viem';
import { useChainId } from 'wagmi';
import { css } from '~/styled-system/css';
import { hstack, vstack } from '~/styled-system/patterns';

type LiquidityItemProps = {
  tokenA: Address;
  tokenB: Address;
  liquidityToken: Address;
  totalSupply: bigint;
  liquidityTokenBalance: bigint;
  reserveA: bigint;
  reserveB: bigint;
};

export const LiquidityItem = ({
  tokenA,
  tokenB,
  liquidityToken,
  liquidityTokenBalance,
  totalSupply,
  reserveA,
  reserveB,
}: LiquidityItemProps) => {
  const chainId = useChainId();
  const tokenAInfo = useToken(tokenA, chainId);
  const tokenBInfo = useToken(tokenB, chainId);
  const [, setDialogState] = useAtom(removeLiquidityDialogAtom);

  return (
    <Collapsible.Root
      defaultOpen={true}
      className={css({
        padding: 4,
        borderRadius: 'xl',
        backgroundColor: 'neutral.100',
      })}
    >
      <Collapsible.Trigger
        className={css({
          cursor: 'pointer',
        })}
      >
        <div className={hstack({ gap: 2 })}>
          <div
            className={css({
              position: 'relative',
              display: 'flex',
            })}
          >
            <TokenLogo address={tokenA} chainId={chainId} size={8} />
            <TokenLogo
              address={tokenB}
              chainId={chainId}
              size={8}
              className={css({
                marginLeft: -2,
              })}
            />
          </div>
          {tokenAInfo.symbol} — {tokenBInfo.symbol}
        </div>
      </Collapsible.Trigger>
      <Collapsible.Content>
        <div className={vstack({ gap: 2, alignItems: 'stretch', pt: 4 })}>
          <div className={hstack({ gap: 2, justifyContent: 'space-between' })}>
            <span>Pooled {tokenAInfo.symbol}</span>
            <span>
              {reserveA.toString()} {tokenAInfo.symbol}
            </span>
          </div>
          <div className={hstack({ gap: 2, justifyContent: 'space-between' })}>
            <span>Pooled {tokenBInfo.symbol}</span>
            <span>
              {reserveB.toString()} {tokenBInfo.symbol}
            </span>
          </div>
          <div className={hstack({ gap: 2, justifyContent: 'space-between' })}>
            <span>Your total pool tokens</span>
            <span>{liquidityTokenBalance.toString()}</span>
          </div>

          <div className={hstack({ gap: 2, justifyContent: 'space-between' })}>
            <span>Pool share percentage:</span>
            <span>
              {(parseFloat(liquidityTokenBalance.toString()) /
                parseFloat(totalSupply.toString())) *
                100}
              %
            </span>
          </div>
          <div>
            <Button
              appearance="secondary"
              onClick={() => {
                setDialogState({
                  open: true,
                  lpToken: {
                    address: liquidityToken,
                    chainId: chainId,
                    tokenA,
                    tokenB,
                  },
                });
              }}
            >
              Remove
            </Button>
          </div>
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  );
};
