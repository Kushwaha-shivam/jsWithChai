// learning about scopes 

var c = 500
let a = 1000
if (true) {
    let a = 5
    const b = 10
    var c = 30
    // console.log("inner value of a is ", a)

}

// console.log(a)  //ReferenceError: a is not defined
// console.log(b)  //ReferenceError: a is not defined
// console.log(c)  //30
// console.log("outer value of a is ", a)



// scoping in nested functions 
function one() {
    const username = "shivam"
    function two() {
        const gmail = "shivam@gmail.com"
        // console.log(username)   //inner function can access the variables of outer function 
    }
    // console.log(gmail)  //ReferenceError: gmail is not defined

    two()
}

one()


// ++++++++++++   Hoisting +++++++++++ 
// console.log(myfunc(5))  // this line will execute without any error because of hoisting 

function myfunc(num) {
    return num + 1
}


// ++++++++++++  interesting case of hoisting ++++++++++ 

// console.log(sum(5, 6))   //ReferenceError: Cannot access 'sum' before initialization

const sum = function (num1, num2) {
    return num1 + num2

}

// console.log(sum(5, 6))

