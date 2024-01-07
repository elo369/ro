console.log("object")
//const tinderUSer = new object{}             //singleTon object
const tinderUser = {}

tinderUser.id = 45
tinderUser.email = "rohitrikame33@gmail.com"
tinderUser.name = "rohit rikame"

console.log(tinderUser)
const ro = {}

ro.game="rohit"
ro.idk=123
ro.password="hacker"

// console.log(ro)


const play = {
    userName: {
        fullName: {
            Name: "rohit",
            id: 22,
        }
    }
}

// console.log(play.userName.fullName.id)

const obj1 = {a:1,b:2}
const obj2 = {c:3,d:4}
const obj3 = {e:5,f:6}

// const obj4= {obj1 ,obj2,obj3}
const obj4 = Object.assign( obj1, obj2, obj3)

// const obj4 = {...obj1,...obj2,...obj3}
console.log(obj4)

const users = [
    {
        id:22,
        name:"rohit"
    },
    {
        id:22,
        name:"rohit"
    },
    {
        id:22,
        name:"rohit"
    }
]

console.log(users[1].name)
// console.log(users[2].id)

// console.log(tinderUSer)

// console.log(Object.keys(tinderUSer))
// console.log(Object.values(tinderUSer))
// console.log(Object.entries(tinderUSer))
// console.log(tinderUSer.hasOwnProperty('name'))


// +++++++++++++++++++++++++++++++++++++++++++++++++OBJECT(2)+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log("Json")

const cose = {
    course : "JavaScript",
    teacher:"hitesh",
    price:"free"
}

// course.teacher

const {course}=cose
const {teacher:teach}=cose
const {price}=cose

console.log(price)
console.log(teach)
console.log(course)

//Apl

// {
//     "name":"rohit",
//     "couseName":"JavaScript",
//     "price":"free"
// }
// [
//     {},
//     {},
//     {}
// ]
