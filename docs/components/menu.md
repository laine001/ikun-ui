# 导航菜单

为页面和功能提供导航的菜单列表

## 基础使用

支持直接传入字段渲染，默认根据 `children`字段渲染子菜单

:::demo

```vue
<script lang="ts" setup>
const menuList = [
  {
    label: '菜单一',
    key: '1',
    icon: 'home',
  },
  {
    label: '菜单二',
    key: '2',
    icon: 'user',
    type: 'group',
    isExpand: true,
    children: [
      {
        label: '菜单二-1',
        key: '2-1',
      },
      {
        label: '菜单二-2',
        key: '2-2',
      },
    ],
  },
  {
    label: '菜单三',
    key: '3',
    icon: 'files',
    children: [
      {
        label: '菜单三-1',
        key: '3-1',
      },
      {
        label: '菜单三-2',
        key: '3-2',
        children: [
          {
            label: '菜单三-2-1',
            key: '3-2-1',
          },
        ],
      },
      {
        label: '菜单三-3',
        key: '3-3',
      },
      {
        label: '菜单三-4',
        key: '3-4',
      },
    ],
  },
]
</script>
<template>
  <ik-menu :items="menuList" />
</template>
```

:::

<!-- <ik-menu>
  <ik-menu-item>首页</ik-menu-item>
  <ik-menu-item>设置</ik-menu-item>
  <ik-submenu-item>用户管理</ik-submenu-item>
</ik-menu> -->
