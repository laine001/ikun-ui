// import { demoBlockPlugin } from 'vitepress-theme-demoblock';
import sidebar from './sidebar'
import nav from './nav'

export default {
  base: '/ik-ui/',
  title: 'IKUI',
  lang: 'en-US',
  description: '组件库',
  head: [
    ['link', { rel: 'icon', href: '/logo2.png', type: 'image/png' }],
    [
      'link',
      {
        rel: 'alternate icon',
        href: 'https://laine001.github.io/ik-ui/favicon.ico',
        type: 'image/png',
        sizes: '32x32',
      },
    ],
    // ['link', { rel: 'stylesheet', href: 'https://unpkg.com/nes.css/css/nes-core.min.css' }],
  ],
  themeConfig: {
    footer: {
      copyright: '本文档暂仅供个人学习使用',
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
        link: 'https://github.com/LAINE001/ik-ui',
      },
    ],
    nav,
    sidebar,
  },
  async transformHead(ctx) {
    console.log(ctx)
    // return Promise.reject()
    // return {
    //   title: 'hellokitty'
    // }
    return new Promise((res) => {
      res({
        title: 'hellokitty',
      })
    })
  },
  async transformHtml(code, id, context) {},
  markdown: {
    theme: 'material-palenight',
    // config: (md) => {
    //   md.use(demoBlockPlugin);
    // }
  },
}
