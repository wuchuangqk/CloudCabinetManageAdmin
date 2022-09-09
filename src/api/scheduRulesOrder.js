import request from '@/utils/request'

//表格默认列表。查询列表
export function find(data) {
  return request({
    url:"/dispatch/escope/find",
    method:"post",
    data:data
  })
}

//根据委托客户查询执行客户列表
export function findOperCustList(data) {
  return request({
    url: "/dispatch/escope/findOperCustList",
    method: "post",
    data: data,
  })
}

//创建执行范围
export function creScope(data) {
  return request({
    url: "/dispatch/escope/creScope",
    method: "post",
    data: data,
  })
}

//根据ID更新执行范围
export function updateById(data){
  return request({
    url: '/dispatch/escope/updateById',
    method: "post",
    data: data,
  })
}

//根据ID删除执行范围
export function deleById(data){
  return request({
    url: '/dispatch/escope/deleById',
    method: "post",
    data: data,
  })
}

//订单调度查询
export function findDing(data){
  return request({
    url: '/dispatch/findOrder/find',
    method: "post",
    data: data,  
  })
}

//根据委托客户查询执行客户
export function findOperInterCustList(data){
  return request({
    url: '/dispatch/escope/findOperInterCustList',
    method: "post",
    data: data,
  })
}

//订单调度分发
export function distriBute(data){
  return request({
    url: '/dispatch/setdistrbute/distribute',
    method: "post",
    data: data,
  })
}

//订单调度换站
export function transTaion(data){ 
  return request({
    url: '/dispatch/settransfer/transtaion',
    method: "post",
    data: data,
  })
}

//订单调度 操作人（业务类型为派件出）
export function findBusRule(data){
  return request({
    url: '/dispatch/terrule/findBusRule',
    method: 'post',
    data: data,
  })
}

export default{
  find,
  findOperCustList,
  creScope,
  updateById,
  deleById,
  findDing,
  distriBute,
  transTaion,
  findOperInterCustList,
  findBusRule
}
