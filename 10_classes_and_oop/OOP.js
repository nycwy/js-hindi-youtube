//OBJECT LITERAL

const user = {
    username: 'santosh',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        // console.log("Got user details from database");
        // console.log(`Username: ${username}`); //error
        // console.log(`Username: ${this.username}`); //Username: santosh
        console.log(this); //Current context
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this); //global object

// CONSTRUCTOR FUNCTION

function User(username, loginCount, isLoggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    // return this;
}

const user1 = new User("Santosh", 8, true);
const user2 = new User("Angourie", 4, false);
console.log(user2.username);

// #*#* 'new' KEYWORD #*#*
// - Creates a new empty object.
// - Sets the prototype of that object to the constructor’s .prototype.
// - Binds this inside the constructor to the new object.
// - Executes the constructor function with the provided arguments.
// - Returns the new object automatically (unless the constructor returns another object explicitly).