import { Dialog, DialogContent, DialogOverlay } from '@/shared';
import { DialogProps } from '@radix-ui/react-dialog';
import { useConnect } from 'wagmi';

type ConnectWalletDialogProps = DialogProps & {
  onClose: () => void;
};

export const ConnectWalletDialog = ({
  onClose,
  ...rest
}: ConnectWalletDialogProps) => {
  const { connect } = useConnect();

  return (
    <Dialog {...rest}>
      <DialogOverlay />
      <DialogContent onEscapeKeyDown={onClose}>
        Dialog
        {/* <button
          onClick={() => {
            connect({
              connector: 'injected',
            });
          }}
        >
          Connect Wallet
        </button> */}
      </DialogContent>
    </Dialog>
  );
};
