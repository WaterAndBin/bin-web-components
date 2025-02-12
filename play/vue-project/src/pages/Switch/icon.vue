<script setup lang="ts">
defineOptions({
  name: 'SwitchIcon'
})
</script>

<!-- #region switch -->
<template>
  <div class="box-default">
    <y-switch>
      <span slot="checkedIcon">X</span>
      <span slot="uncheckedIcon">√</span>
    </y-switch>
  </div>
</template>
<!-- #endregion switch -->
