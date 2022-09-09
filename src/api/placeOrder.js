import request from '@/utils/request'

/**
 * 下单接口
 * @param {object} data {telephone：String }
 */
export const placeOrder = data => {
    return request({
        url: '/cos/order/placeOrder',
        method: 'post',
        data: data
    })
}

/**
 * 编辑订单接口
 * @param {object} data {telephone：String }
 */
export const editOrder = data => {
    return request({
        url: '/cos/order/editOrder',
        method: 'post',
        data: data
    })
}

/**
 * 根据字典代码查询字典枚举值
 * @param {object} data {telephone：String }
 */
export const queryDictValueByCode = data => {
    return request({
        url: '/cdc/dict/queryDictValueByCode',
        method: 'post',
        data: data
    })
}
/**
 * 查询地址薄
 * @param {object} data {telephone：String }
 */
export const queryAddressList = data => {
    return request({
        url: '/cos/address/queryAddress',
        method: 'post',
        data: data
    })
}
/**
 * 地址识别
 * @param {object} data {telephone：String }
 */
export const addressResolution = data => {
    return request({
        url: '/cdc/address/addressResolution',
        method: 'post',
        data: data
    })
}
/**
 * 省市区三级联动
 * @param {object} data {telephone：String }
 */
export const addressCountyTest = data => {
    return request({
        url: '/cdc/county/test',
        method: 'get'
    })
}
/**
 * 根据地址查询里程接口
 * @param {object} data {telephone：String }
 */
export const queryDistanceByAddress = data => {
    return request({
        url: '/cmaps/direction/queryDistanceByAddress',
        method: 'post',
        data:data
    })
}
/**
 * 单报价及对账单接口
 * @param {object} data {telephone：String }
 */
export const msGetQuotePrice = data => {
    return request({
        url: '/ccs/quote/queryQuoteList',
        method: 'post',
        data:data
    })
}
/**
 * 查询订单详情
 * @param {object} data {telephone：String }
 */
export const queryOrderInfo = data => {
    return request({
        url: '/cos/myOrder/queryOrderInfo',
        method: 'post',
        data:data
    })
}
/**
 * 删除附件
 * @param {object} data {telephone：String }
 */
export const delOrderFile = data => {
    return request({
        url: '/cos/common/delOrderFile',
        method: 'post',
        data:data
    })
}
/**
 * 根据城市和产品类型查询时间配置
 * @param {object} data {telephone：String }
 */
export const time = data => {
    return request({
        url: '/cdc/time/queryTimeConfigByCityAndProduct',
        method: 'post',
        data:data
    })
}
/**
 * 根据账号查询代收货款配置
 * @param {object} data {telephone：String }
 */
export const queryByAccount = data => {
    return request({
        url: '/cdc/deliveryMoney/queryByAccount',
        method: 'post',
        data:data
    })
}
/**
 * 根据订单号查询订单
 * @param {object} data {telephone：String }
 */
export const queryByOrderNoList = data => {
    return request({
        url: '/cos/myOrder/queryByOrderNoList',
        method: 'post',
        data:data
    })
}
export default {
    placeOrder,
    editOrder,
    queryDictValueByCode,
    queryAddressList,
    addressResolution,
    addressCountyTest,
    queryDistanceByAddress,
    msGetQuotePrice,
    queryOrderInfo,
    editOrder,
    delOrderFile,
    time,
    queryByAccount,
    queryByOrderNoList
}