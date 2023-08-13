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
      skipDiagnostics: true,
      staticImport: true,
      insertTypesEntry: true,
      cleanVueFileName: true,
      copyDtsFiles: true,
      include: ['./packages/ikui-components'],
      outputDir: ['./dist/lib', './dist/es'],
      afterBuild: (): void => {
        console.log('build complete')
      },
    }),
  ],
  build: {
    target: 'modules',
    minify: true,
    // outDir: resolve(__dirname, 'dist/es'),
    lib: {
      entry: resolve(__dirname, 'packages/ikui-components/index.ts'),
      name: 'ikunui',
      // fileName: (format) => `index.${format}.js`,
      // formats: ['esm', 'cjs', 'umd', 'es', 'iife'],
    },
    rollupOptions: {
      external: ['vue', 'vue3-popper', '@vueuse/core', 'vanilla-tilt'],
      output: [
        {
          format: 'umd',
          name: 'ikunui',
          exports: 'named',
          sourcemap: false,
          dir: 'dist/dist',
          entryFileNames: 'index.umd.js',
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
          manualChunks: undefined,
          inlineDynamicImports: false,
          globals: {
            vue: 'Vue',
          },
        },
        {
          format: 'es',
          exports: 'named',
          dir: 'dist/es',
          sourcemap: false,
          entryFileNames: (chunkInfo): string => {
            return `${chunkInfo.name.slice(0, chunkInfo.name.lastIndexOf('/') + 1)}index.js`
          },
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
          inlineDynamicImports: false,
          manualChunks: undefined,
          preserveModules: true,
          generatedCode: {
            symbols: true,
          },
        },
        {
          format: 'cjs',
          exports: 'named',
          dir: 'dist/lib',
          sourcemap: false,
          entryFileNames: (chunkInfo): string => {
            return `${chunkInfo.name.slice(0, chunkInfo.name.lastIndexOf('/') + 1)}index.js`
          },
          chunkFileNames: '[name].js',
          assetFileNames: '[name].[ext]',
          inlineDynamicImports: false,
          manualChunks: undefined,
          preserveModules: true,
          generatedCode: {
            symbols: true,
          },
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
