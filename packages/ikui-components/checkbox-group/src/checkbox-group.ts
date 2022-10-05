import { ExtractPropTypes, InjectionKey, PropType } from "vue"

export type labelType = string | number | boolean

export const checkboxGroupProps = {
  modelValue: {
    // type: [String, Number, Boolean] as PropType<labelType>,
    type: Array,
    default: () => []
  },
  disabled: {
    type: Boolean,
    default: (): boolean => false
  },
  // changeEvent: {
  //   type: Function,
  //   default: () => {}
  // }
} as const

export const Emits = {
  'update:modelValue': (val) => {
    return typeof val === 'object'
  },
  change: (val) => typeof val === 'object'
}

// export const Emits = [
//   'update:modelValue',
//   'change'
// ]

type checkboxGroupPops = ExtractPropTypes<typeof checkboxGroupProps>

export const checkboxGroupCtxKey: InjectionKey<checkboxGroupPops> = Symbol('')
