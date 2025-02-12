# 分割线 Divider

就按钮。嗯，就是按钮。

## 基础用法

<DividerBasic />

::: details 查看代码

::: code-group

<<< @/../../play\vue-project\src\pages\Divider\basic.vue#divider [vue]

```tsx [React]
开发中...
```

:::

## 宽度

<DividerWidth />

::: details 查看代码

::: code-group

<<< @/../../play\vue-project\src\pages\Divider\width.vue#divider [vue]

```tsx [React]
开发中...
```

:::

## 各种类型

<DividerType />

::: details 查看代码

::: code-group

<<< @/../../play\vue-project\src\pages\Divider\type.vue#divider [vue]

```tsx [React]
开发中...
```

:::

## API

### `<y-divider>` Props

| 名称        | 类型                                     | 默认值     | 说明         | 必传 |
| ----------- | ---------------------------------------- | ---------- | ------------ | ---- |
| width       | string                                   | 1px        | 边框的宽度   | N    |
| type        | `solid` \ `dashed` \ `dotted` \ `double` | solid      | Border的样式 | N    |
| direction   | `horizontal` \ `vertical`                | horizontal | 排序方式     | N    |
| orientation | `left` \ `right` \ `center`              | center     | 分割文字位置 | N    |
| className   | string                                   | -          | 自定义类名   | N    |
| style       | StyleValue                               | -          | 自定义样式   | N    |
| children    | VNode                                    | -          | slot插槽专用 | N    |

### `<y-button>` methods

| 方法名 | 描述           | 参数 | 返回值 |
| ------ | -------------- | ---- | ------ |
| click  | 点击按钮时触发 | -    | -      |
