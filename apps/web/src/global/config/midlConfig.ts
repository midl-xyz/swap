import { createConfig, regtest, leather } from '@midl-xyz/midl-js-core';
import { satsConnect } from '@midl-xyz/midl-js-core/connectors/sats-connect';

export const midlConfig = createConfig({
  networks: [regtest],
  connectors: [satsConnect(), leather()],
  persist: true,
});
