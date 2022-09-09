import request from '@/utils/request'

/**
 * 分页查询
 * @param {object} data { offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const queryFleetParamConfig = data => {
  return request({
    url: '/cdc/fleetParam/queryFleetParamConfig',
    method: 'post',
    data: data
  })
}

/**
 * 新增保价
 * @param {object} data { offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const save = data => {
  return request({
    url: '/cdc/fleetParam/save',
    method: 'post',
    data: data
  })
}

/**
 * 修改保价
 * @param {object} data { offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const update = data => {
  return request({
    url: '/cdc/fleetParam/update',
    method: 'post',
    data: data
  })
}

/**
 * 修改保价
 * @param {object} data { offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const deleted = data => {
  return request({
    url: '/cdc/fleetParam/delete',
    method: 'post',
    data: data
  })
}

export default {
  queryFleetParamConfig,
  save,
  update,
  deleted
}
