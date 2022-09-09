import request from '@/utils/request'

/**
 * 新增手机号
 * @param {object} data {telephone：String }
 */
export const add = data => {
  return request({
    url: '/cdc/telValidate/save',
    method: 'post',
    data: data
  })
}

/**
 * 删除手机号
 * @param {object} data {id: String}
 */
export const remove = data => {
  return request({
    url: '/cdc/telValidate/delete',
    method: 'post',
    data: data
  })
}

/**
 * 单个查询
 * @param {object} data {telephone: String}
 * @return {object} {id: String, telephone: String}
 */
export const query = data => {
  return request({
    url: '/cdc/telValidate/queryByTelephone',
    method: 'post',
    data: data
  })
}

/**
 * 分页查询
 * @param {object} data {telephone：String， offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const queryPage = data => {
  return request({
    url: '/cdc/telValidate/queryTelValidateList',
    method: 'post',
    data: data
  })
}

export default {
  add,
  remove,
  query,
  queryPage
}
