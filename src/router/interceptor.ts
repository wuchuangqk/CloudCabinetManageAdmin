import { RouteLocationNormalized, RouteLocationRaw } from "vue-router";
import nProgress from "nprogress";
import { getPageTitle } from "../utils";
import { CACHE_KEY } from "../utils/constants";
import router from './index'
import usePermissionStore from '@/store/permission'

let permissionStore: any
nProgress.configure({ showSpinner: false })
// 白名单
const whiteList = ['/test', '/auth-redirect', '/login']

const interceptor = (to: RouteLocationNormalized) => {
  // 开始显示进度条
  nProgress.start()
  // 设置页面标题
  document.title = getPageTitle(to.meta.title as string)
  // 检查是否有登录凭证
  const token = localStorage.getItem(CACHE_KEY.TOKEN)
  // console.log(token, to.path)
  // 未登录
  if (!token) {
    // 检查访问路径是否在白名单里
    if (whiteList.includes(to.path)) return true
    // 跳转到登录页面
    nProgress.done()
    return {
      path: '/login',
      query: {
        redirect: to.path
      }
    } as RouteLocationRaw
  }
  // 如果用户在已登录的情况下访问登录页面,则导航到首页
  // if (to.path === '/login') {
  //   nProgress.done()
  //   return { path: '/test' } as RouteLocationRaw
  // }

  // 检查是否有用户的权限信息
  if (!permissionStore) permissionStore = usePermissionStore()
  if (!permissionStore.isComplete) {
    permissionStore.setAppRoutes()
    // 刷新路由
    return to.fullPath
  }
};

// 全局路由前置拦截器
router.beforeEach(interceptor);
// 全局路由后置拦截器
router.afterEach(() => {
  nProgress.done()
});