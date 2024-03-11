setInterval(() => {
    let clock = document.getElementById("clock")
    let date = new Date()
    const time = date.toLocaleTimeString('en-US')
    clock.innerHTML = time
}, 1000);