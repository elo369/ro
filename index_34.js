class user {
    constructor(name, team, no) {
        this.name = name;
        this.team = team;
        this.no = no
    }

    myTeam(){
        console.log(`My ${this.team}`)
    }

    num(){
        console.log(`${this.no}`)
    }
}

const op= new user("rohit","india",45)
op.myTeam()
op.num()

// behind scene

function use(name,team,id) {
    this.name=name;
    this.team=team;
    this.id=id;
}

use.prototype.my=function my() {
    console.log(`${this.team}`)
}

use.prototype.no=function no() {
    console.log(`${this.id}`)
}

let info= new use("rohit",'india',88);
// info.my()
// info.no()