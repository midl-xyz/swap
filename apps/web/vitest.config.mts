import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    tsconfigPaths(),
    react(),
  ],
 
  test: {
    environment: 'happy-dom',
    deps: {
      inline: ['@midl/satoshi-kit'], // ensure vite resolves it (not Node)
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html', 'lcov'],
      reportsDirectory: './coverage',
      // Include app-menu files for this task (and others already configured)
      include: [
        'src/widgets/app-menu/ui/AppMenuLink.tsx',
        'src/widgets/app-menu/ui/AppMenu.tsx',
        'src/widgets/app-menu/ui/MobileAppMenu.tsx',
        'src/widgets/app-menu/ui/**/*.tsx',
        'src/widgets/liquidity/ui/Liquidity.tsx',
        'src/widgets/liquidity/ui/**/*.tsx',
        'src/shared/ui/swap-input/**/*.tsx',
      ],
    },
  },
});
