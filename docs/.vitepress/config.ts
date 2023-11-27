import { demoBlockPlugin } from './vitepress-theme-demoblock/node'
// import { demoblock as demoBlockPlugin } from './plugins/blockPlugin'
import sidebar from './sidebar'
import nav from './nav'

export default {
  base: '/ikun-ui/',
  title: 'IKUN-UI',
  lang: 'en-US',
  description: '组件库',
  head: [
    ['link', { rel: 'icon', href: '/layer5.png', type: 'image/png' }],
    [
      'link',
      {
        rel: 'alternate icon',
        href: 'https://laine001.github.io/ikun-ui/favicon.ico',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    [
      'script',
      {},
      `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "jwue0owwbp");
      `
    ]
    // ['link', { rel: 'stylesheet', href: 'https://unpkg.com/nes.css/css/nes-core.min.css' }],
  ],
  themeConfig: {
    logo: '/layer5.png',
    footer: {
      message: 'MIT Licensed',
      copyright: '©ikun',
    },
    search: {
      provider: 'local',
    },
    // algolia: {
    //   appId: '7H67QR5P0A',
    //   apiKey: 'deaab78bcdfe96b599497d25acc6460e',
    //   indexName: 'vitejs',
    //   searchParameters: {
    //     facetFilters: ['tags:cn'],
    //   },
    // },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/LAINE001/ikun-ui',
      },
    ],
    nav,
    sidebar,
  },
  // async transformHead(ctx) {
  //   console.log(ctx)
  //   // return Promise.reject()
  //   // return {
  //   //   title: 'hellokitty'
  //   // }
  //   return new Promise((res) => {
  //     res({
  //       title: 'hellokitty',
  //     })
  //   })
  // },
  // async transformHtml(code, id, context) {},
  markdown: {
    theme: 'material-theme-palenight',
    config: (md) => {
      // console.log(md, 'md')
      md.use(demoBlockPlugin)
      // md.use(demoblock)
      // demoblock(md)
      // , {
      //   customClass: 'demoblock-custom',
      //   cssPreprocessor: 'scss',
      //   // customStyleTagName: 'style lang="less"',
      //   scriptImports: ["import * as ElementPlus from 'element-plus'"],
      //   scriptReplaces: [
      //     {
      //       searchValue: /const ({ defineComponent as _defineComponent }) = Vue/g,
      //       replaceValue: 'const { defineComponent: _defineComponent } = Vue',
      //     },
      //     { searchValue: /import ({.*}) from 'element-plus'/g, replaceValue: (s, s1) => `const ${s1} = ElementPlus` },
      //   ],
      //   styleReplaces: [
      //     { searchValue: '@import "docs/styles/index.css";', replaceValue: '@import "@docs/styles/index.css";' },
      //   ],
      // }
    },
  },
}
