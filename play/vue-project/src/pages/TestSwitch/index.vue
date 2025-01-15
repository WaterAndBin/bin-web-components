<script setup lang="ts">
import { ref } from 'vue'

const test = ref(true)

const changeLoading = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return true
}
</script>

<template>
  <div>
    <div className="flex justify-center items-center">
      <y-switch :before-change="changeLoading"></y-switch>
      <y-switch :beforeChange="changeLoading"></y-switch>
    </div>
  </div>
</template>

<!-- <span> 设置 beforeChange 函数，函数的返回值将用于判断是否阻止切换：</span> -->
