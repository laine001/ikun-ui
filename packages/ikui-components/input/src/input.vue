<script lang="ts" setup name="IkInput">
import { InputProps } from './input'
defineProps(InputProps)
</script>
<template>
  <div class="ik-input-wrapper">
    <div v-if="false">前缀</div>
    <div class="ik-input__inner" tabindex="1">
      <input class="ik-input" placeholder="请输入" type="text">
    </div>
    <div v-if="false">后缀</div>
  </div>
</template>
