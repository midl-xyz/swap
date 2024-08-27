'use client';

import { AccountDialog } from '@/features/account/account-dialog/ui/AccountDialog';
import { ConnectWalletDialog } from '@/features/account/connect-wallet-diaglog';
import { Button, shortenAddress } from '@/shared';
import { AddressPurpose } from '@midl-xyz/midl-js-core';
import { useAccounts } from '@midl-xyz/midl-js-react';
import { useState } from 'react';

export const AccountButton = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [isAccountDialogOpen, setAccountDialogOpen] = useState(false);
  const { accounts } = useAccounts();

  if (!accounts) {
    return (
      <>
        <Button
          onClick={() => {
            setDialogOpen(true);
          }}
          appearance="tertiary"
        >
          Connect wallet
        </Button>
        <ConnectWalletDialog
          open={isDialogOpen}
          onClose={() => setDialogOpen(false)}
        />
      </>
    );
  }

  return (
    <>
      <Button
        appearance="tertiary"
        aria-label="account menu"
        onClick={() => {
          setAccountDialogOpen(true);
        }}
      >
        {shortenAddress(
          accounts.find((it) => it.purpose === AddressPurpose.Ordinals)
            ?.address ?? '',
        )}
      </Button>
      <AccountDialog
        open={isAccountDialogOpen}
        onClose={() => setAccountDialogOpen(false)}
      />
    </>
  );
};
