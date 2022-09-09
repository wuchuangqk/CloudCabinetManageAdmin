// 站点员工管理接口
import request from '@/utils/request'


//绑定员工
export const addCabinetAccount = data => {
    return request({
        url: '/cas/cabAccount/addCabinetAccount',
        method: 'post',
        data: data,
    })
}

//查询员工
export const qryCabinetAccount = data => {
    return request({
        url: '/cas/cabAccount/qryCabinetAccount',
        method: 'post',
        data: data,
    })
}

//删除员工
export const delCabinetAccount = data => {
    return request({
        url: '/cas/cabAccount/delCabinetAccount',
        method: 'post',
        data: data,
    })
}


export default {
    addCabinetAccount,
    qryCabinetAccount,
    delCabinetAccount
}