# 按钮 Button

按钮用于触发一个操作 🏀

## 普通按钮

`type`设置按钮类型，`shape`属性为圆角按钮

:::demo

```vue
<template>
  <ik-space wrap="wrap">
    <ik-button>普通按钮</ik-button>
    <ik-button type="primary">主要按钮</ik-button>
    <ik-button type="success">成功按钮</ik-button>
    <ik-button type="warning">警告按钮</ik-button>
    <ik-button type="danger">危险按钮</ik-button>
    <ik-button round>普通按钮</ik-button>
    <ik-button type="primary" round>主要按钮</ik-button>
    <ik-button type="success" round>成功按钮</ik-button>
    <ik-button type="warning" round>警告按钮</ik-button>
    <ik-button type="danger" round>危险按钮</ik-button>
  </ik-space>
</template>
```

:::

## 朴素按钮

通过 `plain` 属性将按钮设置为朴素按钮，朴素按钮的文字为按钮颜色，背景为白色。

:::demo

```vue
<template>
  <ik-space wrap="wrap">
    <ik-button type="primary" plain>朴素按钮</ik-button>
    <ik-button type="success" plain>朴素按钮</ik-button>
    <ik-button type="warning" plain round>朴素按钮</ik-button>
    <ik-button type="danger" plain round>朴素按钮</ik-button>
  </ik-space>
</template>
```

:::

## 禁用

`disabled`属性可直接禁用按钮

:::demo

```vue
<template>
  <ik-space wrap="wrap">
    <ik-button disabled>普通按钮</ik-button>
    <ik-button type="primary" disabled>主要按钮</ik-button>
    <ik-button type="success" disabled>成功按钮</ik-button>
    <ik-button type="warning" disabled>警告按钮</ik-button>
    <ik-button type="danger" disabled>危险按钮</ik-button>
  </ik-space>
</template>
```

:::

## 带图标

`icon`可设置图标，默认放置文字前面。内部也接受`slot`

:::demo

```vue
<template>
  <ik-space>
    <ik-button icon="add">按钮</ik-button>
    <ik-button>
      <ik-icon name="user" />
      按钮
    </ik-button>
    <ik-button>
      按钮
      <ik-icon name="main" />
    </ik-button>

    <ik-button ikun></ik-button>
  </ik-space>
</template>
```

:::

## 不同大小

`size`可设置按钮大小

:::demo

```vue
<template>
  <ik-space>
    <ik-button size="small">普通按钮</ik-button>
    <ik-button type="primary" size="small">主要按钮</ik-button>
  </ik-space>
  <br />
  <br />
  <ik-space>
    <ik-button>普通按钮</ik-button>
    <ik-button type="primary">主要按钮</ik-button>
  </ik-space>
  <br />
  <br />
  <ik-space>
    <ik-button size="large">普通按钮</ik-button>
    <ik-button type="primary" size="large">主要按钮</ik-button>
  </ik-space>
</template>
```

:::

## 加载中按钮

:::demo

```vue
<template>
  <ik-space>
    <ik-button loading>加载中</ik-button>
    <ik-button type="primary" loading>请稍后</ik-button>
  </ik-space>
</template>
```

:::

## Props

| 参数    |    说明    |  类型   |                 可选值                 |    默认值 |
| ------- | :--------: | :-----: | :------------------------------------: | --------: |
| type    |  按钮类型  | string  | `primary` `warning` `success` `danger` |         - |
| round   |  圆形按钮  | boolean |               `Boolean`                |   `false` |
| plain   |  朴素按钮  | boolean |               `Boolean`                |   `false` |
| size    |  按钮大小  | string  |       `small` `default` `large`        | `default` |
| loading | 是否加载中 | boolean |               `Boolean`                |   `false` |

## Events

| 参数  |    说明    |     返回参数      | 默认值 |
| ----- | :--------: | :---------------: | -----: |
| click | click 事件 | `(): Event => {}` |      - |

<style lang="scss">
  .flex {
    .ik-button {
      margin-right: 12px;
    }
  }
</style>
