// import { demoBlockPlugin } from 'vitepress-theme-demoblock';
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
      copyright: '本文档仅供个人娱乐学习使用',
    },
    algolia: {
      appId: '7H67QR5P0A',
      apiKey: 'deaab78bcdfe96b599497d25acc6460e',
      indexName: 'vitejs',
      searchParameters: {
        facetFilters: ['tags:cn'],
      },
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://github.com/LAINE001/ik-ui',
      },
    ],
    nav: [
      {
        text: '组件',
        link: '/components/button',
        activeMatch: '/components/',
      },
      {
        text: 'CSS',
        link: '/styles/animation',
        activeMatch: '/styles/',
      },
      {
        text: '相关链接',
        items: [
          {
            text: 'vitejs',
            link: 'https://vitepress.vuejs.org/',
          },
          {
            text: 'vue3',
            link: 'https://vuejs.org/',
          },
        ],
      },
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指引',
          collapsible: true,
          items: [
            {
              text: '概览',
              link: '/guide/overview',
            },
            {
              text: '快速上手',
              link: '/guide/quickstart',
            },
            {
              text: '视觉与色彩',
              link: '/components/colors',
            },
            {
              text: '节点与规划',
              link: '/guide/timeline',
            },
          ],
        },
      ],
      '/components/': [
        {
          text: '基础组件',
          collapsible: true,
          items: [
            {
              text: '按钮',
              link: '/components/button',
            },
            {
              text: '色彩',
              link: '/components/colors',
            },
            {
              text: '图标',
              link: '/components/icon',
            },
            {
              text: '加载状态',
              link: '/components/loading',
            },
            {
              text: '回到顶部',
              link: '/components/backtop',
            },
          ],
        },
        {
          text: '内容展示',
          collapsible: true,
          items: [
            {
              text: '输入框',
              link: '/components/input',
            },
            {
              text: '复选框',
              link: '/components/checkbox',
            },
            {
              text: '提示',
              link: '/components/message',
            },
          ],
        },
      ],
      '/styles/': [
        {
          text: 'CSS',
          // collapsible: true,
          items: [
            {
              text: '动画',
              link: '/styles/animation',
            },
            {
              text: '阴影',
              link: '/styles/shadow',
            },
          ],
        },
      ],
    },
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
