// IIFE --> Immediately Invoked Function Expression 
// IIFEs prevent pollution of the global JS scope. In a traditional function, if you create a variable within the function, it is accessible in the global object. If you define a variable in an IIFE, it is accessible only directly within the function.

// function greet() {
//     console.log("Hii Bhai , kaise ho?")
// }
// greet()


//  +++++++++++  IIFE ++++++++++++ 
// named IIFE 
(function greet1() {
    console.log("Hii Bhai , kaise ho?")
})();   //this semicolon is very important khaskar jahan par ham ek hi file me do IIFE ko banate hai nahi to yaha pe typeError ayega aur second IIFE execute nhi hoga 

(function greet2() {
    console.log("Hii Bahano , kaise ho?")
})();

(() => console.log("This is me arrow function"))();

((name) => {
    console.log(`${name}, welcome to arrow functions`)
})("shivam");