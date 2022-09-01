<template>
  <div>
    <el-empty description="访问的页面不存在" :image="loadImg('404.png')" :image-size="300">
      <el-button type="primary" @click="router.push('/')">回到首页</el-button>
    </el-empty>
  </div>
</template>
<script setup lang="ts">
import { loadImg } from '@/utils';
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<style lang="scss" scoped>
</style>