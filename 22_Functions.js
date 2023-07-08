console.clear()

// function mSum() {
// 	var num1 = 10;
// 	var num2 = 20;
// 	var sum = num1 + num2;
// 	console.log(sum)
// }

// mSum()

/*function mSum() {
	var num1 = 40;
	var num2 = 20;
	var sum = num1 + num2;
	
	return sum
	console.log('Im a print statement')
}

var totalSum = 100 + mSum()
console.log(totalSum);*/

function Greet(name){
    console.log("Hello "+name)
}
Greet("Aditya")
Greet("Adyasha")

function totalSum(num1, num2, num3) {
	console.log('num1 => ' + num1);
	console.log('num2 => ' + num2);
	console.log('num3 => ' + num3);
	if(num3 !== undefined) {	
		console.log(num1 + num2 + num3)	
	} else {
		console.log(num1 + num2);
	}
}

totalSum(2, 7);
// totalSum(22, 38, 33, 50, 43, 58);
// totalSum();