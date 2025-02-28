# 分割线 Divider

就按钮。嗯，就是按钮。

## 基础用法

::: demo 
Divider/basic
:::

## 带文字的分割线（Vue与React暂时用不了！）

::: demo 可以通过`orientation`去调整文字的位置。
Divider/text
:::

## 宽度

::: demo 通过`width`字段可以去设置分割线的宽度。
Divider/width
:::

## 各种类型

::: demo 通过`type`可以去设置分割线的类型，有`solid`、`dashed`、`dotted`、`double`。
Divider/type
:::

## 竖形分割线

::: demo 通过`direction`可以去设置分割线为竖形。
Divider/vertical
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

### `<y-button>` methods

| 方法名 | 描述           | 参数 | 返回值 |
| ------ | -------------- | ---- | ------ |
| click  | 点击按钮时触发 | -    | -      |
