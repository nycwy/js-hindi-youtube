class User{
    constructor(username) {
        this.username = username;
    }

    logMe() {
        console.log(`Username: ${this.username}`);
    }

    static createId() {
        return `123`;
    }
}

const santosh = new User("Santosh");
// console.log(santosh.createId());

class Teacher extends User{
    constructor(username, email) {
        super(username);
        this.email = email;
    }
}

const santhu = new Teacher("santhu", "sk@gmail.com");

santhu.logMe();
console.log(santhu.createId());