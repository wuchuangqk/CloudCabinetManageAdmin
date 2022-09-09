import request from '@/utils/request'

/**
 * 新增导单配置
 * @param {object} data {telephone：String }
 */
export const importOrderSave = data => {
  return request({
    url: '/cdc/importOrder/save',
    method: 'post',
    data: data
  })
}

/**
 * 修改导单配置
 * @param {object} data {telephone：String }
 */
export const importOrderUpdate = data => {
    return request({
      url: '/cdc/importOrder/update',
      method: 'post',
      data: data
    })
  }

/**
 * 删除导单配置
 * @param {object} data {id: String}
 */
export const importOrderDelete = data => {
  return request({
    url: '/cdc/importOrder/delete',
    method: 'post',
    data: data
  })
}

/**
 * 分页查询导单配置
 * @param {object} data {userAccount：String，cityName：String, offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const queryImportOrderConfigList = data => {
  return request({
    url: '/cdc/importOrder/queryImportOrderConfigList',
    method: 'post',
    data: data
  })
}

export default {
    importOrderSave,
    importOrderUpdate,
    importOrderDelete,
    queryImportOrderConfigList
}
