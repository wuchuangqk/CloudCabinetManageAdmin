import request from "@/utils/request"  //引入axios请求方法

export function table(data){
    return request({
        url: "/cabinet/cabinettemplate/querylist",
        method: "post",
        data: data,
    })
} 
//删除
export function del(data){
    return request({
        url: "/cabinet/cabinettemplate/delCabinettemplate",
        method: "post",
        data: data,
    })
} 
//新增
export function add(data){
    return request({
        url: "/cabinet/cabinettemplate/addCabinettemplate",
        method: "post",
        data: data,
    })
} 
//删除
export function edit(data){
    return request({
        url: "/cabinet/cabinettemplate/updCabinettemplate",
        method: "post",
        data: data,
    })
} 
export default{
    table,del,add,edit
}