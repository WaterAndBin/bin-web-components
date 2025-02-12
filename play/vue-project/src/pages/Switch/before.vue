<script lang="ts">
export default {
  name: 'SwitchBefore'
}
</script>

<!-- #region switch -->
<script setup lang="ts">
const changeLoading = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return true
}
</script>

<template>
  <div class="box-default">
    <y-switch :before-change="changeLoading"></y-switch>
    <y-switch :before-change="changeLoading" checked-color="#F53F3F" unchecked-color="green" />
  </div>
</template>
<!-- #endregion switch -->
