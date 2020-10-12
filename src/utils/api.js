import { getAction} from './http.js'

////根路径
// const doMian = "/jeecg-boot/";
////图片预览请求地址
// const imgView = "http://localhost:8080/jeecg-boot/sys/common/view/";


const getLiftAlarmVedioUrl =  (params)=>getAction("/engineering/engineering/equipEventInfo/getLiftAlarmVedioUrl",params);

const getLiftRealVedioUrl =  (params)=>getAction("/engineering/engineering/equipInfo/getLiftRealVedioUrl",params);

const getLiftAudioTalkData =  (params)=>getAction("/engineering/engineering/equipInfo/getLiftAudioTalkData",params);

export {
    getLiftAlarmVedioUrl,
    getLiftRealVedioUrl,
    getLiftAudioTalkData,
}