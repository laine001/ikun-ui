<template>
  <div class="ik-tree" :class="{ 'ik-tree--show-checkbox': showCheckbox }">
    <ul class="ik-tree__list">
      <TreeNode
        v-for="node in filteredData"
        :key="node[nodeProps.id || 'id']"
        :node="node"
        :node-props="nodeProps"
        :default-expand="defaultExpandAll"
        :show-checkbox="showCheckbox"
        :expand-on-click-node="expandOnClickNode"
        :check-on-click-node="checkOnClickNode"
        :current-node-key="currentNodeKey"
        :checked-keys="checkedKeys"
        :indeterminate-keys="indeterminateKeys"
        :lazy="lazy"
        :load="load"
        @toggle="onToggle"
        @select="onSelect"
        @check="onCheck"
        @load="onLoad"
      >
        <template #default="slotProps">
          <slot :node="slotProps.node" :data="slotProps.data" />
        </template>
      </TreeNode>
    </ul>
  </div>
</template>

<script setup lang="ts" name="IkTree">
import { ref, computed, watch } from 'vue'
import TreeNode from './TreeNode.vue'
import { treeProps, type TreeNodeData } from './tree'

const props = defineProps(treeProps)
const emit = defineEmits<{
  'node-click': [data: TreeNodeData, node: TreeNodeData]
  'node-expand': [data: TreeNodeData, node: TreeNodeData]
  'node-check': [data: TreeNodeData, checked: boolean]
  'current-change': [data: TreeNodeData | null]
  'node-load': [node: TreeNodeData, children: TreeNodeData[]]
}>()

const nodeProps = computed(() => ({
  children: props.props?.children || 'children',
  label: props.props?.label || 'label',
  disabled: props.props?.disabled || 'disabled',
  isLeaf: props.props?.isLeaf || 'isLeaf',
  id: 'id',
}))

const checkedKeys = ref<(string | number)[]>([])
const indeterminateKeys = ref<(string | number)[]>([])

const filteredData = computed(() => {
  if (!props.data || !Array.isArray(props.data)) return []
  if (!props.filterNodeMethod) return props.data
  return filterTreeData(props.data)
})

function filterTreeData(data: TreeNodeData[]): TreeNodeData[] {
  return data.reduce((result: TreeNodeData[], node) => {
    const matchesFilter = props.filterNodeMethod!(props.filterText || '', node)
    const children = node[nodeProps.value.children]
    const filteredChildren = children && Array.isArray(children) ? filterTreeData(children as TreeNodeData[]) : []

    if (matchesFilter || filteredChildren.length > 0) {
      result.push({
        ...node,
        [nodeProps.value.children]: filteredChildren.length > 0 ? filteredChildren : node[nodeProps.value.children],
      })
    }
    return result
  }, [])
}

function updateIndeterminateState() {
  indeterminateKeys.value = []
  if (props.data && Array.isArray(props.data)) {
    calculateIndeterminate(props.data)
  }
}

function calculateIndeterminate(data: TreeNodeData[]) {
  data.forEach((node) => {
    const key = node[nodeProps.value.id || 'id']
    const children = node[nodeProps.value.children]
    if (children && Array.isArray(children) && children.length > 0) {
      calculateIndeterminate(children as TreeNodeData[])

      const childKeys = getAllChildKeys(children as TreeNodeData[])
      const checkedCount = childKeys.filter((k) => checkedKeys.value.includes(k)).length

      if (checkedCount > 0 && checkedCount < childKeys.length) {
        if (!indeterminateKeys.value.includes(key)) {
          indeterminateKeys.value.push(key)
        }
      } else {
        const index = indeterminateKeys.value.indexOf(key)
        if (index > -1) {
          indeterminateKeys.value.splice(index, 1)
        }
      }
    }
  })
}

