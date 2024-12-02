'use client';

import { promMainnet } from '@/global/customChainsConfig';
import { createConfig, createStorage, http } from 'wagmi';

declare module 'wagmi' {
  interface Register {
    config: typeof wagmiConfig;
  }
}

export const wagmiConfig = createConfig({
  connectors: [],
  chains: [promMainnet],
  transports: {
    [promMainnet.id]: http(promMainnet.rpcUrls.default.http[0]),
  },
  storage: createStorage({
    storage: typeof localStorage === 'undefined' ? undefined : localStorage,
    key: 'v60-1.0.2',
  }),
  ssr: true,
});

export type ChainId = (typeof wagmiConfig)['chains'][number]['id'];
