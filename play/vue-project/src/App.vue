<script setup lang="ts">
import TestButton from './pages/TestButton/index.vue'
import TestInput from './pages/TestInput/index.vue'
import TestTag from './pages/TestTag/index.vue'

const asd = () => {
  // const type = typeof import('test-ui/lib')
}
</script>

<template>
  <div>
    <TestButton></TestButton>
    <TestInput></TestInput>
    <TestTag></TestTag>
  </div>
</template>

<style>
.test {
  background-color: red;
}
</style>
