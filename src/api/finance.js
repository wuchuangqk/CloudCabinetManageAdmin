import request from '@/utils/request'

/**
 * 查询个人账户管理列表
 * @param {object} data {telephone：String }
 */
export const queryPersonalAccountManageList = data => {
    return request({
        url: '/cas/account/queryPersonalAccountManageList',
        method: 'post',
        data: data
    })
}

/**
 * 查询加盟商账户管理列表
 * @param {object} data {telephone：String }
 */
 export const queryFranchiseeAccountManageList = data => {
    return request({
        url: '/cas/account/queryFranchiseeAccountManageList',
        method: 'post',
        data: data
    })
}


export default {
    queryFranchiseeAccountManageList
}
