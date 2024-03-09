const user = {
    name: "shivam",
    salary: 5000000000000,
    welcomeMessage: function () {
        console.log(`${this.name}, welcome to the website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.name = "ravi"
// user.welcomeMessage()

// +++++++++++  special thing to remember +++++++++++ 
// console.log(this)    // it will print an empty object , we are in node environment 
// lekin jab ham browser me isi "this" ko log krayege to ye window object print krega 
// browser ke andar global object -> window object 


// Can we use 'this' in functions chalo dekhte hain? 

function myFunction() {
    const name = "shivamKushwah"
    // console.log(this)
    // console.log(this.name)   //undefined -> we can use this in the functions
}
myFunction()

//  +++++++++++ Arrow Functions ++++++++++ 
// explicit return 
const myArrowFunction = (num1, num2) => {
    // console.log(this)   // empty object 
    const username = "shivam"
    // console.log(this.username)   //undefined 
    return num1 + num2
}

// implicit return 
// const myArrowFunction = (num1, num2) => num1 + num2

// const myArrowFunction = (num1, num2) => (num1 + num2)

console.log(myArrowFunction(5, 6))