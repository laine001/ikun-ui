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
      top: `${offset.value}px`
    }
  })

  const computedIconColor: ComputedRef = computed(() => {
    const { type } = props
    switch (type) {
      case 'warning':
        return '#fbD26a'
      case 'info':
        return '#cd8025'
      case 'success':
        return '#01847f'
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
      <ik-icon
        v-if="props.type"
        :name="messageIconNameList[props.type]"
        :color="computedIconColor"
      />
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
    display: flex;
    .ik-icon {
      vertical-align: text-bottom;
      margin-right: 4px;
    }
  }
  .f-msg-fade-enter-from,
  .f-msg-fade-leave-to {
    opacity: 0;
    transform: translate(-50%, -100%);
  }
</style>
