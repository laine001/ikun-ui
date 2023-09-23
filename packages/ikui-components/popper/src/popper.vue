<script lang="ts" setup name="IkPopper">
import { ref, onMounted, computed, onUnmounted, useSlots } from 'vue'
import { autoUpdate, computePosition, offset, flip, arrow, hide } from '@floating-ui/vue'
import type { Placement } from '@floating-ui/vue'
const referenceEl = ref<HTMLElement>()
const floatingEl = ref<HTMLElement>()
const arrowEl = ref<HTMLElement>()

const currentPlacement = ref<Placement>()

const popperVisible = ref(false)

const slots = useSlots()
console.log(slots, 'slots')

const updatePosition = () => {
  computePosition(referenceEl.value, floatingEl.value, {
    placement: 'bottom',
    middleware: [
      offset(10),
      flip(),
      arrow({
        element: arrowEl.value,
      }),
      hide(),
    ],
  }).then(({ x, y, middlewareData, placement }) => {
    if (middlewareData.arrow) {
      const { x, y } = middlewareData.arrow
      Object.assign(arrowEl.value.style, {
        left: x != null ? `${x}px` : '',
        top: y != null ? `${y}px` : '',
      })
    }
    const { referenceHidden } = middlewareData.hide
    Object.assign(floatingEl.value.style, {
      left: `${x}px`,
      top: `${y}px`,
      visibility: referenceHidden ? 'hidden' : 'visible',
    })
    currentPlacement.value = placement
  })
}

onMounted(() => {
  referenceEl.value.addEventListener('mouseenter', () => {
    popperVisible.value = true
    referenceEl.value.addEventListener('mouseleave', () => {
      popperVisible.value = false
    })
  })
  autoUpdate(referenceEl.value, floatingEl.value, updatePosition)
})

onUnmounted(() => {
  referenceEl.value.removeEventListener('mouseleave', () => {
    popperVisible.value = false
  })
})

const arrowCls = computed(() => {
  return [
    'ik-popper__arrow',
    {
      'ik-popper__arrow--bottom': (currentPlacement.value || '').includes('top'),
      'ik-popper__arrow--top': (currentPlacement.value || '').includes('bottom'),
    },
  ]
})
</script>
<template>
  <template ref="referenceEl">
    <slot name="trigger" />
  </template>
  <Teleport to="body">
    <div class="ik-popper">
      <Transition name="tag-fade">
        <div class="content" v-show="popperVisible" ref="floatingEl">
          <slot name="content" />
          <span :class="arrowCls" ref="arrowEl"></span>
        </div>
      </Transition>
    </div>
  </Teleport>
</template>
<style lang="scss">
.trigger {
  display: inline-block;
}
.ik-popper {
  z-index: 9999;
  .ik-popper__arrow {
    position: absolute;
    width: 0;
    height: 0;
    &.ik-popper__arrow--bottom {
      border-top: 6px solid #fff;
      border-right: 6px solid transparent;
      border-left: 6px solid transparent;
      bottom: -6px;
    }
    &.ik-popper__arrow--top {
      border-bottom: 6px solid #fff;
      border-right: 6px solid transparent;
      border-left: 6px solid transparent;
      top: -6px;
    }
  }
  .content {
    position: absolute;
    box-sizing: border-box;
    padding: 8px;
    border-radius: var(--default-radius);
    background-color: #fff;
    box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
  }
}
</style>
