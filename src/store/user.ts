import { defineStore } from 'pinia'
import { ref } from 'vue'
import { KEY_NAME } from '../utils/constants'

interface IUserInfo {
  name: string // 用户昵称
  id: number // 用户id
  head: string // 用户头像
}
const doLogin = (data: any) => {
  return new Promise(resolve => {
    resolve({})
  })
}
const doLogout = () => {
  return new Promise(resolve => {
    resolve({})
  })
}
export const useUserStore = defineStore('user', () => {
  // 用户信息
  const userInfo = ref<IUserInfo>(JSON.parse(localStorage.getItem(KEY_NAME.USER_INFO) || '{}'))
  // 登录
  const login = (username: string, password: string) => {
    return new Promise<void>((resolve, reject) => {
      doLogin({ username, password }).then((res: any) => {
        localStorage.setItem(KEY_NAME.USER_INFO, res.data)
        localStorage.setItem(KEY_NAME.TOKEN, res.data.token)
        userInfo.value = res.data
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }
  // 退出登录
  const logout = () => {
    return new Promise<void>((resolve, reject) => {
      doLogout().then(() => {
        userInfo.value = {} as IUserInfo
        localStorage.removeItem(KEY_NAME.TOKEN)
        localStorage.removeItem(KEY_NAME.USER_INFO)
        // resetRouter()
        // todo 重置路由


        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }

  return {
    userInfo,
    login,
    logout
  }
})