const parentElement = document.querySelector(".container")
// console.log(parentElement)

//====> parent.children -> it will give the htmlCollection of all its directly connected childs in this case there are 7 divs are its children 
// console.log(parentElement.children)

// accessing the value of first children 
// console.log(parentElement.children[0].innerHTML) 

// for (let i = 0; i < parentElement.children.length; i++) {
//     console.log(parentElement.children[i].innerHTML)
// }

// we can style the child elements 
// parentElement.children[0].style.color = "red"
// parentElement.children[3].style.backgroundColor = "green"


// ====> firstElementChild - selects the first child element 
// console.log(parentElement.firstElementChild)

// ====> lastElementChild - selects the last child element 
// console.log(parentElement.lastElementChild)

// we can access the parent element using child 
const dayOne = document.querySelector(".day")
// console.log(dayOne)
// console.log(dayOne.parentElement)

// we can access the next child of dayOne 
// console.log(dayOne.nextElementSibling)

// +++++++++ Creating a new element ++++++++++

let createdDiv = document.createElement('div')
console.log(createdDiv)
createdDiv.className = "created-div"
createdDiv.id = "newDiv"

// we prefer to use setAttribute for setting the attributes of elements 
createdDiv.setAttribute("name", "divByJavascript")

createdDiv.style.backgroundColor = "green"
createdDiv.style.color = "white"
createdDiv.style.padding = "15px"

createdDiv.innerHTML = "This is the generated div"

// appending it to body 
document.body.appendChild(createdDiv)

