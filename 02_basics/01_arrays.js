const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr)

const myHeros = ["ironman", "spiderman", "antman"]
const myArr2 = new Array(1, 2, 3, 4)

// console.log(myArr2)

myArr.push(6)
myArr.push(7)

myArr.pop()
// console.log(myArr)

myArr.unshift(9)
// console.log(myArr)

myArr.shift()
// console.log(myArr)

// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

// const newArr = myArr.join() //it will combine the array and also convert it into string type

// console.log(newArr)
// console.log(typeof newArr)

//SLICE, SPLICE

// SLICE => slice(start, end) returns a shallow copy of a portion of an array without modifying the original array.
console.log("A ", myArr)
const myn1 = myArr.slice(1, 3)
console.log(myn1)
console.log("B ", myArr)

// SPLICE => splice(start, deleteCount, ...items) modifies the original array by removing or replacing elements and/or adding new ones.
const myn2 = myArr.splice(1, 3)
console.log("C ",myArr)
console.log(myn2)

