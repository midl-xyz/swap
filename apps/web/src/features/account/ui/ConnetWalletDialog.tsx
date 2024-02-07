import { Dialog, DialogContent, DialogOverlay } from '@/shared';
import { useConnect } from 'wagmi';

export const ConnectWalletDialog = () => {
  const { connect } = useConnect();

  return (
    <Dialog>
      <DialogOverlay />
      <DialogContent>
        <button
          onClick={() => {
            connect({
              connector: 'injected',
            });
          }}
        >
          Connect Wallet
        </button>
      </DialogContent>
    </Dialog>
  );
};
