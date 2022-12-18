import type { ExtractPropTypes } from 'vue'
import type avatar from './avatar'

export type AvatarSize = 'small' | 'default' | 'large'

export const props = {
  url: {
    type: String,
    default: (): string => 'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  },
  square: {
    type: Boolean,
    default: (): boolean => false,
  },
  size: {
    type: String,
    default: (): string => 'default' as AvatarSize,
  },
} as const

export type AvatarProps = ExtractPropTypes<typeof props>
export type AvatarInstance = InstanceType<typeof avatar>
