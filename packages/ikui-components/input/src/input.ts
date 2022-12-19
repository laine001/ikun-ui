export const InputProps = {
  modelValue: {
    type: String,
  },
  hasClear: {
    type: Boolean,
    default: (): boolean => false,
  },
  placeholder: {
    type: String,
    default: (): string => '请输入',
  },
}

export const Emits = {
  'update:modelValue': (value): boolean => {
    return typeof value === 'string' || typeof value === 'number'
  },
  change(value) {
    return typeof value
  },
}
