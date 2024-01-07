console.log("Data types revision")

// Primitive

// 7 types : string,Number,Boolearn,null,undefined,Symbol,BigInt

const score = 100                   //number
const scoreValue = 100.33                //number

const isLoggedIn =false
const outSie = null
let useSmall= undefined
let usetype;

const id =Symbol('123')
const idk =Symbol('123')

console.log(id === idk)                    //false  return value are not same


const bigNumber =123823838032n
console.log(typeof bigNumber)
console.log( bigNumber)

// Reference (Non primitive)

// Array, Objects, Functions

let Array = [1,2,3,4,5];

let Obj = {
    name: "rohit",
    age : 34,
}

let pop = function () {
    console.log('this is obejct functions')
}

console.table(typeof pop)             //object function
console.table(typeof Obj)
console.table(typeof Array)
console.table(typeof  bigNumber)
console.table(typeof  id)

// Javascript is a dynamically typed language.