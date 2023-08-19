# 锁屏 LockScreen

::: demo

```vue
<script lang="ts" setup>
import { ref } from 'vue'
const visible = ref(false)
const showTime = ref(false)
const toggleLockScreen = () => {
  visible.value = true
}
const onUnlock = (pwd) => {
  console.log(pwd)
  visible.value = false
}
</script>
<template>
  <div>
    <ik-switch true-text="显示时间" v-model="showTime" />
    <br />
    <ik-button @click="toggleLockScreen">打开锁屏</ik-button>
    <ik-lock-screen :showTime="showTime" @onUnlock="onUnlock" :visible="visible" />
  </div>
</template>
```

:::
