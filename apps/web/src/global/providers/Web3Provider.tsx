'use client';

import { cookieToInitialState, WagmiProvider } from 'wagmi';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { RainbowKitProvider, lightTheme } from '@rainbow-me/rainbowkit';
import { wagmiConfig } from '@/global';
import { LastUsedTokensProvider } from '@/features';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const queryClient = new QueryClient({});

export const Web3Provider = ({
  children,
  cookie,
}: Readonly<{ children: React.ReactNode; cookie?: string }>) => {
  return (
    <WagmiProvider
      config={wagmiConfig}
      initialState={cookieToInitialState(wagmiConfig, cookie)}
    >
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider
          theme={lightTheme({
            accentColor: '#212122',
            accentColorForeground: 'white',
            borderRadius: 'medium',
            fontStack: 'system',
          })}
        >
          <ReactQueryDevtools initialIsOpen={false} />

          <LastUsedTokensProvider>{children}</LastUsedTokensProvider>
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
