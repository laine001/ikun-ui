<script setup lang="ts" name="IkCarouselItem">
import { inject, getCurrentInstance, ref, onMounted, computed, CSSProperties } from 'vue'
import { carouselItemProps, carouselContextKey } from './prop'
const props = defineProps(carouselItemProps)
const instance = getCurrentInstance()
// console.log(instance, 'instance')
const carouselContext = inject(carouselContextKey) as any

const translate = ref(0)

const translateItem = (index: number, activeIndex: number) => {
  const rootWidth = carouselContext.root.value?.offsetWidth || 0
  // translate.value =
  console.log(activeIndex, index, 'translate-item')
  const t = (index - activeIndex) * rootWidth
  translate.value = t
}

onMounted(() => {
  // translateItem(0, 0)
  carouselContext.addItem({
    props,
    uid: instance.uid,
    translateItem,
  })
})

const itemStyle = computed<CSSProperties>(() => {
  const transform = `translate3d(${translate.value}px, 0, 0)`
  console.log(transform, 'ttt')
  return {
    transform,
  }
})

// :style="{ transform: `translate3d(${(allValues?.value?.index - allValues?.value?.activeIndex) * 100}%, 0, 0)` }"
</script>
<template>
  <div class="ik-carousel--item" :style="itemStyle">
    <slot />
  </div>
</template>
