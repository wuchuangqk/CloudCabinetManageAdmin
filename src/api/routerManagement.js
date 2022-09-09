import request from '@/utils/request'

/**
 * 路由列表查询
 * @param {object} data {telephone：String }
 */
export const queryRouteList = data => {
  return request({
    url: '/cas/route/queryRouteList',
    method: 'post',
    data: data
  })
}
/**
 * 查询路由点企业列表
 * @param {object} data {telephone：String }
 */
export const queryRouteCompanyList = data => {
  return request({
    url: '/cas/company/queryRouteCompanyList',
    method: 'post',
    data: data
  })
}

/**
 * 新增路由
 * @param {object} data {telephone：String }
 */
export const addRouter = data => {
  return request({
    url: '/cas/route/add',
    method: 'post',
    data: data
  })
}
/**
 * 删除路由
 * @param {object} data {telephone：String }
 */
export const deleteRouter = data => {
  return request({
    url: '/cas/route/delete',
    method: 'post',
    data: data
  })
}
/**
 * 修改路由
 * @param {object} data {telephone：String }
 */
export const updateRouter = data => {
  return request({
    url: '/cas/route/update',
    method: 'post',
    data: data
  })
}

export default {
    queryRouteList,
    queryRouteCompanyList,
    addRouter,
    deleteRouter,
    updateRouter
}