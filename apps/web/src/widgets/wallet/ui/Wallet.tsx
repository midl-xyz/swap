import { queryClient } from '@/global';
import { xverseConnector } from '@midl-xyz/midl-js-connectors';
import { useAddNetwork, useConfig, useAccounts } from '@midl-xyz/midl-js-react';
import { ConnectButton } from '@midl-xyz/satoshi-kit';
import { useEffect } from 'react';

export const Wallet = () => {
  const { addNetworkAsync } = useAddNetwork();
  const { network } = useConfig();
  const { isConnected } = useAccounts();

  useEffect(() => {
    if (!isConnected) {
      queryClient.clear();
    }
  }, [isConnected]);

  return (
    <ConnectButton
      beforeConnect={async (connectorId) => {
        if (connectorId !== xverseConnector().id) {
          return;
        }

        await addNetworkAsync({
          connectorId,
          networkConfig: {
            name: 'MIDL Regtest',
            network: network.id,
            rpcUrl: 'https://mempool.regtest.midl.xyz/api',
            indexerUrl: 'https://api-regtest-midl.xverse.app',
          },
        });
      }}
    />
  );
};
