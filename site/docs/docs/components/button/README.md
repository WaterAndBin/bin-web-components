# 按钮 Button

就按钮。嗯，就是按钮。

## 基础用法

::: demo 类型有三种：`primary `，`secondary `，`outline`，`text`。 尺寸有三种：`small`，`default`，`large`。
Button/basic
:::

## 禁用

::: demo 禁用按钮，需要`disabled`
Button/disabled
:::

## API

### `<y-button>` Props

| 名称      | 类型                                         | 默认值  | 说明         | 必传 |
| --------- | -------------------------------------------- | ------- | ------------ | ---- |
| size      | `small` \ `default` \ `large`                | default | 尺寸         | N    |
| type      | `primary` \ `secondary` \ `outline` \ `text` | primary | 类型         | N    |
| disabled  | boolean                                      | false   | 是否禁用     | N    |
| status    | `success` \ `warning` \ `danger`             | -       | 状态         | N    |
| className | string                                       | -       | 自定义类名   | N    |
| style     | StyleValue                                   | -       | 自定义样式   | N    |
| children  | VNode                                        | -       | slot插槽专用 | N    |

### `<y-button>` methods

| 方法名 | 描述           | 参数 | 返回值 |
| ------ | -------------- | ---- | ------ |
| click  | 点击按钮时触发 | -    | -      |