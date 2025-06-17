// let myName = "santosh     ";
// console.log(myName.trueLength);

let myHeros = ["thor", "spiderman"];

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function () {
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.santosh = function () {
    console.log(`Santosh is present in all objects`);
}


Array.prototype.heySantosh = function () {
    console.log(`Santosh says hello`);
}


// heroPower.santosh();
// myHeros.santosh();
// myHeros.heySantosh();
// heroPower.heySantosh();

// INHERITANCE

const User = {
    name: "Chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode     "

String.prototype.trueLength = function () {
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength()
"santosh".trueLength();
"chai    ".trueLength();