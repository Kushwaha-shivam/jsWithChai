// function to add the li in the body 

function addListItem(language) {
    const list = document.querySelector(".language-list")
    // console.log(list)
    const createdLi = document.createElement("li")
    // console.log(createdLi)
    createdLi.innerHTML = language
    list.appendChild(createdLi)
}


addListItem('java')
addListItem('Kotlin')
addListItem('React')
addListItem('Javascript')
addListItem('Node')


// editing the elements 
// 1st way 
const firstLang = document.querySelector("li:first-child")
// console.log(firstLang)
firstLang.innerHTML = "C"

// 2nd way 
// create a new element and then replace with the element you want to edit 
const thirdLang = document.querySelector("li:nth-child(3)")
const newLi = document.createElement("li")
newLi.innerHTML = "Tailwind"
// console.log(newLi)
thirdLang.replaceWith(newLi)

// removing the elements from dom 
const fourthLang = document.querySelector("li:nth-child(4)")
fourthLang.remove()
