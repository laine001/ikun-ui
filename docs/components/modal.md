# 对话框 Modal

## 基础使用

:::demo

```vue
<script setup lang="ts">
import { ref } from 'vue'
const show1 = ref(false)
const onOpenModal = () => {
  show1.value = !show1.value
}
</script>
<template>
  <ik-space>
    <ik-button @click="onOpenModal">打开 modal</ik-button>
    <ik-modal :visible="show1" @click-mask="onOpenModal"> modal contents ... </ik-modal>
  </ik-space>
</template>
```

:::
