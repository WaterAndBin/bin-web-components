<script setup lang="ts">
defineOptions({
  name: 'DividerType'
})
</script>

<!-- #region divider -->
<template>
  <div class="box-default">
    <div class="divider-demo">
      <span>这是一根很长、很长、非常的长，非常长的点状分割线</span>
      <y-divider type="dotted" width="2px"></y-divider>
      <span>这是一根很长、很长、非常的长，非常长的点状分割线</span>
      <y-divider type="double" width="4px"></y-divider>
      <span>这是一根很长、很长、非常的长，非常长的点状分割线</span>
      <y-divider type="dashed" width="2px"></y-divider>
    </div>
  </div>
</template>
<!-- #endregion divider -->
