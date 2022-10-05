// import { demoBlockPlugin } from 'vitepress-theme-demoblock';
export default {
  base: '/ik-ui/',
  title: 'IKUI',
  lang: 'en-US',
  description: '组件库',
  head: [
    ['link', { rel: 'icon', href: '/logo2.png', type: 'image/png' }],
    ['link', { rel: 'alternate icon', href: '/favicon.ico', type: 'image/png', sizes: '16x16' }],
  ],
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
        link: 'https://github.com/LAINE001/ik-ui'
      }
    ],
    nav: [
      {
        text: '组件',
        link: '/components/button',
        activeMatch: '/components/'
      },
      {
        text: '相关链接',
        items: [
          // {
          //   text: '团队',
          //   link: 'https://vitepress.vuejs.org/'
          // },
          {
            text: 'vitejs',
            link: 'https://vitepress.vuejs.org/'
          },
          {
            text: 'vue3',
            link: 'https://vuejs.org/'
          }
        ]
      }
    ],
    sidebar: {
      '/guide/': [
        {
          text: '指引',
          collapsible: true,
          items: [
            {
              text: '概览',
              link: '/guide/overview'
            },
            {
              text: '快速上手',
              link: '/guide/quickstart'
            },
            {
              text: '节点与规划',
              link: '/guide/timeline'
            }
          ]
        }
      ],
      '/components/': [
        {
          text: '基础组件',
          collapsible: true,
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
              text: '加载状态',
              link: '/components/loading'
            }
          ]
        },
        {
          text: '内容展示',
          collapsible: true,
          items: [
            {
              text: '输入框',
              link: '/components/input'
            },
            {
              text: '复选框',
              link: '/components/checkbox'
            },
            {
              text: '提示',
              link: '/components/message'
            }
          ]
        }
      ]
    }
  },
  async transformHead(ctx) {
    console.log(ctx)
    // return Promise.reject()
    // return {
    //   title: 'hellokitty'
    // }
    return new Promise((res) => {
      res({
        title: 'hellokitty'
      })
    })
  },
  async transformHtml(code, id, context) {
  },
  markdown: {
    theme: 'material-palenight'
    // config: (md) => {
    //   md.use(demoBlockPlugin);
    // }
  }
}