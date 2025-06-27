'use client';
import { LastUsedTokensProvider } from '@/features';
import { config, queryClient, wagmiConfig } from '@/global';
import { AddressPurpose } from '@midl-xyz/midl-js-core';
import { WagmiMidlProvider } from '@midl-xyz/midl-js-executor-react';
import { MidlProvider } from '@midl-xyz/midl-js-react';
import { SatoshiKitProvider } from '@midl-xyz/satoshi-kit';
import { QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import { WagmiProvider } from 'wagmi';

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={wagmiConfig}>
      <MidlProvider config={config}>
        <SatoshiKitProvider purposes={[AddressPurpose.Ordinals]}>
          <QueryClientProvider client={queryClient}>
            <Suspense>
              <WagmiMidlProvider />
            </Suspense>
            <LastUsedTokensProvider>{children}</LastUsedTokensProvider>
          </QueryClientProvider>
        </SatoshiKitProvider>
      </MidlProvider>
    </WagmiProvider>
  );
};
