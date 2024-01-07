console.log("Data & Time")

let date = new Date()
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toLocaleString());
console.log(typeof date);

// let myCeateDate = new Date (2023,6,10)  // year,month,date,hours,minutes,second,minisecond
// let myCeateDate = new Date (2023,6,10,5,3)

let myCeateDate = new Date ("2004-12-8")
console.log(myCeateDate.toLocaleString())
console.log(myCeateDate.getTime())
console.log(myCeateDate.getDay())


let myTimeStamp = Date.now()
console.log(myTimeStamp);

console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getDay());

// `${newDate.getDate()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
})

