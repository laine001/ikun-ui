import type { ExtractPropTypes } from 'vue'
import type empty from './empty'

export const props = {
  image: {
    type: String,
    default: '',
  },
} as const

export type EmptyProps = ExtractPropTypes<typeof props>
export type EmptyInstance = InstanceType<typeof empty>
