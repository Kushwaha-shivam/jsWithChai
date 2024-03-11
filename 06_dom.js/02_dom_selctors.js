// Selectors in dom

// 1. getElementById(): Selects an element based on its unique ID attribute.
// 2. getElementsByClassName(): Selects elements based on their class name
// 3. querySelector(): Selects the first element that matches a specified CSS selector.
// 4. querySelectorAll(): Selects all elements that match a specified CSS selector.
// 5. getElementsByTagName(): Selects elements based on their tag name.
// 6. getElementsByName(): Selects elements based on their name attribute. This is commonly used with form elements.

// +++++++++++ syntax of all selectors ++++++++++++++
// document.getElementById("myElement");
// document.getElementsByClassName("myClass");
// document.querySelector("#myElement .myClass");
// document.querySelectorAll(".myClass");
// document.getElementsByTagName("div");
// document.getElementsByName("myInputName");



// let's have some fun by manipulate the dom 

const button = document.getElementById("btn")
// console.log(button)
const paragraphs = document.getElementsByClassName("para")  //returns htmlCollection
// console.log(paragraphs)

const parasByQuery = document.querySelector(".para")    //returns first element 
// console.log(parasByQuery)

const parasByQueryAll = document.querySelectorAll(".para")  //returns all elements 
// console.log(parasByQueryAll)

const heading = document.getElementsByTagName("h1") //returns as htmlCollection 
// console.log(heading)

const username = document.getElementsByName("user-name")
const userpass = document.getElementsByName("user-password")

console.log(username, userpass)
