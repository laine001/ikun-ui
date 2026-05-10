import type { ExtractPropTypes, PropType } from 'vue'
import type Tree from './tree.vue'

export interface TreeNodeData {
  id: number | string
  label: string
  children?: TreeNodeData[]
  disabled?: boolean
  [key: string]: unknown
}

export const treeProps = {
  data: {
    type: Array as PropType<TreeNodeData[]>,
    required: true,
  },
  defaultExpandAll: {
    type: Boolean,
    default: false,
  },
  props: {
    type: Object as PropType<{
      children?: string
      label?: string
      disabled?: string
    }>,
    default: () => ({
      children: 'children',
      label: 'label',
      disabled: 'disabled',
    }),
  },
  showCheckbox: {
    type: Boolean,
    default: false,
  },
  currentNodeKey: {
    type: [String, Number] as PropType<string | number>,
    default: null,
  },
  expandOnClickNode: {
    type: Boolean,
    default: true,
  },
  checkOnClickNode: {
    type: Boolean,
    default: false,
  },
} as const

export type TreeProps = ExtractPropTypes<typeof treeProps>

export type TreeInstance = InstanceType<typeof Tree>
