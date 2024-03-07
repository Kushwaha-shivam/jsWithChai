// In this we'll see some more methods of arrays 
const arr1 = ["apple", "banana", "grapes"]
const arr2 = ["cat", "dog"]
// In this case arr2 will be pushed in arr1 as the last element of the array 
// but what if we want to combine the array elements --> using the concat method()
// arr1.push(arr2)
// console.log(arr1)

//  ------  combining two arrays ------------ 
// <=== Using concat() Method ===> 
const combinedArr = arr1.concat(arr2)
// console.log(combinedArr)
// console.log(arr1)   // original array will not changed 

// <=== Using spread Operator===> 
const array1 = [1, 2, 3, 4]
const array2 = ["a", "b", "c", "d"]
const array3 = [5, 3, "rohit", "shivam"]

const resThreeCombinedArr = [...array1, ...array2, ...array3]
console.log(resThreeCombinedArr)

// ---------------   InterView Favorite -----------  
const bigArray = [1, 2, 8, 5, [3, 7], 10, 20, [100, 200, ["a", "b"]]]
console.log(bigArray)
// how to convert bigArray into a signle array 
// use flat() method 
const signleArray = bigArray.flat(3)
console.log(signleArray)

// convert a string into array 
console.log(Array.isArray("Shivam"))
console.log(Array.from("Shivam"))
console.log(Array.from({ name: "Shivam" })) // it will return empty array 

// make a array using varibales only 
const var1 = 5
const var2 = 8
const var3 = 9
const var4 = 5
const var5 = 6

console.log(Array.of(var1, var2, var3, var4, var5))



