import type { ExtractPropTypes, PropType } from 'vue'
import type space from './space.vue'

/**
 * 8 - 12 - 16 - 20
 */
export type SpaceSize = 'mini' | 'small' | 'default' | 'large'
export type SpaceDirection = 'wrap' | 'column'
export type SpaceJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'flex-start' | 'flex-end'

export const spaceProps = {
  size: {
    type: String as PropType<SpaceSize>,
    default: (): string => 'default',
  },
  direction: {
    type: String as PropType<SpaceDirection>,
    default: (): string => 'wrap',
  },
  wrap: {
    type: Boolean,
    default: (): boolean => false,
  },
  justify: {
    type: String as PropType<SpaceJustify>,
  },
} as const

export type SpaceProps = ExtractPropTypes<typeof spaceProps>

export type SpaceInstance = InstanceType<typeof space>
