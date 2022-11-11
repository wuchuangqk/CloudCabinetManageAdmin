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
        component: () => import('@/views/test/t3.vue'),
      },
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: "/station",
    name: 'station',
    meta: { title: '站点管理', icon: 'user' },
    redirect: '/station/record',
    component: Layout,
    children: [
      {
        path: 'record',
        name: 'station-record',
        meta: { title: '站点备案' },
        component: () => import('@/views/station/record/index.vue'),
      },
      {
        path: 'setting',
        name: 'station-setting',
        meta: { title: '柜体方案配置' },
        component: () => import('@/views/station/setting/index.vue'),
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
        component: () => import('@/views/offer/subject/index.vue'),
      },
      {
        path: 'common',
        name: 'offer-common',
        meta: { title: '共配报价管理', icon: 'user' },
        component: () => import('@/views/offer/common/index.vue'),
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
        component: () => import('@/views/order/send.vue'),
      },
      {
        path: 'temporary',
        name: 'order-temporary',
        meta: { title: '暂存订单管理', icon: 'user' },
        component: () => import('@/views/order/temporary.vue'),
      },
      {
        path: 'ultraviolet',
        name: 'order-ultraviolet',
        meta: { title: '紫外灯消杀件', icon: 'user' },
        component: () => import('@/views/order/ultraviolet.vue'),
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
        component: () => import('@/views/error/404.vue'),
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
        component: () => import('@/views/test/t1.vue'),
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