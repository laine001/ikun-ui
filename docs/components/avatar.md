# 头像 Avatar

## 基础使用

<ik-avatar /><ik-avatar square />

:::details 点击展开

```html
<ik-avatar /> <ik-avatar square />
```

:::

## 自定义链接

<ik-avatar url="https://avatars.githubusercontent.com/u/40457081?s=48&v=4" />
:::details 点击展开

```html
<ik-avatar url="https://avatars.githubusercontent.com/u/40457081?s=48&v=4" />
```

:::

## 大小可选

可选`small`、`default`、`large`，默认为`default`
<ik-avatar size="small" url="https://avatars.githubusercontent.com/u/40457081?s=48&v=4" />
<ik-avatar size="default" url="https://avatars.githubusercontent.com/u/40457081?s=48&v=4" />
<ik-avatar size="large" url="https://avatars.githubusercontent.com/u/40457081?s=48&v=4" />

:::details 点击展开

```html
<script lang="ts" setup>
  const avatarUrl = ref<string | undefind>('https://avatars.githubusercontent.com/u/40457081?s=48&v=4')
</script>
<template>
  <ik-avatar size="small" :url="avatarUrl" />
  <ik-avatar size="default" :url="avatarUrl" />
  <ik-avatar size="large" :url="avatarUrl" />
</template>
```

:::
