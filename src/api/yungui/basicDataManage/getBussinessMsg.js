import request from "@/utils/request" //引入axios请求方法

/**
 * 基础数据管理->加盟商系统设置管理->业务报价管理  列表接口
 */
export function findQuoteApi(data) {
  return request({
    url: "/cwcs/quote/findQuote",
    method: "post",
    data: data
  })
}


export default {
  findQuoteApi,
}
