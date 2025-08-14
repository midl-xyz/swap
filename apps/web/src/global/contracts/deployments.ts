import { Address } from 'viem';
import type { Config } from 'wagmi';

type Deployments = Record<
  Config['chains'][number]['id'],
  {
    UniswapV2Router02: {
      address: Address;
    };
    UniswapV2Factory: {
      address: Address;
    };
    UV2Library: { address: Address };
  }
>;

export const deployments: Deployments = {
  ['777']: {
    UniswapV2Router02: {
      address: '0xB1F1C1A72dFb4F90d3794a3496703D6cBAAC72FA',
    },
    UniswapV2Factory: { address: '0x7C94B93aafB0aF2F58703B56c5EF18Fd10A6Ee06' },
    UV2Library: { address: '0x24e1aC0E5038C51A50AaDf2a4704a8eC87fE6C18' },
  },
};
