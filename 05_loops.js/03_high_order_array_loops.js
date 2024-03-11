// learning about forOf , forIn, ForEach 


// ++++++++++++ forOf ++++++++++ 
// ham is method ki madad se arrays and strings ko iterate kr skte  hai yah syntax wise saral hota hai 

// const fruits = ['apple', 'banana', 'orange'];

// for (const fruit of fruits) {
//     console.log(fruit);
// }


// let arr = [1, 2, 3, 4, 5]
// for (const num of arr) {
//     console.log(num)
// }


// iterating strings through the for of loop 

let str = "I am the smartest banda of the world"
for (const char of str) {
    if (char == " ") {
        continue;
    }
    // console.log(char)
}

// note - we can not iterate objects directly using forof loop 
let obj = {
    name: "shivam",
    age: 20,
    salary: 2500000
}

// for (const item of obj) {
//     console.log(item)   //TypeError: obj is not iterable
// }


// ++++++++++++++++++++++  For in Loop +++++++++++++++

const user = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'john.doe@example.com',
    isAdmin: false,
    address: {
        street: '123 Main St',
        city: 'Anytown',
        country: 'USA'
    },
    hobbies: ['reading', 'coding']
};

// forin ka use krke ham object ko bhi iterate kr skte hai let's see 
for (const key in user) {
    // console.log(key) // it will print all the keys of object 
    // console.log(user[key])  // this line will print all the values of corresponding keys 
}

// ===>  we use this method on the array too let's check 

// let arr1 = [2, 3, 5, 6, 7, 8, 9]
// for (const item in arr1) {
//     console.log(item)   // this line will print all the idnexs of array 
//     console.log(arr1[item])   // this line will print all the idnexs of array 
// }


// ==> can iterate the strings using for in loop let's try 
let str1 = "I am shivam the only one who is the mastermind of the world"
console.log("the length of the string is ", str1.length)
for (const char in str1) {
    // console.log(char)   // this line will print the indexes like the array of string
    // console.log(str1[char])   // this line will print the value of char accoring to the string
}



// +++++++++++++ forEach ++++++++++++++ 

let arr = [6, 7, 8, 232, 44, 3]
arr.forEach((item) => console.log(item))

// iterating array of objects 

let users = [
    {
        firstName: 'John',
        lastName: 'Doe',
        age: 30,
        email: 'john.doe@example.com'
    },
    {
        firstName: 'Alice',
        lastName: 'Smith',
        age: 25,
        email: 'alice.smith@example.com'
    },
    {
        firstName: 'Bob',
        lastName: 'Johnson',
        age: 35,
        email: 'bob.johnson@example.com'
    }
];

users.forEach((item) => console.log(item.email))