<script setup lang="ts" name="ik-tab-item">
import { computed, inject } from 'vue'
import { tabItemProps, tabCtxKey } from './props'
const props = defineProps(tabItemProps)
const rootValue = inject(tabCtxKey)
// console.log(rootValue, 'rootValue')
// console.log(props, 'props')
const computedTabItemVisible = computed(() => {
  return props.label === rootValue?.activeName.value
})
</script>
<template>
  <div class="ik-tab-item" v-show="computedTabItemVisible">
    <slot />
  </div>
</template>
