export type OptionType = string | number

export interface SelectOptionType {
  label: OptionType
  value: OptionType
}

export const props = {
  modelValue: {
    type: String || Number,
    default: (): string => '',
  },
  option: {
    type: Array,
    default: (): Array<string | number | SelectOptionType> => [],
  },
} as const
