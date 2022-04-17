import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const path = require('path');

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: path.resolve(__dirname, 'src'),
      },
      {
        find: '@/assets',
        replacement: path.resolve(__dirname, 'src/assets'),
      },
      {
        find: '@/styles',
        replacement: path.resolve(__dirname, 'src/styles'),
      },
      {
        find: '@/screens',
        replacement: path.resolve(__dirname, 'src/screens'),
      },
    ],
  },
  plugins: [react()],
});
