'use client';

import { promMainnet } from '@/global/customChainsConfig';
import { connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  frameWallet,
  injectedWallet,
  metaMaskWallet,
  okxWallet,
  rainbowWallet,
  trustWallet,
  walletConnectWallet,
  zerionWallet,
} from '@rainbow-me/rainbowkit/wallets';
import { createConfig, createStorage, http } from 'wagmi';

declare module 'wagmi' {
  interface Register {
    config: typeof wagmiConfig;
  }
}
const connectors = connectorsForWallets(
  [
    {
      groupName: 'Popular',
      wallets: [
        metaMaskWallet,
        injectedWallet,
        rainbowWallet,
        zerionWallet,
        trustWallet,
        frameWallet,
        okxWallet,
        walletConnectWallet,
      ],
    },
  ],
  {
    appName: 'v60',
    projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID as string,
  },
);

export const wagmiConfig = createConfig({
  connectors: connectors,
  chains: [promMainnet],
  transports: {
    [promMainnet.id]: http(promMainnet.rpcUrls.default.http[0]),
  },
  storage: createStorage({
    storage: typeof localStorage === 'undefined' ? undefined : localStorage,
    key: 'v60-1.0.1',
  }),
  ssr: true,
});

export type ChainId = (typeof wagmiConfig)['chains'][number]['id'];
