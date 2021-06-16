// 工具函数
// import web3js from 'web3';
let capitalize = value => {
    if (!value) return ''
}
/**
 * 格式化时间年月日
 */
let timeHadelDay = value => {

    var value1 = value.length > 10 ? value * 1000 : value;

    var d = new Date(value1);
    var year = d.getFullYear() < 10 ? '0' + d.getFullYear() : '' + d.getFullYear();
    var month = Number(d.getMonth()) + 1 < 10 ? '0' + Number(d.getMonth() + 1) : '' + Number(Number(d.getMonth()) + 1);
    var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();

    return year + '-' + month + '-' + day
}
/**
 * 格式化时间
 */
let timeHadelSeconds = (format, value) => {
    var value1 = value.length > 10 ? value * 1000 : value;
    var d = new Date(value1);
    var year = d.getFullYear() < 10 ? '0' + d.getFullYear() : '' + d.getFullYear();
    var month = Number(d.getMonth()) + 1 < 10 ? '0' + Number(d.getMonth() + 1) : '' + Number(Number(d.getMonth()) + 1);
    var day = d.getDate() < 10 ? '0' + d.getDate() : '' + d.getDate();
    var hour = d.getHours() < 10 ? '0' + d.getHours() : '' + d.getHours();
    var minutes = d.getMinutes() < 10 ? '0' + d.getMinutes() : '' + d.getMinutes();
    var seconds = d.getSeconds() < 10 ? '0' + d.getSeconds() : '' + d.getSeconds();
    if (format == "YYYY-MM-DD") {
        return year + '-' + month + '-' + day;
    } else if (format == "YYYY-MM-DD HH:MM:SS") {
        return year + '.' + month + '.' + day + '  ' + hour + ':' + minutes + ':' + seconds;
    } else if (format == "HH:MM:SS") {
        return hour + ':' + minutes + ':' + seconds;
    } else if (format == "HH:MM") {
        return hour + ':' + minutes;
    }
}
let escape2Html = (str) => {
    if (!str) {
        return "";
    }
    var arrEntities = {
        lt: "<",
        gt: ">",
        nbsp: " ",
        "↵": " ",
        amp: "&",
        quot: '"'
    };
    return str.replace(/&(lt|gt|nbsp|amp|quot);/gi, function (all, t) {
        return arrEntities[t];
    });
}
let urlEncode = function (param, key, encode) {
    if (param == null) return '';
    var paramStr = '';
    var t = typeof (param);
    if (t == 'string' || t == 'number' || t == 'boolean') {
        paramStr += '&' + key + '=' + ((encode == null || encode) ? encodeURIComponent(param) : param);
    } else {
        for (var i in param) {
            var k = key == null ? i : key + (param instanceof Array ? '[' + i + ']' : '.' + i);
            paramStr += urlEncode(param[i], k, encode);
        }
    }
    return paramStr;
};
let deviceMethod = {
    /**
     * 是否是安卓设备
     * @returns {boolean}
     */
    verifyAndroid: function () {
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        if (isAndroid) {
            return true;
        } else {
            return false;
        }
    },
    /**
     *是否是ios设备
     * @returns {boolean}
     */
    verifyIos: function () {
        var u = navigator.userAgent;
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        if (isiOS) {
            return true;
        } else {
            return false;
        }
    },
    /**
     * 是否是微信内部浏览器
     * @returns {boolean}
     */
    isWeiXin: function () {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger" || ua.match(/WeiBo/i) == "weibo") {
            return true;
        } else if (ua.indexOf('mobile mqqbrowser') > -1) {
            return true;
        } else if (ua.indexOf('iphone') > -1 || ua.indexOf('mac') > -1) {
            if (ua.indexOf('qq') > -1) {
                return true;
            }
        }
        return false;
    },
    isMobile: function () {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            return true;
        } else {
            return false;
        }
    }
}
function countDown() { }
countDown.prototype.start = function (set_seconds) {
    if (!set_seconds) {
        return {
            day: 0,
            hour: 0,
            minute: 0,
            second: 0
        }
    }
    let seconds = set_seconds
    let [day, hour, minute, second] = [0, 0, 0, 0]
    if (seconds > 0) {
        day = Math.floor(seconds / (60 * 60 * 24))
        hour = Math.floor(seconds / (60 * 60)) - (day * 24)
        minute = Math.floor(seconds / 60) - (day * 24 * 60) - (hour * 60)
        second = Math.floor(seconds) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60)
    }
    if (day < 10) {
        day = '0' + day
    }
    if (hour < 10) {
        hour = '0' + hour
    }
    if (minute < 10) {
        minute = '0' + minute
    }
    if (second < 10) {
        second = '0' + second
    }
    if (seconds > 0) {
        return {
            day,
            hour,
            minute,
            second
        }
    } else {
        return 0
    }
}
let countDownTime = new countDown();

// let ArrayBufferToHex = (ArrayBuffer) => {
//     // let result1 = Array.prototype.map.call(new Uint8Array(ArrayBuffer), x => ('00' + x.toString(16)).slice(-2)).join('');
//     let result = web3js.utils.bytesToHex(new Uint8Array(ArrayBuffer))
//     console.log(result, '====bufferToHex')
//     return result;
// }
const deepCopy = (obj, parent = null) => {
    // 创建一个新对象
    let result = {};
    let keys = Object.keys(obj),
        key = null,
        temp = null,
        _parent = parent;
    // 该字段有父级则需要追溯该字段的父级
    while (_parent) {
        // 如果该字段引用了它的父级则为循环引用
        if (_parent.originalParent === obj) {
            // 循环引用直接返回同级的新对象
            return _parent.currentParent;
        }
        _parent = _parent.parent;
    }
    for (let i = 0; i < keys.length; i++) {
        key = keys[i];
        temp = obj[key];
        // 如果字段的值也是一个对象
        if (temp && typeof temp === 'object') {
            // 递归执行深拷贝 将同级的待拷贝对象与新对象传递给 parent 方便追溯循环引用
            result[key] = deepCopy(temp, {
                originalParent: obj,
                currentParent: result,
                parent: parent
            });
        } else {
            result[key] = temp;
        }
    }
    return result;
}
const formatDecimal = (num, decimal) => {
    if (isNaN(num)) {
        return 0
    } else {
        num = num.toString()
        let index = num.indexOf('.')
        if (index !== -1) {
            num = num.substring(0, decimal + index + 1)
        } else {
            num = num.substring(0)
        }
        return parseFloat(num).toFixed(decimal)
    }
}
export { 
    formatDecimal, 
    capitalize, 
    timeHadelDay, 
    timeHadelSeconds, 
    escape2Html, 
    urlEncode, 
    deviceMethod, 
    countDownTime, 
    // ArrayBufferToHex, 
    deepCopy }