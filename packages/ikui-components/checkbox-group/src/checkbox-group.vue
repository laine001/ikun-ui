<script lang="ts" name="IkCheckboxGroup" setup>
import { provide, computed, nextTick } from 'vue'
import { checkboxGroupCtxKey, checkboxGroupProps, Emits } from './checkbox-group'

const props = defineProps(checkboxGroupProps)
const emit = defineEmits(Emits)

const checkboxGroupValue = computed({
  get () {
    return props.modelValue
  },
  set (val) {
    changeEvent(val)
  }
})

const changeEvent = async (value) => {
  emit('update:modelValue', value)
  await nextTick()
  emit('change', value)
}

provide(checkboxGroupCtxKey, {
  modelValue: checkboxGroupValue.value,
  changeEvent,
  ...props
})
</script>
<template>
  <div class="ik-checkbox-group">
    <slot />
  </div>
</template>
