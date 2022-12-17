import path from 'path';
import vue from '@vitejs/plugin-vue';
import { defineConfig } from 'vite';

// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vite-plugin
import vuetify from 'vite-plugin-vuetify';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/vuetify3-ui-components/' : './',
  plugins: [vue(), vuetify({ autoImport: true })],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
