<!-- eslint-disable @typescript-eslint/no-empty-function -->
<script lang="ts" setup name="IkSlider">
import { computed, ComputedRef, CSSProperties, ref, shallowRef } from 'vue'
import { sliderProps, Emits } from './prop'
const props = defineProps(sliderProps)
const emit = defineEmits(Emits)

const oldValue = shallowRef<number>(props.modelValue)

const shouldPosition = ref<number>(props.modelValue)
const startPosition = ref<number>(0)

const dragging = ref(false)

// 初始值及最大值（百分比）
// const min = ref(0)
// const max = ref(100)

// slider长度或高度
const sliderSize = ref(0)
const slider = shallowRef<HTMLElement>()

const handleMouseEnter = () => {}
const handleMouseLeave = () => {}
const handleMouseDown = (event: MouseEvent) => {
  event.preventDefault()
  setSliderSize()
  onDragStart(event)

  window.addEventListener('mousemove', onDragging)
  window.addEventListener('mouseup', onDragEnd)
}

const setSliderSize = () => {
  if (slider.value) {
    sliderSize.value = slider.value.clientWidth
  }
}

const onDragStart = (event: MouseEvent) => {
  startPosition.value = event.clientX
  oldValue.value = props.modelValue
  dragging.value = true
  console.log(startPosition.value, 'startPosition')
}

const onDragging = (e: MouseEvent) => {
  let diff: number
  // console.log(e.clientX, 'onDragging')
  // console.log(startPosition.value, 'startPosition')
  // console.log(initialPosition.value, 'initialPosition')

  // 计算移动的百分比
  diff = ((e.clientX - startPosition.value) / sliderSize.value) * 100
  // console.log(diff, 'diff')

  // shouldPosition.value = diff + initialPosition.value
  shouldPosition.value = diff + oldValue.value
  if (shouldPosition.value > 100) shouldPosition.value = 100
  if (shouldPosition.value < 0) shouldPosition.value = 0
  // shouldPosition.value = e.clientX - startPosition.value
  const finialPosition = Math.round(shouldPosition.value)
  emit('update:modelValue', finialPosition)
}
const onDragEnd = (e: MouseEvent) => {
  console.log(e.clientX)
  dragging.value = false
  window.removeEventListener('mousemove', onDragging)
  window.removeEventListener('mouseup', onDragEnd)
}

const dotComputedStyle: ComputedRef<CSSProperties> = computed(() => {
  const l = `${shouldPosition.value}%`
  return {
    left: l,
    transform: props.ikun ? `rotate(${shouldPosition.value * 36}deg)` : '',
  }
})

const selectedBarStyle: ComputedRef<CSSProperties> = computed(() => {
  return {
    width: `${shouldPosition.value}%`,
  }
})

const computedDotClass = computed(() => {
  return ['ik-slider__dot', { dragging: dragging.value, 'ik-slider__dot--ikun': props.ikun }]
})
</script>
<template>
  <div class="ik-slider--wrapper" ref="slider">
    <div class="ik-slider">
      <div class="ik-slider__bar" :style="selectedBarStyle"></div>
      <template v-if="showTooltip">
        <ik-tooltip placement="top" :arrow="false">
          <template #content>
            <div>{{ modelValue }}</div>
          </template>
          <div
            :class="computedDotClass"
            @mouseenter="handleMouseEnter"
            @mouseleave="handleMouseLeave"
            @mousedown="handleMouseDown"
            :style="dotComputedStyle"
          ></div>
        </ik-tooltip>
      </template>
      <template v-else>
        <div
          :class="computedDotClass"
          @mouseenter="handleMouseEnter"
          @mouseleave="handleMouseLeave"
          @mousedown="handleMouseDown"
          :style="dotComputedStyle"
        >
          {{ ikun ? '🏀' : '' }}
        </div>
      </template>

      <!-- <div class="ik-slider__slideway"></div> -->
    </div>
  </div>
</template>
