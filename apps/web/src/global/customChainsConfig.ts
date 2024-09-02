import { Chain } from 'wagmi/chains';

export const promTestnet: Chain = {
  testnet: true,
  id: 584548796,
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
      http: ['https://prom-testnet-rpc.eu-north-2.gateway.fm'],
    },
  },
  contracts: {
    multicall3: {
      address: '0x56968A553f3d883bc54f96976Edf782684791F90',
      blockCreated: 55613,
    },
  },
};
