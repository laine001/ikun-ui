import type { ExtractPropTypes } from 'vue'
import type carousel from './carousel.vue'

export const carouselTypes = ['default'] as const

export type actionType = 'next' | 'prev' | 'assign'

export const carouselProps = {
  type: {
    type: String,
    values: carouselTypes,
    default: 'default',
  },
} as const

export const carouselItemProps = {
  activeIndex: {
    type: Number,
  },
  key: {
    type: Number,
  },
  index: {
    type: Number,
  },
}

export type CarouselProps = ExtractPropTypes<typeof carouselTypes>

export type CarouselInstance = InstanceType<typeof carousel>

export const carouselContextKey = Symbol('carouselContextKey')
