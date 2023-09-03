# 滑块 Slider

通过拖动滑块 🏀 在一个间内进行选择

## 基础使用

`v-model`绑定值，可通过设置绑定值自定义滑块的初始值

:::demo

```vue
<script lang="ts" setup>
import { ref } from 'vue'
const val = ref(10)
</script>
<template>
  <ik-slider v-model="val" />
  {{ val }}
</template>
```

:::

## 属性配置

可开启`ikun`属性
:::demo

```vue
<script lang="ts" setup>
import { ref } from 'vue'
const val = ref(0)
</script>
<template>
  <ik-slider v-model="val" ikun />
  {{ val }}
</template>
```

:::
