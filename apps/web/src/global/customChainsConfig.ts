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
      url: 'prom-testnet-blockscout.eu-north-2.gateway.fm',
    },
  },
  rpcUrls: {
    default: {
      http: [
        'https://testnet-rpc.prom.io/?apiKey=Tx0Dk5kq_ZpX2FJH3cim2hDF1CaBAV57.FIC2IrXcjVrNLi7U',
      ],
    },
  },
  contracts: {
    multicall3: {
      address: '0x4312B2F4834f1b1c47B8114aC31a599747a5d445',
      blockCreated: 78303,
    },
  },
};
