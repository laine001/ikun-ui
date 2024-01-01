import type { ExtractPropTypes } from 'vue'
import type skeleton from './skeleton.vue'

export const skeletonProps = {
  active: {
    type: Boolean,
    default: false,
  },
} as const

export type SkeletonProps = ExtractPropTypes<typeof skeletonProps>

export type SkeletonInstance = InstanceType<typeof skeleton>
