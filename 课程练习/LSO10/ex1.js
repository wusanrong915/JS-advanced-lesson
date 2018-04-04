//作用域  全局和局部
var a = 10,
    b = 20;
function fn() {
    var a = 100,
        c = 200;
    //console.log(a,b,c,d); 报错 d不能被访问到
    function bar() {
        var a = 500,
            d = 600;
        console.log(a,b,c,d);//500 20 200 600
    }
    bar();
}
fn();
//console.log(a,b,c,d);  报错 c d不能被访问到

//词法作用域 （静态性）词法作用域不会被函数从哪里调用等因素影响
//通过new Function实例化的函数对象，不一定遵从静态词法作用域
var name = "Jack";
function echo() {
    console.log(name);
}
function foo() {
    var name = "Bill";
    echo();
}
foo();// Jack


//ES5中无块作用域 。变量污染、变量共享问题,尤其是异步执行的情况下。如果是两个单独的文件的情况下，更容易造成变量污染
//使用IIFE来解决上述问题

//执行上下文和调用栈