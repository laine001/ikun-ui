<template>
  <li class="ik-tree-node" :class="{ 'ik-tree-node--disabled': isDisabled }">
    <div
      class="ik-tree-node__content"
      :class="{
        'ik-tree-node__content--selected': isSelected,
        'ik-tree-node__content--expandable': hasChildren,
      }"
      @click="handleNodeClick"
    >
      <span v-if="hasChildren" class="ik-tree-node__icon" @click.stop="toggle">
        <svg v-if="expanded" class="ik-tree-node__arrow" viewBox="0 0 1024 1024">
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
          v-for="child in node[nodeProps.children]"
          :key="child[nodeProps.id || 'id']"
          :node="child"
          :node-props="nodeProps"
          :default-expand="defaultExpand"
          :show-checkbox="showCheckbox"
          :expand-on-click-node="expandOnClickNode"
          :check-on-click-node="checkOnClickNode"
          :current-node-key="currentNodeKey"
          :checked-keys="checkedKeys"
          @toggle="$emit('toggle', $event)"
          @select="$emit('select', $event)"
          @check="$emit('check', $event, $event)"
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
import type { TreeNodeData } from './tree'

const props = defineProps<{
  node: TreeNodeData
  nodeProps: {
    children: string
    label: string
    disabled: string
    id: string
  }
  defaultExpand: boolean
  showCheckbox: boolean
  expandOnClickNode: boolean
  checkOnClickNode: boolean
  currentNodeKey: string | number | null
  checkedKeys: (string | number)[]
}>()

const emit = defineEmits<{
  toggle: [node: TreeNodeData]
  select: [node: TreeNodeData]
  check: [node: TreeNodeData, checked: boolean]
}>()

const expanded = ref(props.defaultExpand)

const hasChildren = computed(
  () =>
    props.node[props.nodeProps.children] &&
    Array.isArray(props.node[props.nodeProps.children]) &&
    props.node[props.nodeProps.children].length > 0
)

const isSelected = computed(() => props.currentNodeKey === props.node[props.nodeProps.id || 'id'])

const isChecked = computed(() => props.checkedKeys.includes(props.node[props.nodeProps.id || 'id']))

const isDisabled = computed(() => !!props.node[props.nodeProps.disabled])

function toggle() {
  if (!hasChildren.value) return
  expanded.value = !expanded.value
  emit('toggle', props.node)
}

function handleNodeClick() {
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
