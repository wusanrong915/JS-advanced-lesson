//闭包

function creatInc(startValue){
	return function(step){
		startValue+=step;
		return startValue;
	}
}
var inc = creatInc(5);
console.log(inc(1)); //6
console.log(inc(2)); //8