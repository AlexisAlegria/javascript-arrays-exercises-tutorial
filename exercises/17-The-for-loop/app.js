var myArray = [2323,4344,2325,324413,21234,24531,2123,42234,544,456,345,42,5445,23,5656,423];

let sum = 0;

for (var index in myArray){
	sum += myArray[index];
}
var Avg = sum / myArray.length;

console.log(Avg);






	// var sum = myArray.reduce((a, b) => a + b, 0);
	// var Avg = sum / myArray.length;
	// console.log(Avg);
