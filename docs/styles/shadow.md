# 阴影

## 多方向

:::demo

```vue
<template>
  <ik-space class="flex-center box" wrap="wrap">
    <div class="sd top">顶部阴影</div>
    <div class="sd right">右部阴影</div>
    <div class="sd bottom">底部阴影</div>
    <div class="sd left">左边阴影</div>
    <div class="sd left-top">左上阴影</div>
    <div class="sd right-top">右上阴影</div>
    <div class="sd right-bottom">右下阴影</div>
    <div class="sd left-bottom">左下阴影</div>
    <div class="sd no-top">无上阴影</div>
    <div class="sd no-right">无右阴影</div>
    <div class="sd no-bottom">无下阴影</div>
    <div class="sd no-left">无左阴影</div>
  </ik-space>
</template>
<style>
.box {
  flex-wrap: wrap;
}
.box .sd {
  width: 100px;
  height: 80px;
  color: #fff;
  background-color: var(--default-color);
  padding: 10px;
  border-radius: var(--default-radius);
  transition: box-shadow 0.2s;
  text-align: center;
  color: #333;
  /* box-shadow: -10px 0 10px #0000001f, 10px 0 10px #0000001f, 0 -10px 10px #0000001f, 0 10px 10px #0000001f; */
}
.top {
  box-shadow: 0px -5px 10px -5px var(--primary-color);
}

.right {
  box-shadow: 5px 0 10px -5px var(--primary-color);
}

.bottom {
  box-shadow: 0 5px 10px -5px var(--primary-color);
}

.left {
  box-shadow: -5px 0 10px -5px var(--primary-color);
}

.left-top {
  box-shadow: -5px -5px 10px -4px var(--primary-color);
}

.right-top {
  box-shadow: 5px -5px 10px -4px var(--primary-color);
}

.right-bottom {
  box-shadow: 5px 5px 10px -4px var(--primary-color);
}

.left-bottom {
  box-shadow: -5px 5px 10px -4px var(--primary-color);
}

.no-top {
  /* .left-bottom, .right-bottom 组合 */
  box-shadow: -5px 5px 10px -4px var(--primary-color), 5px 5px 10px -4px var(--primary-color);
}

.no-right {
  /* .left-top, .left-bottom 组合 */
  box-shadow: -5px -5px 10px -4px var(--primary-color), -5px 5px 10px -4px var(--primary-color);
}

.no-bottom {
  /* .left-top, .right-top 组合 */
  box-shadow: -5px -5px 10px -4px var(--primary-color), 5px -5px 10px -4px var(--primary-color);
}

.no-left {
  /* .right-bottom, .right-top 组合 */
  box-shadow: 5px 5px 10px -4px var(--primary-color), 5px -5px 10px -4px var(--primary-color);
}
</style>
```

:::

## 四周一致

:::demo

```vue
<template>
  <div class="flex-center">
    <div class="shadow1">四周阴影</div>
  </div>
</template>
<style>
.shadow1 {
  width: 150px;
  height: 145px;
  color: #fff;
  background-color: var(--primary-color);
  padding: 14px;
  border-radius: var(--default-radius);
  transition: box-shadow 0.2s;
  box-shadow: -10px 0 10px #0000001f, 10px 0 10px #0000001f, 0 -10px 10px #0000001f, 0 10px 10px #0000001f;
}
</style>
```

:::
