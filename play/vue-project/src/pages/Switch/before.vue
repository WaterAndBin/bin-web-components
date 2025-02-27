<script setup lang="ts">
const changeFalseLoading = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return false
}

const changeLoading = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return true
}
</script>

<template>
  <div class="box-default">
    <y-switch :before-change="changeFalseLoading"></y-switch>
    <y-switch :before-change="changeLoading" checked-color="#F53F3F" unchecked-color="green" />
  </div>
</template>
