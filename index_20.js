console.log("for of")

// ["","",""]              // string in array
// [{},{},{}]             // object in array


let took = ["hitesh", "rohit", "virat"]
// let took = "rohit rikame"

for (const num of took) {                                 // num == i=0
    console.log(num)
}

let set = ["bat", "ball", "sun", "moon"]

for (const i of set) {
    console.log(i)
}

//Maps

let maps = new Map()
maps.set('mi', "rohit")
maps.set('rcb', "virat")
maps.set('kkr', "gurbaz")

for (const [key, value] of maps) {
    // console.log(key, value)
}

let sun = new Map()
sun.set("1", "first")
sun.set("2", "second")
sun.set("3", "third")

for (const [key, value] of sun) {
    console.log(key + ":-" + value)
}

const joke = {
    name: 'roy',
    num: 123
}

// for (const key of joke) {                                    //Not Working
//     console.log(key,joke[key])
// }



console.log("for in")

const myObject = {
    name: 'rock',
    number: 123,
    id: "ro@123",
    nickname: 'ro'
}

for (const key in myObject) {
    // console.log(`${key} value is ${myObject[key]}`)
}


const pro = ["tr", "er", "ko"];

for (const key in pro) {
    // console.log(pro[key])
}

// let map = new Map()                                   // for in not working on map
// map.set('mi',"rohit")
// map.set('rcb',"virat")
// map.set('kkr',"gurbaz")

// for (const [key,value] in map) {
//   console.log(key,map[key])
// }

console.log("for each")                           //for each with callback function

const jr = ["ronaldo", "steve jobs", "virat"];

// jr.forEach(function (item) {
//     console.log(item)
// })

let pop = ["west", "east", "north", "south"];


// jr.forEach((name)=>{
//     console.log(name)
// })

// function name(params) {
//     console.log(params)
// }
// jr.forEach(name)

// jr.forEach(function (item,index,arr) {
//     console.log(item,index,arr)
// })

const code = [
    {
        name: "rohit",
        pro: "programmer"
    },
    {
        name: "virat",
        pro: "cricketer"
    },
    {
        name: "ronaldo",
        pro: 'footballer'
    }

]

code.forEach((item) => {
    // console.log(item.name)
})

