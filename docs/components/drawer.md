# 抽屉 Drawer

呼出一个临时的侧边栏, 设置`position`可以从多个方向呼出
<ik-space>
<ik-button type="primary" @click="() => onOpen('left')">left</ik-button>
<ik-button type="primary" @click="() => onOpen('right')">right</ik-button>
<ik-button type="primary" @click="() => onOpen('top')">top</ik-button>
<ik-button type="primary" @click="() => onOpen('bottom')">bottom</ik-button>
</ik-space>
<ik-drawer :position="position" title="基础抽屉" :visible="visible" @cancel="onCancel">
content...
</ik-drawer>

::: details 点击查看源码

```vue
<template>
  <ik-space>
    <ik-button type="primary" @click="() => onOpen('left')">left</ik-button>
    <ik-button type="primary" @click="() => onOpen('right')">right</ik-button>
    <ik-button type="primary" @click="() => onOpen('top')">top</ik-button>
    <ik-button type="primary" @click="() => onOpen('bottom')">bottom</ik-button>
  </ik-space>
  <ik-drawer :position="position" title="基础抽屉" :visible="visible" @cancel="onCancel"> content... </ik-drawer>
</template>
<script lang="ts" setup>
const visible = ref(false)
const position = ref('left')
const onOpen = (v) => {
  position.value = v
  visible.value = true
}
const onCancel = () => {
  visible.value = false
}
</script>
```

:::

<script lang="ts" setup>
  import { ref } from 'vue'
  const visible = ref(false)
  const position = ref('left')
  const onOpen = (v) => {
    position.value = v
    visible.value = true
  }
  const onCancel = () => {
    visible.value = false
  }
</script>
