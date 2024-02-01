import { createConfig, http } from 'wagmi';
import { goerli } from 'wagmi/chains';

declare module 'wagmi' {
  interface Register {
    config: typeof wagmiConfig;
  }
}

export const wagmiConfig = createConfig({
  chains: [goerli],
  ssr: true,
  transports: {
    [goerli.id]: http(),
  },
});
