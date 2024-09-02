'use client';

import { promTestnet } from '@/global/customChainsConfig';
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
  connectors: connectors,
  chains: [promTestnet, sepolia],
  transports: {
    [sepolia.id]: http(process.env.NEXT_PUBLIC_SEPOLIA_RPC_URL),
    [promTestnet.id]: http(promTestnet.rpcUrls.default.http[0]),
  },
  storage: createStorage({
    storage: typeof localStorage === 'undefined' ? undefined : localStorage,
    key: 'v60-1.0.1',
  }),
  ssr: true,
});

export type ChainId = (typeof wagmiConfig)['chains'][number]['id'];
