---
description: 'IKUN-UI Tree component - Vue 3 tree view with expand/collapse, checkbox selection, custom node content, and disabled states. Supports hierarchical data display.'
---

# Tree Component

Tree component for displaying hierarchical data with expand/collapse, selection, and checkbox support.

## Basic Usage

:::demo
<ik-tree :data="basicData" />

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

<ik-tree :data="basicData" default-expand-all />

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

<ik-tree ref="treeRef" :data="basicData" show-checkbox />

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

<ik-tree :data="disabledData" show-checkbox />

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
<ik-tree :data="basicData">
<template #default="{ node }">
<span style="color: #1890ff">📍 {{ node.label }}</span>
</template>
</ik-tree>

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

## Props

| Parameter            | Description                                                | Type               | Default                                                                            |
| -------------------- | ---------------------------------------------------------- | ------------------ | ---------------------------------------------------------------------------------- |
| data                 | Tree data                                                  | `TreeNodeData[]`   | -                                                                                  |
| default-expand-all   | Whether to expand all nodes by default                     | `boolean`          | `false`                                                                            |
| props                | Configuration options for label, children, disabled fields | `object`           | `{ children: 'children', label: 'label', disabled: 'disabled', isLeaf: 'isLeaf' }` |
| show-checkbox        | Whether to show checkbox                                   | `boolean`          | `false`                                                                            |
| current-node-key     | Currently selected node key                                | `string \| number` | `null`                                                                             |
| expand-on-click-node | Whether to expand/collapse on node click                   | `boolean`          | `true`                                                                             |
| check-on-click-node  | Whether to check on node click                             | `boolean`          | `false`                                                                            |
| lazy                 | Whether to lazy load child nodes                           | `boolean`          | `false`                                                                            |
| load                 | Load method for lazy loading                               | `LoadNode`         | -                                                                                  |
| filter-node-method   | Filter function for nodes                                  | `Function`         | -                                                                                  |

## Events

| Event Name     | Description                                    | Parameters                                       |
| -------------- | ---------------------------------------------- | ------------------------------------------------ |
| node-click     | Triggered when a node is clicked               | `(node: TreeNodeData)`                           |
| node-expand    | Triggered when a node is expanded/collapsed    | `(node: TreeNodeData)`                           |
| node-check     | Triggered when a checkbox is checked/unchecked | `(node: TreeNodeData, checked: boolean)`         |
| current-change | Triggered when current selected node changes   | `(node: TreeNodeData \| null)`                   |
| node-load      | Triggered when lazy loaded node finishes       | `(node: TreeNodeData, children: TreeNodeData[])` |

## Methods

| Method Name         | Description                      | Parameters                     |
| ------------------- | -------------------------------- | ------------------------------ |
| getCheckedKeys      | Get keys of checked nodes        | -                              |
| getCheckedNodes     | Get checked nodes                | -                              |
| setCheckedKeys      | Set checked nodes by keys        | `(keys: (string \| number)[])` |
| setCurrentKey       | Set current selected node by key | `(key: string \| number)`      |
| filter              | Filter tree nodes by value       | `(value: string)`              |
| getHalfCheckedKeys  | Get keys of half-checked nodes   | -                              |
| getHalfCheckedNodes | Get half-checked nodes           | -                              |

<script setup lang="ts">
const basicData = [
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
]
const disabledData = [
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
]
</script>
