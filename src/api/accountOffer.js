
// 系统设置 报价 请求接口
import request from "@/utils/request"  //引入axios请求方法

//获取表格默认列表 查询接口
export function queryList(data){
    return request({
        url: "/cwcs/quote/queryList",
        method: "post",
        data: data,
    })
}

// 新增报价
export function creQuote(data){
    return request({
        url: "/cwcs/quote/creQuote",
        method: "post",
        data: data,
    })
}

// 新增报价 客户 信息列表查询
export function queryCustIdList(data){
    return request({
        url: "/cwcs/custbill/queryCustIdList",
        method: "post",
        data:data,
    })
}

// 更新报价方式
export function upQuote(data){
    return request({
        url: "/cwcs/quote/upQuote",
        method: "post",
        data:data,
    })
}

// 根据 id 查询
export function findById(data){
    return request({
        url: "/cwcs/quote/findById",
        method: "post",
        data:data,
    })
}

// 删除
export function delQuote(data){
    return request({
        url: "/cwcs/quote/delQuote",
        method: "post",
        data: data,
    })
}

export default {
    queryList,
    creQuote,
    upQuote,
    findById,
    queryCustIdList,
    delQuote,
}