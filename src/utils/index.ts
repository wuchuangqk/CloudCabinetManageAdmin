import { appName } from '../setting'

/**
 * 设置页面标题
 * @param pageTitle 路由配置里的title字段 
 * @returns 
 */
export const getPageTitle = (pageTitle: string) => {
  return pageTitle ? `${pageTitle} - ${appName}` : appName
}