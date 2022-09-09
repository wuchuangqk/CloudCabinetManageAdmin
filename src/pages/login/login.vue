<template>
  <div>
    <el-button @click="login">登录</el-button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { CACHE_KEY } from '@/utils/constants'

const router = useRouter()
const login = () => {
  localStorage.setItem(CACHE_KEY.TOKEN, '123')
  router.push('/test')
}
</script>

<style lang="scss" scoped>
</style>