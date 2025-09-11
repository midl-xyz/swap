import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsconfigPaths({
      ignoreConfigErrors: true,
    }),
    react(),
  ],
  resolve: {
    alias: {
      'tiny-secp256k1': '@bitcoinerlab/secp256k1',
      secp256k1: '@bitcoinerlab/secp256k1',
    },
  },
  test: {
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      reportsDirectory: './coverage',
      // Tip: limit to this widget during development, or remove include to cover all
      include: ['src/widgets/liquidity/ui/Liquidity.tsx', 'src/widgets/liquidity/ui/**/*.tsx'],
    },
  },
});
