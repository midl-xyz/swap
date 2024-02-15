'use client';

import { isWalletDialogOpenAtom } from '@/features';
import { Button } from '@/shared';
import { useAtom } from 'jotai';
import { useAccount, useDisconnect } from 'wagmi';

export const AccountButton = () => {
  const { isConnected, address } = useAccount();
  const { disconnect } = useDisconnect();
  const [, setDialogOpen] = useAtom(isWalletDialogOpenAtom);

  return (
    <div>
      {isConnected ? (
        <Button
          onClick={() => {
            disconnect();
          }}
        >
          {address}
        </Button>
      ) : (
        <Button onClick={() => setDialogOpen(true)}>Connect wallet</Button>
      )}
    </div>
  );
};
