<script setup lang="ts">
defineOptions({
  name: 'ButtonDisabled'
})
</script>

<!-- #region button -->
<template>
  <div class="box-default">
    <div>
      <y-button size="small" disabled></y-button>
      <y-button size="default" disabled></y-button>
      <y-button size="large" disabled></y-button>
    </div>
    <div>
      <y-button size="small" type="outline" disabled></y-button>
      <y-button size="default" type="outline" disabled></y-button>
      <y-button size="large" type="outline" disabled></y-button>
    </div>
    <div>
      <y-button size="small" type="text" disabled></y-button>
      <y-button size="default" type="text" disabled></y-button>
      <y-button size="large" type="text" disabled></y-button>
    </div>
    <div>
      <y-button status="success" disabled></y-button>
      <y-button status="success" type="secondary" disabled></y-button>
      <y-button status="success" type="outline" disabled></y-button>
      <y-button status="success" type="text" disabled></y-button>
    </div>
    <div>
      <y-button status="warning" disabled></y-button>
      <y-button status="warning" type="secondary" disabled></y-button>
      <y-button status="warning" type="outline" disabled></y-button>
      <y-button status="warning" type="text" disabled></y-button>
    </div>
    <div>
      <y-button status="danger" disabled></y-button>
      <y-button status="danger" type="secondary" disabled></y-button>
      <y-button status="danger" type="outline" disabled></y-button>
      <y-button status="danger" type="text" disabled></y-button>
    </div>
  </div>
</template>
<!-- #endregion button -->
