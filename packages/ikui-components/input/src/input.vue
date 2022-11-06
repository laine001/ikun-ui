<script lang="ts" setup name="IkInput">
import { computed, ref, WritableComputedRef } from 'vue';
import { InputProps, Emits } from './input'
const props = defineProps(InputProps)
const emit = defineEmits(Emits)
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
}
</script>
<template>
  <div class="ik-input-wrapper">
    <div v-if="false">前缀</div>
    <div class="ik-input__inner" tabindex="1">
      <input v-model="model" @input="onInput" class="ik-input" placeholder="请输入" type="text">
    </div>
    <div v-if="false" class="after-inner">
      <ik-icon name="delete-filling" @click="onClear" />
    </div>
  </div>
</template>
