'use client';

import { isWalletDialogOpenAtom } from '@/features';
import { Button } from '@/shared';
import { useAtom } from 'jotai';
import { useAccount } from 'wagmi';

export const AccountButton = () => {
  const { isConnected, address } = useAccount();
  const [, setDialogOpen] = useAtom(isWalletDialogOpenAtom);

  return (
    <div>
      {isConnected ? (
        <>{address}</>
      ) : (
        <Button onClick={() => setDialogOpen(true)}>Connect wallet</Button>
      )}
    </div>
  );
};
