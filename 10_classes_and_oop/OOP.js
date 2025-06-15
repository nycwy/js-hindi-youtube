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