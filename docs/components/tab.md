# 选项卡

选项卡切换组件

## 基础使用

:::demo

```vue
<template>
  <ik-tab>
    <ik-tab-item label="选项卡一">内容一</ik-tab-item>
    <ik-tab-item label="选项卡二">内容二</ik-tab-item>
    <ik-tab-item label="选项卡三">内容三</ik-tab-item>
  </ik-tab>
</template>
```

:::

## 头部样式设置

`type`属性可设置头部样式，可选值为`segmented` `default` `card`

:::demo

```vue
<template>
  <ik-tab type="segmented">
    <ik-tab-item label="选项卡一">内容一</ik-tab-item>
    <ik-tab-item label="选项卡二">内容二</ik-tab-item>
    <ik-tab-item label="选项卡三">内容三</ik-tab-item>
  </ik-tab>
</template>
```

:::
