'use client';

import { LastUsedTokensProvider } from '@/features';
import { midlConfig, wagmiConfig } from '@/global';
import { WagmiMidlProvider } from '@midl-xyz/midl-js-executor';
import { MidlProvider } from '@midl-xyz/midl-js-react';
import { lightTheme, RainbowKitProvider } from '@rainbow-me/rainbowkit';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { cookieToInitialState, WagmiProvider } from 'wagmi';

export const queryClient = new QueryClient({});

export const Web3Provider = ({
  children,
  cookie,
}: Readonly<{ children: React.ReactNode; cookie: string }>) => {
  return (
    <WagmiProvider
      config={wagmiConfig}
      initialState={cookieToInitialState(wagmiConfig, cookie)}
    >
      <MidlProvider config={midlConfig}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider
            theme={lightTheme({
              accentColor: '#212122',
              accentColorForeground: 'white',
              borderRadius: 'medium',
              fontStack: 'system',
            })}
          >
            {/* <WagmiMidlProvider /> */}

            <LastUsedTokensProvider>{children}</LastUsedTokensProvider>
          </RainbowKitProvider>
        </QueryClientProvider>
      </MidlProvider>
    </WagmiProvider>
  );
};
