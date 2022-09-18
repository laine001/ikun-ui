# 按钮
> 用于操作
```javascript
import { IkButton } from 'ik-ui'
```

## 普通按钮

<div class="flex">
  <ik-button>普通按钮</ik-button>
  <ik-button type="primary">主要按钮</ik-button>
  <ik-button type="info">信息按钮</ik-button>
</div>
<div class="flex" style="margin-top: 10px">
  <ik-button type="success">成功按钮</ik-button>
  <ik-button type="warning">警告按钮</ik-button>
  <ik-button type="danger">危险按钮</ik-button>
  <ik-button type="primary" disabled>主要按钮禁用</ik-button>
</div>

:::details 点击展开
```vue
<template>
  <div>
    <ik-button>普通按钮</ik-button>
    <ik-button type="primary">主要按钮</ik-button>
    <ik-button type="info">信息按钮</ik-button>
    <ik-button type="success">成功按钮</ik-button>
    <ik-button type="warning">警告按钮</ik-button>
    <ik-button type="danger">危险按钮</ik-button>
    <ik-button type="primary" disabled>主要按钮禁用</ik-button>
  </div>
</template>
```
:::

## 带图标

<div class="flex">
  <ik-button icon="add">按钮</ik-button>
  <ik-button>
    <ik-icon name="user" />
    按钮
  </ik-button>
  <ik-button type="primary">
    按钮
    <ik-icon color="#ffffff" name="main" />
  </ik-button>
</div>

:::details 点击展开
```html
  <ik-button icon="add">按钮</ik-button>
  <ik-button>
    <ik-icon name="user" />
    按钮
  </ik-button>
  <ik-button>
    按钮
    <ik-icon name="main" />
  </ik-button>
```
:::

## 加载中按钮

<div>
  <ik-button loading>加载中</ik-button>
  <ik-button type="primary" loading>请稍后</ik-button>
</div>

:::details 点击展开
```html
  <ik-button loading>加载中</ik-button>
  <ik-button type="primary" loading>请稍后</ik-button>
```
:::

## Attributes
|   参数   |  说明   |  类型   |  可选值   |  默认值  |
|----------|:-------:|:------:|:---------:|--------:|
| type     | 按钮类型 | string | primary/warning | '' |
