<script setup lang="ts" name="ik-menu-item">
import { computed, CSSProperties, defineProps } from 'vue'
import { menuItemProps } from '../../menu/src/prop'
const props = defineProps(menuItemProps)
console.log(props.current._level, '======')

const computedStyle = computed<CSSProperties>(() => {
  const { _level } = props.current
  return {
    textIndent: _level - 2 > 0 ? `${26 * (_level - 2)}px` : 0,
  }
})
const onClickMenuItem = () => {
  console.log(props.current)
}
</script>
<template>
  <div class="ik-menu--item" :style="computedStyle" @click="onClickMenuItem">
    <div class="ik-menu--item__wrap">
      <span class="menu-icon" v-if="props.current">
        <ik-icon :size="14" :name="props.current.icon" />
      </span>
      <slot></slot>
    </div>
  </div>
</template>
