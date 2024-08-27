'use client';

import { cookieToInitialState, WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { wagmiConfig } from '@/global';
import { LastUsedTokensProvider } from '@/features';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { createConfig, testnet, satsConnect } from '@midl-xyz/midl-js-core';
import { MidlProvider } from '@midl-xyz/midl-js-react';

export const queryClient = new QueryClient({});

const config = createConfig({
  networks: [testnet],
  chain: {
    rpcUrls: ['https://rpc-dev.midl.xyz'],
    chainId: 0x309,
  },
  connectors: [satsConnect()],
  persist: true,
});

export const Web3Provider = ({
  children,
  cookie,
}: Readonly<{ children: React.ReactNode; cookie: string }>) => {
  return (
    <WagmiProvider
      config={wagmiConfig}
      initialState={cookieToInitialState(wagmiConfig, cookie)}
    >
      <MidlProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={false} />

          <LastUsedTokensProvider>{children}</LastUsedTokensProvider>
        </QueryClientProvider>
      </MidlProvider>
    </WagmiProvider>
  );
};
