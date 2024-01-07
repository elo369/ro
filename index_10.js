console.log("Array-1")

const myArr = [0,1,2,3,4,5]
console.log(myArr[3])
const myHeros = ["virat","surya","bumrah"]
console.log(myHeros[2])

const myArr2 = new Array(1,2,3,4,5);
console.log(myArr2);

// Array methods

// console.log(myArr.push(6))
// console.log(myArr.push(9))
// console.log(myArr.pop())

// console.log(myArr.unshift(3))
// console.log(myArr.shift())

console.log(myArr.includes(3));
console.log(myArr.indexOf(3));

// const newArr = myArr.join()       //create array object to string
// console.log(newArr)
// console.log(typeof newArr)
console.log(myArr);

//slice,splice

console.log('A',myArr);

console.log(myArr.slice(1,3))
console.log(myArr)

console.log('B',myArr);
console.log(myArr.splice(1,3))

console.log(myArr)

// let AB = [6,7,8,9,0]

// console.log("A",AB)
// console.log(AB.slice(1,3))

// console.log("B",AB)

// console.log(AB.splice(1,3))
// console.log("c",AB)