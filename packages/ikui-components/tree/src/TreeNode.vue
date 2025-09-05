<template>
  <li class="ik-tree-node">
    <div @click="toggle">
      <span v-if="hasChildren" class="ik-tree-arrow">{{ expanded ? '⬇' : '➡' }}</span>
      <span>{{ node.label }}</span>
    </div>
    <ul v-if="hasChildren && expanded">
      <TreeNode
        v-for="child in node.children"
        :key="child.id"
        :node="child"
        :default-expand="defaultExpand"
        @toggle="$emit('toggle', $event)"
      />
    </ul>
  </li>
</template>

<script setup lang="ts" name="IkTreeNode">
import { ref, computed } from 'vue'

const props = defineProps({
  node: { type: Object, required: true },
  defaultExpand: { type: Boolean, default: false },
})
const emit = defineEmits(['toggle'])

const expanded = ref(props.defaultExpand)
const hasChildren = computed(() => props.node.children && props.node.children.length > 0)

function toggle() {
  expanded.value = !expanded.value
  emit('toggle', props.node)
}
</script>

<style scoped>
.ik-tree-node {
  margin: 0.1em;
}

.ik-tree-arrow {
  margin-right: 0.2em;
}
</style>
