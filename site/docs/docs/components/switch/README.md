# 开关 Switch

使用开关切换两种状态之间。

<!-- @include: ./demo/basic.md -->
<!-- @include: ./demo/size.md -->
<!-- @include: ./demo/open.md -->
<!-- @include: ./demo/disabled.md -->
<!-- @include: ./demo/color.md -->
<!-- @include: ./demo/text.md -->
<!-- @include: ./demo/icon.md -->
<!-- @include: ./demo/loading.md -->
<!-- @include: ./demo/before.md -->

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
