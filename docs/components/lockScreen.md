# 锁屏 LockScreen

::: demo

```vue
<script lang="ts" setup>
import { ref } from 'vue'
const visible = ref(false)
const toggleLockScreen = () => {
  visible.value = true
}
const onUnlock = () => {
  visible.value = false
}
</script>
<template>
  <div>
    <ik-button @click="toggleLockScreen">打开锁屏</ik-button>
    <ik-lock-screen @onUnlock="onUnlock" :visible="visible" />
  </div>
</template>
```

:::
