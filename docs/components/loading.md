# 这里是loading状态

<ik-button @click="toggleLoading">切换loading</ik-button>
<div v-loading="loading">loading-demo1</div>

::: details 点击展开
```vue
<template>
  <ik-button @click="toggleLoading">切换loading</ik-button>
  <div v-loading="loading">loading-demo1</div>
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

<script setup>
  import { ref } from 'vue'
  // app.directives()
  const loading = ref(false)
  const toggleLoading = () => {
    loading.value = !loading.value
    console.log(loading.value)
  }
</script>