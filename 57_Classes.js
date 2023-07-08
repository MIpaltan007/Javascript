console.clear()

/*function Person(name,year){
    this.name=name;
    this.YOB=year;
    this.getDetails=function(){
        return "Name: "+this.name+" Age:"+(2023-this.YOB);
    }
}

var a=new Person('ABJ',2002)
console.log(a.getDetails())
*/

class Person{
    constructor(name,year){
        this.name=name;
        this.YOB=year;
    }
    getDetails=()=>{
        return `Name: ${this.name} and Age:${2023-this.YOB}`
    }
}
var John=new Person('ABJ',2002)
console.log(John.getDetails())