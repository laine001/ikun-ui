import type { ExtractPropTypes } from 'vue'
import type collapse from './collapse.vue'
import type collapseItem from './collapse-item.vue'

// export const buttonTypes = ['default', 'primary', 'success', 'warning', 'danger'] as const

// export type ButtonSize = 'small' | 'default' | 'large'

export const collapseProps = {
  title: {
    type: String,
    default: '',
  },
} as const

export const collapseItemProps = {
  title: {
    type: String,
    default: '',
  },
} as const

export type CollapseProps = ExtractPropTypes<typeof collapseProps>
export type CollapseItemProps = ExtractPropTypes<typeof collapseItemProps>

export type CollapseInstance = InstanceType<typeof collapse>
export type CollapseItemInstance = InstanceType<typeof collapseItem>
