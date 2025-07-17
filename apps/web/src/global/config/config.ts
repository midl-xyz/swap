import { MempoolSpaceProvider, regtest } from '@midl-xyz/midl-js-core';
import { createMidlConfig } from '@midl-xyz/satoshi-kit';

export const config = createMidlConfig({
  networks: [regtest],
  persist: true,
  provider: new MempoolSpaceProvider({
    regtest: 'https://mempool.regtest.midl.xyz',
  } as any), // Any is used coz we don't wanna give mainnet links
});
