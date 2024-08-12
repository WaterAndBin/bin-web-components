<script setup lang="ts">
import { ref } from 'vue'

const asd = ref(123)

const a = () => {
  asd.value++
  console.log(asd.value)
}
</script>

<template>
  <div>
    hallo,world123
    <t-button :msg="asd">asdasdasd</t-button>
    <button @click="a">测试</button>
  </div>
</template>
