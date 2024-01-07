console.log("functions")

// function name(app,pose) {
//     console.log( app+pose)
// }
// const num =name(5,2)
// console.log(num)

function name() {
    console.log("R")
    console.log("O")
    console.log("H")
    console.log("I")
    console.log("T")
}
name()

function add(num1,num2) {
    console.log(num1+num2)   // with this value are undefined
return num1+num2
}

const result = add(4,4)
console.log("result: ",result)

function name(nav) {
    return `${nav} this is my name`
}

console.log(name("rohit"))

function no(num1,num2) {
    // let res = num1 * num2
    // return res
    return num1+num2
}
const nums = no(5,5)
console.log("this is: ",nums)

// function user(log ="sam") {
//     if (log === undefined) {
//         console.log("enter your a username")
//         return
//     }
//     return `${log} logged your firm`
// }
// console.log(user("hitesh"))


function calculateCartPrice(...value) {                // Ans:- [ 100, 200, 300, 400 ]
    return value
}

// function calculateCartPrice(value1,value2,...value){    // Ans:-  [ 300, 400 ]
//     return value
// }

console.log(calculateCartPrice(100,200,300,400))


//example object with function
const obj ={
    name:"rohit",
    course:"JavaScript"
}

function toy(anyObject) {
    return `This is my ${anyObject.name},Course is a ${anyObject.course} `
}

console.log(toy(obj))

//example object and function
const cool = {
    team: "u mumba",
    player:"virat kohli"
}

function good(anyObj){
    console.log( ` This is kabbadi team ${anyObj.team}, This is world best cricketer ${anyObj.player}`)
}

good(cool)

//example with object and function
function management(any) {
    console.log(`this score ${any.score} and this is player ${any.player}`)
}

management({
    score:85,
    player:"chiku"
})

//example array with function
const array = [1,2,3,4,5]

function returnValueSecond(getArray) {
    return getArray[1]
}

console.log(returnValueSecond(array))
// console.log(returnValueSecond([100,200,300,400]))       //200


function person(man ) {
    if (!man ) {
        console.log("please what is your name")
        return
    }
    return `${man} enter your chat`
}

console.log(person("ro"))

