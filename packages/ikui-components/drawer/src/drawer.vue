<script lang="ts" setup name="IkDrawer">
import { computed } from 'vue'
import { drawerProps } from './drawer'
const props = defineProps(drawerProps)
const emit = defineEmits(['cancel'])
const onClickMask = () => {
  emit('cancel')
}
const computedBodyCls = computed(() => {
  const { position } = props
  return [
    'ik-drawer__body',
    {
      r2l: position === 'left',
      l2r: position === 'right',
      t2b: position === 'bottom',
      b2t: position === 'top',
    },
  ]
})
const computedTransitionName = computed(() => {
  let name = 'drawer-slide'
  const { position } = props
  switch (position) {
    case 'left':
      name = 'drawer-slide'
      break
    case 'right':
      name = 'drawer-slide__right'
      break
    case 'top':
      name = 'drawer-slide__top'
      break
    case 'bottom':
      name = 'drawer-slide__bottom'
      break
    default:
      name = 'drawer-slide'
      break
  }
  return name
})
</script>
<template>
  <teleport to="body">
    <div class="ik-drawer">
      <transition name="drawer-fade">
        <div class="ik-drawer__mask" @click="onClickMask" v-if="props.visible"></div>
      </transition>
      <transition :name="computedTransitionName">
        <div :class="computedBodyCls" v-if="props.visible">
          <div class="ik-drawer__body--header">
            <div class="header-title">{{ props.title }}</div>
            <div class="header-close" @click="() => emit('cancel')">
              <ik-icon name="close" :size="18"></ik-icon>
            </div>
          </div>
          <div class="ik-drawer__body--content"><slot></slot></div>
        </div>
      </transition>
    </div>
  </teleport>
</template>
