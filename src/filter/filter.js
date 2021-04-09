/**
 * created by niujiahao on 2018/5/13
 */
/**
 * 首字母变大写，公共过滤器  alice →→→→→→→ Alice
 * @param {*value} value
 */
let capitalize = value => {
  if (!value) return ''
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1)
}

/**
 * 格式化时间
 */
let formatTime = (value, format) => {
  if (value == 0 || value == "" || !value) {
    return "-";
  }
  value = Number(value);
  if (isNaN(value)) {
    return "";
  }
  var _format = function (number) {
    return (number < 10 ? ('0' + number) : number);
  };
  var value1 = value.length > 10 ? value : value * 1000;
  var weekday_list = ['日', '一', '二', '三', '四', '五', '六'];
  var d = new Date(value1);
  var year = _format(d.getFullYear());
  var month = _format(d.getMonth() + 1);
  var day = _format(d.getDate());
  var hour = _format(d.getHours());
  var minutes = _format(d.getMinutes());
  var seconds = _format(d.getSeconds());
  var weekday = d.getDay();
  if (format == "YYYY-MM-DD") {
    return year + '-' + month + '-' + day;
  } else if (format == "MM-DD") {
    return month + '-' + day;
  } else if (format == "YYYY-MM-DD HH:MM:SS") {
    return year + '-' + month + '-' + day + '  ' + hour + ':' + minutes + ':' + seconds;
  } else if (format == "HH:MM:SS") {
    return hour + ':' + minutes + ':' + seconds;
  } else if (format == "HH:MM") {
    return hour + ':' + minutes;
  } else if (format == "YYYY/MM/DD weekday") {
    return year + '/' + month + '/' + day + '  ' + '星期' + weekday_list[weekday];
  } else if (format == "YYYY-MM-DD HH:MM") {
    return year + '-' + month + '-' + day + '  ' + hour + ':' + minutes;
  } else if (format == "YYYY-MM") {
    return year + '-' + month;
  } else if (format == "yyyy-mm-dd hh:mm") {
    return year + '年' + month + '月' + day + '日 ' + hour + ':' + minutes;
  } else if (format == "mm-dd hh:mm") {
    return month + '月' + day + '日 ' + hour + ':' + minutes;
  } else {
    return year + '-' + month + '-' + day;
  }
}

/**
 * 格式化时间差天数
 */
let rangHadelDay = value => {
  if (value == 0 || value == "") {
    return "";
  }
  value = Number(value);
  if (isNaN(value)) {
    return "";
  }
  var startTime = new Date().getTime(); //开始时间 
  var endTime = value.length > 10 ? value : value * 1000; //结束时间
  var date3 = endTime - startTime //时间差的毫秒数 
  var days = Math.floor(date3 / (24 * 3600 * 1000));
  return days
}

/**
 * 格式化商品价格(分)
 */
let formatPrice = (value, type) => {
  //type 1，左半部分价格2，右半部分价格
  if (isNaN(value)) {
    return 0;
  }
  const f = (Math.round(value * 100) / 100 / 100).toFixed(2);
  const s = f.toString().split(".");
  if (type == 1) {
    return s[0].toString()
  } else if (type == 2) {
    return s[1].toString()
  } else if (type == 3) {
    let price = s.join(".");
    if (Number(price) > 10000) {
      return parseInt(price / 10000) + 'w'
    } else {
      return s.join(".")
    }

  } else {
    return s.join(".")
  }
}

/**
 * 截取标题加省略号
 */
let ellipsText = (text, num) => {
  if (text) {
    if (text.length > num) {
      return text.substring(0, num) + '...';
    } else {
      return text;
    }
  } else {
    return text
  }
}

let ellipsMoblie = (text, num) => {
  if (text) {
    if (text.length > num) {
      num = num > 1 ? num : 1;
      return text.substring(0, num) + '****' + text.substring(text.length - num, text.length);
    } else {
      return text.substring(0, 3) + '****' + text.substring(text.length - 3, text.length);
    }
  } else {
    return text
  }
}

let ellipsAddress = (text, n1 = 5, n2 = 11) => {
  if (text) {
    if (text.length > n1) {
      n1 = n1 > 1 ? n1 : 1;
      return text.substring(0, n1) + '......' + text.substring(text.length - n2, text.length);
    } else {
      return text.substring(0, 5) + '......' + text.substring(text.length - 11, text.length);
    }
  } else {
    return text
  }
}
/**
 * 浏览量
 */
let computerLook = (num) => {
  if (!isNaN(num)) {
    num = Number(num);
    if (num >= 1000 && num < 10000) {
      num = Number((num / 1000).toString().match(/^\d+(?:\.\d{0,2})?/));
      return num + 'k';
    } else if (num >= 10000) {
      num = Number((num / 10000).toString().match(/^\d+(?:\.\d{0,2})?/));
      return num + 'w';
    } else {
      return num;
    }
  } else {
    return 0;
  }
}
let escape2Html = (str) => {
  if (!str || str.length == 0) {
    return '';
  }
  var arrEntities = {
    lt: '<',
    gt: '>',
    nbsp: ' ',
    '↵': ' ',
    amp: '&',
    quot: '"'
  };
  return str.replace(/&(lt|gt|nbsp|amp|quot);/gi, function (all, t) {
    return arrEntities[t];
  });
}
let escape2HtmlImg = (str) => {
  if (!str || str.length == 0) {
    return '';
  }
  return str.replace(/<img/g, '<img style="width:100%;height:auto;display:block" ');
}


/**
 * 格式化商品价格(分)
 */
let formatNumber = (value, type) => {
  //type 1，左半部分价格2，右半部分价格
  let num = type ? type : 5
  if (isNaN(value)) {
    return 0;
  }
  const f = Number(value).toFixed(num)
  return f
}

let numFormatMil = (num) => {
  var res = num.toString().replace(/\d+/, function (n) { // 先提取整数部分
    return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
      return $1 + ",";
    });
  })
  return res;
}

let prizeLevel = (key) => {
  let str = ""
  if (isNaN(key)) {
    return "-"
  }
  switch (Number(key)) {
    case 1:
      str = "一"
      break;
    default:
      break;
  }
  return str;
}

export {
  capitalize,
  formatTime,
  formatPrice,
  ellipsText,
  ellipsMoblie,
  ellipsAddress,
  rangHadelDay,
  computerLook,
  escape2Html,
  escape2HtmlImg,
  formatNumber,
  numFormatMil
}
