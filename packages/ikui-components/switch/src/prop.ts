export const SwitchProps = {
  defaultValue: {
    type: Boolean,
  },
  modelValue: {
    type: Boolean,
  },
  trueText: {
    type: String,
  },
  falseText: {
    type: String,
  },
  style: {
    type: Object,
  },
  square: {
    type: Boolean,
    default: false,
  },
}

export const emits = {
  'update:modelValue': (value): boolean => {
    return !!value
  },
  change(value) {
    return typeof value
  },
} as const
