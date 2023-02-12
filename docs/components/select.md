# 下拉框

## 基本使用

<ik-select v-model="selection" :option="['小明', '小刚', '小红']" />
{{ selection }}

<script setup lang="ts">
  import { ref } from 'vue'
  const selection = ref('')
</script>
