import request from '@/utils/request'

/**
 * 新增保价配置信息
 * @param {object} data {telephone：String }
 */
export const priceConfigSave = data => {
  return request({
    url: '/cdc/priceConfig/save',
    method: 'post',
    data: data
  })
}


/**
 * 修改保价配置信息
 * @param {object} data {telephone：String }
 */
export const priceConfigUpdate = data => {
    return request({
      url: '/cdc/priceConfig/update',
      method: 'post',
      data: data
    })
  }


/**
 * 删除保价配置信息
 * @param {object} data {id: String}
 */
export const priceConfigDelete = data => {
  return request({
    url: '/cdc/priceConfig/delete',
    method: 'post',
    data: data
  })
}


/**
 * 查询保价配置信息
 * @param {object} data {userAccount：String，cityName：String, offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const queryPriceConfigList = data => {
  return request({
    url: '/cdc/priceConfig/queryPriceConfigList',
    method: 'post',
    data: data
  })
}

export default {
    priceConfigSave,
    priceConfigSave,
    priceConfigDelete,
    queryPriceConfigList,
    priceConfigUpdate
}
