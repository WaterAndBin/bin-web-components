<script setup lang="ts">
import { ref } from 'vue'
import { TButton } from 'test-ui'
const asd = ref(123)

const a = () => {
  asd.value++
  console.log(asd.value)
}
</script>

<template>
  <div>
    <t-button msg="123">asdasdasd</t-button>
    <!-- <n-button>naive-ui</n-button> -->
    <!-- <HelloWorld></HelloWorld> -->
    <!-- <button @click="a">测试</button> -->
  </div>
</template>
