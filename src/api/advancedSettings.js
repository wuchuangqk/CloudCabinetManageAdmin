
// 高级设置 

import request from "@/utils/pushs"  //引入axios请求方法


// 推入仓单接口
export function tpush(data){
    return request({
        url: "/push/tpush2",
        method: "post",
        data: data,
    })
}

// 推出仓单接口
export function toutpush(data){
    return request({
        url: "/push/toutpush",
        method: "post",
        data: data,
    })
}

export default {
    tpush,
    toutpush
}
