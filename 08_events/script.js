// topics to study

// type, timestamp, defaultPrevented
// target, toElement, srcElement, currentTarget,
// clientX, clientY, screenX, screenY
// altkey, ctrlkey, shiftkey, keyCode


// ++++  we can onclick attribute in the html elements for listening the events but that is not feasible approach ++++ 

// we should always use addEventListener 
document.getElementById("owl").addEventListener("click", (event) => {
    // alert("Clicked on owl")
    // console.log(event)
})


// Event propogation - Event Bubbling & Event Capturing

// Event Bubbling ==> Bottom to Top

// document.getElementById("images").addEventListener("click", (e) => {
//     console.log("Clicked inside the ul")
// }, false)

// document.getElementById("owl").addEventListener("click", (e) => {
//     console.log("Clicked the owl")
//     e.stopPropagation()
// }, false)


// Event Capturing ==> Top to Bottom

// document.getElementById("images").addEventListener("click", (e) => {
//     console.log("Clicked inside the url")
// }, true)

// document.getElementById("owl").addEventListener("click", (e) => {
//     console.log("Clicked the owl")
// }, true)


// +++++++++  practice +++++++++ 
document.querySelector("#images").addEventListener("click", (e) => {
    console.log(e.target.parentNode)
    console.log(e.target.tagName)

    if (e.target.tagName === "IMG") {
        const targetToRemove = e.target.parentNode
        targetToRemove.remove()
    }

})