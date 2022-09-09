import request from '@/utils/request'

/**
 * 待支付列表
 */

export const queryUnpaidOrderList = data => {
  return request({
    url: '/cos/pay/queryUnpaidOrderList',
    method: 'post',
    data: data
  })
}

export default {
  queryUnpaidOrderList
}
