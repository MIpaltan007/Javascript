/*Take the values given below of length and breadth of a rectangle and check if it is square or not. Change values and see if your code works or not.*/

console.clear()
var l=200;
var b=200;
if(l==b){
    console.log("Square")
}else{
    console.log("Not a Square")
}

/*Write some code to check which number is greatest. Change values and see if your code works or not.*/

var num1=5, num2=8, num3=2,max=0;
if(num1>num2 && num1>num3){
    max=num1;
}
else if(num2>num1 && num2>num3){
    max=num2;
}
else{
    max=num3;
}
console.log(max);

/*A shop will give a discount of 10% if the cost of the purchased quantity is more than 1000.Suppose, one unit will cost 100. Change the value of numberOfItemPurchased and print total cost for the user.*/

var n = 15
var cost=n*100
var d=cost-(cost/10)
if(cost>1000){
    console.log(d)
}else{
    console.log(cost)
}
