console.log("Number and Maths")

const score = 400
console.log(score)

const balance = new Number (100);
console.log(balance);

console.log(balance.toString().length)   //toString() this is method include number to string for excess length
console.log(balance.toFixed(6))

const number = 143.344
console.log(number.toPrecision(3))

const money = 1000000
console.log(money.toLocaleString('en-IN'))


//+++++++++++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-6));
console.log(Math.round(3.6));                //4
console.log(Math.ceil(5.1));                 //6
console.log(Math.floor(6.9));                //6
console.log(Math.max(3,7,1));
console.log(Math.min(2,5,9));

console.log(Math.random())
console.log((Math.random()*10) +1)
console.log(Math.ceil(Math.random()*10) +1)

let min = 100
let max = 500

console.log(Math.floor(Math.random()*(max-min)) +min )

let more =200;
let low = 400;

console.log(Math.floor(Math.random()*(low - more))+more)

let bada =1000
let chota = 500

console.log(Math.floor(Math.random()*(bada-chota)+chota))