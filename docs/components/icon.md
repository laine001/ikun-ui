# 图标组件
```javascript
import { IkIcon } from 'ik-ui'
```
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