import { PropType } from 'vue'

export type DrawerPosition = 'left' | 'right' | 'top' | 'bottom'

export const drawerProps = {
  visible: {
    type: Boolean,
  },
  title: {
    type: String,
  },
  position: {
    type: String as PropType<DrawerPosition>,
    default: 'left',
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
