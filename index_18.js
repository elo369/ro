console.log("If and And")

const temprature =40

if (temprature < 38) {
    console.log("greater than 40 temprature")
}
else{
    console.log("less than 40")
}

// console.log("execute")
// <,>,<=,>=,==,!=,===,!==

const nav =10;

// if (nav > 11) {
//     console.log("this is greater than 8")
// }else{
//     console.log("this is less than 15")
// }

if (nav > 8) {
    const play = "pay"
    console.log(`this is ${play}`)
}
// console.log(`this is ${play}`)

// const balance = 1000
// if(balance > 500)console.log("test"),console.log("test2");

const value = 1000

if (value < 500) {
    console.log("this is less than 500")
}else if (value < 700) {
    console.log("this is less than  700")
} else if( value < 800){
    console.log("this is less than 800")
}else{
    console.log("this is 1000")
}

const logIn = true       // AND condition
const debit = true

if (logIn && debit && 2==2) {
    console.log("successfully")
}else{
    console.log("unsuccessfully")
}

const google =true        //OR condition
const chatgpt = false

if (google || chatgpt) {
    console.log("search successfully")
}else{
    console.log("no search")
}

console.log("Swith")

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

const num = 3

switch (num) {
    case 1:
        console.log("this is 1")
        break;
    case 2:
        console.log("this is 2")
        break;
    case 3:
        console.log("this is 3")
        break;
    case 4:
        console.log("this is 4")
        break;

    default:
        console.log("default")
        break;
}

const player = "rohit"

switch (player) {
    case "virat":
        console.log("jersey number 18")
        break;
    case "bumrah":
        console.log("jersey number 93")
        break;
    case "rohit":
        console.log("jersey number 45")
        break;
    case "jadeja":
        console.log("jersey number 8")
        break;

    default:
        console.log("default")
        break;
}

const var1 = "A"

if (var1) {
    console.log("true")
}else{
    console.log("false")
}

// falsy value 
// false,0,-0,BigInt 0n,"",null,undefined,NaN

//truthly values
//"0","false"," ",[],{},function(){}

if (var1.length === 1) {
    console.log("R");
}


const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("empty Object")
}

//nullish coalscing operator (??): null undefined

let op;
// op=null ?? 34
// op = 10 ?? 23 ?? 34
// op = undefined ?? null                       //null
// op = null ?? undefined                       //undefined
// op = undefined ?? 123
// op = null ?? 123
// op = null ?? "rohit" ?? undefined

console.log(op)

// Terniary operator

//condition ? true : false
const iceTea =100
iceTea >=80 ? console.log("more than 80"): console.log("less than 80")

let laptop = 200;
laptop >=500 ? console.log("200 se kam paise hai") : console.log("200 se jada hai")

const score =200;
score > 201 ? console.log("this is 200") : console.log("greater than 200")