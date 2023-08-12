<script lang="ts" setup name="IkButton">
import { computed } from 'vue'
import { buttonProps } from './button'

const props = defineProps(buttonProps)
const emits = defineEmits(['click'])

const computedCls = computed(() => {
  const { type, disabled, loading, round, size, plain, ikun } = props
  return [
    'ik-button',
    `ik-button-${type}`,
    `ik-button-${size}`,
    {
      'ik-button-disabled': disabled || loading,
      'ik-button-plain': plain,
      'ik-button__round': round,
      // 'ik-button__ikun': ikun,
    },
  ]
})
const iconColor = computed(() => {
  if (!props.type || props.type === 'default') return ''
  return '#ffffff'
})

const onClick = () => {
  emits('click')
}

defineExpose({
  /** @description button type */
  type: props.type,
})
</script>
<template>
  <button :class="computedCls" @click="onClick" :disabled="props.disabled">
    <span class="ik-button__inner">
      <img v-if="ikun" width="20" src="https://laine001.github.io/ikun-ui/ikun.gif" />
      <ik-icon v-if="icon" :name="props.icon" :color="iconColor"></ik-icon>
      <ik-icon v-if="loading" name="loading" :color="iconColor" class="loading-icon"></ik-icon>
      <slot></slot>
    </span>
  </button>
</template>
