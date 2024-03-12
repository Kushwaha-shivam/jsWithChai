let userInput = document.getElementById("guessField")
let submit = document.getElementById("submit")
let lowOrHi = document.querySelector(".lowOrHi")


// generating a random number between 1 and 100
let randomNumber = Math.floor(Math.random() * 100 + 1)
console.log(randomNumber)


// taking user input 
submit.addEventListener("click", (e) => {
    e.preventDefault()
    let userGuess = parseInt(userInput.value)
    if (userGuess == "" || userGuess < 1 || userGuess > 100 || isNaN(userGuess)) {
        alert("Enter a valid number")
    } else {
        console.log(userGuess)
        compareGuess(userGuess)
    }
})

// detecting high and low 
function compareGuess(guess) {
    if (randomNumber === guess) {
        console.log("you did it")
        lowOrHi.innerHTML = `${guess} is the correct number. You won the game`
    } else if (randomNumber < guess) {
        console.log("number is too less")
        lowOrHi.innerHTML = `${guess} is high`
    } else {
        console.log("number is too high")
        lowOrHi.innerHTML = `${guess} is low`
    }
}
