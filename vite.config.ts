/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import setupNamePlugin from './vite-plugin-setup-name'

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    setupNamePlugin()
  ],
  // css: {
  //   preprocessorOptions: {
  //     less: {
  //       javascriptEnabled: true
  //     }
  //   }
  // },
  build: {
    rollupOptions,
    minify: false,
    lib: {
      entry: './packages/ikui-components',
      name: 'IkUI',
      fileName: 'ikui',
      formats: ['esm', 'umd', 'iife']
    }
  }
})