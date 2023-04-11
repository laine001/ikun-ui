import type { ExtractPropTypes, PropType } from 'vue'
import type card from './card.vue'

export type ShadowType = 'always' | 'hover' | 'none'

export const cardProps = {
  shadow: {
    type: String as PropType<ShadowType>,
    default: 'always',
  },
  suspension: {
    type: Boolean,
  },
  height: {
    type: String || Number,
  },
} as const

export type CardProps = ExtractPropTypes<typeof cardProps>

export type CardInstance = InstanceType<typeof card>
