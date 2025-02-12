<script setup lang="ts">
defineOptions({
  name: 'SwitchOpen'
})
</script>

<!-- #region switch -->
<template>
  <div class="box-default">
    <y-switch size="small" :default-checked="true" />
    <y-switch default-checked="true" />
    <y-switch size="large" :default-checked="true" />
  </div>
</template>
<!-- #endregion switch -->
