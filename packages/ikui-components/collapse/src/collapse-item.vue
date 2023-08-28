<script lang="ts" setup name="IkCollapseItem">
import { collapseProps } from './prop'
const props = defineProps(collapseProps)
console.log(props, 'props')
</script>
<template>
  <div clas="ik-collapse--item">
    <slot />
  </div>
</template>
