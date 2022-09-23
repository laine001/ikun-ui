import { createApp } from 'vue'
import app from './app.vue'
import IkUI from '@ikui/components'
console.log(IkUI, 'ikui')

createApp(app)
  .use(IkUI)
  .mount('#app')
