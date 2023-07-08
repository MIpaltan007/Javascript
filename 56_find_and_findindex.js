console.clear()
const mArr=[-1,-2,-3,0,1,2,3]
const result=mArr.find(item=>{
    /*return true;*/ //return first element of array
    return item%2===0;//returns first even no
})
console.log(result);

const Index_result=mArr.findIndex(item=>{
    return (item%2===0 && item>=0) //Return Index of the first positive even number
})
console.log(Index_result)