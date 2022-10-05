<script lang="ts" setup name="IkCheckbox">
import { computed, getCurrentInstance, inject, ref } from 'vue'
import { checkboxProps, checkboxEmits } from './checkbox'
import { checkboxGroupCtxKey } from '../../checkbox-group/src/checkbox-group'
const props = defineProps(checkboxProps)
const emit = defineEmits(checkboxEmits)

const checkboxGroupInjectData = ref(null)
const isGroup = ref(false)

const getGroupInject = () => {
  const { parent } = getCurrentInstance()
  if (parent.type.name && parent.type.name === 'IkCheckboxGroup') {
    isGroup.value = true
    checkboxGroupInjectData.value = inject(checkboxGroupCtxKey)
  }
}
getGroupInject()

const selfModel = computed({
  get () {
    if (isGroup.value) {
      return checkboxGroupInjectData.value.modelValue
    }
    return props.modelValue
  },
  set (val) {
    if (isGroup.value) {
      checkboxGroupInjectData.value.modelValue = val
      checkboxGroupInjectData.value.changeEvent(val)
    } else {
      emit('update:modelValue', val)
      // selfModel.value = val
    }
  }
})

const isChecked = computed(() => {
  const val = selfModel.value
  if (Array.isArray(val)) {
    return val.includes(props.label)
  } else if (typeof val === 'boolean') {
    return val
  }
  return false
})

const computedClses = computed(() => {
  return [
    'ik-checkbox',
    {
      'ik-checkbox--selected': isChecked.value
    }
  ]
})

const onClickRoot = () => {
  // console.log(selfModel.value, 'click')
}

</script>
<template>
<label :class="computedClses" @click="onClickRoot">
  <span class="ik-checkbox-inner">
    <input
      class="ik-checkbox-input"
      type="checkbox"
      :value="props.label"
      v-model="selfModel"
    >
    <span class="ik-checkbox-icon"></span>
    <span>{{label}}</span>
    <!-- {{ selfModel }} -->
  </span>
</label>
</template>
<style lang="scss">
@import '../../../ikui-theme/checkbox/index.scss';
</style>
