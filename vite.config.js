import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// BASE_PATH lets the site run from a sub-folder, e.g. /homexa-react/ on GitHub Pages.
export default defineConfig({
  base: process.env.BASE_PATH || '/',
  plugins: [react()],
  ssr: { noExternal: ['react-helmet-async'] },
});
