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
  build: {
    sourcemap: false,
  },
  esbuild: {
    sourcemap: false,
  },
  optimizeDeps: {
    include: ['@midl/executor', '@midl/core'],
  },
  logLevel: 'error',
  test: {
    environment: 'happy-dom',
    silent: false,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      reportsDirectory: './coverage',
      // Tip: limit to this widget during development, or remove include to cover all
      include: [
        'src/widgets/liquidity/ui/Liquidity.tsx',
        'src/widgets/liquidity/ui/**/*.tsx',
        'src/shared/ui/swap-input/**/*.tsx',
      ],
    },
  },
});
