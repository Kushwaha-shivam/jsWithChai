//learnig the for loops 
// ham for loop , break, continue seekhege 

// for (let i = 1; i <= 10; i++) {
//     console.log(`The value of i is ${i}`)
// }

// printint the table of 10 

let num = 10;
for (let i = 1; i <= 10; i++) {
    if (i == 5) {
        // continue;
        break;
    }
    console.log(`${i} X ${num} = `, num * i)
}

// nesting loops

// for (let j = 1; j <= 10; j++) {
//     for (let k = 1; k <= 2; k++) {
//         console.log(`the value of k is ${k}, the value of j is ${j}`)
//     }
// }