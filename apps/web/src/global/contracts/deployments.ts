import { midlRegtest } from '@midl-xyz/midl-js-executor';
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
  [midlRegtest.id]: {
    UniswapV2Router02: {
      address: '0x81704060aa76591c0EfA3A061720f2A48545aFe8',
    },
    UniswapV2Factory: { address: '0x4c7C6926fbF1Cb97D04Ecc486D6e26E8507f97F1' },
    UV2Library: { address: '0x4511bFE9B283A4c09625Ed7c62acAEB6f16893e5' },
  },
};
