import { Button, Dialog, DialogContent, DialogOverlay } from '@/shared';
import { DialogProps } from '@radix-ui/react-dialog';
import { useEffect } from 'react';
import { useAccount, useConnect } from 'wagmi';
import { css } from '~/styled-system/css';
import { vstack } from '~/styled-system/patterns';

type ConnectWalletDialogProps = DialogProps & {
  onClose: () => void;
};

export const ConnectWalletDialog = ({
  onClose,
  ...rest
}: ConnectWalletDialogProps) => {
  const { connectors, connect, isPending } = useConnect();
  const { isConnected, isConnecting } = useAccount();

  useEffect(() => {
    if (isConnected) {
      onClose();
    }
  }, [isConnected, onClose]);

  return (
    <Dialog {...rest}>
      <DialogOverlay onClick={onClose} />
      <DialogContent
        onEscapeKeyDown={onClose}
        className={css({
          width: 'full',
          maxWidth: 400,
        })}
      >
        <div
          className={vstack({
            gap: 8,
          })}
        >
          <h1
            className={css({
              textStyle: 'h3',
            })}
          >
            Connect Wallet
          </h1>
          <div className={vstack({ gap: 4, alignItems: 'stretch' })}>
            {connectors.map((connector) => (
              <Button
                appearance="tertiary"
                key={connector.uid}
                onClick={() => connect({ connector })}
              >
                {connector.name}
              </Button>
            ))}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
