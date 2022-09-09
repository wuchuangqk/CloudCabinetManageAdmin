var ev = {
    //生产
    PROD: {
        BASE_API: 'https://gateway.wathanks.com',
        PUSH_API: 'https://worderapisf.gdxcom.com/',
        EXCEL_API: 'https://www.gdxcom.com',
        // WS:'www.gdxcom.com',
        WS: 'ws_message.gdxcom.com',
        // WSPORT:19326,
        WSPORT: 443,
        site: 'https://www.gdxcom.com/w.apk',
        INFO: 'PROD',
        H5Url: 'https://cabinet.wathanks.com'
    },
    //开发
    DEV: {
        BASE_API: 'https://dev-gateway.wathanks.com',
        BASE_API2: 'https://gateway.wathanks.com',
        PUSH_API: 'http://172.17.2.31:8091',
        EXCEL_API: 'http://172.16.1.42:8080',
        WS: '172.16.1.45',
        WSPORT: 9326,
        site: 'http://172.16.1.42:8080/w.apk',
        INFO: 'DEV',
        H5Url: 'https://dev-cabinet.wathanks.com'
    },
    //预发布
    PRE: {
        BASE_API: 'https://pre-gateway.gdxcom.com', //'http://172.16.2.25:8080', //https://pre-gateway.gdxcom.com
        PUSH_API: 'http://172.17.2.31:8091',
        EXCEL_API: 'http://172.16.2.29:8080',
        WS: '172.16.2.27',
        WSPORT: 9326,
        site: 'http://172.16.2.29:8080/w.apk',
        INFO: 'PRE',
        H5Url: 'https://dev-cabinet.wathanks.com'
    }
}

let pathLoad = ev.DEV //打包时 修改指向

// var prodEnv = require('../../config/dev.env')
// prodEnv.BASE_API = pathLoad.BASE_API
//
// console.log("111",prodEnv)
export default pathLoad


// APPID
export const APPID = 'wxd2503d14292436eb'

// 我们自己用 : appid: wxc6bdb8e7bfc666f0
// 开发环境 和 生产环境 打包共用 : wxd2503d14292436eb

export const poolCode = '10004'

export const wechatBindUrl = 'https://gateway.wathanks.com'
    //开发环境 打包：'https://dev-gateway.wathanks.com' 
    //生产环境 打包：'https://gateway.wathanks.com'

// 'https://dev-gateway.wathanks.com/#/pages/await/await?type=55&'

//打包时修改二维码链接页面
// station/record
// management/station2
// management/set/components/getCodeSystemSetd