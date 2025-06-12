const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const newNums = myNumbers.map((num) => num + 10)

// myNumbers.forEach((num, index) => {
//     myNumbers[index] = num + 10;
// })

//chaining
const newNums = myNumbers
    .map((num) => num * 10)  //map actually return value
    .map((num) => num + 10)
    .filter((num) => num >= 40)  //filter is all about condition

console.log(newNums)