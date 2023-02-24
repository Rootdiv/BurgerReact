import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      components: path.resolve(__dirname, 'src/components'),
      assets: path.resolve(__dirname, 'src/assets'),
      store: path.resolve(__dirname, 'src/store'),
      const: path.resolve(__dirname, 'src/const'),
      utils: path.resolve(__dirname, 'src/utils'),
    },
  },
});
