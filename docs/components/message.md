# 消息提示

## 基本使用

<div>
  <ik-button type="success" @click="openMessage">显示消息</ik-button>
</div>


::: details 点击展开

```html
<script setup>
  import { getCurrentInstance } from 'vue'
  const _global = getCurrentInstance()
  const openMessage = () => {
    _global?.appContext.config.globalProperties.$message('这是消息提示')
  }
</script>
<template>
  <ik-button type="success" @click="openMessage">显示消息</ik-button>
</template>
  
```
:::
<script setup>
  import { getCurrentInstance } from 'vue'
  const _global = getCurrentInstance()
  const openMessage = () => {
    _global?.appContext.config.globalProperties.$message('这是消息提示')
  }
</script>

## 消息类型

编写中...