
// 系统设置 结算方式 请求接口
import request from "@/utils/request"  //引入axios请求方法

//获取表格默认列表 查询接口
export function queryList(data){
    return request({
        url: "/cwcs/custbilltype/queryList",
        method: "post",
        data: data,
    })
}

//新增 结算方式
export function creBill(data){
    return request({
        url: "/cwcs/custbilltype/creBill",
        method: "post",
        data: data,
    })
}

// 更新结算方式
export function upBill(data){
    return request({
        url: "/cwcs/custbilltype/upBill",
        method: "post",
        data: data,
    })
}

// 删除
export function delCustBill(data){
    return request({
        url: "/cwcs/custbilltype/delCustBill",
        method: "post",
        data: data,
    })
}

export default{
    queryList,
    creBill,
    upBill,
    delCustBill
}