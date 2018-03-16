//包装对象
var a=520;
var b=new Number(a);
console.log(a==b);//true
console.log(a===b);//false


//临时包装对象 不影响原始值
var str = "hello world";
console.log(str.length);//11
str.length = 3;
console.log(str.length,str);//11 "hello world"

var arr = [1,2,3,4];
console.log(arr.length);//4
arr.length = 1;
console.log(arr.length,arr);//1 [1]