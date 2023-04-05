# 下拉框 Select

## 基本使用

<ik-select v-model="selection" :option="['小明', '小刚', '小红']" />
{{ selection }}

<script setup lang="ts">
  import { ref } from 'vue'
  const selection = ref('')
</script>

::: details 点击展开

```vue
<ik-select v-model="selection" :option="['小明', '小刚', '小红']" />
{{ selection }}

<script setup lang="ts">
import { ref } from 'vue'
const selection = ref('')
</script>
```

:::

## 可搜索

<ik-select filterOn v-model="selection" :option="['小明', '小刚', '小红']" />

::: details 点击展开

```vue
<ik-select filterOn v-model="selection" :option="['小明', '小刚', '小红']" />

<script setup lang="ts">
import { ref } from 'vue'
const selection = ref('')
</script>
```

:::
