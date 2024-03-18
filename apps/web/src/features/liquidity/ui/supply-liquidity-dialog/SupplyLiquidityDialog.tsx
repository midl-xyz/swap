import { useToken } from '@/entities';
import { useLiquidity } from '@/features/liquidity';
import { Button, Dialog, DialogContent, DialogOverlay } from '@/shared';
import { DialogProps } from '@radix-ui/react-dialog';
import { css } from '~/styled-system/css';
import { hstack, vstack } from '~/styled-system/patterns';

type SupplyLiquidityDialogProps = DialogProps & {
  onClose: () => void;
  tokenA: string;
  tokenB: string;
  tokenAAmount: string;
  tokenBAmount: string;
  chainId: number;
};

export const SupplyLiquidityDialog = ({
  onClose,
  tokenA,
  tokenB,
  tokenAAmount,
  tokenBAmount,
  chainId,
  ...rest
}: SupplyLiquidityDialogProps) => {
  const {} = useLiquidity(tokenA, tokenB, tokenAAmount, tokenBAmount, chainId);

  const tokenAInfo = useToken(tokenA, chainId);
  const tokenBInfo = useToken(tokenB, chainId);

  return (
    <Dialog {...rest}>
      <DialogOverlay onClick={onClose} />
      <DialogContent onEscapeKeyDown={onClose}>
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
            You&apos;re creating a new pool
          </h1>
        </div>

        <div
          className={vstack({
            gap: 4,
          })}
        >
          <h2
            className={css({
              textStyle: 'h5',
            })}
          >
            {tokenAInfo.symbol} and {tokenBInfo.symbol}
          </h2>
          <p
            className={css({
              textStyle: 'body',
            })}
          >
            You are supplying {tokenAAmount} {tokenAInfo.symbol} and{' '}
            {tokenBAmount} {tokenBInfo.symbol} to create a new pool.
          </p>
          <div className={vstack({ gap: 4, alignItems: 'stretch' })}>
            <div
              className={hstack({ gap: 4, justifyContent: 'space-between' })}
            >
              <span>{tokenAInfo.symbol} Deposited</span>
              <span>{tokenAAmount}</span>
            </div>
            <div
              className={hstack({ gap: 4, justifyContent: 'space-between' })}
            >
              <span>{tokenBInfo.symbol} Deposited</span>
              <span>{tokenBAmount}</span>
            </div>

            <div
              className={hstack({ gap: 4, justifyContent: 'space-between' })}
            >
              <span>Rates</span>
              <div className={vstack({ gap: 1 })}>
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
              <span>0.0001%</span>
            </div>
          </div>
        </div>
        <Button type="submit">Create Pool and Supply</Button>
      </DialogContent>
    </Dialog>
  );
};
