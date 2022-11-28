// import type { App } from 'vue'
import messageService from './src/service'

// const withInstallForFunc = () => {
// }

// export const IkMessage = () => {
//   Message.install = (app: App) => {
//     app.config.globalProperties.$message = Message
//   }
//   return Message
// }

export const message = messageService

export * from './src/service'
