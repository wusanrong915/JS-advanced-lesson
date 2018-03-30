//高阶函数
    //111111111函数作为参数被传递（最常见的形式：回调函数）
    function add(x, y, f) {
        return f(x) + f(y);
    }
    add(2,3,function(z){return z*z;});//13 2*2+3*3
    add(2,-3,Math.abs);//5  绝对值
    add(2,3,Math.sqrt);//3.1462643699419726  sqrt相当于2的开平方加3的开平方

    function foo(x,y,c1,c2){
        return 2*c1(x)-3*c2(y);
    }
    function f1(x){
        return x+1;
    }
    function f2(x){
        return x-1;
    }
    function f3(x){
        return x*x;
    }
    foo(1,1,f1,f3);//1   2*2-3*1=1
    foo(1,1,f3,f2);//2   2*1-3*0=2
    foo(1,1,f1,f2);//4   2*2-3*0=4

    //222222222函数作为返回值输出（与闭包有紧密联系）
    var x=12;
var obj = {
    x:34,
    fun2:function(){
        console.log(this.x,this);
    }
};
var fun1 = function () {
    return function fun2() {
        return this.x;//若改为 return this;
    }
};
obj.fun3 = fun1;
obj.fun4 = fun1();
console.log("输出：",obj.fun3());//输出 ƒ fun2() {return this.x;//若改为 return this;}
console.log("输出：",obj.fun3()());//输出 12
console.log("输出：",obj.fun4());//输出 34