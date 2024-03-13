let startBtn = document.getElementById("start")
let stopBtn = document.getElementById("stop")

// generating the random colors 

const randomColor = function () {
    let color = '#'
    let hex = '0123456789ABCDEF'
    for (let i = 0; i < 6; i++) {
        color = color + hex[Math.floor(Math.random() * 16)]
    }
    return color
}

console.log(randomColor())

// adding events 

let changeColor;
startBtn.addEventListener("click", (e) => {
    changeColor = setInterval(() => {
        document.body.style.backgroundColor = randomColor()
    }, 1000);
})

stopBtn.addEventListener("click", (e) => {
    clearInterval(changeColor)
})



startBtn.addEventListener("click", (e) => {

})

stopBtn.addEventListener("click", (e) => {

})