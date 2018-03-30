//11111111111111函数对象
function foo(){}
console.log(foo); //  ƒ foo(){}
console.log(typeof foo); //  function
console.log(foo instanceof Object); // true
console.log(foo instanceof Function); // true
console.log(foo === window.foo); // true
//如果变量是函数（函数对象）时，typeof此对象，返回function，而非object 
console.log(typeof Function);//  function
console.log(typeof Array);	 //  function
console.log(typeof Date);	 //  function
console.log(typeof Error); 	 //  function
console.log(typeof Math);	 //  object
console.log(typeof JSON);	 //  object

console.log(typeof new Function());// function 
console.log(typeof new Array());	 //  object
console.log(typeof new Date());	     //object

//22222222222222函数对象属性 arguments length caller callee prototype
//arguments 相当于数组的一个对象 
var args = Array.prototype.splice.call(arguments,0); //相当于变成数组形式

//函数对象属性之caller 获取调用当前函数的函数。 caller属性只有当函数正在执行时才被定义

//函数对象属性之callee 返回正被执行的 Function 对象，
//即指定的 Function 对象的正文
//callee 属性是 arguments 对象的一个成员
//该属性仅当相关函数正在执行时才可用。通常这个属性被用来递归调用匿名函数
var func = function(n){
    if (n <= 0)
        return 1;
    else
        return n * func(n - 1);
        //return n * arguments.callee(n - 1);
};
console.log(func(4));  //24 4*3*2*1

//函数对象属性之 prototype
//获取对象的原型。每一个构造函数都有一个prototype属性，指向另一个对象。
//这个对象的所有属性和方法，都会被构造函数的实例继承。
function Man(name, age) {
    this.name = name;
    this.age = age;
}
Man.prototype.sex = "M";
Man.prototype.sayHi = function () {
    console.log("Hi,i'm",this.name);
};
var li = new Man("Leo", 10);
li.sayHi();//  Hi,i'm Leo
console.log(li.sex);//M

Man.prototype.isStrong = true;
console.log(li.isStrong);//true

//333333333333333333函数对象方法 call apply bind  （toString valueOf返回对象的字符串表示形式。）
//函数对象方法之 call 调用一个普通函数或对象的方法时，用另一个对象替换当前对象
//与apply方法不同的地方是，apply的第二个参数类型必须是Array，
// 而call方法是将所有的参数列举出来，用逗号分隔
