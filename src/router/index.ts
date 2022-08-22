import { createRouter, createWebHistory } from "vue-router";
import { publicRoutes } from './publicRoutes'

// 创建路由
export const getRouter = () => {
  return createRouter({
    history: createWebHistory(),
    routes: publicRoutes,
  });
}
// 重置路由
export const resetRouter = () => {
  const newRouter = getRouter()
  // router.matcher = newRouter.matcher // reset router
}

export const router = getRouter()
