import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  // Whether to use css reset
  presets: ['@pandacss/preset-base', '@pandacss/preset-panda'],

  preflight: true,
  jsxFramework: 'react',

  // Where to look for your css declarations
  include: ['./src/**/*.{js,jsx,ts,tsx}', './pages/**/*.{js,jsx,ts,tsx}'],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {},

  // The output directory for your css system
  outdir: 'styled-system',
});
