'use client';

import { LastUsedTokensProvider } from '@/features';
import { config, wagmiConfig } from '@/global';
import { MidlProvider } from '@midl-xyz/midl-js-react';
import { SatoshiKitProvider } from '@midl-xyz/satoshi-kit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <MidlProvider config={config}>
        <SatoshiKitProvider>
          <QueryClientProvider client={queryClient}>
            <LastUsedTokensProvider>{children}</LastUsedTokensProvider>
          </QueryClientProvider>
        </SatoshiKitProvider>
      </MidlProvider>
    </WagmiProvider>
  );
};
