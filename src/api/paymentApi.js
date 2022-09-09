import request from '@/utils/request'

/**
 * 监控支付状态
 * @param {object} data {telephone：String }
 */
export const monitorPay = data => {
  return request({
    url: '/cps/paymainbill/monitorPay',
    method: 'post',
    data: data
  })
}
/**
 * 平台余额支付
 * @param {object} data {telephone：String }
 */
export const doPayAccount = data => {
  return request({
    url: '/cps/pay/doPayAccount',
    method: 'post',
    data: data
  })
}
/**
 * 支付宝微信在线支付
 * @param {object} data {telephone：String }
 */
export const getAliWxPay = data => {
  return request({
    url: '/cps/pay/getAliWxPay',
    method: 'post',
    data: data
  })
}
/**
 * 到付现金支付
 * @param {object} data {telephone：String }
 */
export const cashPayAccount = data => {
  return request({
    url: '/cps/pay/cashPayAccount',
    method: 'post',
    data: data
  })
}
/**
 * 开通嗨付
 * @param {object} data {telephone：String }
 */
export const openHifuBalance = data => {
  return request({
    url: '/cpbs/hifuController/openHifuBalance',
    method: 'post',
    data: data
  })
}
/**
 * 修改嗨付账户
 * @param {object} data {telephone：String }
 */
export const updateHifuBalance = data => {
    return request({
      url: '/cpbs/hifuController/updateHifuBalance',
      method: 'post',
      data: data
    })
  }
  /**
 * 查询嗨付账户列表
 * @param {object} data {telephone：String }
 */
export const queryHifuGaBalanceList = data => {
    return request({
      url: '/cpbs/hifuController/queryHifuGaBalanceList',
      method: 'post',
      data: data
    })
  }
  /**
 * 人工核销嗨付账户
 * @param {object} data {telephone：String }
 */
export const repayHifuBalance = data => {
    return request({
      url: '/cpbs/hifuController/repayHifuBalance',
      method: 'post',
      data: data
    })
  }
  /**
 * 查询嗨付已出账单列表
 * @param {object} data {telephone：String }
 */
export const queryHifuBillSettled = data => {
    return request({
      url: '/cpbs/hifuController/queryHifuBillSettled',
      method: 'post',
      data: data
    })
  }
  /**
 * 查询嗨付已出账单明细列表
 * @param {object} data {telephone：String }
 */
export const queryHifuBillSettledDetail = data => {
    return request({
      url: '/cpbs/hifuController/queryHifuBillSettledDetail',
      method: 'post',
      data: data
    })
  }
  /**
 * 查询嗨付未出账单列表
 * @param {object} data {telephone：String }
 */
export const queryHifuBillUnSettled = data => {
    return request({
      url: '/cpbs/hifuController/queryHifuBillUnSettled',
      method: 'post',
      data: data
    })
  }
  /**
 * 查询嗨付未出账单明细列表
 * @param {object} data {telephone：String }
 */
export const queryHifuBillUnSettledDetail = data => {
    return request({
      url: '/cpbs/hifuController/queryHifuBillUnSettledDetail',
      method: 'post',
      data: data
    })
  }
export default {
    monitorPay,
    doPayAccount,
    getAliWxPay,
    cashPayAccount,
    openHifuBalance,
    updateHifuBalance,
    queryHifuGaBalanceList,
    repayHifuBalance,
    queryHifuBillSettled,
    queryHifuBillSettledDetail,
    queryHifuBillUnSettled,
    queryHifuBillUnSettledDetail
}
