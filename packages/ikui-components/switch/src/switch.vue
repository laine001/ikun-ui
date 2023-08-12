<script setup lang="ts" name="IkSwitch">
import { computed, onMounted, ref } from 'vue'
import { SwitchProps, emits } from './prop'
const props = defineProps(SwitchProps)
const emit = defineEmits(emits)
const bool = ref<boolean>(props.modelValue)
const switchRef = ref()
bool.value = props.defaultValue ?? false
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
      'ik-switch--square': props.square,
    },
  ]
})

const setCssVar = () => {
  Object.keys(props.style ?? {}).forEach((styleProp) => {
    if (styleProp && props.style[styleProp]) {
      switchRef.value.style.setProperty(`${styleProp}`, props.style[styleProp])
    }
  })
}
onMounted(() => {
  setCssVar()
})
// watch(
//   () => props?.style,
//   () => {
//     console.log(switchRef.value, 'switchRef2')
//     setCssVar()
//   },
//   { immediate: false }
// )

// const computedBgStyle = computed(() => {
//   return {
//     background: props.bgColor,
//   }
// })
</script>
<template>
  <div class="ik-switch__wrap" ref="switchRef">
    <span class="ik-switch--text">{{ trueText }}</span>
    <div :class="computedCls" @click="handleToggle">
      <span class="ik-switch__dot"></span>
    </div>
    <span class="ik-switch--text">{{ falseText }}</span>
  </div>
</template>
