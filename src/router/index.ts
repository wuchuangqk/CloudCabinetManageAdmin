import {
  createRouter,
  createWebHistory,
  RouteLocationNormalized,
  RouteRecordRaw,
} from "vue-router";
import Layout from '@/components/Layout/index.vue'

// 公开的路由,所有人都能访问
export const publicRoutes: RouteRecordRaw[] = [
  {
    path: "/test",
    component: Layout,
    redirect: '/test/index',
    children: [
      {
        path: 'index',
        component: () => import('@/pages/test/index.vue'),
        name: 'test',
        meta: { title: '测试', icon: 'user' }
      }
    ]
  },
];


// 创建路由
export const getRouter = () => {
  return createRouter({
    history: createWebHistory(),
    routes: publicRoutes,
  });
}
// 重置路由
export const resetRouter = ()=> {
  const newRouter = getRouter()
  router.matcher = newRouter.matcher // reset router
}

export const router = getRouter()
