export const SwitchProps = {
  modelValue: {
    type: Boolean,
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
