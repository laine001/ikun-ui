<script lang="ts" setup name="IkButton">
import { computed } from 'vue';
import { buttonProps } from './button'

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

const onClick = () => {
  emits('click')
}

defineExpose({
  /** @description button type */
  type: props.type,
})
</script>
<template>
  <button :class="computedCls" @click="onClick">
    <span>
      <slot></slot>
    </span>
  </button>
</template>
<style lang="scss">
  @import '../../../ikui-theme/src/var.scss';

  .ik-button {
    background-color: antiquewhite;
    padding: 6px 16px;
    border-radius: 3px;
    border: none;
    outline: none;
    cursor: pointer;
    font-size: 14px;
    transition: color .2s;
    &.ik-button-default {
      color: #333333;
      background-color: $default;
    }
    &.ik-button-primary {
      color: #ffffff;
      background-color: $primary;
    }
    &.ik-button-success {
      color: #ffffff;
      background-color: $success;
    }
    &.ik-button-warning {
      color: #ffffff;
      background-color: $warning;
    }
    &.ik-button-danger {
      color: #ffffff;
      background-color: $danger;
    }
    &.ik-button-disabled {
      cursor: not-allowed;
      background-color: rgb(180, 187, 185);
    }
    &:hover {
      opacity: .9;
    }
    &:active {
      background-color: rgb(202, 209, 186);
    }
  }
</style>
