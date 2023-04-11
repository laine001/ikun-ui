# 间距 Space

通过此组件为其子元素提供公共间距

## 基础用法

<ik-space>
  <ik-button type="primary">按钮一</ik-button>
  <ik-button type="primary">按钮二</ik-button>
  <ik-button type="primary">按钮三</ik-button>
</ik-space>

::: details 点击展开代码

```vue
<template>
  <ik-space>
    <ik-button type="primary">按钮一</ik-button>
    <ik-button type="primary">按钮二</ik-button>
    <ik-button type="primary">按钮三</ik-button>
  </ik-space>
</template>
```

:::

## 调节间距与布局方式

`size`属性可设置间距大小
<ik-space size="mini">
<ik-button type="primary">按钮一</ik-button>
<ik-button type="primary">按钮二</ik-button>
<ik-button type="primary">按钮三</ik-button>
</ik-space>
<br>
<br>
<ik-space size="large">
<ik-button type="primary">按钮四</ik-button>
<ik-button type="primary">按钮五</ik-button>
<ik-button type="primary">按钮六</ik-button>
</ik-space>

::: details 点击展开代码

```vue
<template>
  <ik-space size="mini">
    <ik-button type="primary">按钮一</ik-button>
    <ik-button type="primary">按钮二</ik-button>
    <ik-button type="primary">按钮三</ik-button>
  </ik-space>
  <br />
  <ik-space size="large">
    <ik-button type="primary">按钮四</ik-button>
    <ik-button type="primary">按钮五</ik-button>
    <ik-button type="primary">按钮六</ik-button>
  </ik-space>
</template>
```

:::

## 排列方向与换行

设置`direction`设置横向、竖向。`wrap`设置是否换行

<ik-space>
  <ik-card>content one</ik-card>
  <ik-card>content two</ik-card>
  <ik-card>content three</ik-card>
</ik-space>
<br>
<br>
<ik-space direction="column">
  <ik-card>content one</ik-card>
  <ik-card>content two</ik-card>
  <ik-card>content three</ik-card>
</ik-space>
<br>

<!-- <ik-space>
  <ik-card>content one</ik-card>
  <ik-card>content two</ik-card>
  <ik-card>content three</ik-card>
  <ik-card>content three</ik-card>
  <ik-card>content three</ik-card>
  <ik-card>content three</ik-card>
  <ik-card>content three</ik-card>
  <ik-card>content three</ik-card>
</ik-space> -->
