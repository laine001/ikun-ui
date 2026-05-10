<template>
  <div class="ik-tree" :class="{ 'ik-tree--show-checkbox': showCheckbox }">
    <ul class="ik-tree__list">
      <TreeNode
        v-for="node in data"
        :key="node[nodeProps.id || 'id']"
        :node="node"
        :node-props="nodeProps"
        :default-expand="defaultExpandAll"
        :show-checkbox="showCheckbox"
        :expand-on-click-node="expandOnClickNode"
        :check-on-click-node="checkOnClickNode"
        :current-node-key="currentNodeKey"
        :checked-keys="checkedKeys"
        @toggle="onToggle"
        @select="onSelect"
        @check="onCheck"
      >
        <template #default="slotProps">
          <slot :node="slotProps.node" :data="slotProps.data" />
        </template>
      </TreeNode>
    </ul>
  </div>
</template>

<script setup lang="ts" name="IkTree">
import { ref, computed } from 'vue'
import TreeNode from './TreeNode.vue'
import { treeProps, type TreeNodeData } from './tree'

const props = defineProps(treeProps)
const emit = defineEmits<{
  'node-click': [data: TreeNodeData, node: TreeNodeData]
  'node-expand': [data: TreeNodeData, node: TreeNodeData]
  'node-check': [data: TreeNodeData, checked: boolean]
  'current-change': [data: TreeNodeData | null]
}>()

const nodeProps = computed(() => ({
  children: props.props?.children || 'children',
  label: props.props?.label || 'label',
  disabled: props.props?.disabled || 'disabled',
  id: 'id',
}))

const checkedKeys = ref<(string | number)[]>([])

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
  } else {
    const index = checkedKeys.value.indexOf(key)
    if (index > -1) {
      checkedKeys.value.splice(index, 1)
    }
  }
  emit('node-check', node, checked)
}

defineExpose({
  getCheckedKeys: () => checkedKeys.value,
  getCheckedNodes: () => {
    const nodes: TreeNodeData[] = []
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
  },
  setCurrentKey: (key: string | number) => {
    emit('current-change', findNodeByKey(props.data, key))
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
</script>
