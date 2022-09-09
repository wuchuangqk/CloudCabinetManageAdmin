// 客户员工管理页面接口
import request from '@/utils/request'

//根据客户查询已绑定员工
export const getBoundCustom = data => {
    return request({
        url: '/cas/account/findCompayPerson',
        method: 'post',
        data: data
    })
}

//查询未绑定员工数据
export const getUnBoundCustom = data => {
    return request({
        url: '/cas/account/findUniCompayPerson',
        method: 'post',
        data: data
    })
}

//添加员工
export const addEmployee = data => {
    return request({
        url: '/cas/manageCustEmployee/addEmployee',
        method: 'post',
        data: data,
    })
}

//接触员工绑定
export const utyingEmployee = data => {
    return request({
        url: '/cas/manageCustEmployee/utyingEmployee',
        method: 'post',
        data: data,
    })
}

//绑定员工
export const addCompanyEmploy = data => {
    return request({
        url: '/cas/companyemploy/addCompanyEmploy',
        method: 'post',
        data: data,
    })
}

//查询员工
export const qryCompanyEmploy = data => {
    return request({
        url: '/cas/companyemploy/qryCompanyEmploy',
        method: 'post',
        data: data,
    })
}

//删除员工
export const delCompanyEmploy = data => {
    return request({
        url: '/cas/companyemploy/delCompanyEmploy',
        method: 'post',
        data: data,
    })
}

export default {
    getBoundCustom,
    getUnBoundCustom,
    addEmployee,
    utyingEmployee,
    addCompanyEmploy,
    qryCompanyEmploy,
    delCompanyEmploy
}