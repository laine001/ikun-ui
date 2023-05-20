import { InjectionKey, ExtractPropTypes } from 'vue'

export const tabProps = {
  type: {
    type: String,
    default: (): string => '',
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
