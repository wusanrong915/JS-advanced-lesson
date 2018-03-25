//算数 逻辑 关系运算符
//写判断语句的时候，写成2==a 尽量避免a==2 因为可能会误写成a=2
console.log("1"+"2"); //"12"
console.log("1"+2); //"12"
console.log(1+{}); //"1[object Object]"
console.log(true+true); //2
console.log("5"-2); //3

var x = "1";
console.log(++x); //2 
var x = "1";
console.log(x+1);//11

var i=1;
var y = ++i + ++i + ++i;
console.log(y);  //9 2+3+4

//==和===的不同
console.log(3===3);   //true
console.log(3==="3");   //false
console.log(3=="3");   //true
console.log(3==new String(3));   //true
console.log(3===new String(3));   //false

var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"===obj1);  //false
console.log(obj1 == obj2);  //false  !!!  切记 容易出错
console.log(obj1 === obj2); //false
console.log(obj1 == new String("xyz"));  //false

//！=是==的逆运算 ！==是===的逆运算
var obj1 = new String("xyz");
var obj2 = new String("xyz");
console.log("xyz"!=obj1);//true
console.log(obj1 !== obj2);//t
console.log(obj1 != obj2);//t
console.log(obj1 != new String("xyz"));//t

//引用类型转换成基本类型
console.log(2 == 2);     //true
console.log(new Number(2) == new Number(2));     //false
console.log(2 == new Number(2));     //true