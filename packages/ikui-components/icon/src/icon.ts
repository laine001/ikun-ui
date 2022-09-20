export const iconProps = {
  name: {
    type: String,
  },
  size: {
    type: Number || String,
    default: (): number => 22
  },
  class: {
    type: String
  },
  color: {
    type: String
  }
} as const