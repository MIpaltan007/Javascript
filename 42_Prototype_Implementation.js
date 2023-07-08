console.clear()

var person={
    name:"Jack",
    YOB:1990,
    Job:"Secret Agent"
}

function Person(pName,pYOB,pJob){
    this.name=pName;
    this.YOB=pYOB;
    this.Job=pJob;
    
}
Person.prototype.calculateAge=function(){
    console.log(2023-this.YOB);
}
Person.prototype.updateYOB=function(nYOB){
    this.YOB=nYOB;
}
var john=new Person('John',1992,'Pilot')
//console.log(john);
john.calculateAge();
john.updateYOB(1990);
john.calculateAge();
var claire=new Person('Claire',1994,'Doctor')
claire.calculateAge();