# 输入框 Input

## 基本使用

::: demo
Input/clear
:::

## 输入框尺寸

::: demo
Input/size
:::

## 不携带删除

::: demo
Input/clear
:::

## 密码输入框

::: demo
Input/password
:::

## 携带前缀

::: demo
Input/prefix
:::

## 携带后缀

::: demo
Input/suffix
:::

## 加载

::: demo
Input/loading
:::

## 带字数统计

::: demo
Input/total
:::

## 字数限制

::: demo
Input/limit
:::

## 输入框状态

::: demo
Input/status
:::

## 禁用

::: demo
Input/disabled
:::

## 默认值

::: demo
Input/default
:::

## API

### `<y-divider>` Props

| 名称            | 类型                          | 默认值  | 说明             | 必传 |
| --------------- | ----------------------------- | ------- | ---------------- | ---- |
| allow-clear     | boolean                       | true    | 是否清空输入框   | N    |
| width           | string                        | 220px   | 输入框宽度       | N    |
| size            | `small` \ `default` \ `large` | default | 输入框大小       | N    |
| type            | `text` \ `password`           | text    | 输入框类型       | N    |
| placeholder     | string                        | 请输入  | 输入框提示信息   | N    |
| disabled        | boolean                       | false   | 是否禁用         | N    |
| error           | boolean                       | false   | 是否是错误状态   | N    |
| default-value   | string                        | -       | 默认值           | N    |
| max-length      | number                        | 10      | 最大输入长度     | N    |
| show-word-limit | boolean                       | false   | 是否显示字数限制 | N    |
| show-word-total | boolean                       | false   | 是否显示字数统计 | N    |
| loading         | boolean                       | false   | 是否加载中       | N    |
| class-name      | string                        | -       | 自定义类名       | N    |
| style           | CSSStyleDeclaration           | -       | 自定义样式       | N    |

### `<y-button>` methods

| 方法名 | 描述                                                                         | 参数 | 返回值 |
| ------ | ---------------------------------------------------------------------------- | ---- | ------ |
| click  | 当用户点击输入框时触发该事件。                                               | -    | -      |
| change | 当输入框的内容发生变化时触发该事件。                                         | -    | -      |
| focus  | 当输入框获得焦点时触发该事件。                                               | -    | -      |
| blur   | 当输入框失去焦点时触发该事件。                                               | -    | -      |
| input  | 当输入框内容发生变化时触发该事件（与 `change` 类似，但会在每次输入时触发）。 | -    | -      |
