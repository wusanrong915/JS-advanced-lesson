//switch 语句在比较值时使用的是全等操作符,因此不会发生类型转换
 
 var j = 23;               //case_111
 var j = "23";             //case_222
 var j = new String("23"); //case_default
 var j = new Number(23);   //case_default
 switch (j){
    case 23:
        console.log("case_111");
        break;
    case "23":
        console.log("case_222");
        break;
    case new Number(23):
        console.log("case_333");
        break;
    default:
        console.log("case_default");
}
//从满足第一case处开始执行，直到遇到break为止，若都没有break则直到default结束为止
var year = 2017,
    month = 5,
    date = 20,
    sum = 0;
switch(month-1){
    case 11:
        sum += 30;
    case 10:
        sum += 31;
    case 9:
        sum += 30;
    case 8:
        sum += 31;
    case 7:
        sum += 31;
    case 6:
        sum += 30;
    case 5:
        sum += 31;
    case 4:
        sum += 30;
    case 3:
        sum += 31;
    case 2:
        sum += year%4==0&&year%100!=0||year%400==0?29:28;
    case 1:
        sum += 31;
    default:
        sum += date;
}
console.log(sum);  //140 即2017年5月20日是一年中的第140天 

//for...in遍历
    //for ... in 遍历数组
var arr = [2,,"33"];
for(var i in arr){
    console.log(i,arr[i]);
}         
//0 2
//2 33


//for ... in 遍历对象
var obj = {x:10,y:20,z:"30"};
for(var k in obj){
    console.log(k,obj[k],typeof obj[k]);
}
//x 10 number
//y 20 number
//z 30 string