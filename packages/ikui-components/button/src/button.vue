<script lang="ts" setup name="IkButton">
import { computed } from 'vue';
import { buttonProps } from './button'
// import Icon from '../../icon/src/icon.vue';

const props = defineProps(buttonProps)
const emits = defineEmits(['click'])

const computedCls = computed(() => {
  const {
    type,
    disabled
  } = props
  return [
    'ik-button',
    `ik-button-${type}`,
    {
      'ik-button-disabled': disabled
    }
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
      <ik-icon v-if="icon" :name="props.icon" :color="iconColor"></ik-icon>
      <ik-icon v-if="loading" name="loading" :color="iconColor" class="loading-icon"></ik-icon>
      <slot></slot>
    </span>
  </button>
</template>
<style lang="scss">
  @import '../../../ikui-theme/button/index.scss';
</style>
