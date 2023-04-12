# 快速上手

## 安装

```bash
npm install ikui
```

## 引入

```js{3,4,5}
import { createApp } from 'vue'
import App from './app.vue'

import ikui from 'ikuiv'
import 'ikui/lib/index.css'

createApp(App).use(ikui).mount('#app')

// or

import { IkButton } from 'ik-ui'
app.use(IkButton)
```

## 使用

```html
<ik-button>按 钮</ik-button>
```

## 效果

<ik-button>按 钮</ik-button>
