# 快速上手

<!-- <img width="80" style="margin-top: 40px" src="/ikun-ui/ikun.gif" /> -->

## 安装

```bash
npm install ikun-ui
```

## 引入

```js{4,5}
import { createApp } from 'vue'
import App from './app.vue'

import ikun from 'ikun-ui'
import 'ikui/lib/index.css'

createApp(App).use(ikun).mount('#app')

// or

import { IkButton } from 'ikun-ui'
app.use(IkButton)
```

## 使用

```html
<ik-space>
  <ik-button>按 钮</ik-button>
  <ik-button ikun></ik-button>
</ik-space>
```

## 效果

<ik-space>
  <ik-button>按 钮</ik-button>

  <ik-button>
    <img width="30" src="https://laine001.github.io/ikun-ui/ikun.gif" />
  </ik-button>
</ik-space>
