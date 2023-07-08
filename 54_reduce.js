console.clear()
const mArr=[1,2,3,4,5]
mArr.reduce((acc,item)=>{
    console.log(item);
    return acc+1;
},0)