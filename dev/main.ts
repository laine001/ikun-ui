import { createApp } from 'vue'
import app from './layout.vue'
import IkUI from 'ikuiv'
import '@ikui/theme/index.scss'
import router from './router'

document.title = 'ikui-dev'

createApp(app).use(IkUI).use(router).mount('#app')

// import { createApp } from 'vue'
// import app from './online-pkg.vue'
// import IkUI, { IkButton } from 'ikuiv'
// console.log(IkButton, 'IkButton')

// createApp(app)
//   .use(IkUI)
//   .mount('#app')
