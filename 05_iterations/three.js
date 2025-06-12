// For of Loop (Array specific loop)

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1, 2, 3, 4, 5]; //iteration in an array
// for (const num of arr) {
//     // console.log(num)
// }

// const greetings = "Hello world!" //iteration in string
// for (const greet of greetings) {
//     if (greet == ' ') {
//         continue;
//     }
//     // console.log(`Each char is ${greet}`)
// }

// Maps: collection of only unique key, values maintaining same order as on map. Duplicate values cannot be inserted
const map = new Map()
map.set('IN', 'India');
map.set('US', 'United states of America');
map.set('NP', 'Nepal');

// console.log(map)

// for (const [key, value] of map) {
//     console.log(key, ':-', value) //whichever value you want to print you can print here, (either key or values)
// }

// for (const [key,value] of map) {
//     console.log(key)
// }

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
};

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value)
// }  //this approach is not useful for object

