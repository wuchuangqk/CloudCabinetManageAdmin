<template>
  <div>
    sdfsdfsdfs
    <div>
    </div>
    <el-button @click="router.push('/ee')">测试</el-button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
const current = ref(1)
const items = [
  {label: '张三', value: 1},
  {label: '李四', value: 2},
  {label: '王五', value: 3},
]
const router = useRouter()
</script>

<style lang="scss" scoped>
</style>