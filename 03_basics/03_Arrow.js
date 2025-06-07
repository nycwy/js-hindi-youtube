const user = {
    username: "hitesh",
    price: 999,
    welcomeMsg: function () {
        console.log(`${this.username}, Welcome to website`) //"this" => refer to the current context, it is not applicable in arrow function
    }
}

// user.welcomeMsg()
// user.username = "sam"
// user.welcomeMsg()

// console.log(this)

// function chai() {
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()

// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username)
// }
// chai()

// const chai = () => {
//     let username = "hitesh"
//     console.log(this)
// }
// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// implicit return
const addTwo = (num1, num2) => (num1 + num2); //no need to use return keyword
// console.log(addTwo(3, 4))