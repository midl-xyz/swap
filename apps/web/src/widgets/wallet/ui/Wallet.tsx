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
        console.log('ENV: ', process.env.NEXT_PUBLIC_MEMPOOL_RPC);
        await addNetworkAsync({
          connectorId,
          networkConfig: {
            name: 'MIDL Regtest',
            network: network.id,
            rpcUrl: `${
              process.env.NEXT_PUBLIC_MEMPOOL_RPC ||
              'https://mempool.regtest.midl.xyz'
            }/api`,
            indexerUrl:
              process.env.NEXT_PUBLIC_INDEXER_URL ||
              'https://api-regtest-midl.xverse.app',
          },
        });
      }}
    />
  );
};
