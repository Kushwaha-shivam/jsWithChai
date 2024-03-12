// creating promises 

let promise = new Promise(function (resolve, reject) {
    // Here we'll do our async tasks 
    // network request || db call 
    setTimeout(() => {
        console.log("Async task is done")
        resolve()
    }, 1000);
})

promise.then(function () {
    console.log("Promise consumed")
})


// +++ Creating another promise +++ 

new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log("Async Task2 is completed ")
        resolve()
    }, 1000);
}).then(function () {
    console.log("Promise 2 is consumed ")
})


// +++++++ another promise here +++++++
const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ name: "Shivam", age: 20, gfStatus: false })
    }, 1000);
})

promiseThree.then(function (userdata) {
    console.log(userdata)
})


// ++++ another promise here +++++ 
const promiseFour = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "rajshivam", gmail: "rajshivam0357@gmail.com" })
        } else {
            reject("Error: Something went wrong")
        }
    }, 1000);
})

// .then and .catch chaining 
promiseFour.then((data) => {
    console.log(data)
    return data.username
}).then((username) => {
    console.log(username)
}).catch((err) => {
    console.log(err)
}).finally(() => {
    console.log("It is like default")
})


// +++++++++ another example ++++ 
const promiseFive = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ language: "javascript", price: "3000" })
        } else {
            reject("Error: There is an error in Javascript")
        }
    }, 1000);
})

// consuming promise using async await 

const consumePromiseFive = async () => {
    try {
        const response = await promiseFive
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()




// ++++ fetch api  with .then +++++  

// fetch("https://dummyjson.com/todos").then((response) => {
//     return response.json()
// }).then((data) => {
//     console.log(data)
// }).catch((err) => {
//     console.log(err)
// })


// ++++ fetch api  with async await  +++++  

const fetchData = async () => {
    try {
        const res = await fetch("https://dummyjson.com/todos")
        const data = await res.json()
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}


fetchData()