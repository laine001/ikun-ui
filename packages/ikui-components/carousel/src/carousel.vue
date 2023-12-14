<script lang="ts" setup name="IkCarousel">
import { getCurrentInstance, ref, h, watch, provide, toRefs, onMounted } from 'vue'
import IkCarouselItem from './carousel-item.vue'
import type { ComponentInternalInstance } from 'vue'
import type { actionType } from './prop'
import { carouselContextKey, carouselProps } from './prop'

const items = ref([])
const root = ref<HTMLDivElement>()

const inst = getCurrentInstance() as ComponentInternalInstance
const LEN = inst.slots.default().length
const activeIndex = ref(0)
// import { computed } from 'vue'
// import { swiperProps } from './prop'

const props = defineProps(carouselProps)
// const emits = defineEmits(['click'])
// console.log(inst.slots.default(), 'inst')
// const _vnode = h(inst.slots.default())
// const _vnode2 = h(inst.slots.default()[0])
// console.log(_vnode, inst.slots, 'v')
// console.log(_vnode2, 'v2')

// console.log(renderSlot(inst.slots, 'default'), 'hellos')
// const t = render(_vnode, )
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
  // console.log(items, 'items')
  // items.value.forEach((item, index) => {
  //   item.translateItem(index, activeIndex.value)
  // })
  // translateItem()
  // console.log(activeIndex, 'activeIndex')
}
const addItem = (item) => {
  items.value.push(item)
}

// onMounted(() => {
//   items.value.forEach((item, index) => {
//     item.translateItem(index, activeIndex.value)
//   })
// })

watch(
  () => activeIndex.value,
  (current) => {
    items.value.forEach((item, index) => {
      item.translateItem(index, current)
    })
  }
)

provide(carouselContextKey, {
  root,
  items,
  addItem,
})
</script>
<template>
  <div class="ik-carousel" ref="root">
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
      <slot />
      <!-- <template v-for="(item, index) in LEN" :key="index">
        <ik-carousel-item>
          <slot />
        </ik-carousel-item>
      </template> -->
      <!-- <div
        v-for="(item, index) in LEN"
        :key="index"
        :style="{ transform: `translate3d(${(index - activeIndex) * 100}%, 0, 0)` }"
        class="ik-carousel--item"
      >
        {{ item }}
      </div> -->
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
        background-color: pink;
      }
      &:nth-child(2) {
        background-color: rgb(229, 223, 186);
      }
      &:nth-child(3) {
        background-color: skyblue;
      }
      &:nth-child(4) {
        background-color: rgb(233, 221, 198);
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
