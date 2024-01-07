console.log("Stack and Heap");

// stack(primitive)

// In stack current variable is not change beacause this is copy

let str  = "This is rohit"

let str1 = str
str1="This is virat"

console.log(str)
console.log(str1)

//Heap(non-primitive)

// In heap current object value are change

let pop = {                           
    Name:"rohit",
    Id:"rohit@gmail.com",
    age:45,
}

let non = pop
non.Name="virat"

console.log(pop)
console.log(non)

