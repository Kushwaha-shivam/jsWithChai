// general operations 
console.log(2 + 2)
console.log(2 - 2)
console.log(2 * 2)
console.log(2 / 2)
console.log(2 % 2)

let str1 = "shivam"
let str2 = " kushwaha"
let str3 = str1 + str2
console.log(str3)

// some tricky operations 
let a = 1 + "2"
console.log(typeof (a), a)
let b = "1" + 2
console.log(typeof (b), b)
let c = "1" + 2 + 3
console.log(typeof (c), c)
let d = 1 + 2 + "3"
console.log(typeof (d), d)

// tricky question ? 

// <=== Postfix inc -- assign first , increment later ===> 
// <=== Prefix inc -- increment first , assign later ===> 
let e = 3
let f = e++  // in postfix increment --> value of e will assign to variable f first and after than the value of e will increase by one  
console.log(`e: ${e}, f: ${f}`)

let g = 5
let h = ++g  // in prefix increment --> value of g will increment by one and then it will assign to h variable 
console.log(`g: ${g}, h: ${h}`)