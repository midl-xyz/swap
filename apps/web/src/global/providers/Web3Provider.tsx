'use client';

import { LastUsedTokensProvider } from '@/features';
import { config } from '@/global';
import { MidlProvider } from '@midl-xyz/midl-js-react';
import { SatoshiKitProvider } from '@midl-xyz/satoshi-kit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      experimental_prefetchInRender: true,
    },
  },
});

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MidlProvider config={config}>
      <SatoshiKitProvider>
        <QueryClientProvider client={queryClient}>
          <LastUsedTokensProvider>{children}</LastUsedTokensProvider>
        </QueryClientProvider>
      </SatoshiKitProvider>
    </MidlProvider>
  );
};
