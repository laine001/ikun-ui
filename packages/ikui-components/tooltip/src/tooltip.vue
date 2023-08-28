<script setup lang="ts" name="IkTooltip">
import { defineComponent, ref, computed } from 'vue'
import Popper from 'vue3-popper'
import { props } from './tooltip'
const prop = defineProps(props)
const popperRef = ref()
const computedCls = computed(() => {
  return [
    'ik-tooltip',
    {
      'ik-tooltip--light': prop.light,
    },
  ]
})
// console.log(prop.light)
// if (prop.light.value) {
//   document.documentElement.style.setProperty('--popper-theme-background-color-hover', '#fff')
// }
defineComponent({
  components: {
    Popper,
  },
})
</script>
<template>
  <Popper
    ref="popperRef"
    :class="computedCls"
    :hover="prop.triggerType === 'hover'"
    :arrow="prop.arrow"
    :placement="prop.placement"
  >
    <slot></slot>
    <template #content>
      <slot name="content"></slot>
    </template>
  </Popper>
</template>
