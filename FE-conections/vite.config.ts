/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslintPlugin from 'vite-plugin-eslint';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    eslintPlugin({
      cache: false,
      include: ['src/**/*.tsx', 'src/**/*.ts'],
      exclude: ['node_modules/**', 'dist/**'],
    }),
    nodePolyfills({
      protocolImports: true,
    }),
  ],
  test: {
    environment: 'jsdom',
    globals: true,
  },
});