function getAllChildKeys(data: TreeNodeData[]): (string | number)[] {
  const keys: (string | number)[] = []
  data.forEach((node) => {
    const key = node[nodeProps.value.id || 'id']
    keys.push(key)
    const children = node[nodeProps.value.children]
    if (children && Array.isArray(children)) {
      keys.push(...getAllChildKeys(children as TreeNodeData[]))
    }
  })
  return keys
}

function onToggle(node: TreeNodeData) {
  emit('node-expand', node, node)
}

function onSelect(node: TreeNodeData) {
  emit('node-click', node, node)
  emit('current-change', node)
}

function onCheck(node: TreeNodeData, checked: boolean) {
  const key = node[nodeProps.value.id || 'id']

  if (checked) {
    if (!checkedKeys.value.includes(key)) {
      checkedKeys.value.push(key)
    }
    const children = node[nodeProps.value.children]
    if (children && Array.isArray(children)) {
      checkAllChildren(children as TreeNodeData[], true)
    }
  } else {
    const index = checkedKeys.value.indexOf(key)
    if (index > -1) {
      checkedKeys.value.splice(index, 1)
    }
    const children = node[nodeProps.value.children]
    if (children && Array.isArray(children)) {
      checkAllChildren(children as TreeNodeData[], false)
    }
  }

  updateIndeterminateState()
  emit('node-check', node, checked)
}

function checkAllChildren(data: TreeNodeData[], checked: boolean) {
  data.forEach((node) => {
    const key = node[nodeProps.value.id || 'id']
    if (checked) {
      if (!checkedKeys.value.includes(key)) {
        checkedKeys.value.push(key)
      }
    } else {
      const index = checkedKeys.value.indexOf(key)
      if (index > -1) {
        checkedKeys.value.splice(index, 1)
      }
    }
    const children = node[nodeProps.value.children]
    if (children && Array.isArray(children)) {
      checkAllChildren(children as TreeNodeData[], checked)
    }
  })
}

function onLoad(node: TreeNodeData, children: TreeNodeData[]) {
  emit('node-load', node, children)
}

function filterNode(value: string) {
  if (!props.filterNodeMethod) return
  emit('update:filterText', value)
}

defineExpose({
  getCheckedKeys: () => checkedKeys.value,
  getCheckedNodes: () => {
    const nodes: TreeNodeData[] = []
    if (!props.data || !Array.isArray(props.data)) return nodes
    const collectChecked = (data: TreeNodeData[]) => {
      data.forEach((node) => {
        const key = node[nodeProps.value.id || 'id']
        if (checkedKeys.value.includes(key)) {
          nodes.push(node)
        }
        const children = node[nodeProps.value.children]
        if (children && Array.isArray(children)) {
          collectChecked(children as TreeNodeData[])
        }
      })
    }
    collectChecked(props.data)
    return nodes
  },
  setCheckedKeys: (keys: (string | number)[]) => {
    checkedKeys.value = keys
    updateIndeterminateState()
  },
  setCurrentKey: (key: string | number) => {
    emit('current-change', findNodeByKey(props.data, key))
  },
  filter: filterNode,
  getHalfCheckedKeys: () => indeterminateKeys.value,
  getHalfCheckedNodes: () => {
    const nodes: TreeNodeData[] = []
    indeterminateKeys.value.forEach((key) => {
      const node = findNodeByKey(props.data, key)
      if (node) nodes.push(node)
    })
    return nodes
  },
})

function findNodeByKey(data: TreeNodeData[], key: string | number): TreeNodeData | null {
  for (const node of data) {
    if (node[nodeProps.value.id || 'id'] === key) {
      return node
    }
    const children = node[nodeProps.value.children]
    if (children && Array.isArray(children)) {
      const found = findNodeByKey(children as TreeNodeData[], key)
      if (found) return found
    }
  }
  return null
}

watch(
  () => props.currentNodeKey,
  () => {
    updateIndeterminateState()
  },
  { immediate: true }
)
</script>
