import { defineStore } from 'pinia'
import {ref} from 'vue'

export const usePermissionStore = defineStore('permission', () => {
  const routes = ref([])
  const generateRoutes = (roles: string[]) => {
    return new Promise(resolve => {
      addRoutes.value = []
      // routes.value = constantRoutes.concat(routes.value)
      resolve([])
    })
  }

  // 动态追加的路由
  const addRoutes = ref([])

  return {
    routes,
    generateRoutes,
  }
})