import request from '@/utils/request'

/**
 * 新增用户地址配置
 * @param {object} data {telephone：String }
 */
export const userAddressSave = data => {
  return request({
    url: '/cdc/userAddress/save',
    method: 'post',
    data: data
  })
}


/**
 * 修改用户地址配置
 * @param {object} data {telephone：String }
 */
export const userAddresUupdate = data => {
    return request({
      url: '/cdc/userAddress/update',
      method: 'post',
      data: data
    })
  }


/**
 * 删除用户地址配置
 * @param {object} data {id: String}
 */
export const userAddressDelete = data => {
  return request({
    url: '/cdc/userAddress/delete',
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
 * 分页查询地址配置
 * @param {object} data {userAccount：String，cityName：String, offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const queryUserAddressConfigList = data => {
  return request({
    url: '/cdc/userAddress/queryUserAddressConfigList',
    method: 'post',
    data: data
  })
}

export default {
    userAddressSave,
    userAddresUupdate,
    userAddressDelete,
    queryUserAddressConfigList
}
