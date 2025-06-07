// const tinderUser = new Object() //Singleton object
const tinderUser = {} //Non-Singleton object


tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullName: {
        userFullName: {
            firstName: "Santosh",
            lastName: "Khatri"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1: "a", 2: "b" }
const obj2 = { 3: "a", 4: "b" }

// const obj3 = { obj1, obj2 } //wrong syntax, it will not combine both the strings and make single object

// const obj3 = Object.assign({}, obj1, obj2) //another approach which we are not going to use often

const obj3 = {...obj1, ...obj2} //better way to combine 2 or more object
// console.log(obj3)


// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty('isLogged')) //it is used to check if the object has the given value or not.

// Destructuring of object

const course = {
    courseName: "Js in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor
const { courseInstructor: instructor } = course
// console.log(instructor)

// json talk

// {
//     "name": "Hitesh",
//     "courseName": "Js in Hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

