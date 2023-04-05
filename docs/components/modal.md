# 对话框 Modal

## 基础使用

<ik-button @click="onOpenModal">打开 modal</ik-button>

::: details 点击展开

```vue
<script setup>
import { ref } from 'vue'
const show1 = ref(false)
const onOpenModal = () => {
  show1.value = !show1.value
}
</script>
<template>
  <ik-button @click="onOpenModal">打开 modal</ik-button>
  <ik-modal :visible="show1" @click-mask="onOpenModal"> modal contents ... </ik-modal>
</template>
```

:::

<ik-modal :visible="show1" @click-mask="onOpenModal">
modal contents ...
</ik-modal>

<script setup>
  import { ref } from 'vue'
  const show1 = ref(false)
  const onOpenModal = () => {
    show1.value = !show1.value
  }
</script>
