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
      address: '0xee7d81B234042AB58192E0Ef6a5004b08ca65a34',
    },
    UniswapV2Factory: { address: '0x5B3046102F11Ac37Eea74741949bc2aF83c926E5' },
    UV2Library: { address: '0x88bdaE217ba9782A46a02b14d51400BA5cA45a2C' },
  },
};
