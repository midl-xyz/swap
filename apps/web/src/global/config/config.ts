'use client';

import {
  MaestroSymphonyProvider,
  MempoolSpaceProvider,
  regtest,
} from '@midl-xyz/midl-js-core';
import { createMidlConfig } from '@midl-xyz/satoshi-kit';

export const config = createMidlConfig({
  networks: [regtest],
  persist: true,
  runesProvider: new MaestroSymphonyProvider(),
  provider: new MempoolSpaceProvider({
    regtest:
      process.env.NEXT_PUBLIC_MEMPOOL_RPC || 'https://mempool.regtest.midl.xyz',
  } as any),
});
