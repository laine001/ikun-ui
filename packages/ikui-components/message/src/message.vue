<script lang="ts" setup name="IkMessage">
  import { ref, onMounted, computed, ComputedRef, CSSProperties } from 'vue'
  import { messageProps } from './message'
  import { getLastOffset } from './service'
  const props = defineProps(messageProps)
  defineEmits(['destroy'])
  
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
    return offset.value + 40
  })

  const computedStyle: ComputedRef = computed<CSSProperties>(() => {
    return {
      top: `${offset.value}px`
    }
  })

  defineExpose({
    bottom
  })
</script>
<template>
  <transition
    name="msg-fade"
    @after-leave="$emit('destroy');props.onDestory()"
  >
    <div class="ik-message" v-show="visible" :style="computedStyle">
      {{message}}
    </div>
  </transition>
</template>
<style lang="scss">
  .ik-message {
    background-color: salmon;
    padding: 5px 15px;
    position: fixed;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    z-index: 999;
    margin: 0 auto;
  }
  .msg-fade-enter-active {
    animation: msgbox-fade .36s ease;
  }
  .msg-fade-leave-active {
    animation: msgbox-fade .36s ease reverse;
  }

  @keyframes msgbox-fade {
    0% {
      transform: translate3d(-50%, -20px, 0);
      opacity: 0;
    }
    100% {
      transform: translate3d(-50%, 0, 0);
      opacity: 1;
    }
  }
</style>
