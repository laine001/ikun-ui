<script lang="ts" setup name="IkCheckboxGroup">
import { nextTick, provide, reactive, toRefs } from 'vue'
import { checkboxGroupProps, checkboxGroupEmits, checkboxGroupCtxKey } from './checkbox-group'
import { CheckboxLabelType } from './interface'
const props = defineProps(checkboxGroupProps)
const emit = defineEmits(checkboxGroupEmits)
// console.log(props, 'props')
const changeEvent = async (val: CheckboxLabelType): Promise<void> => {
  emit('update:modelValue', val)
  await nextTick()
  emit('change', val)
}

const checkboxGroup = reactive({
  ...toRefs(props),
  changeEvent,
})

provide(checkboxGroupCtxKey, checkboxGroup)
</script>
<template>
  <div class="f-checkbox-group">
    <slot />
  </div>
</template>
