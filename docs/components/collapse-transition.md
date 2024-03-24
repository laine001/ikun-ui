# 折叠动画 CollapseTransition

<br />
<ik-switch v-model="show" />
<br />
<ik-collapse-transition>
  <div style="color: #999" v-show="show">
    <div>鸡~</div>
    <div>哎呦~你干嘛</div>
    <div>厉不厉害你k哥</div>
  </div>
</ik-collapse-transition>

:::details 点击展开

```vue
<script lang="ts" setup>
import { ref } from 'vue'
const show = ref(false)
</script>
<template>
  <ik-switch v-model="show" />
  <br />
  <ik-collapse-transition>
    <div style="color: #999" v-show="show">
      <div>鸡~</div>
      <div>哎呦~你干嘛</div>
      <div>厉不厉害你k哥</div>
    </div>
  </ik-collapse-transition>
</template>
```

:::

<script lang="ts" setup>
import { ref } from 'vue'
const show = ref(false)
</script>
