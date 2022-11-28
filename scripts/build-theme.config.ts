import type { UserConfigExport } from 'vite'
import { resolve } from 'path'

const input = resolve(__dirname, '../packages/ikui-theme/index.scss')
const outDir = resolve(__dirname, '../dist/style')

export default (): UserConfigExport => {
  return {
    build: {
      outDir,
      rollupOptions: {
        input,
        output: {
          assetFileNames: '[name].[ext]',
        },
      },
    },
  }
}
