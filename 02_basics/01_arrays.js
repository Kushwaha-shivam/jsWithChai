// arrays in js 
const arr1 = [1, 2, 3, 4, 1, 5]
// console.log(arr1)
// console.log(arr1.length)
// we store different data types variables in one variable using arrays 
const arr2 = [5, 8, "apple", null, undefined];
// console.log(arr2)
// accessing the values of array using index 
// console.log(arr2[2]);

// arrays are object in javascript 
const array = new Array(1, 2, 3)
// console.log(array)

// some important method of arrays asked in interview questoins also
// push() ==>  This method adds one or more elements to the end of an array and returns the new length of the array.
array.push(4)
// console.log(array)
array.push(5, 6, 7)
// console.log(array)

// pop() ==> This method removes the last element from an array and returns that element. It modifies the array.
// array.pop()
console.log(array)

// unshift() ==> This method adds one or more elements to the beginning of an array and returns the new length of the array.
// array.unshift(100)
// console.log(array)

// shift() ==> This method removes the first element from an array and returns that element. It modifies the array.
// array.shift()
// console.log(array)

// forEach() ==> This method is used to iterate over elements in an array and executes a provided function once for each array element.
array.forEach((item) => {
    // console.log(item)
})

// map() ==> This method is very similar to forEach(), but with a key difference: instead of just looping through the array elements and doing something with them, map() lets you transform each element and creates a new array based on the transformations. but it does not change the original array 
const array2 = array.map((item) => {
    return item * 2
})
// console.log(array2)

// filter() ==>


// reduce() ==>

// concat() ==> The concat() method in JavaScript is used to combine two or more arrays into a single new array without modifying the original arrays. It returns a new array containing the elements of the arrays that were concatenated.
const combinedArray = arr1.concat(arr2)
// console.log(combinedArray)

// includes() ==>  The includes() method is used to check whether an array includes a certain value among its elements. It returns true if the array contains the specified value, and false otherwise.
// console.log(arr1.includes(3))
// console.log(arr1.includes(100))

// idnexOf() ==> The indexOf() method is used to find the index of the first occurrence of a specified value within an array. If the value is found, indexOf() returns the index of the value; otherwise, it returns -1.
// console.log(arr1.indexOf(1))
// console.log(arr1.indexOf(10))

// lastIndexOf() ==> The indexOf() method is used to find the index of the last occurrence of a specified value within an array. If the value is found, indexOf() returns the index of the value; otherwise, it returns -1.
// console.log(arr1.lastIndexOf(1))
// console.log(arr1.lastIndexOf(0))

// reverse() ==> it reverse the array elements 
// console.log(arr1.reverse())

// sort() ==> This method sorts the elements of an array in place and returns the sorted array. By default, the sort() method sorts elements alphabetically as strings.

const monthsName = ["Jan", "March", "Feb", "Apr"]
// console.log(monthsName.sort())

// toString() ==> In JavaScript, the toString() method is used to convert an array to a string. It returns a string representing the elements of the array, separated by commas.
// console.log(arr1.toString())


// ----------   Interview favorite --------
// slice() ==>

/*      The slice() method is used to extract a portion of an array into a new array without modifying the original array.
        It takes two parameters: the start index (inclusive) and the end index (exclusive). If the end index is not specified, slice() extracts up to the end of the array.
        slice() does not modify the original array; it returns a new array containing the extracted elements.
*/

const arr4 = ['a', 'b', 'c', 'd', 'e'];
const slicedArray = arr4.slice(1, 4);
console.log(slicedArray)
console.log(arr4)


// splice() ==> 
/*
        The splice() method is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place.
        It takes three parameters: the start index, the number of elements to remove, and optional new elements to add.
        splice() modifies the original array and returns an array containing the removed elements.
*/
// removing the elements from the array using splice()
const removedElems = arr4.splice(1, 3)
console.log(removedElems)
console.log(arr4)   //it modifies the original array 


// we can  insert elems using splice() 
// syntax => arr.splice(startIndex, deleteCount, elementsToInsert)
const deletedElem = arr4.splice(1, 2, "gh")
console.log(deletedElem)
console.log(arr4)

