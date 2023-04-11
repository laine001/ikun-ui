import DefaultTheme from 'vitepress/theme'
import IkUI, { message } from 'ikuiv'
import '@ikui/theme/index.scss'
// import Demo from '../components/demo.vue'
// import DemoBlock from '../components/demoBlock.vue'
import './var.css'
import './style.css'
// console.log(IkUI, message, 'IkUI')
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(IkUI)
    app.config.globalProperties.$message = message
    app.component('Demo', Demo)
    app.component('DemoBlock', DemoBlock)
  },
}
