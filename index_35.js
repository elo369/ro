class user {
    constructor(userName){
        this.userName=userName
    }

    logMe(){
        console.log(`${this.userName}`)
    }
}

class teacher extends user{
    constructor(userName,team,id){
        super(userName);
        this.team=team;
        this.id=id
    }

    add(){
        console.log(`this is add username ${this.userName}`)
    }
}

const cool = new teacher("rohit","india",88)
cool.logMe()
cool.add()

const hard = new user("surya")
hard.logMe()

// console.log( user instanceof teacher)

class A {
    constructor(username){
        this.username=username
    }

    B(){
        console.log(this.username)
    }
}

class C extends A{
    constructor(username,score){
        super(username)
        this.score=score
    }

    D(){
        console.log(`this username ${this.username}`)
       }
}

let sun = new C ("virat kohli",45)
console.log(sun.B())
sun.D()

// console.log(A instanceof C)

class determind {
    constructor(sun,star){
        this.sun=sun
        this.star=star
    }

    xz(){
        console.log(`${this.star}`)
    }
}

// with return condition+++++++++++++++++++++++++++++++++++++++++++++++++++

class me {
    constructor(topic,book,stand){
        this.topic=topic
        this.book=book
        this.stand=stand
    }

    a(){
        return `topic:${this.topic}`
    }

    b(){
        return `book: ${this.book}`
    }
}

const hj= new me("ronaldo","football",7)
// console.log(hj.a())
// console.log(hj.b())

//behind scene

function op(topic,book,stand) {
    this.topic=topic;
    this.book=book;
    this.stand=stand
}

op.prototype.we=function () {
    return ` topic: ${this.topic}`
}

op.prototype.as=function(){
    return ` book: ${this.book}`
}

let yup = new op("ronaldo","football",12)
console.log(yup.we())
console.log(yup.as())