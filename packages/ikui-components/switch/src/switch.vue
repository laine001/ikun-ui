<script setup lang="ts" name="IkSwitch">
import { computed, ref } from 'vue'
import { SwitchProps, emits } from './prop'
const props = defineProps(SwitchProps)
const emit = defineEmits(emits)
const bool = ref<boolean>(props.modelValue)
const handleToggle = () => {
  bool.value = !bool.value
  emit('update:modelValue', bool.value)
}
const computedCls = computed(() => {
  return [
    {
      'ik-switch': true,
    },
    {
      'ik-switch__actived': bool.value,
      'ik-switch__default': !bool.value,
    },
  ]
})
</script>
<template>
  <div :class="computedCls" @click="handleToggle">
    <span class="ik-switch__dot"></span>
  </div>
</template>
