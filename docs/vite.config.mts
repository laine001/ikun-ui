import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import setupNamePlugin from '../vite-plugin-setup-name'

export default defineConfig({
  plugins: [vueJsx(), setupNamePlugin()],
  server: {
    port: 9527,
  },
})
