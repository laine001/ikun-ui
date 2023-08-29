<script lang="ts" setup name="IkMessage">
import IkIcon from '../../icon'
import { ref, onMounted, computed, ComputedRef, CSSProperties } from 'vue'
import { messageProps, messageEmits, messageIconNameList } from './message'
import { getLastOffset } from './service'
const props = defineProps(messageProps)
defineEmits(messageEmits)

const visible = ref(false)
onMounted(() => {
  startTimer()
  visible.value = true
})
const startTimer = () => {
  setTimeout(() => {
    visible.value = false
  }, props.duration)
}

const offset: ComputedRef = computed((): number => {
  const v = getLastOffset(props.id)
  return v
})
const bottom = computed(() => {
  return offset.value + 50
})

const computedStyle: ComputedRef = computed<CSSProperties>(() => {
  return {
    top: `${offset.value}px`,
    color: computedIconColor.value,
  }
})

const computedIconColor: ComputedRef = computed(() => {
  const { type } = props
  switch (type) {
    case 'warning':
      return '#f29a76'
    case 'info':
      return '#a4abd6'
    case 'success':
      return '#5aa4ae'
    default:
      return '#333'
  }
})

defineExpose({
  bottom,
  visible,
})
</script>
<template>
  <transition name="ik-msg-fade" @before-leave="$emit('close')" @after-leave="$emit('destroy')">
    <div class="ik-message" v-show="visible" :style="computedStyle">
      <ik-icon v-if="props.type" :name="messageIconNameList[props.type]" :color="computedIconColor" />
      {{ message }}
    </div>
  </transition>
</template>
