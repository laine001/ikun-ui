<script lang="ts" setup name="ik-modal">
import { defineProps } from 'vue'
import { props } from './props'

const prop = defineProps(props)
</script>
<template>
  <div v-show="prop.visible">123</div>
</template>
