# 空状态 Empty

空状态时的占位提示 🐤

## 基础用法

::: demo

```vue
<template>
  <ik-empty />
</template>
```

:::

## 自定义图片

通过设置`image`设置自定义图片

::: demo

```vue
<template>
  <ik-empty
    image="https://www4.bing.com//th?id=OHR.MuseumIsland_ZH-CN8277258964_1920x1080.jpg&rf=LaDigue_1920x1080.jpg"
  />
</template>
```

:::

## 底部内容

可使用默认插槽在底部插入内容
::: demo

```vue
<template>
  <ik-empty>
    <ik-button>Back Home</ik-button>
  </ik-empty>
</template>
```

:::
