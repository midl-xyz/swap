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
      address: '0x56968A553f3d883bc54f96976Edf782684791F90',
      blockCreated: 55613,
    },
  },
};
