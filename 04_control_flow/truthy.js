//if there is any content inside string then it will be considered as true, false for empty value
// const userEmail = "santosh.ai";
// if (userEmail) {
//     console.log("Got user email");
// } else {
//     console.log("Don't have user email");
// }

// Falsy values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
// Truthy values: (every values except falsy values) some confusing case include: "0", 'false', " ", [], {}, function(){} 

// To check whether the array is empty or not
// const userEmail = "";
// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// To check whether the object is empty or not
// const emptyObj = {};
// if (Object.keys(emptyObj).length === 0) {
//     console.log("Object is empty");
// }

/*
Nullish Coalescing Operator (??): null undefined

The nullish coalescing (??) operator is a logical operator that returns
its right-hand side operand when its left-hand side operand is null or
undefined, and otherwise returns its left-hand side operand.

The nullish coalescing operator can be seen as a special case of the logical OR (||) operator.
The latter returns the right-hand side operand if the left operand is any falsy value, not only
null or undefined. In other words, if you use || to provide some default value to another variable
foo, you may encounter unexpected behaviors if you consider some falsy values as usable (e.g., '' or 0).
*/


let val1;
// val1 = 5 ?? 10  //5
// val1 = null ?? 10  //10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20; //10
// console.log(val1)

// Terniary Operator (totally different from Nullish coalescing operator)

// conndition ? true : false
const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80")
