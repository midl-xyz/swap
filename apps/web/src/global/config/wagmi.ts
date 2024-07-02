'use client';

import { Chain, connectorsForWallets } from '@rainbow-me/rainbowkit';
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
import { sepolia } from 'wagmi/chains';
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
    appName: 'V60',
    projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID as string,
  },
);

export const wagmiConfig = createConfig({
  connectors,
  chains: [sepolia],
  transports: {
    [sepolia.id]: http('https://ethereum-sepolia-rpc.publicnode.com'),
  },
  storage: createStorage({
    storage: typeof localStorage === 'undefined' ? undefined : localStorage,
    key: 'v60-1.0.0',
  }),
  ssr: true,
});

export type ChainId = (typeof wagmiConfig)['chains'][number]['id'];
