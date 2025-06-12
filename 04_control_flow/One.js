//if-statement

// if (true) {
//     //execut the code
// }

// const isUserLoggedIn = true;

// if (isUserLoggedIn) {
//     console.log("Welcome User!")
// }

// if (2 == "2") {
//     console.log("Executed"); //Executed
// }

// if (2 === "2") {
//     console.log("Exectuted") //Not executed "triple equals to" (Strict checking), value as well as data type is checked
// }

//Conditional Operators: <, >, <=< >=, ==, !=, ===, !

const temprature = 41;
// if (temprature < 50) {
//     console.log("Less than 50")
// } else {
//     console.log("Temprature is greater than 50")
// }

const score = 200
// if (score > 100) {
//     const power = "fly"
//     console.log(`User power: ${power}`)
// }
// console.log(`User power: ${power}`)

// Shorthand notation

const balance = 1000
// if (balance > 500) console.log("test"); //only single line is allowed to write like this, although we can also write multiple lines using comma's (not recommended!)

//Multiple else if statements are also allowed
// if (balance < 500) {
//     console.log("Less than");
// } else if (balance < 750) {
//     console.log("Less than 750");
// } else if (balance < 900) {
//     console.log("Less than 900");
// }else{
//     console.log("Less than 1200")
// }

// Multiple condition checking
const userLoggedIn = true
const debitCard = true
const loggedInFormGoogle = false
const loggedInFormEmail = true

// if (loggedInFormEmail || loggedInFormGoogle) {
//     console.log("User logged in")
// }

// if (userLoggedIn && debitCard && 2==3) { //last condition 2==3, which is false so the following statement will not be executed
//     console.log("Allowed to buy course")
// }