const calculateBtn = document.getElementById("checkBMI")


calculateBtn.addEventListener('click', (event) => {
    event.preventDefault()
    let height = document.getElementById("height").value
    let weight = document.getElementById("weight").value
    let result = document.getElementById('result')
    let bmiStatus = document.getElementById('bmi-status')

    if (height === "" || height < 0 || isNaN(height)) {
        result.innerHTML = "Enter a valid value of Height"
    } else if (weight === "" || weight < 0 || isNaN(weight)) {
        result.innerHTML = "Enter a valid value of Weight"
    }
    else {
        let bmi = (weight / ((height * height) / 10000)).toFixed(1)
        result.innerHTML = `Your BMI is ${bmi}`

        if (bmi < 18.5) {
            bmiStatus.innerHTML = "UnderWeight"
        }
        else if (bmi >= 18.5 && bmi <= 24.9) {
            bmiStatus.innerHTML = "Normal"
        }
        else {
            bmiStatus.innerHTML = "OverWeight"
        }
    }

})


