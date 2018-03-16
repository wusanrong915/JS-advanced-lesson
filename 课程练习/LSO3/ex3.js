//Number操作

var n1 = 12345.6789;
console.log(n1.toFixed(2));//12345.68
console.log(n1.toPrecision(2));//1.2e+4
console.log(n1.toString());//12345.6789
console.log(n1.toExponential(2));//1.23e+4

console.log(NaN === NaN);//false
console.log(isNaN("12,3"));//true
console.log(Math.floor(3.8));//3 向下取整
console.log(Math.floor(-3.8));//-4 
console.log(Math.ceil(3.2));//4 向上取整
console.log(Math.ceil(-3.2));//-3
console.log(Math.round(-3.2));//-3  四舍五入
console.log(Math.round(-3.5));//-3  四舍五入 如果参数小数部分等于0.5 则舍去
console.log(Math.round(-3.8));//-4


//String操作
var str2 = "abcdef".slice(2);//cdef 从下标为2的字符开始截取
var str3 = "abcdef".slice(2,5);//cde
var str4 = "abcdef".slice(-2);//ef   倒着数截取
var str5 = "abcdef".slice(2,-2);//cd

var arr6 = "abcdef".split("c");//返回数组 （2）["ab", "def"]
var arr7 = "abcdef".split("c",1);//["ab"]
var arr8 = "abcdef".split("c",2);// （2）["ab", "def"]

var str9 = "abcdef".charAt(2);//c 查找字符串中某个位置的字符
var str10 = "abcdef".charCodeAt(3);//100 返回字符串中某个位置的字符的字符编码

var str11 = "abcdefabcdef".indexOf("d",1);//3 从指定位置查找 返回查找位置
var str12 = "abcdefabcdef".indexOf("d",4);//9

var str13 = "abcdefghijklmn";
var str14 = str13.substr(2,5);    // cdefg  后一个参数代表长度
var str15 = str13.substring(2,5);//  cde    后一个参数代表第几个结束（不包括他）

var str16 = "aaa".concat("bbb");// aaabbb  连接字符串
var str17 = "    abc def     \r\n  ".trim();//  abc def  返回已移除前导空格、尾随空格和行终止符的原始字符串

var str18 = "abcDEF".toLowerCase();//abcdef  转换成小写
var str19 = "abcDEF".toUpperCase();//ABCDEF  转换成大写

var indexOf = "abcDEFabcDEFabcDEF".indexOf("D",6);//9  从一个字符串中查找指定的字符，返回查找到的位置。
var lastIndexOf = "abcDEFabcDEFabcDEF".lastIndexOf("D");//15  从字符串的末尾开始查找，返回指定字符出现的最后位置。