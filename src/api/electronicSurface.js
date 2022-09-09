import request from '@/utils/request'

/**
 * 新增电子面单配置
 * @param {object} data {telephone：String }
 */
export const electronOrderSave = data => {
  return request({
    url: '/cdc/electronOrder/save',
    method: 'post',
    data: data
  })
}


/**
 * 修改电子面单配置
 * @param {object} data {telephone：String }
 */
export const electronOrderUpdate = data => {
    return request({
      url: '/cdc/electronOrder/update',
      method: 'post',
      data: data
    })
}

/**
 * 删除电子面单配置
 * @param {object} data {id: String}
 */ 
export const electronOrderDelete = data => {
  return request({
    url: '/cdc/electronOrder/delete',
    method: 'post',
    data: data
  })
}


/**
 * 分页查询电子面单配置
 * @param {object} data {userAccount：String，cityName：String, offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const queryElectronOrderConfigList = data => {
  return request({
    url: '/cdc/electronOrder/queryElectronOrderConfigList',
    method: 'post',
    data: data
  })
}

export default {
    electronOrderSave,
    electronOrderUpdate,
    electronOrderDelete,
    queryElectronOrderConfigList
}
