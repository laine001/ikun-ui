<script lang="ts" name="IkIcon" setup>
  // import '//at.alicdn.com/t/c/font_3653999_vjdiayz6bx.js';
  // import 'https://at.alicdn.com/t/c/font_3653999_vjdiayz6bx.js?spm=a313x.7781069.1998910419.55&file=font_3653999_vjdiayz6bx.js';
  
  import { iconProps } from './icon'
  import { computed, onMounted } from 'vue';
  const props = defineProps(iconProps)
  onMounted(() => {
    import('https:////at.alicdn.com/t/c/font_3653999_v9boqzux0j.js')
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
