import request from "@/utils/request"

// 客户备案
/**
 * @param {Object} data
 * 列表信息
 */
export function clientInfo(data) {
    return request({
        url: "cas/customer/queryCustomerList",
        method: "post",
        data: data
    })
}

/**
 * 新增客户
 * @param {object}
 * data {
 *  nameId	String 客户简称
 *  name	String 客户名称
 *  ......
 * }
 */
export function addCustomer(data) {
    return request({
        url: '/cas/customer/creCustomer',
        method: 'post',
        data: data
    })
}

/**
 * 修改客户信息
 * @param {object}
 * data {
 *  nameId	String 客户简称
 *  name	String 客户名称
 *  ......
 * }
 */
export function editCustomer(data) {
    return request({
        url: '/cas/customer/upCustomer',
        method: 'post',
        data: data
    })
}

/**
 * 删除客户信息
 * @param {object}
 * data {
 *  nameId	String 客户简称
 *  name	String 客户名称
 *  ......
 * }
 */
export function delCustomer(data) {
    return request({
        url: '/cas/customer/delCustomer',
        method: 'post',
        data: data
    })
}

/**
 * 问题及回复
 * }
 */
export function replyData(data) {
    return request({
        url: 'cdc/help/queryHelp',
        method: 'post',
        data: data
    })
}

/**
 * 回复
 * }
 */
export function replyDataRep(data) {
    return request({
        url: '/cdc/help/anserHelp',
        method: 'post',
        data: data
    })
}
/**
 * 删除
 * }
 */
export function replyDataDel(data) {
    return request({
        url: 'cdc/help/delHelp',
        method: 'post',
        data: data
    })
}

/**
 * 语音服务查询
 * }
 */
export function qrySound(data) {
    return request({
        url: 'csensos/sound/qrySound',
        method: 'post',
        data: data
    })
}

/**
 * 语音服务新增
 * }
 */
export function creSound(data) {
    return request({
        url: 'csensos/sound/creSound',
        method: 'post',
        data: data
    })
}

/**
 * 语音服务修改
 * }
 */
export function updSound(data) {
    return request({
        url: 'csensos/sound/updSound',
        method: 'post',
        data: data
    })
}
/**
 * 语音服务删除
 * }
 */
export function delSound(data) {
    return request({
        url: 'csensos/sound/delSound',
        method: 'post',
        data: data
    })
}



export default {
    addCustomer,
    clientInfo
}

