class Person{
    constructor(name,year){
        this.name=name;
        this.YOB=year;
    }
    getDetails=()=>{
        return `Name: ${this.name} and Age:${2023-this.YOB}`
    }
}
class Pilot extends Person{
    constructor(name,year ,exp,type,licence){
        super(name,year);
        this.experience=exp;
        this.type=type;
        this.licence=licence;
    }
    getData=()=>{
        console.log(`Name: ${this.name} , Age:${2023-this.YOB} , Type:${this.type} , Experience:${this.experience} Years , Licence:${this.licence}`)
    }
}
const a=new Pilot('ABJ',2002,2,'PRIVATE','TC1234')
console.log(a)
a.getData()
console.log(3=='3')