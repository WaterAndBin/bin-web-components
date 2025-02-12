<script setup lang="ts">
defineOptions({
  name: 'ButtonVue'
})
</script>

<template>
  <div className="p-2">
    <div>
      <span>主要：</span>
      <y-button size="small"></y-button>
      <y-button size="default"></y-button>
      <y-button size="large"></y-button>
      <y-button size="small" disabled></y-button>
      <y-button size="default" disabled></y-button>
      <y-button size="large" disabled></y-button>
    </div>
    <div>
      <span>次要：</span>
      <y-button size="small" type="secondary"></y-button>
      <y-button size="default" type="secondary"></y-button>
      <y-button size="large" type="secondary"></y-button>
      <y-button size="small" type="secondary" disabled></y-button>
      <y-button size="default" type="secondary" disabled></y-button>
      <y-button size="large" type="secondary" disabled></y-button>
    </div>
    <div>
      <span>线形：</span>
      <y-button size="small" type="outline"></y-button>
      <y-button size="default" type="outline"></y-button>
      <y-button size="large" type="outline"></y-button>
      <y-button size="small" type="outline" disabled></y-button>
      <y-button size="default" type="outline" disabled></y-button>
      <y-button size="large" type="outline" disabled></y-button>
    </div>
    <div>
      <span>文本：</span>
      <y-button size="small" type="text"></y-button>
      <y-button size="default" type="text"></y-button>
      <y-button size="large" type="text"></y-button>
      <y-button size="small" type="text" disabled></y-button>
      <y-button size="default" type="text" disabled></y-button>
      <y-button size="large" type="text" disabled></y-button>
    </div>
    <div>
      <span>成功：</span>
      <y-button status="success"></y-button>
      <y-button status="success" type="secondary"></y-button>
      <y-button status="success" type="outline"></y-button>
      <y-button status="success" type="text"></y-button>
      <y-button status="success" disabled></y-button>
      <y-button status="success" type="secondary" disabled></y-button>
      <y-button status="success" type="outline" disabled></y-button>
      <y-button status="success" type="text" disabled></y-button>
    </div>
    <div>
      <span>警告：</span>
      <y-button status="warning"></y-button>
      <y-button status="warning" type="secondary"></y-button>
      <y-button status="warning" type="outline"></y-button>
      <y-button status="warning" type="text"></y-button>
      <y-button status="warning" disabled></y-button>
      <y-button status="warning" type="secondary" disabled></y-button>
      <y-button status="warning" type="outline" disabled></y-button>
      <y-button status="warning" type="text" disabled></y-button>
    </div>
    <div>
      <span>错误：</span>
      <y-button status="danger"></y-button>
      <y-button status="danger" type="secondary"></y-button>
      <y-button status="danger" type="outline"></y-button>
      <y-button status="danger" type="text"></y-button>
      <y-button status="danger" disabled></y-button>
      <y-button status="danger" type="secondary" disabled></y-button>
      <y-button status="danger" type="outline" disabled></y-button>
      <y-button status="danger" type="text" disabled></y-button>
    </div>
  </div>
</template>
