'use client';

import { Button, shortenAddress } from '@/shared';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { Address } from 'viem';
import { vstack } from '~/styled-system/patterns';

export const AccountButton = () => (
  <ConnectButton.Custom>
    {({
      account,
      chain,
      openAccountModal,
      openChainModal,
      openConnectModal,
      authenticationStatus,
      mounted,
    }) => {
      const ready = mounted && authenticationStatus !== 'loading';
      const connected =
        ready &&
        account &&
        chain &&
        (!authenticationStatus || authenticationStatus === 'authenticated');

      return (
        <div
          {...(!ready && {
            'aria-hidden': true,
            style: {
              opacity: 0,
              pointerEvents: 'none',
              userSelect: 'none',
            },
          })}
        >
          {(() => {
            if (!connected) {
              return (
                <Button onClick={openConnectModal} appearance="tertiary">
                  Connect wallet
                </Button>
              );
            }

            if (chain.unsupported) {
              return (
                <Button onClick={openChainModal} appearance="tertiary">
                  Wrong Network
                </Button>
              );
            }

            return (
              <div
                className={vstack({
                  gap: 4,
                })}
              >
                <div
                  className={vstack({
                    gap: 4,
                    alignItems: 'center',
                  })}
                >
                  <div>
                    <Button
                      appearance="tertiary"
                      aria-label="account menu"
                      onClick={openAccountModal}
                    >
                      {shortenAddress(account.address as Address)}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>
      );
    }}
  </ConnectButton.Custom>
);
