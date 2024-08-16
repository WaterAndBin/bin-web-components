<script setup lang="ts">
import { ref } from 'vue'
// import { TButton } from 'test-ui'
import { ReactButton } from 'test-ui/lib/Button/TButton'
const asd = ref(123)

const a = () => {
  asd.value++
  console.log(asd.value)
}
</script>

<template>
  <div>
    <!-- <t-button msg="123">
      <div>123123</div>
    </t-button> -->
    <ReactButton msg="123"></ReactButton>
    <!-- <n-button>naive-ui</n-button> -->
    <!-- <HelloWorld></HelloWorld> -->
    <!-- <button @click="a">测试</button> -->
  </div>
</template>
