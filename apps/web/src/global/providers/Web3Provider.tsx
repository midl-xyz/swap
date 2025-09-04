'use client';
import { LastUsedTokensProvider } from '@/features';
import { config, queryClient } from '@/global';
import { midlRegtest } from '@midl-xyz/midl-js-executor';
import { WagmiMidlProvider } from '@midl-xyz/midl-js-executor-react';
import { MidlProvider } from '@midl-xyz/midl-js-react';
import { SatoshiKitProvider } from '@midl-xyz/satoshi-kit';
import { QueryClientProvider } from '@tanstack/react-query';
import { http } from 'viem';

(BigInt.prototype as any).toJSON = function () {
  return this.toString();
};

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <MidlProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <WagmiMidlProvider
          config={{
            chains: [midlRegtest],
            transports: {
              [midlRegtest.id]: http(
                process.env.NEXT_PUBLIC_EVM_RPC ||
                  'https://rpc.regtest.midl.xyz',
              ),
            },
          }}
        >
          <SatoshiKitProvider>
            <LastUsedTokensProvider>{children}</LastUsedTokensProvider>
          </SatoshiKitProvider>
        </WagmiMidlProvider>
      </QueryClientProvider>
    </MidlProvider>
  );
};
