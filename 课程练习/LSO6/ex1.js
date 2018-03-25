//【1】逻辑与、或的基本理解
console.log(2>1&&4<5);    //true
console.log(true&&(!2));    //false
console.log(false&&("2" == 2));    //false
console.log(false&&false);    //false

console.log(2>1||4<5);    //true
console.log(true||(!2));    //true
console.log(false||("2" == 2));    //true
console.log(false||false);    //false

//【2】短路原则
//操作数非布尔类型，&&短路原则
console.log(2&&4);         //4
console.log(0&&4);         //0
console.log({x:2}&&{name:"Jack"});         //{name:"Jack"}
console.log(null&&"hello");         //null
console.log({}&&"world");         //world

//操作数非布尔类型，||短路原则
console.log(2||4);         //2
console.log(0||4);         //4
console.log({x:2}||{name:"Jack"});         //{x:2}
console.log(null||"hello");         //hello
console.log({}||"world");         //{}