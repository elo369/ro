console.log("conversion of data types");


let score = "23"
console.log(score)
console.log(typeof score)

let valid = Number(score)
console.log(valid)
console.log(typeof valid);

// let num = "45aa";
// console.log(num);
// console.log(typeof num);

// let secondNum = Number(num)
// console.log(secondNum)
// console.log(typeof secondNum)



// "33" => 33       // Notes
// "33as" => NaN
// true => 1 : false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 1

let tru = Boolean(isLoggedIn);
console.log(tru);

// 1 => true ; 0 => false     //notes
//"" => false
// "rohit" => true


let ro = 33

let varo = String(ro);
console.log(varo);
console.log(typeof varo);

/***********************************operation*********************************************************************/

let value= 3;
let negvalue = -value;
console.log(negvalue);

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**2)
// console.log(2/3)
// console.log(2%2)

let str1 = "hello"
let str2 = 'rohit'

let str3 = str1+str2
console.log(str3)

console.log("1" +2)
console.log(1 +'2')
console.log("1"+2+1)      // output 121
console.log(2+2+"3")     //output 43

// console.log((3+4) * 5 % 3);

// console.log(+true);    //1
// console.log(+"")       //0

let num1,num2,num3

num1 = num2 = num3 =5+4

let gameCounter =100
++gameCounter;      //profix
gameCounter++;       // postfix
console.log(gameCounter);