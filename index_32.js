// let a = " rohit    ";
// let b = "virat     "

// console.log(a.trueLength);

let array = ["rohit", "surya"];

let obj = {
    name: "virat",
    team: "india",

    greet: function () {
        console.log(`${this.name}`)
    }
}

Object.prototype.ro = function () {
    console.log(`${this.team}`)
    // console.log("this is my array and object")
}

Array.prototype.jo=function () {
    console.log("this is array")
}

// obj.ro()
// array.ro()
// obj.jo()
array.jo()

let A = {
    name:"rohit",
    id:1234
}

let me = ["sky","bumrah"]

//inheritance

let c={
    name:"bumrah"
}

let d={
    roll:"bowler"
}

let e={
    no:93
}

let h={
    team:"india",
    __proto__:c
}

console.log(h)

// modern syntax
Object.setPrototypeOf(c,d)

let another="bumrah   "

String.prototype.trueLength=function () {
    console.log(`${this.trim().length}`)
}

another.trueLength()
"rhoitrikame".trueLength()
"viratkohli".trueLength()
