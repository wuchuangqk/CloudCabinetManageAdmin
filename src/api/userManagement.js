
//系统备案 用户备案 接口
import request from "@/utils/request"  //引入axios请求方法

//获取表格默认列表
export function clientInfo(data) {
    return request({
      url: "/cas/account/queryPersonalAccountList", 
      method: "post",
      data: data,
    })
  }

//更改用户角色
export function changeRole(data){
    return request({
      url: "/cas/manage/changeAccountCloudRole",
      method: "post",
      data: data,
    })
}

//获取表格默认列表
export function queryPersonalAccountListAmount(data) {
  return request({
    url: "/cas/account/queryPersonalAccountListAmount", 
    method: "post",
    data: data,
  })
}


export default {
    clientInfo,
    changeRole,
}
