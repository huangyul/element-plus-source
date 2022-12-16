<template>
  <el-tag closable>default</el-tag>
  <el-tag size="medium" closable>medium</el-tag>
  <el-tag size="small" closable>small</el-tag>
  <el-tag size="mini" closable>mini</el-tag>
  <div class="tag-group">
    <span class="tag-group__title">Dark</span>
    <el-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="dark"
    >
      {{ item.label }}
    </el-tag>
  </div>
  <div class="tag-group">
    <span class="tag-group__title">Plain</span>
    <el-tag
      v-for="item in items"
      :key="item.label"
      :type="item.type"
      effect="plain"
    >
      {{ item.label }}
    </el-tag>
  </div>
</template>

<style scoped>
.el-tag {
  margin: 6px;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  data() {
    return {
      items: [
        { type: '', label: 'Label 1' },
        { type: 'success', label: 'Label 2' },
        { type: 'info', label: 'Label 3' },
        { type: 'danger', label: 'Label 4' },
        { type: 'warning', label: 'Label 5' },
      ],
    }
  },
})
</script>
