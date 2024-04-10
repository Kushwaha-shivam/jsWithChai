
// getting input value 
const cityInput = document.getElementById("city-input")
let submitBtn = document.getElementById("submit")

submitBtn.addEventListener("click", (e) => {
    e.preventDefault()
    city = cityInput.value
    getWeather(city)

})

// api for getting the weather 
function getWeather(city) {
    let defaultCity = "Delhi"

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city || defaultCity}&appid=71902d7102a12e1c9299fb51ac6acce7`).then((response) => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    }).then((data) => {
        // console.log(data)
        const cityName = data.name
        const temperature = ((data.main.temp) - 273.15).toFixed(0)
        const windSpeed = ((data.wind.speed)).toFixed(0)
        const humidity = (data.main.humidity)
        const visibility = (data.visibility) / 1000
        const weatherStatus = data.weather[0].main

        //setting the city name 
        document.querySelector('.left').firstElementChild.innerHTML = cityName
        // setting the temperature 
        document.querySelector('.temperature').innerHTML = temperature
        // setting the weather status 
        document.querySelector('.weather-status').innerHTML = weatherStatus
        // setting the wind speed 
        document.querySelector('.wind').innerHTML = windSpeed
        // setting the humidity 
        document.querySelector('.humidity').innerHTML = humidity
        // setting the visibility
        document.querySelector('.visibility').innerHTML = visibility

    })
}


getWeather("")