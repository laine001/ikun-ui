<script lang="ts" setup name="IkInput">
import { computed, ref, WritableComputedRef } from 'vue';
import { InputProps, Emits } from './input'
const props = defineProps(InputProps)
const emit = defineEmits(Emits)
const inputRef = ref()

const onInput = (e: MouseEvent): void => {
  const tar = e.target as HTMLInputElement
  emit('change', tar.value)
}

const model: WritableComputedRef<any> = computed({
  get() {
    return props.modelValue
  },
  set(value) {
    emit('update:modelValue', value)
  }
})
const onClear = () => {
  emit('update:modelValue', '')
  inputRef.value.focus()
  inputRef.value.value = ''
}
</script>
<template>
  <div class="ik-input-wrapper">
    <div v-if="false">前缀</div>
    <div class="ik-input__inner" tabindex="1">
      <input
        v-model="model"
        @input="onInput"
        class="ik-input"
        :placeholder="placeholder"
        type="text"
        ref="inputRef"
      >
    </div>
    <div v-if="hasClear && model" class="after-inner">
      <ik-icon :size="18" name="delete-filling" @click="onClear" />
    </div>
  </div>
</template>
