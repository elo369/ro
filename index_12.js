console.log("object")

//singleton
//object.create

// object literals

const mySym = Symbol("myName");

const obj = {
    name: "rohit",
    "full name":"rohit rikame",
    email: "rohtirikame@gmail.com",
    professional: "programmer",
    id: "elon musk",
    [mySym]:"myName"
}

// console.log(obj.name)
console.log(obj["name"])
console.log(obj["full name"])
console.log( obj[mySym])


obj.email="rohitrikame@chatgpt.com"
// Object.freeze(obj)
obj.email="rohitrikame@microsoft.com"
console.log(obj)

obj.greeting = function () {
    console.log("Hello World")
}

console.log(obj.greeting())

obj.greeting1 = function(){
    console.log(`Hello ${this.name}`)
}

console.log(obj.greeting1())

obj.hero= function(){
    console.log("this is hero");
}
obj.hero()

let y = Symbol("sun");

let A = {
    name:"gully",
    id:123,
    [y]:"sun",
}

console.log(A["name"])
console.log(A)

A.id=34;
Object.freeze(A)
A.id=56

console.log(A)