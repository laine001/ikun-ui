import DefaultTheme from 'vitepress/theme'
import Layout from './Layout.vue'
import IkUI, { message } from 'ikuiv'
import '@ikui/theme/index.scss'
import './var.css'
import './style.css'
import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import Comment from '../components/gitalk.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ app }) {
    app.use(IkUI)
    app.config.globalProperties.$message = message
    app.component('Demo', Demo)
    app.component('git-talk', Comment)
  },
}
