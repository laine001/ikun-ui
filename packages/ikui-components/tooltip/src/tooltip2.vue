<script setup lang="ts" name="IkTooltip">
// import { ref, computed } from 'vue'
import IkPopper from '../../popper'
import { props } from './tooltip'
const prop = defineProps(props)
</script>
<template>
  <ik-popper>
    <template #trigger>
      <slot name="trigger" />
    </template>
    <template #content>
      <slot name="content" />
    </template>
  </ik-popper>
</template>
