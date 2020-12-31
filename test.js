console.log('========开始=============');
var n = 0;
setTimeout(function(){
    n++;
    console.log(n);
},2000)//1s == 1000ms；
 
var a = function(){
    console.log('我是a函数');
}
setTimeout(a,2000);