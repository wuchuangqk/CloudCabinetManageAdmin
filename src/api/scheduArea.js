import request from '@/utils/request'

//查询小区域接口
export function comAreaFind(data){
    return request({
        url: "/cmaps/comarea/ComAreaFind",
        method: "post",
        data: data,
    })
}

//编辑小区域接口
export function comAreaUpd(data){
    return request({
        url: "/cmaps/comarea/ComAreaUpd",
        method: "post",
        data: data,
    })
}

//新增小区域接口
export function comAreaCre(data){
    return request({
        url: "/cmaps/comarea/ComAreaCre",
        method: "post",
        data: data,
    })
}

//删除小区域接口
export function comAreaDel(data){
    return request({
        url: "/cmaps/comarea/ComAreaDel",
        method: 'post',
        data: data,
    })
}

export default{
    comAreaFind,
    comAreaUpd,
    comAreaCre,
    comAreaDel,
}