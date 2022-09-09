import request from "@/utils/request"  //引入axios请求方法

export function table(data){
    return request({
        url: "/cabinet/management/querylist",
        method: "post",
        data: data,
    })
} 
//站点备案列表
export function table2(data){
    return request({
        url: "/cabinet/cabinet/querylist",
        method: "post",
        data: data,
    })
} 
//站点备案列表
export function del(data){
    return request({
        url: "/cabinet/management/delManagement",
        method: "post",
        data: data,
    })
}

//新增
export function adds(data){
    return request({
        url: "/cabinet/management/addManagement",
        method: "post",
        data: data,
    })
}
export default{
    table,table2,del,adds
}