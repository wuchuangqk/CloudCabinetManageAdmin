
// 系统设置 扫码开门距离和站点测试开关 请求接口
import request from "@/utils/request"  //引入axios请求方法

//获取表格默认列表 查询接口
export function queryList(data){
    return request({
        url: "/cwcs/quote/queryList",
        method: "post",
        data: data
    })
}

export default {
    queryList
}
