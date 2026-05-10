---
description: 'IKUN-UI Tree component - Vue 3 tree view with expand/collapse, checkbox selection, custom node content, and disabled states. Supports hierarchical data display.'
---

# Tree Component

Tree component for displaying hierarchical data with expand/collapse, selection, and checkbox support.

## Basic Usage

:::demo

```vue
<template>
  <ik-tree :data="basicData" />
</template>

<script setup>
import { ref } from 'vue'

const basicData = ref([
  {
    label: 'Zhejiang Province',
    id: 1,
    children: [
      {
        label: 'Hangzhou City',
        id: 11,
        children: [
          { label: 'Yuhang District', id: 111 },
          { label: 'Xihu District', id: 112 },
        ],
      },
      {
        label: 'Ningbo City',
        id: 12,
        children: [{ label: 'Jiangbei District', id: 121 }],
      },
    ],
  },
])
</script>
```

:::

## Default Expand All

Use `default-expand-all` to expand all nodes by default.

:::demo

```vue
<template>
  <ik-tree :data="basicData" default-expand-all />
</template>

<script setup>
import { ref } from 'vue'

const basicData = ref([
  {
    label: 'Zhejiang Province',
    id: 1,
    children: [
      {
        label: 'Hangzhou City',
        id: 11,
        children: [
          { label: 'Yuhang District', id: 111 },
          { label: 'Xihu District', id: 112 },
        ],
      },
      {
        label: 'Ningbo City',
        id: 12,
        children: [{ label: 'Jiangbei District', id: 121 }],
      },
    ],
  },
])
</script>
```

:::

## With Checkbox

Use `show-checkbox` to enable checkbox selection.

:::demo

```vue
<template>
  <ik-tree ref="treeRef" :data="basicData" show-checkbox />
  <div style="margin-top: 16px">
    <ik-button @click="getChecked">Get Checked Nodes</ik-button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const treeRef = ref(null)

const basicData = ref([
  {
    label: 'Zhejiang Province',
    id: 1,
    children: [
      {
        label: 'Hangzhou City',
        id: 11,
        children: [
          { label: 'Yuhang District', id: 111 },
          { label: 'Xihu District', id: 112 },
        ],
      },
      {
        label: 'Ningbo City',
        id: 12,
        children: [{ label: 'Jiangbei District', id: 121 }],
      },
    ],
  },
])

const getChecked = () => {
  const checkedNodes = treeRef.value.getCheckedNodes()
  console.log('Checked nodes:', checkedNodes)
}
</script>
```

:::

## Disabled Nodes

Set `disabled: true` in node data to disable specific nodes.

:::demo

```vue
<template>
  <ik-tree :data="disabledData" show-checkbox />
</template>

<script setup>
import { ref } from 'vue'

const disabledData = ref([
  {
    label: 'Zhejiang Province',
    id: 1,
    children: [
      {
        label: 'Hangzhou City',
        id: 11,
        disabled: true,
        children: [
          { label: 'Yuhang District', id: 111 },
          { label: 'Xihu District', id: 112 },
        ],
      },
      {
        label: 'Ningbo City',
        id: 12,
        children: [{ label: 'Jiangbei District', id: 121 }],
      },
    ],
  },
])
</script>
```

:::

## Custom Node Content

Use scoped slots to customize node rendering.

:::demo

```vue
<template>
  <ik-tree :data="basicData">
    <template #default="{ node }">
      <span style="color: #1890ff">📍 {{ node.label }}</span>
    </template>
  </ik-tree>
</template>

<script setup>
import { ref } from 'vue'

const basicData = ref([
  {
    label: 'Zhejiang Province',
    id: 1,
    children: [
      {
        label: 'Hangzhou City',
        id: 11,
        children: [
          { label: 'Yuhang District', id: 111 },
          { label: 'Xihu District', id: 112 },
        ],
      },
      {
        label: 'Ningbo City',
        id: 12,
        children: [{ label: 'Jiangbei District', id: 121 }],
      },
    ],
  },
])
</script>
```

:::

## Custom Field Names

Use `props` to customize field names for label, children, and disabled.

:::demo

```vue
<template>
  <ik-tree :data="customData" :props="{ label: 'name', children: 'subs', disabled: 'unavailable' }" />
</template>

<script setup>
import { ref } from 'vue'

const customData = ref([
  {
    name: 'Zhejiang Province',
    id: 1,
    subs: [
      {
        name: 'Hangzhou City',
        id: 11,
        subs: [
          { name: 'Yuhang District', id: 111 },
          { name: 'Xihu District', id: 112 },
        ],
      },
    ],
  },
])
</script>
```

:::

## Tree Events

Listen to node-click, node-expand, and node-check events.

:::demo

