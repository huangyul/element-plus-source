<template>
  <button ref="_ref">
    <slot></slot>
  </button>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const _ref = ref<HTMLButtonElement>()
</script>
