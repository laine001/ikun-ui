export default [
  {
    text: '首页',
    link: '/',
  },
  {
    text: '指引',
    // link: '/guide/quickstart',
    // activeMatch: '/guide/',
    collapsed: false,
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
        text: '动态主题',
        link: '/guide/toggle-theme',
      },
    ],
  },
  {
    text: '组件',
    link: '/components/button',
    activeMatch: '/components/',
  },
  // {
  //   text: 'CSS',
  //   link: '/styles/animation',
  //   activeMatch: '/styles/',
  // },
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
      {
        text: 'blog',
        link: 'https://laine001.github.io/',
      },
      // {
      //   text: '酷酷鸭',
      //   link: 'http://118.25.1.63/'
      // }
    ],
  },
]
