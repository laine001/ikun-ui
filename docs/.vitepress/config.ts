// import { demoBlockPlugin } from 'vitepress-theme-demoblock';
export default {
  // base: '/ik-ui/',
  title: 'IKUI',
  description: '组件库',
  themeConfig: {
    footer: {
      copyright: '本文档仅供个人娱乐学习使用，切勿私自分享'
    },
    algolia: {
      appId: '7H67QR5P0A',
      apiKey: 'deaab78bcdfe96b599497d25acc6460e',
      indexName: 'vitejs',
      searchParameters: {
        facetFilters: ['tags:cn']
      }
    },
    socialLinks: [
      {
        icon: 'github',
        link: 'https://laine001.github.io'
      }
    ],
    nav: [
      {
        text: '组件',
        link: '/components/',
        activeMatch: '/components/'
      },
      {
        text: '相关链接',
        items: [
          {
            text: '团队',
            link: 'https://vitepress.vuejs.org/'
          },
          {
            text: 'vite官方文档',
            link: 'https://vitepress.vuejs.org/'
          }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指引',
          items: [
            {
              text: '概览',
              link: '/guide/overview'
            },
            {
              text: '快速上手',
              link: '/guide/quickstart'
            }
          ]
        }
      ],
      '/components/': [
        {
          text: '组件',
          items: [
            {
              text: '按钮',
              link: '/components/button'
            },
            {
              text: '图标',
              link: '/components/icon'
            },
            {
              text: '输入框',
              link: '/components/input'
            },
            {
              text: '加载状态',
              link: '/components/loading'
            }
          ]
        }
      ]
    }
  },
  // markdown: {
  //   config: (md) => {
  //     md.use(demoBlockPlugin);
  //   }
  // }
}