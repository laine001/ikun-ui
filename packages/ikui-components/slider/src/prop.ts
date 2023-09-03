import type { ExtractPropTypes } from 'vue'
import type slider from './slider.vue'

// export const buttonTypes = ['default', 'primary', 'success', 'warning', 'danger'] as const

// export type ButtonSize = 'small' | 'default' | 'large'

export const sliderProps = {
  ikun: {
    type: Boolean,
    default: false,
  },
  modelValue: {
    type: Number,
    default: 0,
  },
  showTooltip: {
    type: Boolean,
    default: false,
  },
} as const

export const Emits = {
  'update:modelValue': (value) => typeof value,
  change(value) {
    return typeof value
  },
}

export type SliderProps = ExtractPropTypes<typeof sliderProps>

export type SliderInstance = InstanceType<typeof slider>
