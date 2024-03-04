let marks = 33
console.log(typeof (marks), marks)

let marksInString = String(marks);
console.log(typeof (marksInString), marksInString);

let str = "35"
console.log(typeof (str), str)

let strInNumber = Number(str)
console.log(typeof (strInNumber), strInNumber)

let str2 = "35shivam";
let str2InNumber = Number(str2)
console.log(typeof (str2InNumber), str2InNumber)

// <=== Notes for conversion ===>
//  "40" => 40
//  "32ram" => NaN
//   true  => 1 && false => 0 


let isLoggedIn = 1
let isLoggedInBoolean = Boolean(isLoggedIn);
console.log(typeof (isLoggedInBoolean), isLoggedInBoolean)

// <=== Notes for conversion ===>
// 0 => false && 1 => true
// "" => false
// "shivam" => true  



