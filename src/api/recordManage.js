import request from '@/utils/request'

export function addTelephone(data) {
    return request({
        url: '/cabinet/telephone/addTelephone',
        method: 'post',
        data: data
    })
}

export function delTelephone(data) {
    return request({
        url: '/cabinet/telephone/delTelephone',
        method: 'post',
        data: data
    })
}

export function querylist(data) {
    return request({
        url: '/cabinet/telephone/querylist',
        method: 'post',
        data: data
    })
}