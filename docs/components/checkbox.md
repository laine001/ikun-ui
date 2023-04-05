# 复选框 Checkbox

## 单个复选

绑定值为`boolean`类型
<ik-checkbox v-model="checked1" label="选项一"></ik-checkbox>
<ik-checkbox v-model="checked2" label="选项二"></ik-checkbox>
<span>{{ checked1 }}</span>
<span style="margin-left:20px;">{{ checked2 }}</span>

::: details 点击展开

```html
<script setup>
  import { ref } from 'vue'
  const checked1 = ref(false)
  const checked2 = ref(true)
</script>
<template>
  <ik-checkbox v-model="checked1" label="选项一"></ik-checkbox>
  <ik-checkbox v-model="checked2" label="选项二"></ik-checkbox>
</template>
```

:::

## 多个选项可用复选框组

返回`array[]<string|number>`
<ik-checkbox-group v-model="checkedList1">
<ik-checkbox label="选项一"></ik-checkbox>
<ik-checkbox label="选项二"></ik-checkbox>
<ik-checkbox label="选项三"></ik-checkbox>
</ik-checkbox-group>
<span>{{ checkedList1 }}</span>

::: details 点击展开

```vue
<script setup>
import { ref } from 'vue'
const checkedList1 = ref([])
</script>
<template>
  <ik-checkbox-group v-model="checkedList1">
    <ik-checkbox label="选项一"></ik-checkbox>
    <ik-checkbox label="选项二"></ik-checkbox>
    <ik-checkbox label="选项三"></ik-checkbox>
  </ik-checkbox-group>
  <span>{{ checkedList1 }}</span>
</template>
```

:::

<script setup>
import { ref } from 'vue'
const checked1 = ref(false)
const checked2 = ref(true)
const checkedList1 = ref([])
</script>
