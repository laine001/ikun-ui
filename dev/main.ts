import { createApp } from 'vue'
import app from './app.vue'
import IkUI from 'ikuiv'
import '@ikui/theme/index.scss'

createApp(app)
  .use(IkUI)
  .mount('#app')

// import { createApp } from 'vue'
// import app from './online-pkg.vue'
// import IkUI, { IkButton } from 'ikuiv'
// console.log(IkButton, 'IkButton')

// createApp(app)
//   .use(IkUI)
//   .mount('#app')
