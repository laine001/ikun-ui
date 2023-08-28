<script lang="ts" setup name="IkCollapse">
import { collapseProps } from './prop'
const props = defineProps(collapseProps)
// console.log(props, 'props')
</script>
<template>
  <div clas="ik-collapse">
    <slot />
  </div>
</template>
