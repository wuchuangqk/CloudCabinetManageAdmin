import request from '@/utils/request'

/**
 * 查询个人帐号列表
 * @param {object} data {telephone：String }
 */
export const queryPersonalAccountList = data => {
  return request({
    url: '/cas/account/queryPersonalAccountList',
    method: 'post',
    data: data
  })
}

/**
 * 查询企业帐号列表
 * @param {object} data {telephone：String }
 */
export const queryCompanyAccountList = data => {
  return request({
    url: '/cas/account/queryCompanyAccountList',
    method: 'post',
    data: data
  })
}

export default {
  queryPersonalAccountList,
  queryCompanyAccountList
}