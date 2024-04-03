'use client';

import { isWalletDialogOpenAtom } from '@/features';
import { Button, shortenAddress } from '@/shared';
import { useAtom } from 'jotai';
import { useAccount, useDisconnect, useSwitchChain } from 'wagmi';

export const AccountButton = () => {
  const { isConnected, address, chainId } = useAccount();
  const { disconnect } = useDisconnect();
  const [, setDialogOpen] = useAtom(isWalletDialogOpenAtom);

  const { chains, switchChain } = useSwitchChain();

  return (
    <div>
      {isConnected && address ? (
        chains.find((it) => it.id === chainId) ? (
          <Button
            onClick={() => {
              disconnect();
            }}
          >
            {shortenAddress(address)}
          </Button>
        ) : (
          <Button
            onClick={() => {
              switchChain({
                chainId: chains[0].id,
              });
            }}
          >
            Unsupported Network
          </Button>
        )
      ) : (
        <Button onClick={() => setDialogOpen(true)}>Connect wallet</Button>
      )}
    </div>
  );
};
