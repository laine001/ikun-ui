# 图标 Icon

```javascript
import { IkIcon } from 'ik-ui'
```

## 不同颜色

<div class="flex">
  <div class="icon-demo-box"><ik-icon name="star-fill" color="#cd8025" /></div>
  <div class="icon-demo-box"><ik-icon name="star-fill" color="#5aa4ae" /></div>
  <div class="icon-demo-box"><ik-icon name="star-fill" color="#f29a76" /></div>
  <div class="icon-demo-box"><ik-icon name="heart-fill" color="#b13b2e" /></div>
  <div class="icon-demo-box"><ik-icon name="camera" color="#5c4f55" /></div>
  <div class="icon-demo-box"><ik-icon name="camera" color="#a4abd6" /></div>
</div>

:::details 点击展开

```html
<ik-icon name="star-fill" color="pink" />
<ik-icon name="star-fill" color="orange" />
<ik-icon name="star-fill" color="deepskyblue" />
<ik-icon name="heart-fill" color="red" />
<ik-icon name="camera" />
<ik-icon name="camera" color="deeppink" />
```

:::

## 不同大小

<div class="flex">
  <div class="icon-demo-box"><ik-icon name="heart-fill" color="red" /></div>
  <div class="icon-demo-box"><ik-icon name="heart-fill" color="red" :size="28" /></div>
  <div class="icon-demo-box"><ik-icon name="heart-fill" color="red" :size="34" /></div>
  <div class="icon-demo-box"><ik-icon name="heart-fill" color="red" :size="42" /></div>
</div>

::: details 点击展开

```html
<ik-icon name="heart-fill" color="red" />
<ik-icon name="heart-fill" color="red" size="28" />
<ik-icon name="heart-fill" color="red" :size="34" />
<ik-icon name="heart-fill" color="red" :size="42" />
```

:::

## 部分展示

<div class="flex">
<div class="icon-demo-box"><ik-icon name="bell" /></div>
<div class="icon-demo-box"><ik-icon name="email" /></div>
<div class="icon-demo-box"><ik-icon name="main" /></div>
<div class="icon-demo-box"><ik-icon name="user" /></div>
<div class="icon-demo-box"><ik-icon name="likes" /></div>
<div class="icon-demo-box"><ik-icon name="search" /></div>
<div class="icon-demo-box"><ik-icon name="chart" /></div>
<div class="icon-demo-box"><ik-icon name="add" /></div>
<div class="icon-demo-box"><ik-icon name="kongtiao" /></div>
<div class="icon-demo-box"><ik-icon name="files" /></div>
<div class="icon-demo-box"><ik-icon name="zhire" /></div>
<div class="icon-demo-box"><ik-icon name="switch" /></div>
<div class="icon-demo-box"><ik-icon name="chuizi-copy" /></div>
</div>

::: details 点击展开

```html
<ik-icon name="bell" />
<ik-icon name="email" />
<ik-icon name="main" />
<ik-icon name="user" />
<ik-icon name="likes" />
<ik-icon name="search" />
<ik-icon name="chart" />
```

:::

## attrs

| 参数  | 说明 |          类型           | 可选值 | 默认值 |
| ----- | :--: | :---------------------: | :----: | -----: |
| name  | 名称 |         string          |        |        |
| size  | 大小 |         string          |   -    |      - |
| color | 颜色 | string<`CSSProperties`> |   -    |      / |

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
