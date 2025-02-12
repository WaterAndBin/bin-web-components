<script setup lang="ts">
defineOptions({
  name: 'DividerWidth'
})
</script>

<!-- #region divider -->
<template>
  <div class="box-default">
    <div class="divider-demo">
      <span>这是一根宽度为 2px 的分割线，并且非常非常长长长长</span>
      <y-divider width="2px"></y-divider>
      <span>这是一根宽度为 4px 的分割线，并且非常非常长长长长</span>
      <y-divider width="4px"></y-divider>
      <span>这是一根宽度为 6px 的分割线，并且非常非常长长长长</span>
      <y-divider width="6px"></y-divider>
    </div>
  </div>
</template>
<!-- #endregion divider -->
