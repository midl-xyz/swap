import { regtest } from '@midl-xyz/midl-js-core';
import { MaestroSymphonyProvider } from '@midl-xyz/midl-js-core/providers/MempoolSpaceProvider';
import { createMidlConfig } from '@midl-xyz/satoshi-kit';

export const config = createMidlConfig({
  networks: [regtest],
  persist: true,
  runesProvider: new MaestroSymphonyProvider(),
});
