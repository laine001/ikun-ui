# loading 组件、指令

用于页面和区块的加载中状态

## 基本使用

:::demo

```vue
<template>
  <ik-space direction="column">
    <ik-button @click="toggleLoading" type="primary">切换loading</ik-button>
    <div v-loading="loading">
      <span>雨霖铃</span>
      <p>寒蝉凄切</p>
      <p>对长亭晚</p>
      <p>骤雨初歇</p>
    </div>
  </ik-space>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const loading = ref(false)
const toggleLoading = () => {
  loading.value = !loading.value
}
</script>
```

:::

## 全屏

:::demo

```vue
<template>
  <ik-button @click="toggleLoading2" type="primary">切换全屏loading</ik-button>
  <div v-loading.fullscreen="loading2"></div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
const loading2 = ref(false)
const toggleLoading2 = () => {
  loading2.value = true
  setTimeout(() => {
    loading2.value = false
  }, 2000)
}
</script>
```

:::

## 方法调用

:::demo

```vue
<template>
  <ik-button @click="openLoading">打开loading</ik-button>
</template>

<script setup lang="ts">
import { loadingService as IkLoading } from 'ikuiv'

const openLoading = () => {
  IkLoading.service({
    duration: 1000,
  })
}
</script>
```

:::
