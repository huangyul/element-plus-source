<script setup lang="ts">
import { ref } from 'vue'
import Notice from './Notice.vue'
defineProps<{ msg: string }>()

const count = ref(0)
</script>

<template>
  <h1>{{ msg }}</h1>
  <Notice type="success" message="111"></Notice>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
