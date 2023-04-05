# 开关 Switch

## 基础使用

<ik-switch v-model="switchValue" />
{{ switchValue }}

<script setup>
import { ref } from 'vue'
const switchValue = ref(false)
</script>
