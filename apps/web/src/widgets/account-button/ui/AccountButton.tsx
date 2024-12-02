'use client';

import { Button, shortenAddress } from '@/shared';
import { ConnectWalletDialog, AccountDialog } from '@/widgets/account';
import { AddressPurpose } from '@midl-xyz/midl-js-core';
import { useAccounts } from '@midl-xyz/midl-js-react';
import { useState } from 'react';
import { zeroAddress } from 'viem';

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
        appearance="outline"
        aria-label="account menu"
        onClick={() => {
          setAccountDialogOpen(true);
        }}
      >
        {shortenAddress(
          accounts.find((it) => it.purpose === AddressPurpose.Ordinals)
            ?.address ?? zeroAddress,
          8,
        )}
      </Button>
      <AccountDialog
        open={isAccountDialogOpen}
        onClose={() => setAccountDialogOpen(false)}
      />
    </>
  );
};
