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
    <!-- <t-button msg="123">
      <div>123123</div>
    </t-button> -->
    <!-- <ReactButton msg="123"></ReactButton> -->
    <y-button size="dasdasasfasfasf" class="test">
      <div>123123</div>
    </y-button>
    <!-- <n-button>naive-ui</n-button> -->
    <!-- <HelloWorld></HelloWorld> -->
    <!-- <button @click="a">测试</button> -->
  </div>
</template>

<style></style>
