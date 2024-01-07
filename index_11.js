console.log("Array-2")

const cricketer = ["virat","rohit","bumrah"];
const footballer = ["ronaldo","romas","sunil"];

// cricketer.push(footballer)
// console.log(cricketer)
// console.log(cricketer[3][2])

let mix = cricketer.concat(footballer)
console.log(mix)

// const new_sport = [...cricketer,...footballer]
// console.log(new_sport)

// const another_Array = [1,2,3,4,[5,6,7],[8,9,[12,34]],5,6,7]
// console.log(another_Array.flat(2))


console.log(Array.isArray([1,2,3,4]));              //check array
console.log(Array.from("Rohit"));                   //convert
console.log(Array.from({name:"rohit"}));          //intresting

let mark1 = 100;
let mark2 = 200;
let mark3 = 300;

console.log(Array.of(mark1,mark2,mark3))

let A = 800;
let B = 900;
let C = 1000;

console.log(Array.of(A,B,C))