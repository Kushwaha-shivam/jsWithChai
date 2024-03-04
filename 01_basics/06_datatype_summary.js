// primitive  => always a copy is given.

/*
number
bigInt
string
undefined
null
boolean
symbol
*/

// number 
const score = 100
console.log(score, typeof (score))
// bigInt --> add 'n' in the last of number for making bigInt 
const longNumber = 98734985034858450948509845n;
console.log(longNumber, typeof (longNumber))
// string 
const userName = "Shivam"
console.log(userName, typeof (userName))
// undefined 
let gfName;
console.log(gfName, typeof (gfName))
// null
let moneyStatus = null
console.log(moneyStatus, typeof (moneyStatus))
// boolean 
let isGreater = true
console.log(isGreater, typeof (isGreater))
// symbol --> symbols are used as unique identifiers 
let id = Symbol("12345")
console.log(id, typeof (id))
let anotherId = Symbol("12345")
console.log(anotherId, typeof (anotherId))

// check symbols are unique or not 
console.log(id == anotherId)



// reference (non-primitive)  => reference is given.

// array
let arr1 = ["shivam", 5, 8, null, undefined]
console.log(arr1, typeof (arr1))
// object
let obj = {
    username: "raju",
    email: "raju@gmail.com",
    password: "34546"
}
console.log(obj, typeof (obj))
//function 
const mastFunction = function () { }
console.log(mastFunction, typeof (mastFunction))
