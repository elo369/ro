console.log("Loops")

//for

// for (let index = 0; index <= 1; index++) {
//     console.log(`this is first ${index}`)
//     for (let w = 0; w <= 1; w++) {
//         console.log(`this is second ${w} `)
//         for (let q = 0; q <=1; q++) {
//             console.log(`this is third ${q}`)        
//         }
//     }
// }

for (let i = 1; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("this is 5 number")
    }
    if (element == 8) {
        console.log("this is 8")
    }
    console.log(i)
}

for (let i = 1; i <= 10; i++) {
    const element = i;
    console.log(`table of ${i}`)
    for (let j = 1; j <= 10; j++) {
        const element = j;
        // console.log(i + "*" + j + "=" + i * j)
    }
}

let myArray = ["ronaldo", "rohit", "virat"];
console.log(myArray.length)

for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}


//break & continue

//break
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i == 5) {
        console.log("finish with 5")
        break
    }
    // console.log(`value i is ${element}`)
}


//continue
for (let i = 0; i <= 10; i++) {
    const element = i;
    if (i == 8) {
        console.log("finish with 8")
        continue
    }
    // console.log(`value i is ${element}`)
}


// while & do while

// let value = 0
// while (value <= 5) {
    // console.log(`value of ${value}`)
    // value =value + 1
    // value++
    
// }

let techy = ["elon musk", "sam altman", "sundar pichai", "satya nadella"]
// console.log(techy)

let arr = 0;
while (arr < techy.length) {
    console.log(techy[arr])
    arr++
}


let non = ["3", "4", "5", "6", "7", "8", "9"]

let bok = 0
while (bok < non.length) {
    console.log(non[bok])
    bok++
}

let score = 1
do {
    // console.log(score)
    score++
} while (score < 12);

const took = ["1", "2", "3", "4"];

bot = 0;
while (bot < took.length) {
    console.log(took[bot])
    bot++
}

let find=0;

do {
    console.log(find)
    find++
} while (find<10);

let sun = ["toy","doremon","nobita"]

let num = 0;
do {
    console.log(sun[num])
    num++
} while (num <= sun.length);