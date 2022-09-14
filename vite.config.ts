import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
// import Unocss from './config/unocss';
// import DefineOptions from 'unplugin-vue-define-options/vite';
import vueSetupExtend from 'unplugin-vue-setup-extend-plus/vite'

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
    vueSetupExtend()
    // Unocss()
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