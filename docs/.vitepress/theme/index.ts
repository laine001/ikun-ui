import DefaultTheme from 'vitepress/theme';
import './var.css';
import IkUI from '../../../packages/ikui-components';
// import '../../../packages/ikui-components'

// import 'vitepress-theme-demoblock/theme/styles/index.css';
// import Demo from 'vitepress-theme-demoblock/components/Demo.vue';
// import DemoBlock from 'vitepress-theme-demoblock/components/DemoBlock.vue';
export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.use(IkUI);
    // app.component('Demo', Demo);
    // app.component('DemoBlock', DemoBlock);
  }
}