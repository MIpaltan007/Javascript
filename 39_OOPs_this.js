console.clear()
var person={
    firstname:"Jack",
    YOB:1990,
    Job:"Pilot",
    getName:function(){
        console.log(this.firstname)
    },
    parents:{
        firstname:"Ryan",
        YOB:1985,
        Job:"Pilot",
        getName:function(){
            console.log(this.firstname)
        }
    }
}
person.getName()
person.parents.getName()