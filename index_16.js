console.log("Arrow")

const course = {
    courseName: "JavaScript",
    price: "999",
    welcome: function () {
        console.log(`${this.courseName} teach this course`)
        console.log(this)
    }
}
console.log(this)     //   Ans:-{}

course.welcome()
course.courseName = "typescript"
course.welcome();



// function A() {                        //undefined
//     username:"ronaldo",
//     console.log(this.username)
// }
// A()


// const id=function () {                 //undefined
//     footballer:"ronaldo",
//     console.log(this.footballer)
// }
// id()


// const mr = ()=>{                      //undefined
//     name:"hitesh",
//     console.log(this.name)
// }
// mr()

const ipl = (num1, num2) => {
    return num1 + num2
}
console.log(ipl(9, 8))


const mi = (num1, num2) => num1 + num2
console.log(mi(23, 56))

const root = (num1, num2) => (num1 + num2)
console.log(root(230, 561))

const fetch = () => ({ name: "ronaldo" })
console.log(fetch(45, 97))

// const myArray = [2,3,5,9]

// myArray.forEach()

// const chai = function name(params) {
//     console.log(this)
// }
// chai()

// const cofee = ()=>{
//     console.log(this)
// }

// cofee()