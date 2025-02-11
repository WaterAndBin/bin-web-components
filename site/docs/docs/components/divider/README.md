# 分割线 Divider

就按钮。嗯，就是按钮。

<!-- @include: ./demo/basic.md -->
<!-- @include: ./demo/width.md -->
<!-- @include: ./demo/text.md -->
<!-- @include: ./demo/type.md -->
<!-- @include: ./demo/vertical.md -->

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
