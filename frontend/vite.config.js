import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      // Add polyfills for Node.js modules if needed
      buffer: 'buffer',
      process: 'process/browser',
    },
  },
  define: {
    'process.env': {},
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
});
