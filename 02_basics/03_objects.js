//Singleton
// Object.create


// object literals

const mySymbol = Symbol("key1")

const JsUser = {
    name: "Santosh",
    age: 23,
    [mySymbol]: "myKey1",
    location: "Bengaluru",
    email: "santosh@google.com",
    isLoggedIn: false,
    lastLoggedIn: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"]) //why double quote?: because by default object will consider all its keys as string type(value)
// console.log(JsUser[mySymbol])

// to change the value of any object

JsUser.email = "santosh@yahooo.com"
// console.log(JsUser["email"])

// Object.freeze(JsUser) //freeze will prevents the modification of existing property attributes and values, and prevents the addition of new properties


JsUser.greeting = function () {
    console.log("Hello JS user")
}
JsUser.greetingTwo = function () {
    console.log(`Hello JS user, ${this.name}`)
}


// console.log(JsUser.greeting())
// console.log(JsUser.greetingTwo())