
// 系统设置 报价模型维护 请求接口
import request from "@/utils/request"  //引入axios请求方法

//获取表格默认列表
export function queryList(data){
    return request({
        url: "/cwcs/quotemode/queryList",
        method: "post",
        data: data,
    })
}

//更改状态
export function upStatus(data){
    return request({
        url: "/cwcs/quotemode/upStatus",
        method: "post",
        data: data,
    })
}

export default{
    queryList,
    upStatus,
}

