<template>
  <div>
    <el-button @click="login">登录</el-button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { KEY_NAME } from '@/utils/constants'

const router = useRouter()
const login = () => {
  localStorage.setItem(KEY_NAME.TOKEN, '123')
  router.push('/test')
}
</script>

<style lang="scss" scoped>
</style>