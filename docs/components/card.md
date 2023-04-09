# Card 卡片

最基础的卡片容器，可承载文字、列表、图片、段落，常用于后台概览页面。

## 基础用法

<div class="demo-box">
<ik-card>
  <template #header>this is header</template>
  this is card content.
</ik-card>
</div>

::: details 点击查看源代码

```vue
<template>
  <ik-card>
    <template #header>this is header</template>
    this is card content.
  </ik-card>
</template>
```

:::

## 简单用法

<div class="demo-box">
<ik-card>
  this is card content.
</ik-card>
</div>

::: details 点击查看源代码

```vue
<template>
  <ik-card> this is card content. </ik-card>
</template>
```

:::

## 阴影配置

<div class="demo2-box">
  <ik-space>
    <ik-card>
      始终展示
    </ik-card>
    <ik-card shadow="hover">
      hover展示
    </ik-card>
    <ik-card shadow="none">
      无阴影
    </ik-card>
  </ik-space>
</div>

::: details 点击查看源代码

```vue
<template>
  <ik-space>
    <ik-card> 始终展示 </ik-card>
    <ik-card shadow="hover"> hover展示 </ik-card>
    <ik-card shadow="none"> 无阴影 </ik-card>
  </ik-space>
</template>
```

:::

## 3D 悬浮效果

<div style="width: 200px;">
  <ik-card suspension :height="300">content...</ik-card>
</div>

<style>
  .demo-box {
    width: 500px;
  }
  .demo2-box {
    width: 100%;
    display: flex;
  }
</style>
