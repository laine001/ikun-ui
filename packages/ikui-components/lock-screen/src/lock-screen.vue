<script setup lang="ts" name="ik-lock-screen">
import { lockScreenProps } from './prop'
const props = defineProps(lockScreenProps)
const emits = defineEmits(['onUnlock'])
const onUnlock = () => {
  emits('onUnlock')
}
</script>
<template>
  <Transition name="lockScreen">
    <div v-if="props.visible" class="ik-lock-screen">
      <div class="ik-lock-screen--bg"></div>
      <div class="ik-lock-screen--content">
        <ik-space>
          <ik-input></ik-input>
          <ik-button icon="unlock" @click="onUnlock">解锁</ik-button>
        </ik-space>
      </div>
    </div>
  </Transition>
</template>
