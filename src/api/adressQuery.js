import request from '@/utils/request'

/**
 * 查询地址簿
 * @param {object} data {telephone：String }
 */
export const queryAddress = data => {
  return request({
    url: '/cos/address/queryAddress',
    method: 'post',
    data: data
  })
}

/**
 * 新增地址簿
 * @param {object} data {telephone：String }
 */
export const addAddress = data => {
    return request({
      url: '/cos/address/addAddress',
      method: 'post',
      data: data
    })
  }


  /**
 * 修改地址簿
 * @param {object} data {telephone：String }
 */
export const updateAddress = data => {
    return request({
      url: '/cos/address/updateAddress',
      method: 'post',
      data: data
    })
  }


  /**
 * 删除地址簿
 * @param {object} data {telephone：String }
 */
export const delAddress = data => {
    return request({
      url: '/cos/address/delAddress',
      method: 'post',
      data: data
    })
  }

 
  
  /**
 * 设置默认地址
 * @param {object} data {telephone：String }
 */
export const settingDefaultAddress = data => {
    return request({
      url: '/cos/address/settingDefaultAddress',
      method: 'post',
      data: data
    })
  }

export default {
    queryAddress,
    addAddress,
    updateAddress,
    delAddress,
    settingDefaultAddress
}
