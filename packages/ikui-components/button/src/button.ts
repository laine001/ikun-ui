import type { ExtractPropTypes } from "vue"
import type button from './button.vue'

export const buttonTypes = [
  'default',
  'primary',
  'success',
  'warning',
  'danger'
] as const

export const buttonProps = {
  type: {
    type: String,
    values: buttonTypes,
    default: 'default'
  },
  disabled: {
    type: Boolean,
    default: () => false
  },
  icon: {
    type: String
  },
  loading: {
    type: Boolean,
    default: (): boolean => false
  }
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonType = ButtonProps['type']

export type ButtonInstance = InstanceType<typeof button>
