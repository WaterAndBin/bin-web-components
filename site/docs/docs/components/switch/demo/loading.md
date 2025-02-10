## 加载

loading图标会跟着当前的开关背景颜色保持一致。

<div class="box-default">
  <y-switch loading />
  <y-switch loading :default-checked="true" />
  <y-switch loading checked-color="#F53F3F" unchecked-color="green" />
  <y-switch loading checked-color="#F53F3F" unchecked-color="green" :default-checked="true" />
</div>

::: details 查看代码

::: code-group

```vue [Vue]
<template>
  <y-switch loading />
  <y-switch loading :default-checked="true" />
  <y-switch loading checked-color="#F53F3F" unchecked-color="green" />
  <y-switch loading checked-color="#F53F3F" unchecked-color="green" :default-checked="true" />
</template>
```

```tsx [React]
开发中...
```

:::
