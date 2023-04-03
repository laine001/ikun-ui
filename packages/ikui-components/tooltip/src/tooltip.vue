<script setup lang="ts" name="IkTooltip">
import { defineComponent, defineProps, ref } from 'vue'
import Popper from 'vue3-popper'
import { props } from './tooltip'
const prop = defineProps(props)
const popperRef = ref()
defineComponent({
  components: {
    Popper,
  },
})
</script>
<template>
  <Popper ref="popperRef" :hover="prop.triggerType === 'hover'" :arrow="prop.arrow" :placement="prop.placement">
    <slot></slot>
    <template #content>
      <slot name="content"></slot>
    </template>
  </Popper>
</template>
<style>
:root {
  --popper-theme-background-color: #333;
  --popper-theme-background-color-hover: #333;
  --popper-theme-border-radius: 4px;
  --popper-theme-padding: 4px 12px;
  --popper-theme-text-color: #fff;
}

.popper {
  border-radius: 4px;
}
</style>
