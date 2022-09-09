import request from "@/utils/request" //引入axios请求方法

export function loadStatisticsListApi(data) {
    return request({
        url: "cabinet/statistics/queryIncabinetCountByDay",
        method: "post",
        data: data,
    })
}

export function loadIncabinetListApi(data) {
    return request({
        url: "cabinet/incabinet/querylist",
        method: "post",
        data: data,
    })
}

export default {
    loadStatisticsListApi,
    loadIncabinetListApi
}