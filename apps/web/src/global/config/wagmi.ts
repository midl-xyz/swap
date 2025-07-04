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
  chains: [
    {
      ...midlRegtest,

      rpcUrls: {
        default: {
          http: ['https://rpc.etna.midl.xyz'],
        },
      },
    } as Chain,
  ],
  batch: {
    multicall: true,
  },
  transports: {
    [midlRegtest.id]: http('https://rpc.etna.midl.xyz'),
  },
  storage: createStorage({
    storage: typeof localStorage === 'undefined' ? undefined : localStorage,
    key: 'midl-swap-v0.0.1',
  }),
  ssr: false,
});

export type ChainId = (typeof wagmiConfig)['chains'][number]['id'];
