# 文字提示

常用于展示鼠标 `反馈` 时的提示信息

## 基本使用

<ik-tooltip placement="top">
  <template #content>
    <div>这是提示内容</div>
  </template>
  <ik-button>按钮</ik-button>
</ik-tooltip>

::: details 点击展开

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

不显示`箭头`，`点击`触发展示

<ik-tooltip placement="top" triggerType="click" :arrow="false">
  <template #content>
    <div>这是提示内容</div>
  </template>
  <ik-button>按钮</ik-button>
</ik-tooltip>

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
<!-- <ik-tooltip placement="left-start">
  <template #content>
    <div>文字提示</div>
  </template>
  <ik-button>左上</ik-button>
</ik-tooltip> -->
<ik-tooltip placement="left">
  <template #content>
    <div>文字提示</div>
  </template>
  <ik-button>左中</ik-button>
</ik-tooltip>
<!-- <ik-tooltip placement="left-end">
  <template #content>
    <div>文字提示</div>
  </template>
  <ik-button>左下</ik-button>
</ik-tooltip> -->
</div>

<div class="box2">
<ik-tooltip placement="top">
  <template #content>
    <div>文字提示</div>
  </template>
  <ik-button>中上</ik-button>
</ik-tooltip>
<ik-tooltip placement="bottom">
  <template #content>
    <div>文字提示</div>
  </template>
  <ik-button>中下</ik-button>
</ik-tooltip>
</div>

<div class="box3">
<ik-tooltip placement="right">
  <template #content>
    <div>文字提示</div>
  </template>
  <ik-button>右中</ik-button>
</ik-tooltip>
</div>

</div>

## attrs

| 参数        |      说明      |  类型   |      可选值       |  默认值 |
| ----------- | :------------: | :-----: | :---------------: | ------: |
| placement   |  提示展示方向  | string  |         -         |     top |
| triggerType |    出发类型    | string  | `hover` / `click` | `hover` |
| arrow       | 是否展示小箭头 | boolean | `true` / `false`  |  `true` |

<style>
  .box {
    width: 300px;
    display: flex;
    justify-content: space-between;
  }
  .box1 {
    width: 100px;
    height: 150px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  .box2 {
    width: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }
  .box3 {
    width: 100px;
    display: flex;
    align-items: center;
  }
</style>
