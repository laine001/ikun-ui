<script lang="ts" setup name="IkCarousel">
import { getCurrentInstance, ref } from 'vue'
import type { ComponentInternalInstance } from 'vue'
import type { actionType } from './prop'

const inst = getCurrentInstance() as ComponentInternalInstance
const LEN = inst.slots.default().length
const activeIndex = ref(0)
// import { computed } from 'vue'
// import { swiperProps } from './prop'

// const props = defineProps(buttonProps)
// const emits = defineEmits(['click'])

const onToggleIndex = (action: actionType, i?: number) => {
  if (action === 'next') {
    if (activeIndex.value === LEN - 1) {
      activeIndex.value = 0
      return
    }
    activeIndex.value++
  } else if (action === 'prev') {
    if (activeIndex.value === 0) {
      activeIndex.value = LEN - 1
      return
    }
    activeIndex.value--
  } else if (action === 'assign') {
    activeIndex.value = i
  }
}
</script>
<template>
  <div class="ik-carousel">
    <span class="ik-carousel-action__left" @click="() => onToggleIndex('prev')"
      ><ik-icon color="#fff" name="arrow-left"
    /></span>
    <span class="ik-carousel-action__right" @click="() => onToggleIndex('next')"
      ><ik-icon color="#fff" name="arrow-right"
    /></span>
    <div class="ik-carousel-dots">
      <span
        :class="`ik-carsousel--dot ${activeIndex === i ? 'ik-carsousel-active__dot' : ''}`"
        v-for="(item, i) in LEN"
        :key="item"
        @click="() => onToggleIndex('assign', i)"
      ></span>
    </div>

    <div class="ik-carousel-list">
      <div
        v-for="(item, index) in LEN"
        :key="index"
        :style="{ transform: `translate3d(${(index - activeIndex) * 100}%, 0, 0)` }"
        class="ik-carousel--item"
      >
        {{ item }}
        <!-- <slot /> -->
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.ik-carousel {
  position: relative;
  overflow: hidden;

  // border: 1px solid var(--primary-color);
  border-radius: var(--default-radius);
  .ik-carousel-action__left,
  .ik-carousel-action__right {
    opacity: 0.8;
    border-radius: 4px;
    padding: 2px;
    cursor: pointer;
    &:hover {
      background-color: rgba($color: #000000, $alpha: 0.2);
    }
  }
  .ik-carousel-action__left {
    position: absolute;
    top: calc(50% - 10px);
    z-index: 1;
    left: 10px;
  }
  .ik-carousel-action__right {
    position: absolute;
    top: calc(50% - 10px);
    z-index: 1;
    right: 10px;
  }
  .ik-carousel-list {
    display: flex;
    flex-wrap: nowrap;
    width: 100%;
    height: 200px;
    .ik-carousel--item {
      font-size: 28px;
      color: #fff;
      float: left;
      width: 100%;
      text-align: center;
      height: 200px;
      line-height: 120px;
      position: absolute;
      left: 0;

      transition: all 0.38s;
      &:nth-child(1) {
        background-color: var(--primary-color);
      }
      &:nth-child(2) {
        background-color: pink;
      }
      &:nth-child(3) {
        background-color: skyblue;
      }
      &:nth-child(4) {
        background-color: oldlace;
      }
    }
  }
  .ik-carousel-dots {
    width: 100%;
    height: 16px;
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;

    z-index: 1;

    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    .ik-carsousel--dot {
      display: inline-block;
      width: 8px;
      height: 8px;
      cursor: pointer;
      border-radius: 50%;
      background-color: #fff;
      opacity: 0.8;
      &.ik-carsousel-active__dot {
        background-color: var(--primary-color);
      }
    }
  }
}
</style>
