import { RouteLocationNormalized, RouteLocationRaw } from "vue-router";
import nProgress from "nprogress";
import { getPageTitle } from "../utils";
import { KEY_NAME } from "../utils/constants";
import { router } from './index'

nProgress.configure({ showSpinner: false })
// 白名单
const whiteList = ['/test', '/auth-redirect']

const interceptor = (
  to: RouteLocationNormalized,
  from: RouteLocationNormalized
) => {
  return true
  // 开始显示进度条
  nProgress.start()
  // 设置页面标题
  document.title = getPageTitle(to.meta.title as string)
  // 检查是否有登录凭证
  const token = localStorage.getItem(KEY_NAME.TOKEN)
  // 未登录
  if (!token) {
    // 检查访问路径是否在白名单里
    if (whiteList.includes(to.path)) return true
    // 跳转到登录页面
    return {
      path: '/test',
      query: {
        redirect: to.path
      }
    } as RouteLocationRaw
  }
  // 如果用户在已登录的情况下访问登录页面,则导航到首页
  if (to.path === '/login') {
    nProgress.done()
    return { path: '/' } as RouteLocationRaw
  }
  // 检查是否有用户的权限信息
  console.log('sfdsfdsf')

  // 取消导航
  // return false
  // 导航到指定路由(必须是RouteLocationRaw类型)
  /* const target: RouteLocationRaw = {
    path: '',
    replace: true, // 替换
  } */
  // 不返回或返回true:放行
  // return true
};

// 全局路由前置拦截器
router.beforeEach(interceptor);
// 全局路由后置拦截器
router.afterEach((to: RouteLocationNormalized, from: RouteLocationNormalized) => {
  nProgress.done()
});