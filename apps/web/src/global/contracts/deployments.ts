import { promTestnet } from '@/global/customChainsConfig';
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
  [promTestnet.id]: {
    UniswapV2Router02: {
      address: '0x433574eB330525Ed97C600402BCF963376a323C9',
    },
    UniswapV2Factory: {
      address: '0x9B7eAbe24C6f4FD93B52BA27510aaFa484B28D3A',
    },
    UV2Library: require('@v60swap/periphery/deployments/1.0.3/testnetErigon/UV2Library.json'),
  },
  [sepolia.id]: {
    UniswapV2Factory: require('@v60swap/core/deployments/1.0.3/sepolia/UniswapV2Factory.json'),
    UniswapV2Router02: require('@v60swap/periphery/deployments/1.0.3/sepolia/UniswapV2Router02.json'),
    UV2Library: require('@v60swap/periphery/deployments/1.0.3/sepolia/UV2Library.json'),
  },
};
