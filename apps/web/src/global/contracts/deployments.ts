import { promTestnet, promMainnet } from '@/global/customChainsConfig';
import { Address } from 'viem';
import { sepolia } from 'viem/chains';
import { Config } from 'wagmi';

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
  [promMainnet.id]: {
    UniswapV2Router02: require('@v60swap/periphery/deployments/2.0.0/promMainnet/UniswapV2Router02.json'),

    UniswapV2Factory: require('@v60swap/core/deployments/2.0.0/promMainnet/UniswapV2Factory.json'),

    UV2Library: require('@v60swap/periphery/deployments/2.0.0/promMainnet/UV2Library.json'),
  },
  [promTestnet.id]: {
    UniswapV2Router02: require('@v60swap/periphery/deployments/1.0.3/testnetErigon/UniswapV2Router02.json'),

    UniswapV2Factory: require('@v60swap/core/deployments/1.0.3/testnetErigon/UniswapV2Factory.json'),

    UV2Library: require('@v60swap/periphery/deployments/1.0.3/testnetErigon/UV2Library.json'),
  },
  [sepolia.id]: {
    UniswapV2Factory: require('@v60swap/core/deployments/1.0.3/sepolia/UniswapV2Factory.json'),
    UniswapV2Router02: require('@v60swap/periphery/deployments/1.0.3/sepolia/UniswapV2Router02.json'),
    UV2Library: require('@v60swap/periphery/deployments/1.0.3/sepolia/UV2Library.json'),
  },
};
