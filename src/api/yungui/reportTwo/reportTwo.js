import request from "@/utils/request" //引入axios请求方法

/**
 * 获取柜子  是否关门信息
 * @param {data} data 
 * @returns 
 */
export function CheckOpenDoorApi(data) {
    return request({
        url: '/cabinet/cabinetdtl/CheckOpenDoor',
        method: 'post',
        data: data
    })
}