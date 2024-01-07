// filter,map,reduce
console.log("filter")     

let num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const value = num.forEach((item)=>{                 //not working
    // console.log(item)
    // return item
})
console.log(value)

// let number = num.filter((no)=> no>=7)                 //with paramtits
let number = num.filter((no) => {
     return no >= 8 
})                                                      // curly bresses is create scope , then use return

console.log(number)

let nan = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let mam = []

nan.forEach((jaj) => {
    if (jaj >= 5) {
        mam.push(jaj)
    }
})

console.log(mam)

// console.log(fill)

const ipl = [
    { name: "Virat Kohli", team: "RCB", matchesAsCaptain: 140, winsAsCaptain: 62, iplTrophies: 0 },
    { name: "Rohit Sharma", team: "MI", matchesAsCaptain: 123, winsAsCaptain: 75, iplTrophies: 5 },
    { name: "MS Dhoni", team: "CSK", matchesAsCaptain: 204, winsAsCaptain: 110, iplTrophies: 4 },
    { name: "Dinesh Karthik", team: "KKR", matchesAsCaptain: 32, winsAsCaptain: 18, iplTrophies: 2 },
    { name: "Kane Williamson", team: "SRH", matchesAsCaptain: 26, winsAsCaptain: 14, iplTrophies: 1 }
];

// let cri = ipl.filter((hit)=> hit.iplTrophies >= 5)

let cri = ipl.filter((mi) => {
    return mi.matchesAsCaptain > 100 && mi.iplTrophies > 1
})

console.log(cri)

let no = [1,2,3,4,5,6,7,8,9];

let work = no.filter((number)=>{
      return number > 5
})

console.log(work)

console.log("map")//+++++++++++++++++++++++++++++++++++++++++++++++

let num3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const joe = num3.map((hj) => {
//     return hj + 13120
// })

// console.log(joe)


let num4 = num3
.map((bs)=>bs +10)
.map((bs)=> bs+10)
.filter((bs)=> bs >=25)

// let num4 =num.map((A)=>{return A+10})                  //Copy
//              .map((B)=>{return B - 10 })
//              .filter((C)=>{return C <= 5})

console.log(num4)

console.log("reduce")//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

const red= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const blue = red.reduce(function (acc,cur) {
    return acc+ cur
},0)

// const blue = red.reduce((acc,cur)=> acc+cur)

console.log(blue)

const mall = [
    { name: 'Fashion Paradise', category: 'Clothing', revenue: 50000 },
    { name: 'Gadget Galaxy', category: 'Electronics', revenue: 75000 },
    { name: 'Book Haven', category: 'Books', revenue: 30000 },
    { name: 'Home Essentials', category: 'Home Goods', revenue: 45000 },
  ];

let initialValue=0; 

const shop = mall.reduce((accumulator,currentValue)=> (
    accumulator+currentValue.revenue
),initialValue)

console.log(shop)

let A = [1,2,3,4,5,6,7,8]

let B = A.reduce((C,D)=>{
   return C+D
},0)

console.log(B)


