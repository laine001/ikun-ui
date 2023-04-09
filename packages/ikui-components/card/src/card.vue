<script lang="ts" setup name="IkCard">
import { computed, onMounted } from 'vue'
import { cardProps } from './card'
import vanillaTilt from 'vanilla-tilt'

const props = defineProps(cardProps)

const computedCls = computed(() => {
  const { shadow, suspension } = props
  return [
    'ik-card',
    `ik-card__${shadow}`,
    {
      'ik-card__suspension': suspension,
    },
  ]
})
const computedStyle = computed(() => {
  const { height } = props
  const h = typeof height === 'string' ? height : `${height}px`
  console.log(h, height)
  return {
    height: h,
  }
})
onMounted(() => {
  vanillaTilt.init(document.querySelector('.ik-card__suspension') as HTMLElement, {
    max: 12,
  })
})
</script>
<template>
  <div :class="computedCls" :style="computedStyle">
    <div class="ik-card__header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="ik-card__body">
      <slot></slot>
    </div>
  </div>
</template>
