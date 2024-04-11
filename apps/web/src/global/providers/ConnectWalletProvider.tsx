'use client';

import { ConnectWalletDialog, isWalletDialogOpenAtom } from '@/features';
import { useAtom } from 'jotai';

export const ConnectWalletProvider = () => {
  const [isDialogOpen, setDialogOpen] = useAtom(isWalletDialogOpenAtom);

  return (
    <>
      <ConnectWalletDialog
        open={isDialogOpen}
        onClose={() => {
          setDialogOpen(false);
        }}
      />
    </>
  );
};
