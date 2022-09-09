import request from '@/utils/request'

/**
 * 取件码订单查询
 * @param {object} data { offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
 export const QryVerificationList = data => {
    return request({
      url: '/cwms/verification/QryVerificationList',
      method: 'post',
      data: data
    })
  }

  /**
 * 取件码状态修改
 * @param {object} data { offset: Number, limit: Number }
 * @return {object} {data: Array, count: Number}
 */
 export const EdtVerification = data => {
    return request({
      url: '/cwms/verification/EdtVerification',
      method: 'post',
      data: data
    })
  }


  export default {
    QryVerificationList,
    EdtVerification
  }
  