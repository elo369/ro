console.log("Global & local")

// const a = 20;
// let b = 70;
// var c = 100;

if (true) {
    const a = 20;
    let b = 70;
    var c = 10;
    // console.log("inner:",b);
    // console.log(a)
    // console.log(c)
}

// console.log(a)
// console.log(b)
console.log(c)

function one() {
    const name="rohit";
    function two() {
        const username="hitman";
        console.log(name)
        // console.log(username)    this is requere/run for username variable
    }
    // console.log(username)        this is not requere/run
    two()
}
one()

function first() {
    let A = 20;
    function two() {
        let B = 30;
        console.log(A)
        console.log(B)
    }
    // console.log(B)
    two()
}
first()

if (true) {
    const name="rohit"
    if (name==="rohit") {
        const score = 88
        console.log(name + score)
    }
    // console.log(score)
}
// console.log(name)

if (true) {
    const A = 'A'
    if (A === 'A') {
        const B = 'B'; 
        console.log(B+A)
    }
    // console.log(A)
    // console.log(B)
}
// console.log(A)

//++++++++++++++++++++++++++++++++++++++++intresting+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(app(17))
function app(nmu) {
    return nmu + 3
}

// console.log(app2(7))
const app2= function (nmu2) {
    return nmu2 +4
}
console.log(app2(7))