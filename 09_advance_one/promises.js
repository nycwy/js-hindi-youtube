const promiseOne = new Promise(function (resolve, reject) {
    //Do async task
    //DB calls, cryptography, network

    setTimeout(function () {
        console.log('Async task completed');
        resolve();
    },1000)
})

promiseOne.then(function () {
    console.log("Promise consumed");
})

new Promise(function (resolve, reject) {
    setTimeout(function(){
        console.log("Async task 2 completed");
        resolve();
    }, 1000)
}).then(function () {
    console.log("Promise 2 consumed")
})

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(() => {
        resolve({ username: "santosh", email: "santosh@example.com" });
    }, 1000);
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = false;
        if (!error) {
            resolve({ username: "santosh", email: "santosh@example.com" });
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000);
});

promiseFour
.then(function (user) {
    console.log(user);
    return user.username;
}).then(function (username) {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(function () {
    console.log("The promise is either resolved or rejected");
})

const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "sakalaka", password: "1234" });
        } else {
            reject("ERROR: Something went wrong");
        }
    }, 1000);
})

async function consumePromiseFive() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error)
    }
}

consumePromiseFive()

// async function getAllUsers() {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await response.json();
//     console.log(data);
// }

// getAllUsers();

fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
        return response.json();
    }).then(function (name) {
        console.log(name)
    }).catch(function (error) {
        console.log(error)
    });
