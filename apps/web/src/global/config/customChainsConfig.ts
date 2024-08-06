import { Chain } from 'wagmi/chains';

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
