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
    component: () => import('@/pages/login/index.vue'),
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
        component: () => import('@/pages/offer/subject/index.vue'),
      },
      {
        path: 'index2',
        name: 'test-index2',
        meta: { title: '柜体方案配置' },
        component: () => import('@/pages/offer/subject/index.vue'),
      }
    ]
  },
  {
    path: "/offer",
    name: 'offer',
    meta: { title: '报价管理', icon: 'user' },
    redirect: '/offer/index',
    component: Layout,
    children: [
      {
        path: 'subject',
        name: 'offer-subject',
        meta: { title: '业务报价科目维护', icon: 'user' },
        component: () => import('@/pages/offer/subject/index.vue'),
      },
      {
        path: 'common',
        name: 'offer-common',
        meta: { title: '共配报价管理', icon: 'user' },
        component: () => import('@/pages/offer/common/index.vue'),
      }
    ]
  },
  {
    path: "/order",
    name: 'order',
    meta: { title: '云柜订单管理', icon: 'user' },
    redirect: '/order/index',
    component: Layout,
    children: [
      {
        path: 'send',
        name: 'order-send',
        meta: { title: '投柜订单管理', icon: 'user' },
        component: () => import('@/pages/order/send.vue'),
      },
      {
        path: 'temporary',
        name: 'order-temporary',
        meta: { title: '暂存订单管理', icon: 'user' },
        component: () => import('@/pages/order/temporary.vue'),
      },
      {
        path: 'ultraviolet',
        name: 'order-ultraviolet',
        meta: { title: '紫外灯消杀件', icon: 'user' },
        component: () => import('@/pages/order/ultraviolet.vue'),
      },
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