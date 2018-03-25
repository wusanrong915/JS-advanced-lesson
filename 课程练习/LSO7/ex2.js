//【1】函数参数数量问题
    //实参大于形参
    function test() {
        console.log(arguments);
        console.log(Array.prototype.slice.call(arguments));//把调用方法的参数截取出来
        var s = "";
        for (var i = 0; i < arguments.length; i++) {
            s += arguments[i];
        }
        return s;
    }
    test("hello,", "world!");//"hello,world!"

    //实参小于形参   少的参数值为undefined、可使用||来给出默认值
    var sum = function(a,b,c){
        b = b||4;
        c = c||5;
        return a+b+c;
    };
    console.log(sum(1,2,3));  //1+2+3=6
    console.log(sum(1,2));    //1+2+5=8
    console.log(sum(1));      //1+4+5=10

//【2】传递
    //值传递
var a = 1;
function foo(x) {
    console.trace("a:",a," x:",x);//a:1,x:1
    x = 2;
    console.trace("a:",a," x:",x);//a:1,x:2
}

console.trace("a:",a);//a:1
foo(a);
console.trace("a:",a); //a:1
    //引用传递
var obj = {x:1};
function fee(o){
    console.trace("obj.x :",obj.x," o.x :",o.x);//obj.x : 1  o.x : 1
    o.x = 3;
    console.trace("obj.x :",obj.x," o.x :",o.x);//obj.x : 3  o.x : 3
}

console.trace("obj.x :",obj.x);//obj.x : 1
fee(obj);
console.trace("obj.x :",obj.x);//obj.x : 3