console.log("String")

let name = "rohit";
let who = "kon";

console.log(name+ who)

console.log(`This is my name ${name} but ${who}`);

let str = "Virat-bat"
let str1 = "   Virat-batgj   "
console.log(str1.trim())
console.log(str.split('-'))
console.log(str.replace('Vi','ro'))
console.log(str.substring(0,5))
console.log(str.slice(1,7))
console.log(str.charAt(5));
console.log(str.charCodeAt('r'))     //86
console.log(str.concat('ro'))
console.log(str.includes('Virat-bat'))   //true
console.log(str.match('vi'))
// console.log(str.bold())
// console.log(str.anchor())
// console.log(str.fixed())
console.log(str.indexOf('r'))

let ro = new String ("hitesh");
console.log(ro)