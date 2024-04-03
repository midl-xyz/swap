import { createConfig, http } from 'wagmi';
import { Chain, goerli } from 'wagmi/chains';
import { walletConnect } from 'wagmi/connectors';

declare module 'wagmi' {
  interface Register {
    config: typeof wagmiConfig;
  }
}

export const promTestnet: Chain = {
  testnet: true,
  id: 97072271,
  name: 'Prom Testnet',
  nativeCurrency: {
    name: 'Prom',
    symbol: 'PROM',
    decimals: 18,
  },
  blockExplorers: {
    default: {
      name: 'Prom Testnet Explorer',
      url: 'https://testnet.promscan.io',
    },
  },
  rpcUrls: {
    default: {
      http: ['https://testnet-rpc.prom.io/'],
    },
  },
  contracts: {
    multicall3: {
      address: '0x56968A553f3d883bc54f96976Edf782684791F90',
      blockCreated: 55613,
    },
  },
};

export const wagmiConfig = createConfig({
  chains: [promTestnet],
  ssr: true,
  connectors: [
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WALLET_CONNECT_ID as string,
    }),
  ],
  transports: {
    [promTestnet.id]: http(),
  },
});
