<template>
  <ul class="ik-tree">
    <TreeNode v-for="node in data" :key="node.id" :node="node" :default-expand="defaultExpand" @toggle="onToggle" />
  </ul>
</template>

<script setup lang="ts" name="IkTree">
import TreeNode from './TreeNode.vue'

defineProps({
  data: {
    type: Array,
    required: true,
  },
  defaultExpand: {
    type: Boolean,
    default: false,
  },
})

const emit = defineEmits(['toggle'])

function onToggle(node) {
  emit('toggle', node)
}
</script>
