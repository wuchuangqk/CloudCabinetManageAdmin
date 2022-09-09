import request from "@/utils/request" //引入axios请求方法


//站点备案列表
export function table(data) {
    return request({
        url: "/cwcs/quote/findQuote",
        method: "post",
        data: data,
    })
}

export function searchExpressCompany(data) {
    return request({
        url: "/cas/customer/queryCustomerList",
        method: "post",
        data: data,
    })
}

export function add(data) {
    return request({
        url: "/cwcs/quote/addQuote",
        method: "post",
        data: data,
    })
}

export function add2(data) {
    return request({
        url: "/cwcs/quotefreight/addQuote",
        method: "post",
        data: data,
    })
}

export function dele(data) {
    return request({
        url: "/cwcs/quote/deleteQuote",
        method: "post",
        data: data,
    })
}

export function edits(data) {
    return request({
        url: "/cwcs/quote/editQuote",
        method: "post",
        data: data,
    })
}

export function clientInfo(data) {
    return request({
        url: "cas/customer/queryCustomerList",
        method: "post",
        data: data
    })
}

export function shareTable(data) {
    return request({
        url: "/cwcs/distrbution/findDistr",
        method: "post",
        data: data
    })
}

export function shareAdd(data) {
    return request({
        url: "/cwcs/distrbution/addDistrbution",
        method: "post",
        data: data
    })
}

export function shareEdit(data) {
    return request({
        url: '/cwcs/distrbution/editDistrbution',
        method: "post",
        data: data
    })
}

export function sharedel(data) {
    return request({
        url: '/cwcs/distrbution/deleteById',
        method: "post",
        data: data
    })
}

export function quteoSubjectTableApi(data) {
    return request({
        url: '/cwcs/quotesubject/queryListSubBusRel',
        method: "post",
        data: data
    })
}

export function quteoSubjectList() {
    return request({
        url: '/cwcs/quotesubject/querySubList',
        method: "post"
    })
}

export function quteoBusTypeList() {
    return request({
        url: '/cwcs/quotesubject/queryBusList',
        method: "post"
    })
}

export function addSubBusRelAPI(data) {
    return request({
        url: '/cwcs/quotesubject/addSubBusRel',
        method: "post",
        data: data
    })
}

export function editSubBusRelAPI(data) {
    return request({
        url: '/cwcs/quotesubject/editSubBusRel',
        method: "post",
        data: data
    })
}

export function deleteSubBusRelAPI(data) {
    return request({
        url: '/cwcs/quotesubject/deleteSubBusRel',
        method: "post",
        data: data
    })
}
/**
 * 共配报价列表
 * @param {*} data 
 * @returns 
 */
export function queryListCondisstrTableAPI(data) {
    return request({
        url: '/cwcs/condisstr/queryListCondisstr',
        method: "post",
        data: data
    })
}
/**
 * 共配报价新增
 * @param {*} data 
 * @returns 
 */
export function addCondisstrAPI(data) {
    return request({
        url: '/cwcs/condisstr/addCondisstr',
        method: "post",
        data: data
    })
}
/**
 * 共配报价编辑
 * @param {*} data 
 * @returns 
 */
export function editCondisstrAPI(data) {
    return request({
        url: '/cwcs/condisstr/editCondisstr',
        method: "post",
        data: data
    })
}
/**
 * 共配报价删除
 * @param {*} data 
 * @returns 
 */
export function deleteCondisstrAPI(data) {
    return request({
        url: `/cwcs/condisstr/deleteCondisstr`,
        method: "post",
        data: data
    })
}
/**
 * 查询个人帐号列表
 * @param {object} data {telephone：String }
 */
export const queryPersonalAccountListAPI = data => {
    return request({
        url: '/cas/account/queryPersonalAccountList',
        method: 'post',
        data: data
    })
}

export const getBusSubList = data => {
    return request({
        url: '/cas/quotesubject/getBusSubList',
        method: 'post',
        data: data
    })
}


export default {
    table,
    searchExpressCompany,
    add,
    dele,
    edits,
    clientInfo,
    add2,
    shareAdd,
    shareEdit,
    sharedel,
    quteoSubjectTableApi,
    quteoSubjectList,
    quteoBusTypeList,
    addSubBusRelAPI,
    editSubBusRelAPI,
    deleteSubBusRelAPI,
    queryListCondisstrTableAPI,
    queryPersonalAccountListAPI,
    addCondisstrAPI,
    editCondisstrAPI,
    deleteCondisstrAPI
}