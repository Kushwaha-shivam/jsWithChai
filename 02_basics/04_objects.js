// objects in depth 
let userObject = {
    email: "this@gmail.com",
    username: {
        userfullname: {
            firstname: "Shivam",
            lastname: "Kushwaha"
        }
    }
}
// accessing the values of nested objects 

// console.log(userObject)
// console.log(userObject.username)
// console.log(userObject.username.userfullname)
// console.log(userObject.username.userfullname.firstname)
// console.log(userObject.username.userfullname.lastname)

// ------------   assign() method of object ---------
// This is method is used to assing the objects into a object 
// --------- syntax--> Object.assign(target, source)

let obj1 = { a: 1, b: 2 }
let obj2 = { x: 1, y: 2 }
// let assignedObj = Object.assign(obj1, obj2)
// console.log(assignedObj)
// console.log(obj1)

// sometimes we use {}- emptyl object as the target and the object we want to assign as a source 

let obj3 = { username: "shivam", age: 20 }
let obj4 = { name: "raj", salary: 2600 }
// let assinedUserObj = Object.assign({}, obj1, obj3, obj4)
// console.log(obj3) //in this case obj3 will not modified because it's not a target object and all the objects we passed as source object that will we stored in empty object that we passed as the target 
// console.log(assinedUserObj)

// we generally use spread operator to assign the object as like we did in the arrays  

let allAssignedObj = { ...obj1, ...obj2, ...obj3, ...obj4 }
// console.log(allAssignedObj)

// ----------- special case to remember when we assign objects ------ 
let obj6 = { j: 2, k: 5 }
let obj7 = { j: 2, k: 5 }
let assinedUsingAssignMethod = Object.assign({}, obj6, obj7)
// console.log(assinedUsingAssignMethod) 
// there are same keys in the both objects so it will take only once in assignedObject 

let assignUsingSpreadOperator = { ...obj6, ...obj7 }
// console.log(assignUsingSpreadOperator)
// there are same keys in the both objects so it will take only once in assignedObject 
// we should use different keys if we want to see the result 


// objects inside the array 
let users = [
    {
        id: 1,
        name: "shivam"
    },
    {
        id: 2,
        name: "raj"
    },
    {
        id: 3,
        name: "ravi"
    },
    {
        id: 4,
        name: "rajat"
    }
]

// accessing the object values 
// console.log(users[1].id)
// console.log(users[1].name)

// we can also loop throw the array using map 
users.map((item) => {
    console.log(item.name)
})


// we can access the keys and values of object 
console.log(Object.keys(userObject))    // this will return the array of keys 
console.log(Object.values(userObject))  // this will return the array of keys 

// we can check that an object has a specified key or not 
console.log(userObject.hasOwnProperty("email")) //true
console.log(userObject.hasOwnProperty("name"))  // false - because property does not exist 

