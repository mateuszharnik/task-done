/* eslint-disable import/no-extraneous-dependencies */
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { config } from 'dotenv';
import vue from '@vitejs/plugin-vue';
import vuetify from 'vite-plugin-vuetify';
import vueDevTools from 'vite-plugin-vue-devtools';

config({ path: '../../.env' });

export default defineConfig({
  plugins: [
    vue(),
    vuetify(),
    vueDevTools(),
  ],
  server: {
    port: process.env.CLIENT_PORT,
    proxy: {
      '/api': {
        target: process.env.SERVER_URL,
        changeOrigin: true,
      },
    },
  },
  root: './src',
  publicDir: './public',
  envDir: resolve(__dirname, '../..'),
  build: {
    outDir: '../dist',
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@app': resolve(__dirname, './src/App'),
      '@components': resolve(__dirname, './src/components'),
      '@views': resolve(__dirname, './src/views'),
      '@router': resolve(__dirname, './src/router'),
      '@composables': resolve(__dirname, './src/composables'),
      '@constants': resolve(__dirname, './src/constants'),
      '@layouts': resolve(__dirname, './src/layouts'),
      '@assets': resolve(__dirname, './src/assets'),
      '@utils': resolve(__dirname, './src/utils'),
      '@services': resolve(__dirname, './src/services'),
      '@providers': resolve(__dirname, './src/providers'),
      '@locales': resolve(__dirname, './src/locales'),
      '@contexts': resolve(__dirname, './src/contexts'),
    },
  },
});
