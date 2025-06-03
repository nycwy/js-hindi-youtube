const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)  //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)

const allNewHeros = [...marvel_heros, ...dc_heros] //spread operator
// console.log(allNewHeros)

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const realAnotherArr = anotherArr.flat(Infinity) //use of flat => Returns a new array with all sub array elements concatinated into it recursively up to the specified depth.
// console.log(realAnotherArr)

// console.log(Array.isArray("Santosh")) //check whether the given item is an array
// console.log(Array.from("Santosh")) //(Creates an array from an iterable object.) convert it to an array
// console.log(Array.from({ name: "Santosh" })) //interesting case, returns an empty array, we need to declare whether to convert key or value to an array


let score1 = 100
let score2 = 200
let score3 = 300

// console.log(Array.of(score1, score2, score3))  //Returns a new array from a set of elements.
