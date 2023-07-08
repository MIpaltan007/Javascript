console.clear();
/*let mArr1=[1,2,3,4,5]
console.log([...mArr1])
*/

/*let mArr1=[1,2,3,4,5]
let mArr2=[...mArr1]
mArr1.push(6)
console.log(mArr1)
console.log(mArr2)
*/

/*let mArr1=[1,2,3,4,5]
let mArr2=[6,7,8]
let mArr3=[...mArr1,...mArr2]
let mArr4=[0,...mArr1,...mArr2,9]
console.log(mArr3)
console.log(mArr4)
*/

let mObj1={
    name:'John',
    lastname:'Clark'
}

let mObj2={
    Age:29
}

let mObj3={...mObj1,...mObj2}
console.log(mObj3)