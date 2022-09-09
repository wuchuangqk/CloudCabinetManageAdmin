<template>
  <div>
    <el-form ref="formRef" :model="formData">
      <el-form-item label="账号" prop="account">
        <el-input v-model="formData.account" />
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="formData.password" />
      </el-form-item>
    </el-form>
    <el-button @click="login">登录</el-button>
  </div>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { CACHE_KEY, LOGIN_TYPE, SYS_ID, REQ_SIGN } from '@/utils/constants'
import { doPost } from '@/utils/request'
import useUserStore from '@/store/user'

const router = useRouter()
const userStore = useUserStore()
const login = () => {
  // localStorage.setItem(CACHE_KEY.TOKEN, '123')
  // router.push('/test')
  localStorage.setItem(CACHE_KEY.SYS_ID, String(SYS_ID.OFFICIAL))
  localStorage.setItem(CACHE_KEY.REQ_SIGN, REQ_SIGN.OFFICIAL)
  doPost('/cgs/login', formData.value).then((res: any) => {
    console.log(res)
    localStorage.setItem(CACHE_KEY.USER_INFO, JSON.stringify(res.accountInfo))
    userStore.setUserInfo(res.accountInfo)
    localStorage.setItem(CACHE_KEY.TOKEN, res.authTokenInfo.access_token)
    router.push('/')
  })
}

const formData = ref({
  account: '18133786508',
  password: 'qk123456',
  loginType: LOGIN_TYPE.PASSWORD,
})
</script>

<style lang="scss" scoped>

</style>