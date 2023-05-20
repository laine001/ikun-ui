import { InjectionKey, ExtractPropTypes, PropType } from 'vue'

export type TabType = 'segmented' | 'card' | 'default'

export const tabProps = {
  type: {
    type: String as PropType<TabType>,
    default: 'default',
  },
} as const

export const tabItemProps = {
  // currentIndex: {
  //   type: Number,
  // },
  // activeName: {
  //   type: String || Number,
  // },
  label: {
    type: String || Number,
  },
}

export const tabEmits = {
  // 'update:modelValue': (value): boolean => !!value,
  change: (value): boolean => !!value,
} as const

type tabItemProps = ExtractPropTypes<typeof tabItemProps>
export const tabCtxKey: InjectionKey<tabItemProps> = Symbol('tab')
