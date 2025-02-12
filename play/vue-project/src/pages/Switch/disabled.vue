<script setup lang="ts">
defineOptions({
  name: 'SwitchDisabled'
})
</script>

<!-- #region switch -->
<template>
  <div class="box-default">
    <y-switch disabled size="small" />
    <y-switch disabled :default-checked="true" size="small" />
    <y-switch disabled />
    <y-switch disabled :default-checked="true" />
    <y-switch disabled size="large" />
    <y-switch disabled :default-checked="true" size="large" />
  </div>
</template>
<!-- #endregion switch -->
