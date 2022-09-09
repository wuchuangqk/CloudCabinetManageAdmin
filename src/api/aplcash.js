import request from '@/utils/request'

export function cashFindList(data) {
    return request({
        url: '/cps/aplcash/cashFindList',
        method: 'post',
        data: data
    })
}