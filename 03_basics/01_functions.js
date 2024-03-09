// function definition , declration 
function addTwoNumbers(num1, num2) {
    // console.log(num1 + num2)
}

const result = addTwoNumbers(5, 6)  // calling the function 
// console.log(result)  // it will give "undefined" because function only prints the sum not returning anything.

function multiplyThreeNumbers(num1, num2, num3) {
    return num1 * num2 * num3;
    // console.log("Multiply done") // after return code doesn't run 
}

const multiplyResult = multiplyThreeNumbers(2, 3, 5)
// console.log(multiplyResult)


// -----------------  Interview question ------------
// difference between parameter and arguments

// parameters ==>  parameter is the variable listed inside the parentheses in the function definition
// arguments ==> argument is the value that is sent to the function when it is called.

// function myFunction(parameter1, parameter2...,){}
// myFunction(argument1, argument2...,)


// -----------  Using Rest Operator in Functions ---------- 
// function calculateCartPrice(num1) {
//     return num1
// }
// console.log(calculateCartPrice(5, 10, 15))

// the above code will print only 5 because we have given only one parameter to the function 

// to solve this problem we use rest operator 

function calculateCartPrice(...num1) {
    return num1
}

// console.log(calculateCartPrice(5, 10, 2, 3, 4))


function myFunction(value1, value2, ...num) {
    return num
}
// console.log(myFunction(5, 1, 7, 8, 9, 10))
// first two arguments 5,1 are sent to the value1, value2 after the rest operator will work 

// functions with objects
let myObj = {
    username: "shivam",
    salary: 500000
}
function handleMyObj(anyObject) {
    console.log(anyObject.salary)
}
console.log(handleMyObj(myObj))

// functions with arrays 

// const array = [100, 200, 500]
function handleArray(anyArray) {
    console.log(anyArray[2])
}
// handleArray(array)


// we can also pass objects and arrays directly as arguments without defining it 

console.log(handleArray([1, 2, 3, 4, 5]))