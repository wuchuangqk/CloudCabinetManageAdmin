import request from '@/utils/request'

/**
 * 查询里程配置
 * @param {object} data { offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const queryMileageConfig = data => {
  return request({
    url: '/cdc/mileageParam/queryMileageConfig',
    method: 'post',
    data: data
  })
}

/**
 * 新增里程配置
 * @param {object} data { pickUpMileage: String, sendMileage: String ,cityName :String}
 * @return {object} {data: Array, count: Number}
 */
export const mileageParamSave = data => {
  return request({
    url: '/cdc/mileageParam/save',
    method: 'post',
    data: data
  })
}

/**
 * 修改里程配置
 * @param {object} data { pickUpMileage: String, sendMileage: String ,id :String}
 * @return {object} {data: Array, count: Number}
 */
export const mileageParamUpdate = data => {
  return request({
    url: '/cdc/mileageParam/update',
    method: 'post',
    data: data
  })
}

/**
 * 删除里程配置
 * @param {object} data { pickUpMileage: String, sendMileage: String ,id :String}
 * @return {object} {data: Array, count: Number}
 */
export const mileageParamDelete = data => {
  return request({
    url: '/cdc/mileageParam/delete',
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
    url: '/cdc/mileageParam/save',
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
    url: '/cdc/mileageParam/update',
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
    url: '/cdc/mileageParam/delete',
    method: 'post',
    data: data
  })
}

export default {
  queryMileageConfig,
  mileageParamSave,
  mileageParamUpdate,
  mileageParamDelete
}
