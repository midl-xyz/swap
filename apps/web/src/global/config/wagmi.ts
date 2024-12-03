'use client';

import { midlRegtest } from '@midl-xyz/midl-js-executor';
import { Chain } from 'viem';
import { createConfig, createStorage, http } from 'wagmi';

declare module 'wagmi' {
  interface Register {
    config: typeof wagmiConfig;
  }
}

export const wagmiConfig = createConfig({
  connectors: [],
  chains: [midlRegtest as Chain],
  transports: {
    [midlRegtest.id]: http(midlRegtest.rpcUrls.default.http[0]),
  },
  storage: createStorage({
    storage: typeof localStorage === 'undefined' ? undefined : localStorage,
    key: 'midl-swap-v0.0.1',
  }),
  ssr: true,
});

export type ChainId = (typeof wagmiConfig)['chains'][number]['id'];
