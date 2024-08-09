<script setup lang="ts">
import 'test-ui'
import { ref } from 'vue'

const a = () => {
  asd.value = 456
  console.log(asd.value)
}

const asd = ref(123)
</script>

<template>
  <div>
    hallo,world
    <t-button @click="a" :msg="asd">asdasdasd</t-button>
  </div>
</template>
