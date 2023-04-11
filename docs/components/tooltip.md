# 文字提示 Tooltip

常用于展示鼠标 `反馈` 时的提示信息

## 基本使用

<ik-tooltip placement="top">
  <template #content>
    <div>这是提示内容</div>
  </template>
  <ik-button>按钮</ik-button>
</ik-tooltip>

::: details

```html
<template>
  <ik-tooltip placement="top">
    <template #content>
      <div>这是提示内容</div>
    </template>
    <ik-button>按钮</ik-button>
  </ik-tooltip>
</template>
```

:::

## 基础配置

不显示`箭头`，`点击`触发展示。可配置`白色背景`。
<ik-space>
<ik-tooltip placement="top" triggerType="click" :arrow="false">
<template #content>

<div>这是提示内容</div>
</template>
<ik-button>按钮</ik-button>
</ik-tooltip>

  <ik-tooltip placement="top" light triggerType="click" arrow>
    <template #content>
      <div>这是提示内容</div>
    </template>
    <ik-button>按钮</ik-button>
  </ik-tooltip>
</ik-space>

::: details 点击展开

```html
<template>
  <ik-tooltip placement="top" triggerType="click" :arrow="false">
    <template #content>
      <div>这是提示内容</div>
    </template>
    <ik-button>按钮</ik-button>
  </ik-tooltip>
</template>
```

:::

## 方向配置

<div class="box">

<div class="box1">
<ik-tooltip placement="left-start">
  <template #content>
    <div>文字提示</div>
  </template>
  <ik-button>LT</ik-button>
</ik-tooltip>
<ik-tooltip placement="left">
  <template #content>
    <div>文字提示</div>
  </template>
  <ik-button>Left</ik-button>
</ik-tooltip>
<ik-tooltip placement="left-end">
  <template #content>
    <div>文字提示</div>
  </template>
  <ik-button>LB</ik-button>
</ik-tooltip>
</div>

<div class="box2">
<div class="box2-top">
<ik-tooltip placement="top-start">
  <template #content>
    <div>文字提示</div>
  </template>
  <ik-button>TL</ik-button>
</ik-tooltip>
<ik-tooltip placement="top">
  <template #content>
    <div>文字提示</div>
  </template>
  <ik-button>Top</ik-button>
</ik-tooltip>
<ik-tooltip placement="top-end">
  <template #content>
    <div>文字提示</div>
  </template>
  <ik-button>TR</ik-button>
</ik-tooltip>
</div>
<div class="box2-bottom">
<ik-tooltip placement="bottom-start">
  <template #content>
    <div>文字提示</div>
  </template>
  <ik-button>BL</ik-button>
</ik-tooltip>
<ik-tooltip placement="bottom">
  <template #content>
    <div>文字提示</div>
  </template>
  <ik-button>Bottom</ik-button>
</ik-tooltip>
<ik-tooltip placement="bottom-end">
  <template #content>
    <div>文字提示</div>
  </template>
  <ik-button>BR</ik-button>
</ik-tooltip>
</div>
</div>
<div class="box1">
<ik-tooltip placement="right-start">
  <template #content>
    <div>文字提示</div>
  </template>
  <ik-button>RT</ik-button>
</ik-tooltip>
<ik-tooltip placement="right">
  <template #content>
    <div>文字提示</div>
  </template>
  <ik-button>Right</ik-button>
</ik-tooltip>
<ik-tooltip placement="right-end">
  <template #content>
    <div>文字提示</div>
  </template>
  <ik-button>RB</ik-button>
</ik-tooltip>
</div>

</div>

## attrs

| 参数        |      说明      |  类型   |      可选值       |  默认值 |
| ----------- | :------------: | :-----: | :---------------: | ------: |
| placement   |  提示展示方向  | string  |         -         |     top |
| triggerType |    触发类型    | string  | `hover` / `click` | `hover` |
| arrow       | 是否展示小箭头 | boolean | `true` / `false`  |  `true` |
| light       |  是否白色背景  | boolean | `true` / `false`  | `false` |

<style>
  .box {
    display: flex;
    margin-top: 40px;
  }
  .box1 {
    height: 130px;
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .box2 {
    width: 260px;
    height: 220px;
    margin-top: -20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .box2-top {
  }
  .box2-bottom {
    margin-top: 40px;
  }
  .box3 {
    width: 100px;
    display: flex;
    align-items: center;
  }
</style>
