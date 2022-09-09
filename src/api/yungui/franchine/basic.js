import request from "@/utils/request"  //引入axios请求方法

export function table(data){
    return request({
        url: "/cas/franchBind/findFranch",
        method: "post",
        data: data,
    })
}


// export function table(data){
//     return request({
//         url: "/cas/franchBind/findFranch",
//         method: "post",
//         data: data,
//     })
// }

export function adds(data){
    return request({
        url: "/cas/franch/addFranch",
        method: "post",
        data: data,
    })
}

export function update(data){
    return request({
        url: "/cas/franch/editFranch",
        method: "post",
        data: data,
    })
}

export function status(data){
    return request({
        url: "/cas/applyfranch/applyFindFranch",
        method: "post",
        data: data,
    })
}

export function station(data){
    return request({
        url: "/cas/franchBind/findFranchByStation",
        method: "post",
        data: data,
    })
}

export function station3(data) {
  return request({
    url: '/cabinet/cabinet/querylist',
    method: 'post',
    data: data,
  })
}

export function station2(data){
    return request({
        url: "/cas/franchBind/bindFranchStation",
        method: "post",
        data: data,
    })
}

export function del(data){
    return request({
        url: "/cas/franchBind/deleteStationById",
        method: "post",
        data: data,
    })
}

export function apply(data){
    return request({
        url: "/cas/applyfranch/applyFranch",
        method: "post",
        data: data,
    })
}





