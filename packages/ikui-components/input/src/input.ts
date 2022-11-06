export const InputProps = {
  modelValue: {
    type: String
  },
  hasClear: {
    type: Boolean
  }
}


export const Emits = {
  'update:modelValue': (value): boolean => {
    return typeof value === 'string' || typeof value === 'number'
  },
  'change' (value) {
    return typeof value
  } 
}
