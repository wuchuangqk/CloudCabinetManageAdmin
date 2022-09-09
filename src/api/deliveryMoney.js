import request from '@/utils/request'
/**
 * 分页查询代收货款配置
 * @param {object} data { offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const queryDeliveryMoneyList = data => {
  return request({
    url: '/cdc/deliveryMoney/queryDeliveryMoneyList',
    method: 'post',
    data: data
  })
}

/**
 * 新增代收货款配置
 * @param {object} data { offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const save = data => {
  return request({
    url: '/cdc/deliveryMoney/save',
    method: 'post',
    data: data
  })
}

/**
 * 更新代收货款配置
 * @param {object} data { offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const update = data => {
  return request({
    url: '/cdc/deliveryMoney/update',
    method: 'post',
    data: data
  })
}

/**
 * 删除代收货款配置
 * @param {object} data { offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const deleted = data => {
  return request({
    url: '/cdc/deliveryMoney/delete',
    method: 'post',
    data: data
  })
}

export default {
  queryDeliveryMoneyList,
  save,
  update,
  deleted
}
