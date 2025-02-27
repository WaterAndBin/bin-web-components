# 开关 Switch

使用开关切换两种状态之间。

## 基础用法

::: demo
Switch/basic
:::

## 尺寸

::: demo  尺寸有三种：`small`、`default`、`large`。
Switch/size
:::

## 默认开启

::: demo 需要默认开启则传入`:default-checked='true'`，该参数默认为`false`。
Switch/open
:::

## 禁用

::: demo 禁用只需要添加`disabled`
Switch/disabled
:::

## 自定义颜色

::: demo 自定义颜色可以通过`checked-color`和`unchecked-color`。
Switch/color
:::

## 自定义文案

::: demo 自定义文档需要通过`slot`去传文档。开启前的文案`slot='checked'`，开启后的文案`slot='unchecked'`。
Switch/text
:::

## 自定义图标

::: demo 自定义图标需要通过`slot`。开启前图标`slot='checkedIcon'`，开启后图标`slot='uncheckedIcon'`。
Switch/icon
:::

## 加载

::: demo 加载需要添加`loading`字段，默认是`false`。loading图标会跟着当前的开关背景颜色保持一致。
Switch/loading
:::

## 切换拦截

::: demo 切换拦截需要传入`before-change`方法。当为`true`的时候才进行切换，当为`false`的时候不会进行切换
Switch/before
:::

## API

### `<y-switch>` Props

| 名称            | 类型                          | 默认值  | 说明                   | 必传 |
| --------------- | ----------------------------- | ------- | ---------------------- | ---- |
| default-checked | boolean                       | false   | 默认选中状态           | N    |
| width           | string                        | 2.5rem  | 宽度                   | N    |
| size            | `small` \ `default` \ `large` | default | 尺寸大小               | N    |
| disabled        | boolean                       | false   | 是否禁用               | N    |
| unchecked-color | string                        | -       | 未选中时的开关背景颜色 | N    |
| checked-color   | string                        | -       | 选中时的开关背景颜色   | N    |
| loading         | boolean                       | false   | 是否加载               | N    |

### `<y-switch>` methods

| 方法名 | 描述                   | 参数 | 返回值 |
| ------ | ---------------------- | ---- | ------ |
| change | 按钮状态发生改变的时候 | -    | -      |
| update | 值发生改变的时候       | -    | -      |

### `<y-switch>` slots

| 插槽名        | 描述             | 参数 |
| ------------- | ---------------- | ---- |
| checkedIcon   | 开关打开时的图标 | -    |
| uncheckedIcon | 开关关闭时的图标 | -    |
| checked       | 开关打开时的文字 | -    |
| unchecked     | 开关关闭时的文字 | -    |
