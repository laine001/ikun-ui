<script setup lang="ts" name="ik-menu-item">
import { computed, CSSProperties, getCurrentInstance } from 'vue'
import type { Router } from 'vue-router'
import { menuItemProps } from '../../menu/src/prop'
const props = defineProps(menuItemProps)
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const instance = getCurrentInstance()!
const router = instance.appContext.config.globalProperties.$router as Router

const computedStyle = computed<CSSProperties>(() => {
  const { _level } = props.current
  return {
    textIndent: _level - 2 > 0 ? `${26 * (_level - 2)}px` : 0,
  }
})
const onClickMenuItem = () => {
  // console.log(props.current, router.currentRoute.value.path, 'click')
  if (router) {
    if (props.current.path === router?.currentRoute.value.path) return
    router.push(props.current.path)
  }
}
const computedClses = computed(() => {
  return [
    'ik-menu--item',
    {
      'ik-menu--item__active': props.current.path && props.current.path === router?.currentRoute?.value.path,
    },
  ]
})
</script>
<template>
  <div :class="computedClses" :style="computedStyle" @click="onClickMenuItem">
    <div class="ik-menu--item__wrap">
      <span class="menu-icon" v-if="props.current">
        <ik-icon :size="14" :name="props.current.icon" />
      </span>
      <slot></slot>
    </div>
  </div>
</template>
