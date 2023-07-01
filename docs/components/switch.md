# 开关 Switch

## 基础使用

`v-model`绑定值

:::demo

```vue
<ik-switch v-model="switchValue" />
{{ switchValue }}

<script setup>
import { ref } from 'vue'
const switchValue = ref(false)
</script>
```

:::

## 其他配置

可通过配置`style`配置开关状态的背景色，其属性名必须为`--switch-bg-on-color`和`--switch-bg-off-color`。
`square`属性可将其设置为方形。`true-text` 和 `false-text`则可配置开关状态的文字。

:::demo

```vue
<template>
  <ik-space direction="column">
    <ik-icon name="promit" color="red" />
    <ik-switch v-model="switchValue" true-text="开" false-text="关" />
    <ik-switch :style="style" v-model="switchValue" />
    <ik-switch :style="style" square v-model="switchValue" />
  </ik-space>
</template>
<script setup>
import { ref } from 'vue'
const style = {
  '--switch-bg-on-color': '#ffa31a',
  '--switch-bg-off-color': 'pink',
}
const switchValue = ref(false)
</script>
```

:::

## attrs

| 参数       |      说明      |  类型   |     可选值     | 默认值 |
| ---------- | :------------: | :-----: | :------------: | -----: |
| true-text  |  开状态的文字  | string  |       \*       |      - |
| false-text | 关状态下的文字 | string  |       \*       |      - |
| square     |    是否方形    | boolean | `true` `false` |      - |
| style      |    样式配置    | object  |       -        |      - |
