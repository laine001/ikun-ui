# 图标 Icon

```javascript
import { IkIcon } from 'ik-ui'
```

## 不同颜色

::: demo

```vue
<template>
  <div class="flex">
    <div class="icon-demo-box"><ik-icon name="star-fill" color="#cd8025" /></div>
    <div class="icon-demo-box"><ik-icon name="star-fill" color="#5aa4ae" /></div>
    <div class="icon-demo-box"><ik-icon name="star-fill" color="#f29a76" /></div>
    <div class="icon-demo-box"><ik-icon name="heart-fill" color="#b13b2e" /></div>
    <div class="icon-demo-box"><ik-icon name="camera" color="#5c4f55" /></div>
    <div class="icon-demo-box"><ik-icon name="camera" color="#a4abd6" /></div>
  </div>
</template>
```

:::

## 不同大小

::: demo

```vue
<template>
  <div class="flex">
    <div class="icon-demo-box"><ik-icon name="heart-fill" color="red" /></div>
    <div class="icon-demo-box"><ik-icon name="heart-fill" color="red" :size="28" /></div>
    <div class="icon-demo-box"><ik-icon name="heart-fill" color="red" :size="34" /></div>
    <div class="icon-demo-box"><ik-icon name="heart-fill" color="red" :size="42" /></div>
  </div>
</template>
```

:::

## 部分展示

::: demo

```vue
<script lang="ts" setup>
const list = [
  'bell',
  'email',
  'main',
  'user',
  'likes',
  'search',
  'chart',
  'add',
  'kongtiao',
  'files',
  'zhire',
  'switch',
  'chuizi-copy',
]
</script>
<template>
  <div class="flex">
    <template v-for="item in list">
      <div class="icon-demo-box"><ik-icon :name="item" /></div>
    </template>
  </div>
</template>
```

:::

## attrs

| 参数  | 说明 |          类型           | 可选值 | 默认值 |
| ----- | :--: | :---------------------: | :----: | -----: |
| name  | 名称 |         string          |        |        |
| size  | 大小 |         string          |   -    |      - |
| color | 颜色 | string<`CSSProperties`> |   -    |      - |

<style lang="scss">
  .flex {
    display: flex;
    flex-wrap: wrap;
  }
  .icon-demo-box {
    padding: 15px;
    transition: all .2s;
    cursor: pointer;
    border-radius: 4px;
    &:hover {
      box-shadow: 0 6px 16px -8px #00000014,
                  0 9px 28px #0000000d,
                  0 12px 48px 16px #00000008;
      transform: scale(1.3);
    }
  }
</style>
