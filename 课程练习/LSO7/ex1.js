//【1】三种方式定义函数 
   //函数表达式
var max = function (a,b){
    return a>b?a:b;
};
max(2,3);       //3
  //函数声明
function max(a,b){
    return a>b?a:b;
}
max(2,3);     //3
   //Function构造函数实例化
   var max = new Function("a","b","return a>b?a:b");
   max(2,3);   //3


//【2】函数调用
var x=45;
var test = function(){
    console.log(this.x);
}
var obj ={
    x:23
};
obj.test = test;
obj.test();//23
test();//45

var x=45;
var obj = {
    x:23,
    test:function(){
        function foo(){
             console.log(this.x);
		}
        foo();
	}
};
obj.test();//45 嵌套的函数this指的是windows下的函数，而不是obj；

//【3】 吸星大法   
    //通过call( )和apply( )间接调用（this为函数对象的call/apply方法的首个参数，移花接木）
objA={sex:"male"};
objB={sex:"female"};
objA.foo = function(){
	console.log(this.sex);
};
objA.foo();//male
objA.foo.call(objB);//female
objA.foo.apply(objB);//female
    //实例2
var fish = {
    name:"fish",
    swim:function (m,n) {
        console.log("i'm "+this.name+" i cam swim ___",m,n);
    }
};
var bird = {
    name:"polly",
    fly:function(m,n){
        console.log("i'm:"+this.name+" i can fly ___",m,n);
    }
};
var me = {
    name:"ABC"
};

bird.fly(5,6);            //i'm:polly i can fly ___ 5 6
fish.swim.call(me,3,4);   //i'm ABC i cam swim ___ 3 4
bird.fly.call(me,7,8);    //i'm:ABC i can fly ___ 7 8