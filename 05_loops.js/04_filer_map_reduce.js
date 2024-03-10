// ++++++++++++++  filter() Method ++++++++++++ 

//The filter() method is a built-in function in JavaScript that allows you to create a new array containing only the elements of an existing array that pass a certain condition. It doesn't modify the original array; instead, it returns a new array with the elements that meet the specified criteria.

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let returnArrByFilter = arr.filter((num) => num > 3)
// console.log(returnArrByFilter)



// ++++++++++++  Map() Method +++++++++++++++=
//The map() method is another built-in function in JavaScript that allows you to transform each element of an array using a specified callback function. It creates a new array with the results of calling the provided function on every element in the original array. Like filter(), map() also doesn't modify the original array; instead, it returns a new array.

let retrunArrayByMap = arr.map((num) => num * 2)
// console.log(retrunArrayByMap)

// method chaining --> Important for Interview 
let score = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let increasedScore = score.map((num) => num + 10).map((num) => num * 2).filter((num) => num > 30)

// console.log(increasedScore)



// ++++++++++++++  Reduce() Method ++++++++++++
// The reduce() method is yet another built-in function in JavaScript used to reduce the elements of an array to a single value. It executes a user-supplied "reducer" function on each element of the array, resulting in a single output value.

let marks = [1, 2, 3, 4, 5]
let allMarks = marks.reduce((acc, num) => {
    // console.log(`Acc is ${acc} and number is ${num}`)
    return acc + num
})

// console.log(allMarks)

// tip==> ham reduce method ke baad chaining nahi kr sakte kyuki wo ek value return karta hai naaki array 

// another example of reduce method 

let courses = [
    {
        name: "js-course",
        price: 200
    },
    {
        name: "html-course",
        price: 300
    },
    {
        name: "css-course",
        price: 100
    }
]

let totalPriceOfCourses = courses.reduce((acc, item) => acc + item.price, 0)
// console.log(totalPriceOfCourses)


