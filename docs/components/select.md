# 下拉框

## 基本使用

<ik-select v-model="selection" :option="['小明', '小刚']" />

<script setup lang="ts">
  import { ref } from 'vue'
  const selection = ref('小明')
</script>
