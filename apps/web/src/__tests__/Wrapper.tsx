import { LastUsedTokensProvider } from '@/features';
import { createConfig, regtest } from '@midl-xyz/midl-js-core';
import { WagmiMidlProvider } from '@midl-xyz/midl-js-executor-react';
import { MidlProvider } from '@midl-xyz/midl-js-react';
import { SatoshiKitProvider } from '@midl-xyz/satoshi-kit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { keyPairConnector } from '@midl/node';
import { Toaster } from 'react-hot-toast';

export const config = createConfig({
  networks: [regtest],
  connectors: [
    keyPairConnector({
      mnemonic: 'test test test test test test test test test test test junk',
    }),
  ],
});

export const queryClient = new QueryClient();

export const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <MidlProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <WagmiMidlProvider>
          <SatoshiKitProvider>
            <LastUsedTokensProvider>
              {children}
              <Toaster position="bottom-right" />
            </LastUsedTokensProvider>
          </SatoshiKitProvider>
        </WagmiMidlProvider>
      </QueryClientProvider>
    </MidlProvider>
  );
};
