<script setup lang="ts" name="ik-menu">
import { menuProps } from './prop'
import IkMenuItem from './menu-item.vue'
import IkMenuSubmenu from './submenu.vue'
const props = defineProps(menuProps)

const addLevel = (data, parentLevel = 0) => {
  return data.map((item) => {
    return {
      ...item,
      _level: parentLevel + 1,
      children: item.children ? addLevel(item.children || [], parentLevel + 1) : null,
    }
  })
}
const list = addLevel(props.items)
console.log(list, 'list')
</script>
<template>
  <div class="ik-menu">
    <template v-for="(item, index) in list" :key="index">
      <template v-if="!item.children">
        <ik-menu-item :current="item">{{ item.label }}</ik-menu-item>
      </template>
      <template v-if="item.children">
        <ik-menu-submenu :children="item.children" :current="item">{{ item.label }}</ik-menu-submenu>
      </template>
    </template>
  </div>
</template>
