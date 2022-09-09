import request from "@/utils/request" //引入axios请求方法


export function table1(data) {
    return request({
        url: "cas/account/findCompayPerson",
        method: "post",
        data: data,
    })
}
export function table2(data) {
    return request({
        url: "/cas/account/findCompayPerson",
        method: "post",
        data: data,
    })
}
export function delet(data) {
    return request({
        url: "/cas/manageCustEmployee/utyingEmployee",
        method: "post",
        data: data,
    })
}

export function dele(data) {
    return request({
        url: "/cas/franchBind/deleteFranchEmpoy",
        method: "post",
        data: data,
    })
}
export default {
    table1,
    table2,
    dele,
    delet
}