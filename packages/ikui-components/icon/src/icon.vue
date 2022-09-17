<script lang="ts" setup>
  import '//at.alicdn.com/t/c/font_3653999_vjdiayz6bx.js';
  import { iconProps } from './icon'
  import { computed } from 'vue';

  const props = defineProps(iconProps)

  const style = computed(() => {
    return {
      fill: props.color,
      fontSize: props.size
    }
  })
  const classes = computed(() => {
    return [
      'ik-icon',
      props.class
    ]
  })
</script>
<template>
  <svg :class="classes" :style="style" aria-hidden="true">
    <use :xlink:href="`#icon-${props.name}`" />
  </svg>
</template>
<style lang="scss">
@import '../../../ikui-theme/icon';
</style>
