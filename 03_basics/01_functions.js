function sayMyName() {
    console.log("S")
    console.log("A")
    console.log("N")
    console.log("T")
    console.log("O")
    console.log("S")
    console.log("H")
}

// sayMyName()


// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2)
// }
// const result = addTwoNumbers(3, 4)
// console.log("Result: ",result) // Result: undefined( there is no return statement which means function does not return anything it simply print on console)


function addTwoNumbers(number1, number2) {
    let result = number1 + number2;
    return result;
}

const result = addTwoNumbers(3, 4)

// console.log("Result: ",result)

function loginUserMessage(username) {
    if (username === undefined) {
        console.log("Please enter a username");
        return;
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Santosh"))
// console.log(loginUserMessage())


function calculateCartPrice(...num1) {  //... here is rest operator (it is also used as a spread operator)
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "santosh",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)

// handleObject({
//     username: "sam",
//     price: 300
// })

const myNewArray = [200, 400, 100, 600];
function returnSecondValue(getarray) {
    return getarray[1];
}

// console.log(returnSecondValue(myNewArray))
// console.log(returnSecondValue([200, 400, 100, 600]))

