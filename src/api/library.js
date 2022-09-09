import request from '@/utils/request'


export const QueryLibraryList = data => {
    return request({
        url: '/cdc/library/QueryLibraryList',
        method: 'post',
        data: data
    })
}

/**
 * 上传Excel
 */
export function insertLibrary(data) {
    return request({
        url: '/cdc/library/insertLibrary',
        method: 'post',
        // headers: {
        //   "Content-Type":'application/x-www-form-urlencoded'
        // },
        // withCredentials: true,
        data: data
    })

}

export const delLibrary = data => {
    return request({
        url: '/cdc/library/delLibrary',
        method: 'post',
        data: data
    })
}

export default {
    QueryLibraryList,
    insertLibrary,
    delLibrary
}

