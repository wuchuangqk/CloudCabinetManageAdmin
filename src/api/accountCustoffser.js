//客户报价模型配置页面
import request from "@/utils/request"  //引入axios请求方法

//查询
export function queryList(data){
    return request({
        url: "/cwcs/custbill/queryList",
        method: "post",
        data: data,
    })
}

//新增
export function creBill(data){
    return request({
        url: "/cwcs/custbill/creBill",
        method: "post",
        data: data,
    })
}

//更新
export function upBill(data){
    return request({
        url: "/cwcs/custbill/upBill",
        method: "post",
        data: data,
    })
} 

//删除
export function delCustBill(data){
    return request({
        url: "/cwcs/custbill/delCustBill",
        method: "post",
        data: data,
    })
}


export default{
    creBill,
    queryList,
    upBill,
    delCustBill,
}
