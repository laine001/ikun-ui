# 输入框 Input

## 基本使用

通常可以直接使用内置指令`v-model`实现双向绑定
<ik-input v-model="inputValue1" placeholder="请输入" />
{{ inputValue1 }}

:::details 点击展开

```vue
<template>
  <ik-input v-model="inputValue1" placeholder="请输入" />
</template>
```

:::

## 清除图标

直接添加`hasClear`属性可使输入框带有清除图标
<ik-input v-model="inputValue2" hasClear placeholder="请输入" />

:::details 点击展开

```vue
<script setup lang="ts">
import { ref } from 'vue'
const inputValue2 = ref('这里可直接清除')
</script>
<template>
  <ik-input v-model="inputValue2" placeholder="请输入" />
</template>
```

:::

<script setup lang="ts">
  import { ref } from 'vue'
  const inputValue1 = ref('')
  const inputValue2 = ref('这里可直接清除')
</script>

## 前缀和后缀

::: demo

```vue
<template>
  <ik-space direction="column">
    <ik-input prefixIcon="user" />
    <ik-input suffixIcon="chuizi-cpoy" />
  </ik-space>
</template>
```

:::
