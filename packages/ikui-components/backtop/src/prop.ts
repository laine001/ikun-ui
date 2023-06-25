import type { ExtractPropTypes } from 'vue'
import type backtop from './backtop'

export const props = {
  icon: {
    type: String,
    default: (): string => 'arrow-up',
  },
  shape: {
    type: Boolean,
  },
  bottom: {
    type: Number,
  },
  right: {
    type: Number,
    default: (): number => 60,
  },
} as const

export type BacktopProps = ExtractPropTypes<typeof props>
export type BacktopInstance = InstanceType<typeof backtop>
