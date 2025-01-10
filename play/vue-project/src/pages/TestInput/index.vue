<script setup lang="ts">
import { ref } from 'vue'

const a = ref(123123)
</script>

<template>
  <y-input v-model="a"></y-input>
</template>
