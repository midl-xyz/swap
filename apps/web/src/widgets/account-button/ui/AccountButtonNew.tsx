import { Button, shortenAddress } from '@/shared';
import { gravatar } from '@eezyquote/gradient-avatar';
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
      // Note: If your app doesn't use authentication, you
      // can remove all 'authenticationStatus' checks
      const ready = mounted && authenticationStatus !== 'loading';
      const avatar = gravatar(account?.address || '', 50);
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
                <Button
                  onClick={openConnectModal}
                  appearance="tertiary"
                  color={'primary'} //  "primary"
                >
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
                      <div
                        className={vstack({
                          '@/xs': { display: 'hidden' },
                          '@/md': { display: 'unset' },
                        })}
                      >
                        {shortenAddress(account.address as Address)}
                      </div>
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
