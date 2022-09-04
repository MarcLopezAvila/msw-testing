import path from 'path';
import { defineConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import react from '@vitejs/plugin-react';

export default defineConfig({
  resolve: {
    alias: {
      common: path.resolve(__dirname, './src/common'),
      pages: path.resolve(__dirname, './src/pages'),
      application: path.resolve(__dirname, './src/application'),
    },
  },
  plugins: [eslint({ emitError: false }), react()],
});
