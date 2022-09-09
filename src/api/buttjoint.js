// 对接管理 请求接口
import request from "@/utils/request"  //引入axios请求方法


/* 合作站点注册管理 */
//获取表格默认列表 查询接口
export function querySiteBindList(data){
    return request({
        url: "/cwoapi/coopersite/querySiteBindList",
        method: "post",
        data: data,
    })
}

//注册新增企业
export function regstaion(data){
    return request({
        url: "/cwoapi/coopersite/regstaion",
        method: "post",
        data: data,
    })
}

//编辑
export function upstaion(data){
    return request({
        url: "/cwoapi/coopersite/upstaion",
        method: "post",
        data: data,
    })
}

//绑定
export function reguser(data){
    return request({
        url: "/cwoapi/coopersiteuser/reguser",
        method: "post",
        data: data,
    })
}

//查询绑定员工
export function querySiteBindUserList(data){
    return request({
        url: "/cwoapi/coopersiteuser/querySiteBindUserList",
        method: "post",
        data: data,
    })
}

//删除用户
export function deleteUser(data){
    return request({
        url: "/cwoapi/coopersiteuser/deleteUser",
        method: "post",
        data: data,
    })
}

//删除站点
export function deleteStation(data){
    return request({
        url: "/cwoapi/coopersite/deleteStation",
        method: "post",
        data: data,
    })
}


/* 合作客户失败码配置 */
//查询
export function qryCustErrCode(data){
    return request({
        url: "/csensos/error/qryCustErrCode",
        method: "post",
        data: data,
    })
}

//新增
export function creCustErrCode(data){
    return request({
        url: "/csensos/error/creCustErrCode",
        method: "post",
        data: data,
    })
}

//修改
export function updCustErrCode(data){
    return request({
        url: "/csensos/error/updCustErrCode",
        method: "post",
        data: data,
    })
}

//删除
export function delCustErrCode(data){
    return request({
        url: "/csensos/error/delCustErrCode",
        method: "post",
        data: data,
    })
}


/* 失败码映射管理 */
//查询
export function qryRelaErrCode(data){
    return request({
        url: "/csensos/error/qryRelaErrCode",
        method: "post",
        data: data,
    })
}

//新增
export function creRelaErrCode(data){
    return request({
        url: "/csensos/error/creRelaErrCode",
        method: "post",
        data: data,
    })
}

//修改
export function updRelaErrCode(data){
    return request({
        url: "/csensos/error/updRelaErrCode",
        method: "post",
        data: data,
    })
}

//删除
export function delRelaErrCode(data){
    return request({
        url: "/csensos/error/delRelaErrCode",
        method: "post",
        data: data,
    })
}


/* 失败码配置 基础备案中 */
//查询
export function qryErrCode(data){
    return request({
        url: "/csensos/error/qryErrCode",
        method: "post",
        data: data,
    })
}

//新增
export function creErrCode(data){
    return request({
        url: "/csensos/error/creErrCode",
        method: "post",
        data: data,
    })
}

//修改
export function updErrCode(data){
    return request({
        url: "/csensos/error/updErrCode",
        method: "post",
        data: data,
    })
}

//删除
export function delErrCode(data){
    return request({
        url: "/csensos/error/delErrCode",
        method: "post",
        data: data,
    })
}

/* 提示码类别配置模块 */

//查询

export function qryErrType(data){
    return request({
        url: "/csensos/errortype/qryErrType",
        method: "post",
        data: data,
    })
}

//新增

export function creErrType(data){
    return request({
        url: "/csensos/errortype/creErrType",
        method: "post",
        data: data,
    })
}

//修改
/* 
 传参
 {
 	"id":2536452722889981952,
 	"errtype":"222",
  "remark":"33334"
 }

 
 */

export function updErrType(data){
    return request({
        url: "/csensos/errortype/updErrType",
        method: "post",
        data: data,
    })
}

//删除

export function delErrType(data){
    return request({
        url: "/csensos/errortype/delErrType",
        method: "post",
        data: data,
    })
}
