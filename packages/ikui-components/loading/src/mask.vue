<script lang="ts" setup name="mask">
import { computed, inject } from 'vue'

const fullscreen = inject('fullscreen')
const computedClses = computed(() => {
  return [
    'ik-loading-mask',
    {
      'ik-loading-mask--fullscreen': fullscreen,
    },
  ]
})
</script>
<template>
  <transition name="es-loading-fade">
    <div v-if="true" :class="computedClses">
      <div class="loading-box">
        <div class="loader-08"></div>
      </div>
    </div>
  </transition>
</template>
