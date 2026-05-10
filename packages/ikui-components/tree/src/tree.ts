import type { ExtractPropTypes, PropType } from 'vue'
import type Tree from './tree.vue'

export interface TreeNodeData {
  id: number | string
  label: string
  children?: TreeNodeData[]
  disabled?: boolean
  isLeaf?: boolean
  [key: string]: unknown
}

export type LoadNodeCallback = (data: TreeNodeData[]) => void

export type LoadNode = (node: TreeNodeData, resolve: LoadNodeCallback) => void

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
      isLeaf?: string
    }>,
    default: () => ({
      children: 'children',
      label: 'label',
      disabled: 'disabled',
      isLeaf: 'isLeaf',
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
  lazy: {
    type: Boolean,
    default: false,
  },
  load: {
    type: Function as PropType<LoadNode>,
  },
  filterNodeMethod: {
    type: Function as PropType<(value: string, data: TreeNodeData) => boolean>,
    default: null,
  },
  filterText: {
    type: String,
    default: '',
  },
} as const

export type TreeProps = ExtractPropTypes<typeof treeProps>

export type TreeInstance = InstanceType<typeof Tree>
