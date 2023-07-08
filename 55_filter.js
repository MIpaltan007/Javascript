console.clear()
const numArr=[1,2,3,4,5,6,7]
const newArr=numArr.filter(item=>{
    //return true;
    return item%2==0;
})
console.log(newArr)