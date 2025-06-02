/* JavaScript is dynamically typed language, we don’t need to declare variable types explicitly,
and variables can change type at runtime.
Examples:

const x = 10
console.log(typeOf x) //"number"

x = "hello"
console.log(typeOf x) //"string"

x = false
console.log(typeOf x) //"boolean"

*/

/* Primitive Datatypes. Types: String(Call by value), Number, Boolean, null(empty), undefined, Symbol, BigInt

    // Number
    const score = 100
    const scoreValue = 100.3

    // Boolean
    const isLoggedIn = false

    // Null
    const outsideTemp = null

    // Undefined
    let userEmail;

    // Symbol
    const id = Symbol('123')
    const anotherId = Symbol('123')
    console.log(id === anotherId) //false : It returns false
    because each call to Symbol('123') creates a new unique symbol, even if the description is the same.

    // BigInt
    const bigNumber = 234567543222234n
 */



/* Reference Type (Non Primitive). Array, Objects, Functions

// Array
const heros = ["ironman", "spiderman", "thor"];

// Object
let myObj = {
    name: "ironman",
    age: 49,
}

// Function
const myFunction = function () {
    console.log("Hello world");
}

note: datatype of all non primitive types is "object" except function, return type of function is "object function"
*/
