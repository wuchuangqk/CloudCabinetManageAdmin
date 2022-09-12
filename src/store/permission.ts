import { defineStore } from 'pinia'
import { ref } from 'vue'
import { router, publicRoutes, privateRoutes, notMatchRoute } from '@/router'
import { CACHE_KEY } from '@/utils/constants'
import { RouteRecordRaw } from 'vue-router'

const usePermissionStore = defineStore('permission', () => {
  // 应用里的路由
  const appRoutes = ref<RouteRecordRaw[]>(publicRoutes)
  // 动态添加路由
  const setAppRoutes = () => {
    // 根据权限来筛选私有路由
    const permission = JSON.parse(localStorage.getItem(CACHE_KEY.PERMISSION) || '[]')
    // 移除404
    router.removeRoute('not-match')
    privateRoutes.forEach((route: RouteRecordRaw) => {
      // 添加到vue-router
      router.addRoute(route)
      // 添加到左侧菜单
      appRoutes.value.push(route)
    })
    // 404追加到最后
    router.addRoute(notMatchRoute)
    // 标记权限路由配置完成
    isComplete.value = true
  }
  // 重置路由
  const resetAppRoutes = () => {
    localStorage.removeItem(CACHE_KEY.TOKEN)
    localStorage.removeItem(CACHE_KEY.USER_INFO)
    // 移除权限菜单
    privateRoutes.forEach((route: RouteRecordRaw) => {
      route.name && router.removeRoute(route.name)
    })
    // 重置左侧菜单
    appRoutes.value = publicRoutes
    isComplete.value = false
  }

  // 是否已应用了权限
  const isComplete = ref(false)

  return {
    appRoutes,
    setAppRoutes,
    resetAppRoutes,
    isComplete,
  }
})

export default usePermissionStore