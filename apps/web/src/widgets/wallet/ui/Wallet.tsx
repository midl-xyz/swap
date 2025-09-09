import { xverseConnector } from '@midl-xyz/midl-js-connectors';
import { useAddNetwork, useConfig } from '@midl-xyz/midl-js-react';
import { ConnectButton } from '@midl-xyz/satoshi-kit';

export const Wallet = () => {
  const { addNetworkAsync } = useAddNetwork();
  const { network } = useConfig();

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
