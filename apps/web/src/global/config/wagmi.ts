import { createConfig, http } from 'wagmi';
import { goerli } from 'wagmi/chains';
import { walletConnect } from 'wagmi/connectors';

declare module 'wagmi' {
  interface Register {
    config: typeof wagmiConfig;
  }
}

export const wagmiConfig = createConfig({
  chains: [goerli],
  ssr: true,
  connectors: [
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID as string,
    }),
  ],
  transports: {
    [goerli.id]: http(),
  },
});
