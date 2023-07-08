console.clear()
//Q1. Write a JavaScript program to find the longest string from a given array.

/*var Array= ['asdf', 'sd', 'something','right','position'];
var i,max=0,str=0;
    
for(i=0;i<Array.length;i++){
    if(Array[i].length>max){
        max=Array[i].length
        str=Array[i]
    }
}
console.log("Longest String=> " + str + " Length=> " + max)*/

//Q2. Write a JavaScript program to remove '0', false, undefined, null, NaN, '' from given array.

var Arr= [NaN, 0, 15, false, -22, '',undefined, 47, null,94];
var j,c=0;
for(j=0;j<Arr.length;j++){
    if(Arr[j]==Nan || Arr[j]==0 || Arr[j]==false || Arr[j]==null || Arr[j]=='' || Arr[j]==undefined){
        Arr[j].pop()
    }
}

for(j=0;j<Arr.length;j++){
    console.log(" "+Arr[j])
}
