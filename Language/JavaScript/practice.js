const person={
    "firstName":"Shailendra",
    LastName:"Singh",
    skill:[
        "html","css"
    ],
    getfullname: function(){
        console.log("Hello Shilendra singh")
        return `${this.firstName} ${this.LastName}`
    }

}

console.log(person.getfullname())









































