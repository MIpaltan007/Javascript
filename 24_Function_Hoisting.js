console.clear();

/*Sumof(5,22); // Function call is executed even before the function is defined
function Sumof(num1,num2){
    console.log(num1+num2);
}
Sumof(9,82)*/

/*Sumof(5,22); 
var Sumof=function(num1,num2){
    console.log(num1+num2);
}
Sumof(9,82)
//error
*/

/*var Sum=function(num1,num2){
    console.log(num1+num2);
}
Sum(8,92) // This Works well, 100 
*/

var total=10;
var sum=function(num1,num2){
    console.log(total)
    total=num1+num2
    var total
    console.log(total)
}
sum(90,8)