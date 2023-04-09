# 消息提示 Message

## 基本使用

直接传入文本可快速调用

<div>
  <ik-button @click="openMessage">显示消息</ik-button>
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
  <ik-button @click="openMessage">显示消息</ik-button>
</template>
```

:::

## 消息类型

message 有多个消息类型可用： `success`、`warning`、 `info`

<div class="demo-box">
  <ik-button type="success" @click="openMessage2">成功提示</ik-button>
  <ik-button type="warning" @click="openMessage3">警告提示</ik-button>
</div>

::: details 点击展开

```js
const openMessage2 = () => {
  _global?.appContext.config.globalProperties.$message.success('这是成功提示')
}
const openMessage3 = () => {
  _global?.appContext.config.globalProperties.$message.warning('这是警告提示')
}
```

:::

## 多个参数

<div>
  <ik-button type="primary" @click="openMessage4">提 示</ik-button>
</div>

::: details 点击展开

```js
const openMessage4 = () => {
  _global?.appContext.config.globalProperties.$message({
    type: 'info',
    message: '这是一个提示',
    duration: 5000,
  })
}
```

:::

## 属性

| 参数     |     说明     |  类型  |     可选值      | 默认值 |
| -------- | :----------: | :----: | :-------------: | -----: |
| type     |   提示类型   | string | success/warning |        |
| message  |   提示文字   | string |        -        |      / |
| duration | 提示展示时长 | number |        -        |      / |

<script setup>
  import { getCurrentInstance } from 'vue'
  const _global = getCurrentInstance()
  const openMessage = () => {
    _global?.appContext.config.globalProperties.$message('这是消息提示')
  }
  const openMessage2 = () => {
    _global?.appContext.config.globalProperties.$message.success('这是成功提示')
  }
  const openMessage3 = () => {
    _global?.appContext.config.globalProperties.$message.warning('这是警告提示')
  }
  const openMessage4 = () => {
    _global?.appContext.config.globalProperties.$message({
      type: 'info',
      message: '这是一个提示',
      duration: 5000
    })
  }
</script>
<style lang="scss">
  .demo-box {
    .ik-button {
      margin-right: 12px;
    }
  }
</style>
