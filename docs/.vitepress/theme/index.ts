import DefaultTheme from 'vitepress/theme';
import './var.css';
import './style.css';
import IkUI from '../../../packages/ikui-components';
// import '../../../packages/ikui-components'

// import 'vitepress-theme-demoblock/theme/styles/index.css';
// import Demo from 'vitepress-theme-demoblock/components/Demo.vue';
// import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue';
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    console.log(IkUI, 'IkUI')
    app.use(IkUI);
    // app.component('Demo', Demo);
    // app.component('DemoBlock', DemoBlock);
  }
}