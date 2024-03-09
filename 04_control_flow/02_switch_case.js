
// checking the condition for number 
let noOfWeekday = 5

switch (noOfWeekday) {
    case 1:
        console.log("Sunday")
        break;
    case 2:
        console.log("Monday")
        break;
    case 3:
        console.log("Tuesday")
        break;
    case 4:
        console.log("Wednesday")
        break;
    case 5:
        console.log("Thursday")
        break;
    case 6:
        console.log("Friday")
        break;
    case 7:
        console.log("Saturday")
        break;

    default:
        console.log("This is default")
        break;
}


// if we have a string to compare then this is how we will do :- 

let monthName = "April"

switch (monthName) {
    case "January":
        console.log("This is the first month of year")
        break;
    case "February":
        console.log("This is the second month of year")
        break;
    case "April":
        console.log("This is the forth month of year")
        break;

    default:
        console.log("This is default case")
        break;
}