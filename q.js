// var mStr = "This is my test string to practice the JavaScript string function concepts.
// This is gonna be fun."
// 1. Find the length of the first sentence in the string.
// 2. Find the length of the second sentence in the string.
// 3. Find the first and last occurrence of the word "This".
// 4. Find the sub-string with length 12 from the START of the string mStr.
// 5. Find the sub-string with length 12 from the END of the string mStr.



console.clear()
// 1 & 2


var text = "This is my test string to practice the JavaScript string function concepts.This is gonna be fun.";
let a = text.split(/[.?!]/)
console.log(a)
console.log('Length of first sentence : ', a[0].length)
console.log('Length of second sentence : ', a[1].length)


//3

var mStr = "This is my test string to practice the JavaScript string function concepts."
var firstIndex = mStr.indexOf("This")
var lastIndex = mStr.lastIndexOf("This")
console.log("First occurrence:", firstIndex);
console.log("Last occurrence:", lastIndex);

// 4

console.log(mStr.slice(0, 12))
// or can use console.log(mStr.substring(0,12))

// 5 

console.log(mStr.slice(-12))
/*
or
console.log(mStr.substring(mStr.length-12))
*/