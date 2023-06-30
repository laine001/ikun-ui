#!/usr/bin/env node
import figlet from 'figlet'
import clear from 'clear'
import chalkAnimation from 'chalk-animation'

import chalk from 'chalk'
import inquirer from 'inquirer'

const log = (content) => console.log(chalk.green(content))

const opt = {
  'SmartyUI应用模版(Vite)': 'ik-ui-vite',
  // SmartyAdmin模版: 'admin',
  组件库脚手架: 'uitemplate',
  组件库文档网站: 'uidocstemplate',
  退出: 'quit',
}

const question = [
  {
    // 选择框
    type: 'rawlist',
    message: '请选择要创建的项目？',
    name: 'operation',
    choices: Object.keys(opt),
  },
]

clear()

const logo = figlet.textSync('I K U I', {
  font: '3D-ASCII',
  verticalLayout: 'default',
  horizontalLayout: 'default',
  width: 80,
  whitespaceBreak: true,
})

const rainbow = chalkAnimation.rainbow(logo)

setTimeout(() => {
  rainbow.stop()
  query()
}, 1000)

async function query() {
  const answer = await inquirer.prompt(question)
  console.log(answer, 'answer')
  if (answer.operation === '退出') return

  // const { default: op } = await import(`../lib/operations/${opt[answer.operation]}.js`)
  // await op()
}
