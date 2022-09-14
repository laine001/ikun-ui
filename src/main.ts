import { createApp } from 'vue'
import app from './app.vue'
import IkUI from '../packages/ikui-components'
// import '../packages/ikui-theme/button/index.css'

createApp(app)
  .use(IkUI)
  .mount('#app')
