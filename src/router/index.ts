import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from '@/components/Layout/index.vue'

// 公开的路由,所有人都能访问
export const publicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    meta: { title: '首页', icon: 'user', notExpend: true },
    component: Layout,
    children: [
      {
        path: '',
        name: 'index-child',
        component: () => import('@/pages/test/t3.vue'),
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/login/login.vue'),
  },
  {
    path: "/test",
    name: 'test',
    meta: { title: '站点管理', icon: 'user' },
    redirect: '/test/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'test-index',
        meta: { title: '站点备案' },
        component: () => import('@/pages/test/index.vue'),
      },
      {
        path: 'index2',
        name: 'test-index2',
        meta: { title: '柜体方案配置' },
        component: () => import('@/pages/test/index2.vue'),
      }
    ]
  },
  {
    path: "/test1",
    name: 'test1',
    meta: { title: '公共页面2', icon: 'user' },
    redirect: '/test1/index',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'test2',
        meta: { title: '公共页面2-1', icon: 'user' },
        component: () => import('@/pages/test/index.vue'),
      },
      {
        path: 'index2',
        name: 'test3',
        meta: { title: '公共页面2-2', icon: 'user' },
        component: () => import('@/pages/test/index.vue'),
      }
    ]
  },
  {
    path: "/error",
    name: 'error',
    redirect: '/error/404',
    component: Layout,
    children: [
      {
        path: '404',
        name: 'error-404',
        component: () => import('@/pages/error/404.vue'),
      }
    ]
  }
];

// 私有路由,只对有权限的用户开放
export const privateRoutes: RouteRecordRaw[] = [
  {
    path: "/private",
    name: 'private',
    redirect: '/private/t1',
    component: Layout,
    children: [
      {
        path: 't1',
        name: 'private-t1',
        meta: { title: '权限页面1', icon: 'user' },
        component: () => import('@/pages/test/t1.vue'),
      }
    ]
  },
]

// 404
export const notMatchRoute: RouteRecordRaw = {
  path: "/:pathMatch(.*)",
  name: 'not-match',
  redirect: '/error/404',
}

export const router = createRouter({
  history: createWebHistory(),
  routes: publicRoutes,
});

export default router