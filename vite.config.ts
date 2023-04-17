import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import setupNamePlugin from './vite-plugin-setup-name'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    setupNamePlugin(),
    dts({
      // insertTypesEntry: true,
      // cleanVueFileName: true,
      // copyDtsFiles: true,
      include: ['./packages/ikui-components'],
      outputDir: ['dist/es', 'dist/lib'],
    }),
  ],
  build: {
    target: 'modules',
    minify: true,
    // outDir: resolve(__dirname, 'dist/es'),
    lib: {
      entry: resolve(__dirname, 'packages/ikui-components/index.ts'),
      name: 'ikui',
      fileName: () => `index.js`,
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue'],
      output: [
        {
          format: 'es',
          // entryFileNames: '[name].js',
          preserveModules: true,
          dir: 'dist/es',
          // preserveModulesRoot: 'src'
        },
        {
          format: 'cjs',
          preserveModules: true,
          dir: 'dist/lib',
        },
      ],
      // globals: {
      //   vue: 'Vue'
      // }
    },
  },

  server: {
    port: 9526,
  },

  test: {
    coverage: {
      provider: 'istanbul',
      reporter: ['text', 'json', 'html'],
    },
  },
})
