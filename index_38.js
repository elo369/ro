class grey {
    constructor(email, password) {
        this.email = email,
        this.password = password
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        this._email = value
    }

    get password() {
        return this._password
    }

    set password(value) {
        this._password = value
    }

}

const look = new grey("rohit@123", "88")
console.log(look.email)
console.log(look.password)

// function ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

function vro(email, password) {
        this.email = email,
        this.password = password,

    Object.defineProperty(this, 'email', {
            get email() {
                return this.email
            },

            set email(value) {
                this.email = value
            }
        })

    Object.defineProperty(this, 'password', {
        get password() {
            return this.password
        },

        set password(value) {
            this.password = value
        }
    })
}

const har = new vro("elon@123", "45")
// console.log(har.email)
// console.log(har.password)

//object+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++=

const wwe = {
    _email: "sam@1234",
    _password: 999,

    get email() {
        return this._email
    },

    set email(value) {
        this._email = value
    },

    get password() {
        return this._password
    },

    set password(value) {
        this._password = value
    }
}

let faang = Object.create(wwe)
console.log(faang.email)
console.log(faang.password)
// console.log(wwe.email)