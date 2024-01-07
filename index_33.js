function one(name) {
    this.name=name
}

function two(name,passion,id) {
    one.call(this,name)
    this.passion=passion
    this.id=id
}

let three=new two("rohit","programmer",88)
console.log(three)