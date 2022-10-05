export type CheckboxValueType = string | number | boolean

export const checkboxProps = {
  label: {
    type: String
  },
  modelValue: {
    type: [Boolean, String, Number],
    default: ''
  },
  changeEvent: {
    type: Function,
    default: () => {}
  }
}

export const checkboxEmits = [
  'update:modelValue'
]
