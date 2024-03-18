import { defineConfig } from '@wagmi/cli';
import UniswapV2Router02 from '@v60swap/periphery/dist/UniswapV2Router02.json' with { type: 'json' };
import { Abi } from 'viem';

export default defineConfig({
  out: 'src/global/contracts/abi.ts',
  contracts: [
    {
      name: 'UniswapV2Router02',
      abi: UniswapV2Router02 as Abi,
    },
  ],
});
