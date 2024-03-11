const buttons = document.querySelectorAll('button')
const body = document.querySelector('body')
console.log(body)


buttons.forEach((item) => item.addEventListener('click', () => body.style.backgroundColor = item.id))