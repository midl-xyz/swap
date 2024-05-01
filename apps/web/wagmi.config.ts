import { defineConfig } from '@wagmi/cli';
import UniswapV2Router02 from '@v60swap/periphery/dist/UniswapV2Router02.json' with { type: 'json' };
import UniswapV2Factory from '@v60swap/core/dist/UniswapV2Factory.json' with { type: 'json' };
import UniswapV2Pair from '@v60swap/core/dist/IUniswapV2Pair.json' with { type: 'json' };
import UV2Library from '@v60swap/periphery/dist/UV2Library.json' with { type: 'json' };
import { Abi } from 'viem';

export default defineConfig({
  out: 'src/global/contracts/abi.ts',
  contracts: [
    {
      name: 'UniswapV2Router02',
      abi: UniswapV2Router02 as Abi,
    },
    {
      name: 'UniswapV2Pair',
      abi: UniswapV2Pair as unknown as Abi,
    },
    {
      name: 'UniswapV2Factory',
      abi: UniswapV2Factory as Abi,
    },
    {
      name: 'UV2Library',
      abi: UV2Library as Abi,
    },
  ],
});
