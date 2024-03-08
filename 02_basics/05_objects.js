// destructuring in objects 

let myObj = {
    username: "raman",
    gmail: "this@gmail.com",
    password: "this@123"
}
// normal we did - it makes pain to access by dot notation 
// console.log(myObj.username)
// console.log(myObj.gmail)
// console.log(myObj.password)

// so we'll use destructuring 
const { username, gmail, password } = myObj
console.log(username, gmail, password);

// we can also change the name of key 
const { username: name } = myObj
console.log(name)




