# Backtop 回到顶部

## 基本使用

<ik-backtop />

<p>向下滑动显示</p>
<p>向下滑动显示</p>
<p>向下滑动显示</p>

::: details 点击展开

```html
<ik-backtop />
```

:::

## 圆形

<ik-backtop shape :bottom="180" />
::: details 点击展开
```vue
<ik-backtop shape :bottom="180" />
```
:::

## 自定义图标

<!-- <ik-backtop :right="160" icon="up2" /> -->
<ik-backtop :right="10" icon="thumbs-up" />
<ik-backtop :right="110" icon="up" />

::: details 点击展开

```vue
<ik-backtop icon="direction-up" />
<ik-backtop icon="icon-arrow-up-bold" />
```

:::

## attrs

| 参数   |      说明      |  类型  |     可选值     | 默认值 |
| ------ | :------------: | :----: | :------------: | -----: |
| icon   |   icon 名称    | string | `ik-icon name` |      - |
| bottom |  距离底部距离  | number |       -        |    120 |
| right  | 距离右侧部距离 | number |       -        |     60 |
