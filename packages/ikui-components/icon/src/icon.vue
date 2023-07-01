<script lang="ts" name="IkIcon" setup>
import { iconProps } from './icon'
import { computed, onMounted } from 'vue'
const props = defineProps(iconProps)
onMounted(() => {
  import('https://at.alicdn.com/t/c/font_4046682_y8x04pufa9.js')
})
const style = computed(() => {
  const size = typeof props.size === 'string' ? props.size : `${props.size}px`
  return {
    fill: props.color,
    width: size,
    height: size,
  }
})
const classes = computed(() => {
  return ['ik-icon', props.class]
})
</script>
<template>
  <svg :class="classes" :style="style" aria-hidden="true">
    <use :xlink:href="`#icon-${props.name}`" />
  </svg>
</template>
