import request from "@/utils/request" //引入axios请求方法

export function table(data) {
    return request({
        url: "/cabinet/incabinet/querylist",
        method: "post",
        data: data,
    })
}

export function stop(data) {
    return request({
        url: "/cabinet/inprivatecabinetdtl/querylist",
        method: "post",
        data: data,
    })
}


export function rent(data) {
    return request({
        url: "/cabinet/inleasecabinetdtl/querylist",
        method: "post",
        data: data,
    })
}

export function express(data) {
    return request({
        url: "/cabinet/inexpress/querylist",
        method: "post",
        data: data,
    })
}





export function look1(data) {
    return request({
        url: "/cabinet/orderlog/qryOrderInfo",
        method: "post",
        data: data,
    })
}



export function look2(data) {
    return request({
        url: "/cabinet/orderlog/qryOrderLog",
        method: "post",
        data: data,
    })
}

export function franch(data) {
    return request({
        url: "/cas/franchBind/findFranch",
        method: "post",
        data: data,
    })
}

// 管理后台-站点管理-取件递送员配置
export function setPersonApi(data) {
    return request({
        url: "/cabinet/sedrec/querylist",
        method: "post",
        data: data,
    })
}

export function putBatchInCabinetcomplete(data) {
    return request({
        url: "/cabinet/incabinet/putBatchInCabinetcomplete",
        method: "post",
        data: data,
    })
}

export function AdminOpenBatchOutCabinetcomplete(data) {
    return request({
        url: "/cabinet/outcabinet/AdminOpenBatchOutCabinetcomplete",
        method: "post",
        data: data,
    })
}

