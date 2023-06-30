import type { PropType } from 'vue'
import type menu from './menu.vue'

export interface MenuItem {
  label?: string
  icon?: string
  children?: MenuItem[]
  isExpand?: boolean
  _level: number
  open?: boolean
  path?: string
}

export type MenuItems = MenuItem[]

export const menuProps = {
  items: {
    type: Array as PropType<MenuItems>,
  },
}

export const menuItemProps = {
  current: {
    type: Object as PropType<MenuItem>,
  },
}

export const submenuProps = {
  children: {
    type: Array as PropType<MenuItems>,
  },
  current: {
    type: Object as PropType<MenuItem>,
  },
  isExpand: {
    type: Boolean,
  },
}

export type MenuInstance = InstanceType<typeof menu>
