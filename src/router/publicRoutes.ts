import { RouteRecordRaw } from "vue-router";
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
  {
    path: "/test1",
    component: Layout,
    meta: { title: '测试1', icon: 'user' },
    redirect: '/test1/index',
    children: [
      {
        path: 'index',
        component: () => import('@/pages/test/index.vue'),
        name: 'test2',
        meta: { title: '测试1', icon: 'user' }
      },
      {
        path: 'index2',
        component: () => import('@/pages/test/index.vue'),
        name: 'test3',
        meta: { title: '测试2', icon: 'user' }
      }
    ]
  },
];