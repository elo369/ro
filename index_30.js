const first = {
    username: "rohit",
    id: 123,
    nickname: "ro",

    game: function () {
        // console.log(this.username)
        console.log(this);
    }
}

// console.log(first.id)
// console.log(first.game())
// console.log(this)


function user(name, no, who) {
    this.name = name;
    this.no = no;
    this.who = who;

    this.greeting = function () {
        console.log(`${this.name}`)
    }   
    return this
}


const u = new user("rohit", "88", "programmer");     //constructor function//new keyword use for value not overwrite 
const q =new  user("david", "12", "faang")
// console.log(q.constructor)
console.log(u)


