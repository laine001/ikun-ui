/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('node:fs')
const path = require('path')

const target = path.resolve(__dirname, '../packages/ikui-components/package.json')
const target2 = path.resolve(__dirname, '../packages/ikui-components/README.md')

const content = fs.readFileSync(target, 'utf-8')
// const currentVersion = JSON.parse(content).version
// console.log(currentVersion.split('-beta')[0].split('.'))
console.log(content)
fs.copyFileSync(target, path.resolve(__dirname, '../dist/package.json'))
fs.copyFileSync(target2, path.resolve(__dirname, '../dist/README.md'))

console.log('🐥打包成功了🏀')
