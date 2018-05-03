//非严格模式
function thisTest(){
	console.log(this===window);
}
thisTest();//true

var a=10,b="Hi";
function thisTest(){
	this.a=20;
	delete this.b;
	this.c="新添加的全局变量";
}
thisTest();
console.log(a,c);//20 "新添加的全局变量"

//对象方法中的this
var point ={
    x:0,
    y:0,
    moveTo : function(x,y){
        this.x=x;
        this.y=y;
        }
    };
    point.moveTo(1,1)
    console.log(point);//{x: 1, y: 1, moveTo: ƒ}