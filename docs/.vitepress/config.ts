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
    nav: [
      {
        text: '指引',
        link: '/guide/quickstart',
        activeMatch: '/guide/',
      },
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
            link: 'https://vitejs.dev/',
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
              link: '/guide/colors',
            },
            {
              text: '节点与规划',
              link: '/guide/timeline',
            },
            {
              text: '动态主题',
              link: '/guide/toggle-theme',
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
              text: '按钮 Button',
              link: '/components/button',
            },
            // {
            //   text: '色彩 Color',
            //   link: '/components/colors',
            // },
            {
              text: '图标 Icon',
              link: '/components/icon',
            },
            {
              text: '加载状态 Loading',
              link: '/components/loading',
            },
            {
              text: '回到顶部 BackTop',
              link: '/components/backtop',
            },
          ],
        },
        {
          text: '内容展示',
          collapsible: true,
          items: [
            {
              text: '布局 Layout',
              link: '/components/layout',
            },
            {
              text: '输入框 Input',
              link: '/components/input',
            },
            {
              text: '复选框 Checkbox',
              link: '/components/checkbox',
            },
            {
              text: '提示 Message',
              link: '/components/message',
            },
            {
              text: '对话框 Modal',
              link: '/components/modal',
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
