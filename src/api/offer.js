import request from '@/utils/request'

/**
 * 列表查询报价
 * @param {object} data {telephone：String }
 */
export const getCalcPriceList = data => {
  return request({
    url: '/ccs/quote/getCalcPriceList',
    method: 'post',
    data: data
  })
}
/**
 * 查询单个报价
 * @param {object} data {telephone：String }
 */
export const getCalcQuoteById = data => {
  return request({
    url: '/ccs/quote/getCalcQuoteById',
    method: 'post',
    data: data
  })
}
/**
 * 批量校验是否存在报价
 * @param {object} data {telephone：String }
 */
export const checkAddQuoteExist = data => {
  return request({
    url: '/ccs/quote/checkAddQuoteExist',
    method: 'post',
    data: data
  })
}
/**
 * 批量添加报价
 * @param {object} data {telephone：String }
 */
export const addCalcQuote = data => {
  return request({
    url: '/ccs/quote/addCalcQuote',
    method: 'post',
    data: data
  })
}
/**
 * 批量删除报价
 * @param {object} data {telephone：String }
 */
export const deleteCalcQuotesbyIds = data => {
  return request({
    url: '/ccs/quote/deleteCalcQuotesbyIds',
    method: 'post',
    data: data
  })
}
export default {
  getCalcPriceList,
  getCalcQuoteById,
  checkAddQuoteExist,
  addCalcQuote,
  deleteCalcQuotesbyIds
}
