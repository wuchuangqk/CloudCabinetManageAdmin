import { CACHE_KEY } from '@/utils/constants'
import { defineStore } from 'pinia'
import { ref } from 'vue'

const useUserStore = defineStore('user', () => {
  // 是否折叠侧边栏
  const userInfo = ref(JSON.parse(localStorage.getItem(CACHE_KEY.USER_INFO) || '{}'))
  const setUserInfo = (value: any) => {
    userInfo.value = value
  }

  return {
    userInfo,
    setUserInfo,
  }
})

export default useUserStore