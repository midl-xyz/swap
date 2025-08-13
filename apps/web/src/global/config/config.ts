import { MempoolSpaceProvider, regtest } from '@midl-xyz/midl-js-core';
import { createMidlConfig } from '@midl-xyz/satoshi-kit';

export const config = createMidlConfig({
  networks: [regtest],
  persist: true,
});
