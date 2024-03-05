// Dates 

let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString())
// console.log(myDate.toJSON())
// console.log(myDate.toLocaleString())

// date and time we use in general format using below of two lines code 
// console.log(myDate.toLocaleDateString())

// console.log(myDate.toLocaleTimeString())
// console.log(myDate.toUTCString())


// <=== Interview Question ===> 
// What is the type of date 
// console.log(typeof (myDate)) // object 

//  yy-mm-dd format of date 
let myFormatedDate = new Date("2024-03-05")
console.log(myFormatedDate.toLocaleDateString())

let createdDate = Date.now();
// console.log(createdDate)
// seconds 
// console.log(Math.floor(createdDate / 1000))
// minutes 
// console.log(Math.floor((createdDate) / 1000 / 60))


// extract some details from date 
console.log(myDate.getDate())
console.log(myDate.getDay())
console.log(myDate.getFullYear())
console.log(myDate.getHours())
console.log(myDate.getMinutes())
console.log(myDate.getSeconds())
console.log(myDate.getMilliseconds())




