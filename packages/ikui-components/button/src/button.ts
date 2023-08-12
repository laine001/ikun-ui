import type { ExtractPropTypes, PropType } from 'vue'
import type button from './button.vue'

export const buttonTypes = ['default', 'primary', 'success', 'warning', 'danger'] as const

export type ButtonSize = 'small' | 'default' | 'large'

export const buttonProps = {
  type: {
    type: String,
    values: buttonTypes,
    default: 'default',
  },
  disabled: {
    type: Boolean,
    default: () => false,
  },
  icon: {
    type: String,
  },
  loading: {
    type: Boolean,
    default: (): boolean => false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: 'default',
  },
  plain: {
    type: Boolean,
    default: false,
  },
  ikun: {
    type: Boolean,
    default: false,
  },
} as const

export type ButtonProps = ExtractPropTypes<typeof buttonProps>
export type ButtonType = ButtonProps['type']

export type ButtonInstance = InstanceType<typeof button>
