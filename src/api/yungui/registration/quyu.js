import request from "@/utils/request"  //引入axios请求方法


export function table(data){
    return request({
        url: "/cas/groupcity/queryList",
        method: "post",
        data: data,
    })
} 

export function addss(data){
    return request({
        url: "/cas/groupcity/addGroup",
        method: "post",
        data: data,
    })
} 
export function editss(data){
    return request({
        url: "/cas/groupcity/editGroup",
        method: "post",
        data: data,
    })
} 

export function users(data){
    return request({
        url: "/cas/groupuser/queryList",
        method: "post",
        data: data,
    })
}


export function usersAdd(data){
    return request({
        url: "/cas/groupuser/addGroupByUser",
        method: "post",
        data: data,
    })
}

export function userdel(data){
    return request({
        url: "/cas/groupuser/deleteGroupByUser",
        method: "post",
        data: data,
    })
}

export function quyuSearch(data){
    return request({
        url: "/cas/groupcydata/queryList",
        method: "post",
        data: data,
    })
}

export function quyuAdd(data){
    return request({
        url: "/cas/groupcydata/addGroupByCity",
        method: "post",
        data: data,
    })
}
export function quyudel(data){
    return request({
        url: "/cas/groupcydata/deleteGroupByCity",
        method: "post",
        data: data,
    })
}






