class User{
    constructor(email, password) {
        this.email = email;
        this.password = password;
    }

    get email() {
        return this._email;
    }
    set email(value) {
        return this._email = value;
    }

    get password() {
        // return this._password.toUpperCase();
        return `${this._password}santosh`;
    }
    set password(value) {
        this._password = value;
    }
}

const newUser = new User("Santosh@ai", "abc");

console.log(newUser.password);
console.log(newUser.email)