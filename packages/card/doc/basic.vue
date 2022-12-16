<template>
  <h6>基础使用</h6>
  <el-card>
    <div>body</div>
  </el-card>
  <h6>带头部的</h6>
  <el-card header="title" />
  <el-card>
    <template #header>title2</template>
  </el-card>
  <el-card header="title">
    <template #header>title2</template>
  </el-card>
  <h6>三种触发阴影的方式</h6>
  <div class="card-box">
    <div class="card-item">
      <el-card shadow="always">card1</el-card>
    </div>
    <div class="card-item">
      <el-card shadow="hover">card2</el-card>
    </div>
    <div class="card-item">
      <el-card shadow="never">card3</el-card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped>
.card-box {
  display: flex;
}
.card-item {
  flex: 1;
}
.card-item:not(:last-child) {
  margin-right: 10px;
}
</style>
