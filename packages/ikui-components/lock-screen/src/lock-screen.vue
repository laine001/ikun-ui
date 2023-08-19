<script setup lang="ts" name="ik-lock-screen">
import { onMounted, ref } from 'vue'
import { lockScreenProps } from './prop'
const props = defineProps(lockScreenProps)
const emits = defineEmits(['onUnlock'])
const currentTime = ref('')
const lockPwd = ref('')
const onUnlock = () => {
  emits('onUnlock', lockPwd.value ?? '')
}
const updateTime = () => {
  let now = new Date()
  let hours: string | number = now.getHours()
  let minutes: string | number = now.getMinutes()
  let seconds: string | number = now.getSeconds()
  hours = hours.toString().padStart(2, '0')
  minutes = minutes.toString().padStart(2, '0')
  seconds = seconds.toString().padStart(2, '0')
  const time = hours + ':' + minutes + ':' + seconds
  currentTime.value = time
}
onMounted(() => {
  setInterval(updateTime, 1000)
})
</script>
<template>
  <Transition name="lockScreen">
    <div v-if="props.visible" class="ik-lock-screen">
      <div class="ik-lock-screen--bg"></div>
      <div class="ik-lock-time" v-if="props.showTime">{{ currentTime }}</div>
      <div class="ik-lock-screen--content">
        <ik-space>
          <ik-input v-model="lockPwd"></ik-input>
          <ik-button icon="unlock" @click="onUnlock">解锁</ik-button>
        </ik-space>
      </div>
    </div>
  </Transition>
</template>
