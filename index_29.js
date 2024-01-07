const promiseOne = new Promise(function (resolve, reject) {
    //Do an async task
    // DB calls, cryptography, network
    setTimeout(function () {
        console.log("hiee")
        resolve()
    }, 1000)
})

promiseOne.then(function () {                                                            //then connected resolve()
    console.log("complete")
})

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("two")
        resolve()
    }, 1000);
}).then(function () {
    console.log("complete 2")
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ user: "rohit", id: 123 })
    }, 1000);
})

promiseThree.then(function (e) {
    console.log(e)                                                                   //excess resolve value
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ userName: 'rohit', fun: 'coding' })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

promiseFour.then(function (e) {
    console.log(e)
    return e.userName
}).then(function (r) {
    console.log(r)                                                   //create chain
}).catch(function (error) {
    console.log(error)
}).finally(() => {
    console.log("The promise is either resolved or rejected")
})


const promiseFive = new Promise(function (resolve,reject) {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ userName: 'rohit', fun: 'coding' })
        } else {
            reject('ERROR: Something went wrong')
        }
    }, 1000);
})

async function prome() {                                                         //new approach async
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

prome()

// async function ro() {
//    try {
//     const response= await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response.json()
//     console.log(data)
//    } catch (error) {
//     console.log(error)
//    }
// }

// ro()


// fetch('https://api.github.com/users/hiteshchoudhary')
// .then(function (res) {
//     return res.json()
// })
// .then(function (reso) {
//     console.log(reso)
// })
// .catch(function (error) {
//     console.log(error)
// })