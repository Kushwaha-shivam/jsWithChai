// general comparisons  
// console.log(5 > 5)
// console.log(5 < 5)
// console.log(5 >= 5)
// console.log(5 <= 5)
// console.log(5 == 5)
// console.log(5 != 5)

// some tricky comparison 
console.log("5" > 4)
console.log(5 < "4")

console.log(null > 0)       //This is because when using the comparison operator >, JavaScript will try to convert both operands to numbers before making the comparison. In this case, null will be converted to 0. So, the expression effectively becomes 0 > 0, which is false.

console.log(null == 0)      //In JavaScript, the == operator checks for equality after performing type coercion. However, null is only equal to undefined using loose equality (==). When comparing null with 0, they are of different types, and thus the result is false.

console.log(null >= 0)      //In JavaScript, when using the >= operator, if one of the operands is not a number, both operands are converted to numbers. In this case, null is converted to 0, so the expression effectively becomes 0 >= 0, which is true.


console.log(undefined > 0)      // This will output false. When comparing undefined with 0, both operands will be converted to NaN (Not-a-Number) because undefined cannot be directly compared with numbers. Comparing NaN with any number using the > operator always returns false.

console.log(undefined == 0)     //This will output false. When using the == operator, undefined is only equal to null. Since undefined and 0 are of different types, they are not equal.

console.log(undefined >= 0)     // This will output false. Similar to the first case, undefined will be converted to NaN, and comparing NaN with any number using the >= operator always returns false.