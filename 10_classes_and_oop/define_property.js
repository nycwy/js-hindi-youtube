class User{
    constructor(email, password) {
        this.email = email;
        this.password = password

        Object.defineProperty(this, 'email', {
            get email() {
                return this._email.toUpperCase();
            },
            set email(value) {
                this._email = value;
            }
        })
        Object.defineProperty(this, 'password', {
            get password() {
                return this._password.toUpperCase();
            },
            set password(value) {
                this._password = value;
            }
        })
    }
}

const chai = new User("chai@gmail.com", "chai");
console.log(chai.email)