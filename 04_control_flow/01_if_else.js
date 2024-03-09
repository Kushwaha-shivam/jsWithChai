const userLoggedIn = true
// exmaple of if else conditionals 
if (userLoggedIn) {
    console.log("user is logged in")
}
else {
    console.log("user is not logged in")
}

// second example of nested if else 

const balance = 1000
if (balance > 1500) {
    console.log("balance is greater than 1500")
}
else if (balance > 1100) {
    console.log("balance is graeter than 1100")
}
else if (balance > 1000) {
    console.log("balance is greater than 1000")
}
else if (balance >= 1000) {
    console.log("balance is greater than or equal to 1000")
}
else {
    console.log("Koi bhi condition match nhi hui hai")
}
