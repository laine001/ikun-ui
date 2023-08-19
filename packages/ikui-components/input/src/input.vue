<script lang="ts" setup name="IkInput">
import { computed, ref, WritableComputedRef } from 'vue'
import { InputProps, Emits } from './input'
const props = defineProps(InputProps)
const emit = defineEmits(Emits)
const inputRef = ref()
const isFocus = ref<boolean>(false)

const onInput = (e: MouseEvent): void => {
  const tar = e.target as HTMLInputElement
  emit('change', tar.value)
}

const model: WritableComputedRef<unknown> = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  },
})
const computedCls = computed(() => {
  return [
    'ik-input-wrapper',
    {
      'ik-input__focus': isFocus.value,
      'ik-input__hasClear': props.hasClear,
    },
  ]
})
const onClear = () => {
  emit('update:modelValue', '')
  inputRef.value.focus()
  inputRef.value.value = ''
}
const onFocus = () => {
  isFocus.value = true
}
const onBlur = () => {
  isFocus.value = false
}
</script>
<template>
  <div :class="computedCls">
    <div v-if="props.prefixIcon" class="before-inner">
      <ik-icon :size="18" :name="prefixIcon" />
    </div>
    <div class="ik-input__inner" tabindex="1">
      <input
        v-model="model"
        @focus="onFocus"
        @blur="onBlur"
        @input="onInput"
        class="ik-input"
        :placeholder="placeholder"
        type="text"
        ref="inputRef"
      />
    </div>
    <div v-if="(hasClear && model) || props.suffixIcon" class="after-inner">
      <ik-icon v-if="hasClear" :size="17" name="close" @click="onClear" />
      <ik-icon v-if="props.suffixIcon" :size="17" :name="props.suffixIcon" />
    </div>
  </div>
</template>
