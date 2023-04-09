<script lang="ts" setup name="IkCard">
import { computed } from 'vue'
import { cardProps } from './card'

const props = defineProps(cardProps)

const computedCls = computed(() => {
  const { shadow } = props
  return ['ik-card', `ik-card__${shadow}`]
})
</script>
<template>
  <div :class="computedCls">
    <div class="ik-card__header" v-if="$slots.header">
      <slot name="header"></slot>
    </div>
    <div class="ik-card__body">
      <slot></slot>
    </div>
  </div>
</template>
<style lang="scss">
.ik-card {
  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  border-radius: 4px;
  border: 1px solid #e4e7ed;
  transition: all 0.2s;
  .ik-card__header {
    border-bottom: 1px solid #e4e7ed;
    padding: 14px;
  }
  .ik-card__body {
    padding: 14px;
  }
  &.ik-card__always {
    box-shadow: 0 6px 16px -8px #00000014, 0 9px 28px #0000000d, 0 12px 48px 16px #00000008;
  }
  &.ik-card__hover:hover {
    box-shadow: 0 6px 16px -8px #00000014, 0 9px 28px #0000000d, 0 12px 48px 16px #00000008;
  }
  &.ik-card__none {
    box-shadow: none;
  }
}
</style>
