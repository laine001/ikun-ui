# 快速上手

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
<ik-button>按 钮</ik-button>
```

## 效果

<ik-button>按 钮</ik-button>
