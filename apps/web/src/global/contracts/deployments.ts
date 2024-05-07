import { promTestnet } from '@/global';
import { Address } from 'viem';
import { sepolia } from 'viem/chains';
import { Config } from 'wagmi';

type UV2Library =
  typeof import('@v60swap/periphery/deployments/1.0.1/sepolia/UV2Library.json');

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
  [promTestnet.id]: {
    UniswapV2Router02: {
      address: '0x1e36F304a579C31C5EBC848E49E7b3bE8f195724',
    },
    UniswapV2Factory: {
      address: '0xfc9cE15BDd57234382692B27f133acb9E23573F8',
    },
    UV2Library: require('@v60swap/periphery/dist/UV2Library.json'),
  },
  [sepolia.id]: {
    UniswapV2Factory: require('@v60swap/core/deployments/1.0.1/sepolia/UniswapV2Factory.json'),
    UniswapV2Router02: require('@v60swap/periphery/deployments/1.0.1/sepolia/UniswapV2Router02.json'),
    UV2Library: require('@v60swap/periphery/deployments/1.0.1/sepolia/UV2Library.json'),
  },
};
