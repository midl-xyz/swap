'use client';

import { State, WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';

import { wagmiConfig } from '@/global';
import { LastUsedTokensProvider } from '@/features';

export const Web3Provider = ({
  children,
  initialState,
}: Readonly<{ children: React.ReactNode; initialState?: State }>) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <LastUsedTokensProvider>{children}</LastUsedTokensProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
