console.clear()

const mArr=[1,2,3,4,5]
/*let nArr=[]
for(let i=0;i<mArr.length;i++){
    nArr.push(mArr[i])
}
console.log(nArr)
*/

/*const doubling=(item)=>{
    return item*2;
}
for(let i=0;i<mArr.length;i++){
    nArr.push(doubling(mArr[i]))
}
console.log(nArr)*/

let nArr=mArr.map((item,i)=>{
    console.log(`Item at pos ${i} is ${item}`);
});
console.log(nArr)