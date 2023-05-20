# loading 组件、指令

用于页面和区块的加载中状态

## 基本使用

<div style="margin: 10px 0">
  <ik-button @click="toggleLoading">切换loading</ik-button>
</div>
<div v-loading="loading">
  <div>雨霖铃</div>
  <div>寒蝉凄切</div>
  <div>对长亭晚</div>
  <div>骤雨初歇</div>
</div>

::: details 点击展开

```vue
<template>
  <ik-button @click="toggleLoading">切换loading</ik-button>
  <div v-loading="loading">
    <span>雨霖铃</span>
    <p>寒蝉凄切</p>
    <p>对长亭晚</p>
    <p>骤雨初歇</p>
  </div>
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

<ik-button @click="toggleLoading2" type="primary">切换全屏 loading</ik-button>

<div v-loading.fullscreen="loading2"></div>

:::details 点击展开

```html
<ik-button @click="toggleLoading2" type="primary">切换全屏loading</ik-button>
<div v-loading.fullscreen="loading2"></div>
```

:::

## 方法调用

<ik-button @click="openLoading">打开 loading</ik-button>

::: details 点击展开

```html
<script setup>
  const openLoading = () => {
    IkLoading.service({
      duration: 1000,
    })
  }
</script>
<ik-button @click="openLoading">打开loading</ik-button>
```

:::

<script setup>
  import { ref } from 'vue'
  import { loadingService as IkLoading } from '../../packages/ikui-components/loading'
  const loading = ref(false)
  const loading2 = ref(false)
  const toggleLoading = () => {
    loading.value = !loading.value
  }
  const toggleLoading2 = () => {
    loading2.value = true
    setTimeout(() => {
      loading2.value = false
    }, 2000);
  }
  const openLoading = () => {
    IkLoading.service({
      duration: 1000
    })
  }

</script>
