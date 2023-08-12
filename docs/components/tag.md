# 标签 Tag

可进行标记 🐥 和分类 🏀 的小标签

## 基础使用

`type`指定`tag`的类型，默认为`primary`

:::demo

```vue
<template>
  <ik-space>
    <ik-tag>ikun</ik-tag>
    <ik-tag type="success">Tag 2</ik-tag>
    <ik-tag type="warning">Tag 3</ik-tag>
    <ik-tag type="danger">Tag 4</ik-tag>
  </ik-space>
</template>
```

:::

## 可关闭

`closeable`配置 tag 可删除

:::demo

```vue
<template>
  <div style="display: flex; gap: 10px">
    <ik-tag closeable>Tag 1</ik-tag>
    <ik-tag type="success" closeable>Tag 2</ik-tag>
    <ik-tag type="warning" closeable>Tag 3</ik-tag>
    <ik-tag type="danger" closeable>Tag 4</ik-tag>
  </div>
</template>
```

:::

## 双标签

`tag`支持双色标签

:::demo

```vue
<template>
  <ik-space>
    <ik-tag doubleColor>
      <template #left>ikun</template>
      <template #right>ui</template>
    </ik-tag>

    <ik-tag doubleColor ikun>
      <template #left>ikun</template>
      <template #right>hub</template>
    </ik-tag>
  </div>
</template>
```

:::
