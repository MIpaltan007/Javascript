console.clear();

const name="Aaron James Finch"
const nameArr=name.split(' ')
console.log(nameArr)
name.split(' ')

/*let firstname=nameArr[0];
let middlename=nameArr[1];
console.log(firstname)
console.log(middlename)*/

/*let[firstname,middlename]=nameArr;
console.log(firstname)
console.log(middlename)*/

let [firstname, , lastname]=nameArr;
console.log(firstname)
console.log(lastname)