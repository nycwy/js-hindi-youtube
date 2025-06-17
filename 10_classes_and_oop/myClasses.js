// class User{
//     constructor(username, email, password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword() {
//         return `${this.password}abc`;
//     }

//     changeUserName() {
//         return `${this.username.toUpperCase()}`
//     }
// }

// const user = new User("Santosh", "ex@gmail.com", "1234");

// console.log(user.encryptPassword());
// console.log(user);
// console.log(user.changeUserName());


//Behind the scene

function User(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`;
}

User.prototype.changeUserName = function () {
    return `${this.username.toUpperCase()}abc`;
}

const user = new User("santu", "sk@gmail.com", "12345");
console.log(user);
console.log(user.encryptPassword());
console.log(user.changeUserName());