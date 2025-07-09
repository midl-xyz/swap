import { midlRegtest } from '@midl-xyz/midl-js-executor';
import { Address } from 'viem';
import type { Config } from 'wagmi';

type UV2Library =
  typeof import('@v60swap/periphery/deployments/1.0.3/sepolia/UV2Library.json');

type Deployments = Record<
  Config['chains'][number]['id'],
  {
    UniswapV2Router02: {
      address: Address;
    };
    UniswapV2Factory: {
      address: Address;
    };
    UV2Library: UV2Library;
  }
>;

export const deployments: Deployments = {
  ['777']: {
    UniswapV2Router02: require('@v60swap/periphery/deployments/1.0.3/midl/UniswapV2Router02.json'),
    UniswapV2Factory: require('@v60swap/core/deployments/1.0.4/midl/UniswapV2Factory.json'),
    UV2Library: require('@v60swap/periphery/deployments/1.0.3/midl/UV2Library.json'),
  },
};
