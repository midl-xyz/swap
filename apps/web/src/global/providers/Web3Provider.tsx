'use client';

import { State, WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  RainbowKitProvider,
  lightTheme as light,
} from '@rainbow-me/rainbowkit';
import { wagmiConfig } from '@/global';
import { LastUsedTokensProvider } from '@/features';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const queryClient = new QueryClient({});

export const Web3Provider = ({
  children,
  initialState,
}: Readonly<{ children: React.ReactNode; initialState?: State }>) => {
  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={light({
            accentColor: '#212122',
            accentColorForeground: 'white',
            borderRadius: 'medium',
            fontStack: 'system',
          })}
          // avatar={CustomAvatar}
        >
          <ReactQueryDevtools initialIsOpen={false} />

          <LastUsedTokensProvider>{children}</LastUsedTokensProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
