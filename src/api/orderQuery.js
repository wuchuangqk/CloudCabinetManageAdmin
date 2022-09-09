import request from '@/utils/request'

/**
 * 查询订单列表
 * @param {object} data {telephone：String }
 */
export const queryOrderList = data => {
  return request({
    url: '/cos/myOrder/queryOrderList',
    method: 'post',
    data: data
  })
}
/**
 * 查询企业订单列表
 * @param {object} data {telephone：String }
 */
export const queryCompanyOrderList = data => {
  return request({
    url: '/cos/myOrder/queryCompanyOrderList',
    method: 'post',
    data: data
  })
}
/**
 * 取消订单
 * @param {object} data {telephone：String }
 */
export const cancelOrder = data => {
  return request({
    url: '/cos/cancel/cancelOrder',
    method: 'post',
    data: data
  })
}

export default {
    queryOrderList,
    cancelOrder,
    queryCompanyOrderList
}
