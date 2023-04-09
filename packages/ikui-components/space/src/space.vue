<script lang="ts" setup name="IkSpace">
// import { getCurrentInstance } from 'vue'
import { computed, renderSlot, useSlots } from 'vue'
import { spaceProps } from './prop'
// const _ins = getCurrentInstance()
// console.log(_ins)
const props = defineProps(spaceProps)
const slots = useSlots()
console.log(slots.default(), 'slots')
// const emits = defineEmits(['click'])
// const childNodes = _ins.vnode.children?.default()
const children = renderSlot(slots, 'default')
console.log(slots.default(), children)
const gapSize = computed(() => {
  switch (props.size) {
    case 'small':
      return '12px'
    case 'default':
      return '16px'
    case 'large':
      return '20px'
    default:
      return '16px'
  }
})
</script>

<template>
  <div class="ik-space" :style="`gap: ${gapSize};`">
    <slot></slot>
  </div>
</template>
<style>
.ik-space {
  display: flex;
  gap: 16px;
}
</style>
