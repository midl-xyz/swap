/* eslint-disable @next/next/no-img-element */
import { useToken } from '@/entities';
import { TokenLogo, TokenValue } from '@/features';
import { usePoolShare } from '@/features/liquidity';
import { Button, Dialog, DialogContent, DialogOverlay } from '@/shared';
import { DialogProps } from '@radix-ui/react-dialog';
import { Address } from 'viem';
import { css } from '~/styled-system/css';
import { hstack, vstack } from '~/styled-system/patterns';

type SupplyLiquidityDialogProps = DialogProps & {
  onClose: () => void;
  tokenA: Address;
  tokenB: Address;
  tokenAAmount: bigint;
  tokenBAmount: bigint;
  chainId: number;
  isCreatePool: boolean;
};

export const SupplyLiquidityDialog = ({
  onClose,
  tokenA,
  tokenB,
  tokenAAmount,
  tokenBAmount,
  isCreatePool,
  chainId,
  ...rest
}: SupplyLiquidityDialogProps) => {
  const { poolShare, estimatedLPTokenBalance, poolToken } = usePoolShare({
    tokenA,
    tokenB,
    formValues: {
      tokenAAmount,
      tokenBAmount,
    },
  });

  const tokenAInfo = useToken(tokenA, chainId);
  const tokenBInfo = useToken(tokenB, chainId);

  return (
    <Dialog {...rest}>
      <DialogOverlay onClick={onClose} />
      <DialogContent
        onEscapeKeyDown={onClose}
        className={css({
          width: 'full',
          maxWidth: 450,
        })}
      >
        <div className={vstack({ gap: 4, alignItems: 'stretch' })}>
          <div
            className={vstack({
              gap: 8,
            })}
          >
            <h1
              className={css({
                textStyle: 'h4',
              })}
            >
              {isCreatePool ? "You're creating a new pool" : 'Confirm Supply'}
            </h1>
          </div>

          <div
            className={hstack({
              justifyContent: 'space-between',
              gap: 4,
              borderRadius: 'md',
              borderColor: 'neutral.200',
              borderWidth: 1,
              borderStyle: 'solid',
              px: 3,
              py: 2,
            })}
          >
            {isCreatePool ? (
              <>
                <span
                  className={css({
                    textStyle: 'h6',
                  })}
                >
                  {tokenAInfo.symbol}/{tokenBInfo.symbol}
                </span>

                <div
                  className={css({
                    position: 'relative',
                    width: 8,
                    isolation: 'isolate',
                  })}
                >
                  <TokenLogo
                    address={tokenA}
                    size={7}
                    chainId={chainId}
                    className={css({
                      position: 'absolute',
                      right: 5,
                      zIndex: 1,
                      top: '50%',
                      transform: 'translateY(-50%)',
                    })}
                  />

                  <TokenLogo
                    address={tokenB}
                    chainId={chainId}
                    size={7}
                    className={css({
                      position: 'absolute',
                      right: 0,
                      top: '50%',
                      transform: 'translateY(-50%)',
                    })}
                  />
                </div>
              </>
            ) : (
              <div
                className={vstack({
                  alignItems: 'stretch',
                })}
              >
                <span
                  className={css({
                    textStyle: 'caption',
                    color: 'neutral.400',
                  })}
                >
                  You will receive:
                </span>

                <TokenValue
                  hideLogo
                  value={estimatedLPTokenBalance}
                  address={poolToken.data as Address}
                  chainId={chainId}
                  hideSymbol
                  className={css({
                    textStyle: 'h5',
                  })}
                />

                <span className={css({ textStyle: 'caption' })}>
                  {tokenAInfo.symbol}/{tokenBInfo.symbol} Pool Tokens
                </span>
              </div>
            )}
          </div>

          <div
            className={vstack({
              gap: 4,
              alignItems: 'stretch',
              px: 1,
            })}
          >
            <div className={vstack({ gap: 4, alignItems: 'stretch' })}>
              <div
                className={hstack({ gap: 4, justifyContent: 'space-between' })}
              >
                <span>{tokenAInfo.symbol} Deposited</span>
                <TokenValue
                  address={tokenA}
                  value={tokenAAmount}
                  chainId={chainId}
                  className={css({
                    textStyle: 'h6',
                  })}
                />
              </div>
              <div
                className={hstack({ gap: 4, justifyContent: 'space-between' })}
              >
                <span>{tokenBInfo.symbol} Deposited</span>
                <TokenValue
                  address={tokenB}
                  value={tokenAAmount}
                  chainId={chainId}
                  className={css({
                    textStyle: 'h6',
                  })}
                />
              </div>

              <div
                className={hstack({
                  gap: 4,
                  justifyContent: 'space-between',
                  alignItems: 'start',
                })}
              >
                <span>Rates</span>
                <div
                  className={vstack({
                    gap: 1,
                    textAlign: 'right',
                    alignItems: 'end',
                  })}
                >
                  <span>
                    1 {tokenAInfo.symbol} = 2372.01 {tokenBInfo.symbol}
                  </span>
                  <span>
                    1 {tokenBInfo.symbol} = 0.123 {tokenAInfo.symbol}
                  </span>
                </div>
              </div>
              <div
                className={hstack({ gap: 4, justifyContent: 'space-between' })}
              >
                <span>Pool Share</span>
                <span>{parseFloat((poolShare * 100).toFixed(2))}%</span>
              </div>
            </div>
          </div>
          <Button type="submit">
            {isCreatePool ? 'Create Pool and Supply' : 'Supply'}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
