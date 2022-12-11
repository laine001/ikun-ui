<script lang="ts" setup name="IkContainer">
import { computed } from 'vue'
export type ContainerDirection = 'ver' | 'hor'

const props = defineProps({
  direction: String,
  default: (): ContainerDirection => 'hor',
})
const computedCls = computed(() => {
  return [
    'ik-container',
    {
      'ik-container__column': props.direction === 'ver',
    },
  ]
})
console.log('container12321')
</script>
<template>
  <section :class="computedCls">
    <slot />
  </section>
</template>
