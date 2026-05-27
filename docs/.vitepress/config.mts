import { demoblockPlugin, demoblockVitePlugin } from 'vitepress-theme-demoblock'
import sidebar from './sidebar'
import nav from './nav'
import { resolve } from 'path'

const args = process.argv.slice(2)
let env = ''
args.forEach((arg) => {
  if (arg.startsWith('--env=')) {
    env = arg.split('=')[1]
  }
})

export default {
  base: env === 'netlify' ? '/' : '/ikun-ui/',
  title: 'IKUN-UI',
  titleTemplate: 'IKUN-UI - A Vue 3 UI Component Library',
  lang: 'en-US',
  description:
    'IKUN-UI is a lightweight, customizable Vue 3 UI component library built with TypeScript and Vite. Features 28+ components including buttons, forms, modals, menus, and more. Fast, modern, and easy to use.',
  vite: {
    plugins: [demoblockVitePlugin()],
    ssr: {
      noExternal: ['vitepress-theme-demoblock'],
    },
    resolve: {
      alias: {
        ikuiv: resolve(__dirname, '../../packages/ikui-components/index.ts'),
      },
    },
    optimizeDeps: {
      exclude: ['ikuiv'],
      include: ['vitepress-theme-demoblock'],
    },
  },
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
    // SEO Meta Tags
    [
      'meta',
      {
        name: 'keywords',
        content:
          'Vue 3 UI, component library, TypeScript, Vite, UI framework, Vue components, ikun-ui, ikuiv, frontend, web development',
      },
    ],
    ['meta', { name: 'author', content: 'laine001' }],
    ['meta', { name: 'robots', content: 'index, follow' }],
    // Open Graph / Facebook
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'IKUN-UI - A Vue 3 UI Component Library' }],
    [
      'meta',
      {
        property: 'og:description',
        content:
          'Lightweight, customizable Vue 3 UI component library built with TypeScript and Vite. 28+ ready-to-use components.',
      },
    ],
    ['meta', { property: 'og:image', content: 'https://laine001.github.io/ikun-ui/layer5.png' }],
    ['meta', { property: 'og:url', content: 'https://laine001.github.io/ikun-ui/' }],
    ['meta', { property: 'og:site_name', content: 'IKUN-UI' }],
    // Twitter Card
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:title', content: 'IKUN-UI - A Vue 3 UI Component Library' }],
    [
      'meta',
      {
        name: 'twitter:description',
        content: 'Lightweight, customizable Vue 3 UI component library built with TypeScript and Vite.',
      },
    ],
    ['meta', { name: 'twitter:image', content: 'https://laine001.github.io/ikun-ui/layer5.png' }],
    // Canonical URL
    ['link', { rel: 'canonical', href: 'https://laine001.github.io/ikun-ui/' }],
    // JSON-LD Structured Data
    [
      'script',
      { type: 'application/ld+json' },
      JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'IKUN-UI',
        url: 'https://laine001.github.io/ikun-ui/',
        description: 'A lightweight, customizable Vue 3 UI component library built with TypeScript and Vite',
        author: {
          '@type': 'Person',
          name: 'laine001',
          url: 'https://github.com/LAINE001',
        },
        license: 'https://opensource.org/licenses/MIT',
        keywords: 'Vue 3 UI, component library, TypeScript, Vite, UI framework',
      }),
    ],
    [
      'script',
      {},
      `
        var _hmt = _hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?316d622afae7cc9376789a7d780c3096";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
      `,
    ],
    [
      'script',
      {},
      `
    (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "qd5vq1ckw5");
      `,
    ],
    // ['link', { rel: 'stylesheet', href: 'https://unpkg.com/nes.css/css/nes-core.min.css' }],
    // 原clarity key jwue0owwbp
  ],
  cleanUrls: true,
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
    // theme: 'github-light',
    // themes: {
    //   light: 'github-light',
    //   dark: 'github-dark',
    // },
    config: (md) => {
      md.use(demoblockPlugin)
    },
  },
}
