import request from "@/utils/request" //引入axios请求方法


//站点备案
//站点备案列表
export function stationAPI(data) {
    return request({
        url: "/cabinet/cabinet/querylist",
        method: "post",
        data: data,
    })
}

//初始化
export function initializeAPI(data) {
    return request({
        url: "/cabinet/command/initializeCabinet",
        method: "post",
        data: data,
    })
}

//远程升级
export function leave(data) {
    return request({
        url: "/cabinet/command/upgradeCabinet",
        method: "post",
        data: data,
    })
}

//订单对接明细
export function loadCwoapiOrderduijieInfo(data) {
    return request({
        url: "/cwoapi/express/queryList",
        method: "post",
        data: data,
    })
}

//table  列查看
export function TablequeryinfolistAPI(data) {
    return request({
        url: "/cabinet/cabinetinfo/queryinfolist",
        method: "post",
        data: data,
    })
}
//读取柜基本信息（查看）
export function infomationCabinetAPI(data) {
    return request({
        url: "/cabinet/command/infomationCabinet",
        method: "post",
        data: data,
    })
}

//读取格口硬件状态(查看)
export function statusCabinetAPI(data) {
    return request({
        url: "/cabinet/command/statusCabinet",
        method: "post",
        data: data,
    })
}

export default {
    stationAPI,
    initializeAPI,
    leave,
    loadCwoapiOrderduijieInfo,
    TablequeryinfolistAPI,
    infomationCabinetAPI,
    statusCabinetAPI,
}