import fs from 'node:fs'
import path from 'path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const target = path.resolve(__dirname, '../packages/ikui-components/package.json')
const target2 = path.resolve(__dirname, '../packages/ikui-components/README.md')

const content = fs.readFileSync(target, 'utf-8')
console.log(content)
fs.copyFileSync(target, path.resolve(__dirname, '../dist/package.json'))
fs.copyFileSync(target2, path.resolve(__dirname, '../dist/README.md'))

console.log('🐥打包成功了🏀')
