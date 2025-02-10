## 切换拦截

<div class="box-default">
  <y-switch :before-change="changeLoading"></y-switch>
  <y-switch :before-change="changeLoading" checked-color="#F53F3F" unchecked-color="green" />
</div>

::: details 查看代码

::: code-group

```vue [Vue]
<script setup lang="ts">
const changeLoading = async (): Promise<boolean> => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return true;
};
</script>

<template>
  <y-switch :before-change="changeLoading"></y-switch>
  <y-switch :before-change="changeLoading" checked-color="#F53F3F" unchecked-color="green" />
</template>
```

```tsx [React]
开发中...
```

:::

<script setup lang="ts">
const changeLoading = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return true
}
</script>
