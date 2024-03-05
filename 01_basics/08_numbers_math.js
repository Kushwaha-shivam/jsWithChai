// declaring a number 
const number = 500.5678
// console.log(number)

// declaring a number using new keyword 
const rupees = new Number(120)
// console.log(rupees)

// some methods of Number 
// 1- toString() ==> This method is used  to convert a number to a string. 
const numToString = number.toString()
// console.log(numToString, typeof (numToString), numToString.length)

// 2- toFixed() ==> The toFixed() method is used to format a number using fixed-point notation. It returns a string representation of the number with a specified number of decimal places.
const fixedTotwo = number.toFixed(2)
// console.log(fixedTotwo, typeof(fixedTotwo))

// 3- toPrecision() ==> The toPrecision() method is used to format a number to a specified precision (total number of digits). It returns a string representation of the number with the specified 

const num1 = 10.89
// console.log(num1.toPrecision(2))
// console.log(num1.toPrecision(3))

// 4- toLocaleString() ==> The toLocaleString() method is used to convert a number into a string using a locale-specific format
const bankBalance = 200005000
// console.log(bankBalance.toLocaleString('en-IN'))


// -----------------MATHS ------------- 
// some important method of Math Object are : 

// 1-Math.abs(x): Returns the absolute value of a number x.
// 2-Math.ceil(x): Returns the smallest integer greater than or equal to x.
// 3-Math.floor(x): Returns the largest integer less than or equal to x.
// 4-Math.round(x): Rounds x to the nearest integer.
// 5-Math.max(x1, x2, ..., xn): Returns the largest of zero or more numbers.
// 6-Math.min(x1, x2, ..., xn): Returns the smallest of zero or more numbers.
// 7-Math.random(): Returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).
// 8-Math.sqrt(x): Returns the square root of x.
// 9-Math.pow(x, y): Returns x raised to the power of y.

// console.log(Math.abs(-5))
// console.log(Math.ceil(5.2))
// console.log(Math.floor(5.8))
// console.log(Math.round(5.8))
// console.log(Math.round(5.4))
// console.log(Math.min(1, 2, 3, 4, 5, 6, 7, 8))
// console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8))
// console.log(Math.sqrt(25))
// console.log(Math.pow(2, 3))


// <===   Math.Random()  ===>
const randomNumber = Math.floor((Math.random() * 10) + 1)
console.log(randomNumber)


