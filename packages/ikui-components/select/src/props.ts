export type OptionType = string | number

export interface SelectOptionType {
  label: OptionType
  value: OptionType
}

export const selectProps = {
  modelValue: {
    type: String || Number,
    default: (): string => '',
  },
  filterOn: {
    type: Boolean,
    default: (): boolean => false,
  },
  option: {
    type: Array,
    default: (): Array<string | number | SelectOptionType> => [],
  },
} as const

export const selectEmits = {
  'update:modelValue': (value): boolean => !!value,
  change: (value): boolean => !!value,
} as const
