import request from "@/utils/request" //引入axios请求方法

export function table(data) {
    return request({
        url: "/cabinet/cabinetdtl/querylist",
        method: "post",
        data: data,
    })
}

export function table3000(data) {
    return request({
        url: "/cabinet/cabinetdtl/queryGrouplist",
        method: "post",
        data: data,
    })
}

export function table3001(data) {
    return request({
        url: '/cabinet/cabinetdtl/querylist',
        method: 'post',
        data
    })
}
export function confirmtable(data) {
    return request({
        url: '/cabinet/cabinetdtl/batchAddMapCabinetDtl',
        method: 'post',
        data
    })
}


export function del(data) {
    return request({
        url: "/cabinet/cabinetdtl/delCabinetDtl",
        method: "post",
        data: data,
    })
}

export function del3000(data) {
    return request({
        url: '/cabinet/cabinetdtl/deleteByCabinetIdAndCode',
        method: 'post',
        data
    })
}

export function table2(data) {
    return request({
        url: "/cabinet/cabinet/querylist",
        method: "post",
        data: data,
    })
}

/**
 * 站点弹出框数据查询
 * @param {*} data 
 * @returns 
 */
export function stationQueryTable(data) {
    return request({
        url: "/cabinet/cabinet/querylist",
        method: "post",
        data: data,
    })
}


/**
 * 柜子查询格口接口
 * @param {*} data 
 * @returns 
 */
export function tableGKData(data) {
    return request({
        url: "/cabinet/cabinetdtl/queryGrouplist",
        method: "post",
        data: data,
    })
}

/**
 * 柜子查询格口 具体信息
 * @param {*} data 
 * @returns 
 */
export function tableGKDataInfo(data) {
    return request({
        url: '/cabinet/cabinetdtl/querylist',
        method: 'post',
        data
    })
}

export function table3(data) {
    return request({
        url: "/cabinet/cabinettemplate/querylist",
        method: "post",
        data: data,
    })
}
//批量建格口
export function build(data) {
    return request({
        url: "/cabinet/cabinetdtl/batchAddCabinetDtl",
        method: "post",
        data: data,
    })
}

export default {
    table,
    table2,
    table3,
    del,
    build,
    stationQueryTable,
    tableGKData,
    tableGKDataInfo,
}