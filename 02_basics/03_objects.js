// Objects can be created using the Object() constructor or the object initializer / literal syntax.

// 1- Object initializer / literal syntax 

let studentObj = {
    name: "Ram",
    age: 20,
    class: 8,
    section: "b",
    collegeName: "GPS"
}
// console.log(studentObj, typeof (studentObj))

// 2-Using Object constructor to create an Object 
// ------------  interview tip ---------- 
// when we make an object using constructor it makes singleton 
let employeeObj = {
    name: "Shivam",
    role: "FullStackDevloper",
    salary: 50000,
    companyName: "XYZ.pvt Ltd",
    weekOfDays: ["saturdays", "wednesday"]
}
// console.log(employeeObj, typeof (employeeObj))

// accessing the values of object
// There are two types for accessing the values of an object
// first is "dot notation", second is "square bracket notation"

// ---------  Dot Notation ---------- 
console.log(employeeObj.name)
console.log(employeeObj.role)

// ---------- Square Bracket Notation -------- 
// in this type of notation we use keys as string in the brackets 
// console.log(employeeObj[name])  //This will throw ReferenceError: name is not defined
console.log(employeeObj["name"]) //This will print the name 
// console.log(employeeObj["companySize"]) //if keys is not present in the object then it will return "undefined"

// --------------  The case where Square bracket notation is important ---------- 
let myObj = {
    "full Name": "Shivam Kushwaha",
    salary: 500000000
}
// console.log(myObj.full Name)   // throws syntax error 
// console.log(myObj."full Name") // throws syntax error 

// now how we will access the key "fullName" 
// in this case we have to use the square bracket notation to access the value of key 
// console.log(myObj["full Name"])

// we can changes the values of object keys 
myObj["full Name"] = "Raj Sharma"
// console.log(myObj)

// but what if we want not to change the values then we can freeze the objects 
// We'll use freeze() method of objects 
// Object.freeze(myObj)
// myObj["full Name"] = "Nancy Saxena" // changes will not done in objects because we had already freezed it 
// console.log(myObj)


// adding a function to the object 
myObj.greetUser = function () {
    console.log("Welcome Users , Have a good day!")
}
console.log(myObj.greetUser)    // it give only the reference of fuction does not execute the function 
console.log(myObj.greetUser())