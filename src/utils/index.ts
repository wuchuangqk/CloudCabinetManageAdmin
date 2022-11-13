import { appName } from '../setting'

/**
 * 设置页面标题
 * @param pageTitle 路由配置里的title字段 
 * @returns 
 */
export const getPageTitle = (pageTitle: string) => {
  return pageTitle ? `${pageTitle} - ${appName}` : appName
}

/**
 * 读取assets下的图片
 * @param name 图片路径 如404.png或icon/home.png
 * @returns 
 */
export const loadImg = (imgPath: string) => {
  return new URL(`../assets/${imgPath}`, import.meta.url).href
}

/**
 * 格式化
 * @param arr 
 * @param value 
 * @returns 
 */
export const fmt = (arr: IOption[], value: number | string) => {
  const result = arr.find(v => v.value === value)
  return result ? result.label : ''
}

/**
 * 检查数组里有没有这个对象
 * @param arr 数组
 * @param target 对象
 * @param field id字段
 * @returns 
 */
export const includes = (arr: object[], target: object, field: string = 'id') => {
  const index = arr.findIndex(val => val[field] === target[field])
  return {
    truest: index !== -1,
    index
  }
}