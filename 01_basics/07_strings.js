// first method to crate a string --> using "" , '' 
const name1 = "shivam"
const age = 20
const luck = "bad"

// deprecated way to use the strings 
// console.log("User is " + name1 + " and his age is " + age + " and his luck is " + luck)
// recommended way to use the strings 
// console.log(`User is ${name1} and his age is ${age} and his luck is ${luck}`)

// second method to create a string --> using String constructor 
const newString = new String("shivam-kushwaha")
// console.log(newString)


// some methods of string 
// 1- charAt() ==> it is used to get the character at a specified index within a string. The index is provided as an argument to the method.

const index = 3
// console.log(newString.charAt(index))

// special case of charAt --> If the index is out of range (i.e., less than 0 or greater than or equal to the length of the string), the method returns an empty string.
// console.log(newString.charAt(-1))
// console.log(newString.charAt(20))

// 2 - concat() ==> This method is used to concatenate two or more strings and returns a new string. It doesn't modify the original strings, but rather returns a new string containing the combined text.
const str1 = "shivam"
const str2 = " nancy"
const str3 = " bf-gf"
const str4 = str1.concat(str2, str3)
// console.log(str4)

// 3 - endsWith() ==> This  method is used to determine whether a string ends with the characters of a specified string, returning true or false as appropriate. This method is case-sensitive.
// console.log(str1.endsWith("am"))
// console.log(str1.endsWith("s"))
// test for case sensitive of endsWith() method 
// console.log(str1.endsWith("M"))

// 4- startsWith() ==> The startsWith() method is used to determine whether a string begins with the characters of a specified string. It returns true if the string starts with the specified characters; otherwise, it returns false.
// console.log(str1.startsWith("sh"))
// console.log(str1.startsWith("m"))

// 5 - includes() ==> This method is used to check if a string contains another substring. It returns true if the string contains the specified substring, and false otherwise. The includes() method is case-sensitive.

// console.log(str1.includes("m"))
// The includes() method is case-sensitive.
// console.log(str1.includes("M"))
// console.log(str1.includes("va"))
// console.log(str1.includes("na"))

// 6- indexOf() ==> This method is used to find the index within a string of the first occurrence of a specified value. If the value is not found, it returns -1.
// console.log(str1.indexOf('vam'))
// console.log(str1.indexOf('n'))

// 7- lastIndexof() ==> This method searches the string and returns the index of the last occurrence of the specified substring.. If the value is not found, it returns -1.
// console.log(str1.lastIndexOf("am"))
// console.log(str1.lastIndexOf("ng"))

// 8- localeCompare() ==> This method returns a number indicating whether this string comes before, or after, or is the same as the given string in sort order.

// The localeCompare() method returns => 
// A negative number if the reference string comes before the compare string.
// Zero if the reference string is equal to the compare string.
// A positive number if the reference string comes after the compare string.
const fruitOne = "apple"
const fruitTwo = "banana"
// console.log(fruitOne.localeCompare(fruitTwo))
// console.log(fruitTwo.localeCompare(fruitOne))
// console.log(fruitTwo.localeCompare(fruitTwo))

// 9- padStart() ==> method pads the beginning of a string with a specified number of characters until the resulting string reaches the desired length.
// console.log(fruitOne.padStart(10))
// console.log(fruitOne.padStart(10, "_"))

// 10- padEnd() ==> method pads the end of a string with a specified number of characters until the resulting string reaches the desired length.
// console.log(fruitOne.padEnd(10))
// console.log(fruitOne.padEnd(10, "_"))

// 11- repeat() ==> This method is used to create a new string by concatenating a specified string a certain number of times. This method returns a new string containing the specified number of copies of the original string.
// console.log(fruitOne.repeat(3))

// 12- replace() ==> This method to replace the first occurrence of a substring within a string
let sentence = "Ram is a good boy and he is a good student also"
// console.log(sentence.replace("good", "bad"))

// 13- replaceAll() ==> This method to replace all occurrences of a substring within a string
// console.log(sentence.replaceAll("good", "bad"))

// 14- search() ==> This method is used to search for a specified value within a string. The search() method returns the index of the first occurrence of the specified value, or -1 if the value is not found.
// console.log(sentence.search("a"))
// console.log(sentence.search("b"))
// console.log(sentence.search("z"))

// 15- split() ==> The split() method is used to split a string into an array of substrings based on a specified separator and returns the new array.
const fruits = "apple-banana-grapes-papaya"
// console.log(fruits.split("-"))

// 16- substr() ==> The substr() method extracts a substring from a string, starting at the specified index and extending for a specified number of characters (or until the end of the string, if no length is provided).
// syntax --> substr(startIndex, length)
// console.log(sentence.substr(1, 5))   //deprecated
// console.log(sentence.substr(0,))

// 17- substring() ==> The substring() method extracts the characters between two specified indices (startIndex and endIndex) within a string. It returns the substring between those indices.
// syntax --> substring(startIndex, endIndex)
// console.log(sentence.substring(5, 10))

// 18- toUpperCase() ==> The toUpperCase() method is used to convert the characters of a string to uppercase
// console.log(fruitOne.toUpperCase())

// 19- toLowerCase() ==> The toLowerCase() method is used to convert the characters of a string to lowercase 
// console.log("Shivam".toLowerCase())

// 20- trimStart() || trimLeft() ==> It is used for trimming whitespace from the start (beginning) of a string 
const stringWithWhitespaces = "      shivamWithNancy    "
console.log(stringWithWhitespaces.trimStart())

// 21- trimEnd() || trimRight() ==> It is used for trimming whitespace from the end (end) of a string 
console.log(stringWithWhitespaces.trimEnd())

// 22- trim() ==> The trim() method is used to remove whitespace from both ends of a string. Whitespace includes spaces, tabs, and newlines.
console.log(stringWithWhitespaces.trim())




