# 水波纹 Ripple

使元素点击时生成一个水波扩散的效果，此效果通过`自定义指令`实现 🏀

## 基本使用

直接添加指令`v-ripple`即可

:::demo

```vue
<template>
  <ik-space>
    <ik-button type="primary" v-ripple>按钮1</ik-button>
    <ik-button type="warning" v-ripple>按钮2</ik-button>
    <div class="ripple-box" v-ripple>click me</div>
  </ik-space>
</template>
<style>
.ripple-box {
  width: 200px;
  height: 120px;
  border-radius: var(--default-radius);
  background: var(--default-color);
  cursor: pointer;
  user-select: none;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```

:::

## 自定义波纹颜色

`v-ripple`指令中字面量传参可自定义颜色

:::demo

```vue
<template>
  <ik-space>
    <div class="ripple-box" v-ripple="{ color: '#6379f6' }">click me</div>
    <div class="ripple-box" v-ripple="{ color: 'pink' }">click me</div>
  </ik-space>
</template>
<style>
.ripple-box {
  width: 200px;
  height: 120px;
  border-radius: var(--default-radius);
  background: var(--default-color);
  cursor: pointer;
  user-select: none;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
```

:::
