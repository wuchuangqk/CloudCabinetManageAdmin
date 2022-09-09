import request from '@/utils/request'

/**
 * 分页查询
 * @param {object} data { offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const queryOrderlist = data => {
  return request({
    url: '/cdc/importOrder/queryImportOrderConfigList',
    method: 'post',
    data: data
  })
}

/**
 * 新增导单
 * @param {object} data { offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const save = data => {
  return request({
    url: '/cdc/importOrder/save',
    method: 'post',
    data: data
  })
}

export default {
  queryOrderlist,
  save
}
