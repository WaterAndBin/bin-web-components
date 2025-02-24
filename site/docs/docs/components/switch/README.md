# 开关 Switch

使用开关切换两种状态之间。

## 基础用法

::: demo
Switch/basic
:::

## 尺寸

::: demo
Switch/size
:::

## 默认开启

<SwitchOpen/>

::: details 查看代码

::: code-group

<<< @/../../play/vue-project/src/pages/Switch/open.vue#switch [vue]

```tsx [React]
开发中...
```

:::

## 禁用

<SwitchDisabled />

::: details 查看代码

::: code-group

<<< @/../../play/vue-project/src/pages/Switch/disabled.vue#switch [vue]

```tsx [React]
开发中...
```

:::

## 自定义颜色

<SwitchColor />

::: details 查看代码

::: code-group

<<< @/../../play/vue-project/src/pages/Switch/color.vue#switch [vue]

```tsx [React]
开发中...
```

:::

## 自定义文案

<SwitchText />

::: details 查看代码

::: code-group

<<< @/../../play/vue-project/src/pages/Switch/text.vue#switch [vue]

```tsx [React]
开发中...
```

:::

## 自定义图标

<SwitchIcon />

::: details 查看代码

::: code-group

<<< @/../../play/vue-project/src/pages/Switch/icon.vue#switch [vue]

```tsx [React]
开发中...
```

:::

## 加载

loading图标会跟着当前的开关背景颜色保持一致。

<SwitchLoading />

::: details 查看代码

::: code-group

<<< @/../../play/vue-project/src/pages/Switch/loading.vue#switch [vue]

```tsx [React]
开发中...
```

:::

## 切换拦截

<SwitchBefore />

::: details 查看代码

::: code-group

<<< @/../../play/vue-project/src/pages/Switch/before.vue#switch [vue]

```tsx [React]
开发中...
```

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
