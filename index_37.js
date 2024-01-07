const descriptor=Object.getOwnPropertyDescriptor(Math,"PI");

console.log(descriptor)

// console.log(Math.PI)
// Math.PI = 4;
// console.log(Math.PI)

const chai = {
    name:"super",
    price:12,
    shop:"siuu",

    brand:function () {
        console.log("jew")
    }
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

Object.defineProperty(chai,'name',{
    writable: true,
    enumerable: true,       
    configurable: true
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for (const [key,value] of Object.entries(chai)) {
    if (typeof value !== 'function') {       
        console.log(`${key}:${value}`)
    }
}




