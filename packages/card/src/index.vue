<template>
  <div class="my-card" :class="`my-card-shadow-${shadow}`">
    <div v-if="$slots.header || header" class="my-card-header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="my-card-content" :style="bodyStyle">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ElCard',
  props: {
    header: {
      type: String,
      default: '',
    },
    bodyStyle: {
      type: Object,
      default() {
        return {}
      },
    },
    shadow: {
      type: String,
      default: 'always',
      validator(val: string) {
        return ['always', 'hover', 'never'].includes(val)
      },
    },
  },
})
</script>

<style scoped>
.my-card {
  border: 1px solid #e4e7ed;
  color: #303133;
  transition: all ease 0.25s;
}
.my-card-header {
  border-bottom: 1px solid #e4e7ed;
  padding: 18px 20px;
}
.my-card-content {
  padding: 20px;
}
.my-card-shadow-always {
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
}
.my-card-shadow-hover:hover {
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.12);
}
</style>
