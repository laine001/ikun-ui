<script lang="ts" setup name="IkMessage">
  import { ref, onMounted, computed, ComputedRef, CSSProperties } from 'vue'
  import { messageProps, messageEmits } from './message'
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
    }, 3000)
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
      top: `${offset.value}px`
    }
  })

  defineExpose({
    bottom,
    visible
  })
</script>
<template>
  <transition
    name="f-msg-fade"
    @before-leave="$emit('close')"
    @after-leave="$emit('destroy')"
  >
    <div class="ik-message" v-show="visible" :style="computedStyle">
      {{message}}
    </div>
  </transition>
</template>
<style lang="scss">
  .ik-message {
    background-color: #ffffff;
    padding: 8px 18px;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    margin: 20px auto 0;
    transition: all .32s;
    border-radius: 4px;
    font-size: 14px;
    color: #222222;
    box-shadow: 0 3px 6px -4px #0000001f, 0 6px 16px #00000014, 0 9px 28px 8px #0000000d;
  }
  .f-msg-fade-enter-from,
  .f-msg-fade-leave-to {
    opacity: 0;
    transform: translate(-50%, -100%);
  }
</style>
