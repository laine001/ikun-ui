<template>
  <li class="ik-tree-node" :class="{ 'ik-tree-node--disabled': isDisabled }">
    <div
      class="ik-tree-node__content"
      :class="{
        'ik-tree-node__content--selected': isSelected,
        'ik-tree-node__content--expandable': hasChildren || lazy,
      }"
      @click="handleNodeClick"
    >
      <span v-if="hasChildren || lazy" class="ik-tree-node__icon" @click.stop="toggle">
        <svg v-if="loading" class="ik-tree-node__arrow ik-tree-node__loading" viewBox="0 0 1024 1024">
          <path
            d="M512 64a32 32 0 0132 32v128a32 32 0 01-64 0V96a32 32 0 0132-32zm0 704a32 32 0 0132 32v128a32 32 0 01-64 0V800a32 32 0 0132-32zm448-256a32 32 0 01-32 32H800a32 32 0 010-64h128a32 32 0 0132 32zm-704 0a32 32 0 01-32 32H96a32 32 0 010-64h128a32 32 0 0132 32zm618.7-374.7a32 32 0 010 45.2l-90.5 90.5a32 32 0 01-45.2-45.2l90.5-90.5a32 32 0 0145.2 0zM338.7 730.7a32 32 0 010 45.2l-90.5 90.5a32 32 0 01-45.2-45.2l90.5-90.5a32 32 0 0145.2 0zM906.7 866.7a32 32 0 01-45.2 0l-90.5-90.5a32 32 0 0145.2-45.2l90.5 90.5a32 32 0 010 45.2zM274.7 338.7a32 32 0 01-45.2 0l-90.5-90.5a32 32 0 0145.2-45.2l90.5 90.5a32 32 0 010 45.2z"
          />
        </svg>
        <svg v-else-if="expanded" class="ik-tree-node__arrow" viewBox="0 0 1024 1024">
          <path
            d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
          />
        </svg>
        <svg v-else class="ik-tree-node__arrow ik-tree-node__arrow--collapsed" viewBox="0 0 1024 1024">
          <path
            d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"
          />
        </svg>
      </span>
      <span v-else class="ik-tree-node__icon--leaf"></span>
      <input
        v-if="showCheckbox"
        type="checkbox"
        class="ik-tree-node__checkbox"
        :checked="isChecked"
        :indeterminate.prop="isIndeterminate"
        :disabled="isDisabled"
        @click.stop="handleCheck"
      />
      <span class="ik-tree-node__label">
        <slot :node="node" :data="node">
          {{ node[nodeProps.label] }}
        </slot>
      </span>
    </div>
    <transition name="ik-tree-node">
      <ul v-if="hasChildren && expanded" class="ik-tree-node__children">
        <TreeNode
          v-for="child in rawChildren"
          :key="child[nodeProps.id || 'id']"
          :node="child"
          :node-props="nodeProps"
          :default-expand="defaultExpand"
          :show-checkbox="showCheckbox"
          :expand-on-click-node="expandOnClickNode"
          :check-on-click-node="checkOnClickNode"
          :current-node-key="currentNodeKey"
          :checked-keys="checkedKeys"
          :lazy="lazy"
          :load="load"
          :indeterminate-keys="indeterminateKeys"
          @toggle="$emit('toggle', $event)"
          @select="$emit('select', $event)"
          @check="$emit('check', $event)"
          @load="$emit('load', $event)"
        >
          <template #default="slotProps">
            <slot :node="slotProps.node" :data="slotProps.data" />
          </template>
        </TreeNode>
      </ul>
    </transition>
  </li>
</template>

<script setup lang="ts" name="IkTreeNode">
import { ref, computed } from 'vue'
import type { TreeNodeData, LoadNode } from './tree'

const props = defineProps<{
  node: TreeNodeData
  nodeProps: {
    children: string
    label: string
    disabled: string
    id: string
    isLeaf: string
  }
  defaultExpand: boolean
  showCheckbox: boolean
  expandOnClickNode: boolean
  checkOnClickNode: boolean
  currentNodeKey: string | number | null
  checkedKeys: (string | number)[]
  indeterminateKeys: (string | number)[]
  lazy: boolean
  load?: LoadNode
}>()

const emit = defineEmits<{
  toggle: [node: TreeNodeData]
  select: [node: TreeNodeData]
  check: [node: TreeNodeData, checked: boolean]
  load: [node: TreeNodeData, children: TreeNodeData[]]
}>()

const expanded = ref(props.defaultExpand)
const loading = ref(false)
const loaded = ref(false)
const childrenData = ref<TreeNodeData[]>([])

const rawChildren = computed(() => {
  if (props.lazy && loaded.value) {
    return childrenData.value
  }
  const children = props.node[props.nodeProps.children]
  return Array.isArray(children) ? (children as TreeNodeData[]) : []
})

const hasChildren = computed(() => {
  if (props.lazy && !loaded.value) return true
  return rawChildren.value.length > 0
})

const isLeafNode = computed(() => {
  if (props.node[props.nodeProps.isLeaf] !== undefined) {
    return !!props.node[props.nodeProps.isLeaf]
  }
  return !hasChildren.value
})

const isSelected = computed(() => props.currentNodeKey === props.node[props.nodeProps.id || 'id'])

const isChecked = computed(() => props.checkedKeys.includes(props.node[props.nodeProps.id || 'id']))

const isIndeterminate = computed(() => props.indeterminateKeys.includes(props.node[props.nodeProps.id || 'id']))

const isDisabled = computed(() => !!props.node[props.nodeProps.disabled])

function toggle() {
  if (isLeafNode.value) return

  if (props.lazy && !loaded.value && !loading.value) {
    loadChildren()
    return
  }

  expanded.value = !expanded.value
  emit('toggle', props.node)
}

function loadChildren() {
  if (!props.load) return

  loading.value = true
  props.load(props.node, (data: TreeNodeData[]) => {
    childrenData.value = data
    loaded.value = true
    loading.value = false
    expanded.value = true
    emit('toggle', props.node)
    emit('load', props.node, data)
  })
}

function handleNodeClick() {
  if (isDisabled.value) return

  if (props.checkOnClickNode && props.showCheckbox) {
    handleCheck()
  } else if (props.expandOnClickNode) {
    toggle()
  }
  emit('select', props.node)
}

function handleCheck() {
  if (isDisabled.value) return
  const checked = !isChecked.value
  emit('check', props.node, checked)
}
</script>
