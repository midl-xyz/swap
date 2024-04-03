import { promTestnet } from '@/global';
import corePackageJson from '@v60swap/core/package.json';
import peripheryPackageJson from '@v60swap/periphery/package.json';
import { Address } from 'viem';
import { Config } from 'wagmi';

type UniswapV2Router02 =
  typeof import('@v60swap/periphery/deployments/1.0.0/goerli/UniswapV2Router02.json');

type UniswapV2Factory =
  typeof import('@v60swap/core/deployments/1.0.0/goerli/UniswapV2Factory.json');

type UniswapV2Pair = typeof import('@v60swap/core/dist/IUniswapV2Pair.json');

type Deployments = Record<
  Config['chains'][number]['id'],
  {
    UniswapV2Router02: {
      address: Address;
    };
    UniswapV2Factory: {
      address: Address;
    };
    UniswapV2Par: UniswapV2Pair;
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
    UniswapV2Par: require('@v60swap/core/dist/IUniswapV2Pair.json'),
  },
};
