import type Tag from './tag'

export const TagTypes = ['primary', 'success', 'warning', 'danger'] as const

export const props = {
  type: {
    type: String,
    values: TagTypes,
    default: 'primary',
  },
  closeable: {
    type: Boolean,
    default: false,
  },
  doubleColor: {
    type: Boolean,
    default: false,
  },
  ikun: {
    type: Boolean,
    default: false,
  },
} as const

export type TagInstance = InstanceType<typeof Tag>
