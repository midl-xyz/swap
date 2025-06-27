'use client';
import { LastUsedTokensProvider } from '@/features';
import { config, wagmiConfig } from '@/global';
import { AddressPurpose } from '@midl-xyz/midl-js-core';
import { WagmiMidlProvider } from '@midl-xyz/midl-js-executor-react';
import { MidlProvider } from '@midl-xyz/midl-js-react';
import { SatoshiKitProvider } from '@midl-xyz/satoshi-kit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      experimental_prefetchInRender: true,
    },
  },
});

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <MidlProvider config={config}>
        <SatoshiKitProvider purposes={[AddressPurpose.Ordinals]}>
          <QueryClientProvider client={queryClient}>
            <WagmiMidlProvider />
            <LastUsedTokensProvider>{children}</LastUsedTokensProvider>
          </QueryClientProvider>
        </SatoshiKitProvider>
      </MidlProvider>
    </WagmiProvider>
  );
};
