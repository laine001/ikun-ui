# skeleton

## 基础使用

:::demo

```vue
<script></script>
<template>
  <ik-skeleton />
</template>
```

:::

## 显示动画

`active`可配置动画效果

:::demo

```vue
<script></script>
<template>
  <ik-skeleton active />
</template>
```

:::

## 切换效果

:::demo

```vue
<script setup>
import { ref } from 'vue'
const showText = ref(false)
</script>
<template>
  <div>
    <ik-switch v-model="showText"></ik-switch>
    <br />
    <ik-skeleton v-if="showText" active />
    <div v-else>
      <span>大家好</span>
      <div>我是练习时长两年半的</div>
      <span>🐥🏀</span>
    </div>
  </div>
</template>
```

:::
