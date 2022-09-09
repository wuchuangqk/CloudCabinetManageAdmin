import request from "@/utils/request" //引入axios请求方法


//站点备案
//站点备案列表

//加盟商站点
export function searchFranchStation(data) {
    return request({
        url: "/cas/franchBind/findFranchByStation",
        method: "post",
        data: data,
    })
}
//全部站点
export function table(data) {
    return request({
        url: "/cabinet/cabinet/querylist",
        method: "post",
        data: data,
    })
}
//新增
export function add(data) {
    return request({
        url: "/cabinet/cabinet/addCabinet",
        method: "post",
        data: data,
    })
}
export function del(data) {
    return request({
        url: "/cabinet/cabinet/delCabinet",
        method: "post",
        data: data,
    })
}
export function update(data) {
    return request({
        url: "/cabinet/cabinet/updCabinet",
        method: "post",
        data: data,
    })
}
export function subscribe(data) {
    return request({
        url: "/cabinet/cabinet/subscribeCabinet",
        method: "post",
        data: data,
    })
}
export function BathCabinetOnOffApi(data) {
    return request({
        url: "/cabinet/cabinet/BathCabinetOnOff",
        method: "post",
        data: data,
    })
}

export function setDtlCloseUseLock(data) {
    return request({
        url: "/cabinet/cabinetdtl/setDtlCloseUseLock",
        method: "post",
        data: data,
    })
}

export function cabinettypeList(data) {
    return request({
        url: "/cabinet/cabinettype/getqueryList",
        method: "post",
        data: data,
    })
}


/**
 * 上传Excel
 */
 export function importExcelByCabinet(data) {
    return request({
        url: '/cabinet/public/importExcelByCabinet',
        method: 'post',
        // headers: {
        //   "Content-Type":'application/x-www-form-urlencoded'
        // },
        // withCredentials: true,
        data: data
    })
}

export default {
    searchFranchStation,
    table,
    add,
    del,
    update,
    subscribe,
    BathCabinetOnOffApi,
    setDtlCloseUseLock,
    cabinettypeList,
    importExcelByCabinet
}