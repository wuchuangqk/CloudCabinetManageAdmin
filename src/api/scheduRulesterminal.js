import request from '@/utils/request'

//站点备案
export function queryWareHouseList(data) {
    return request({
      url:"/csensos/wareHouse/queryWareHouseList",
      method:"post",
      data:data
    })
}

//查询
export function find(data){
    return request({
        url: '/dispatch/terrule/find',
        method: 'post',
        data: data,
    })
}

//新增
export function creTerrule(data){
    return request({
        url: '/dispatch/terrule/creTerrule',
        method: 'post',
        data: data,
    })
}

//删除
export function deleById(data){
    return request({
        url: '/dispatch/terrule/deleById',
        method: 'post',
        data: data,
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

//根据委托客户查询执行客户(最新的)
export function findOperInterCustList(data){
    return request({
      url: '/dispatch/escope/findOperInterCustList',
      method: "post",
      data: data,
    })
  }

//根据企业查询用户
export function findPerson(data){
    return request({
        url: '/dispatch/terrule/findPerson',
        method: 'post',
        data: data,
    })
}

export default{
    queryWareHouseList,
    find,
    creTerrule,
    deleById,
    findOperCustList,
    findPerson,
    findOperInterCustList
}