```vue
<template>
  <ik-tree :data="basicData" show-checkbox @node-click="handleNodeClick" @node-check="handleNodeCheck" />
</template>

<script setup>
import { ref } from 'vue'

const basicData = ref([
  {
    label: 'Zhejiang Province',
    id: 1,
    children: [
      {
        label: 'Hangzhou City',
        id: 11,
        children: [
          { label: 'Yuhang District', id: 111 },
          { label: 'Xihu District', id: 112 },
        ],
      },
    ],
  },
])

const handleNodeClick = (node) => {
  console.log('Node clicked:', node)
}

const handleNodeCheck = (node, checked) => {
  console.log('Node checked:', node, 'Checked:', checked)
}
</script>
```

:::

## Lazy Loading

Use `lazy` and `load` to enable lazy loading of child nodes.

:::demo

```vue
<template>
  <ik-tree :data="lazyData" :load="loadNode" lazy show-checkbox />
</template>

<script setup>
import { ref } from 'vue'

const lazyData = ref([
  { id: 1, label: 'Lazy Node 1', isLeaf: false },
  { id: 2, label: 'Lazy Node 2', isLeaf: false },
  { id: 3, label: 'Leaf Node', isLeaf: true },
])

let id = 1000

const loadNode = (node, resolve) => {
  setTimeout(() => {
    const children = [
      { id: ++id, label: `Child ${id}-1`, isLeaf: false },
      { id: ++id, label: `Child ${id}-2`, isLeaf: true },
    ]
    resolve(children)
  }, 500)
}
</script>
```

:::

## Node Filtering

Use `filter-node-method` to filter tree nodes.

:::demo

```vue
<template>
  <ik-input v-model="filterText" placeholder="Filter nodes" style="margin-bottom: 16px" />
  <ik-tree ref="treeRef" :data="basicData" :filter-node-method="filterNode" />
</template>

<script setup>
import { ref, watch } from 'vue'

const treeRef = ref(null)
const filterText = ref('')

const basicData = ref([
  {
    label: 'Zhejiang Province',
    id: 1,
    children: [
      {
        label: 'Hangzhou City',
        id: 11,
        children: [
          { label: 'Yuhang District', id: 111 },
          { label: 'Xihu District', id: 112 },
        ],
      },
    ],
  },
])

watch(filterText, (val) => {
  treeRef.value.filter(val)
})

const filterNode = (value, data) => {
  if (!value) return true
  return data.label.includes(value)
}
</script>
```

:::

## Props

| Parameter            | Description                                                | Type               | Default                                                          |
| -------------------- | ---------------------------------------------------------- | ------------------ | ---------------------------------------------------------------- |
| data                 | Tree data                                                  | `TreeNodeData[]`   | -                                                                |
| default-expand-all   | Whether to expand all nodes by default                     | `boolean`          | `false`                                                          |
| props                | Configuration options for label, children, disabled fields | `object`           | `{ children: 'children', label: 'label', disabled: 'disabled', isLeaf: 'isLeaf' }` |
| show-checkbox        | Whether to show checkbox                                   | `boolean`          | `false`                                                          |
| current-node-key     | Currently selected node key                                | `string \| number` | `null`                                                           |
| expand-on-click-node | Whether to expand/collapse on node click                   | `boolean`          | `true`                                                           |
| check-on-click-node  | Whether to check on node click                             | `boolean`          | `false`                                                          |
| lazy                 | Whether to lazy load child nodes                           | `boolean`          | `false`                                                          |
| load                 | Load method for lazy loading                               | `LoadNode`         | -                                                                |
| filter-node-method   | Filter function for nodes                                  | `Function`         | -                                                                |

## Events

| Event Name     | Description                                    | Parameters                                       |
| -------------- | ---------------------------------------------- | ------------------------------------------------ |
| node-click     | Triggered when a node is clicked               | `(node: TreeNodeData)`                           |
| node-expand    | Triggered when a node is expanded/collapsed    | `(node: TreeNodeData)`                           |
| node-check     | Triggered when a checkbox is checked/unchecked | `(node: TreeNodeData, checked: boolean)`         |
| current-change | Triggered when current selected node changes   | `(node: TreeNodeData \| null)`                   |
| node-load      | Triggered when lazy loaded node finishes       | `(node: TreeNodeData, children: TreeNodeData[])` |

## Methods

| Method Name         | Description                          | Parameters                     |
| ------------------- | ------------------------------------ | ------------------------------ |
| getCheckedKeys      | Get keys of checked nodes            | -                              |
| getCheckedNodes     | Get checked nodes                    | -                              |
| setCheckedKeys      | Set checked nodes by keys            | `(keys: (string \| number)[])` |
| setCurrentKey       | Set current selected node by key     | `(key: string \| number)`      |
| filter              | Filter tree nodes by value           | `(value: string)`              |
| getHalfCheckedKeys  | Get keys of half-checked nodes       | -                              |
| getHalfCheckedNodes | Get half-checked nodes               | -                              |
