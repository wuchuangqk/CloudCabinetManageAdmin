import request from '@/utils/request'

/**
 * 新增验证码配置
 * @param {object} data {telephone：String }
 */
export const verifyCodeSave = data => {
  return request({
    url: '/cdc/verifyCode/save',
    method: 'post',
    data: data
  })
}


/**
 * 修改验证码配置
 * @param {object} data {telephone：String }
 */
export const verifyCodeUpdate = data => {
    return request({
      url: '/cdc/verifyCode/update',
      method: 'post',
      data: data
    })
  }


/**
 * 删除验证码配置
 * @param {object} data {id: String}
 */
export const verifyCodeDelete = data => {
  return request({
    url: '/cdc/verifyCode/delete',
    method: 'post',
    data: data
  })
}


/**
 * 查询验证码配置
 * @param {object} data {userAccount：String，cityName：String, offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
export const queryVerifyCodeConfigList = data => {
  return request({
    url: '/cdc/verifyCode/queryVerifyCodeConfigList',
    method: 'post',
    data: data
  })
}

export default {
    verifyCodeSave,
    verifyCodeUpdate,
    verifyCodeDelete,
    queryVerifyCodeConfigList
}
