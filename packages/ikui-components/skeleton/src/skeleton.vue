<script lang="ts" setup name="IkSkeleton">
import { computed } from 'vue'
import { skeletonProps } from './prop'
const prop = defineProps(skeletonProps)

const computedCls = computed(() => {
  return [
    'ik-skeleton--item',
    {
      'ik-skeleton--item__active': prop.active,
    },
  ]
})
</script>
<template>
  <div class="ik-skeleton">
    <span v-for="(item, index) in 3" :key="index" :class="computedCls"></span>
  </div>
</template>
