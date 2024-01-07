function e(num) {
    return num *5
}

e.power =2

console.log(5)
console.log(e.power)
console.log(e.prototype)

function pass(name,price) {
    this.name =name;
    this.price=price;
}

pass.prototype.increment=function () {
   console.log( this.price + 2)
}

pass.prototype.print= function () {
    console.log(`price if chai ${price}`)
}

const chai=new pass("chai",25);
const tea = pass ('tea',10);

chai.print()
chai.increment()


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

// NOTE :- Anything is object in JavaScript

