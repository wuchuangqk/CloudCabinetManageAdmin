import request from '@/utils/request'

/**
 * 查询支付配置
 * @param {object} data {account：String }
 */
export const queryPayConfig = data => {
  return request({
    url: '/cdc/payConfig/queryPayConfigList',
    method: 'post',
    data: data
  })
}
/**
 * 新增支付配置
 * @param {object} data {userAccount：String ，payType：Integer，payMethod:Integer，taxRate：BigDecimal}
 */
export const addPayConfig = data => {
  return request({
    url: '/cdc/payConfig/save',
    method: 'post',
    data: data
  })
}

/**
 * 修改支付配置
 * @param {object} data {id：String ，payType：Integer，payMethod:Integer，taxRate：BigDecimal}
 */
export const changePayConfig = data => {
  return request({
    url: '/cdc/payConfig/update',
    method: 'post',
    data: data
  })
}
/**
 * 删除支付配置
 * @param {object} data {id：String }
 */
export const deletePayConfig = data => {
  return request({
    url: '/cdc/payConfig/delete',
    method: 'post',
    data: data
  })
}


export default {
	queryPayConfig,
	addPayConfig,
	changePayConfig,
	deletePayConfig
}


