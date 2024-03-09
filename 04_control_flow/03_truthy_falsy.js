// +++++++++++++  An Interview Question ++++++++++++ 
console.log("The type of NaN is ", typeof (NaN))

// some falsy values
// false , 0, -0, BigInt 0n , "", null, undefined, NaN

// some truthy values
// true, "0", 'false', "false", " ", [], {}, function(){} 

// checking truthy values by code 
let isAble = true
// let isAble = "shivam"
// let isAble = "false"
// let isAble = 'false'
// let isAble = '0'
// let isAble = ' '    //space in string 
// let isAble = []
// let isAble = {}
// let isAble = function () { }


// checking the falsy values output 
// let isAble = false
// let isAble = 0
// let isAble = -0
// let isAble = BigInt(0n)
// let isAble = "" //empty string 
// let isAble = undefined
// let isAble = null
// let isAble = NaN



if (isAble) {
    console.log("User is able to drive the car")
}
else {
    console.log("User is not mature now")
}

