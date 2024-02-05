import peripheryPackageJson from '@v60swap/periphery/package.json';
import corePackageJson from '@v60swap/core/package.json';
import { Address } from 'viem';
import { Config } from 'wagmi';
import { goerli } from 'wagmi/chains';

type UniswapV2Router02 =
  typeof import('@v60swap/periphery/deployments/1.0.0/goerli/UniswapV2Router02.json');

type UniswapV2Factory =
  typeof import('@v60swap/core/deployments/1.0.0/goerli/UniswapV2Factory.json');

type UniswapV2Pair = typeof import('./additional-abis/UniswapV2Pair.json');

type Deployments = Record<
  Config['chains'][number]['id'],
  {
    UniswapV2Router02: Omit<UniswapV2Router02, 'address'> & {
      address: Address;
    };
    UniswapV2Factory: Omit<UniswapV2Factory, 'address'> & {
      address: Address;
    };
    UniswapV2Par: UniswapV2Pair;
  }
>;

export const deployments: Deployments = {
  [goerli.id]: {
    UniswapV2Router02: require(
      `@v60swap/periphery/deployments/${peripheryPackageJson.version}/goerli/UniswapV2Router02.json`,
    ),
    UniswapV2Factory: require(
      `@v60swap/core/deployments/${corePackageJson.version}/goerli/UniswapV2Factory.json`,
    ),
    UniswapV2Par: require('./additional-abis/UniswapV2Pair.json'),
  },
};
