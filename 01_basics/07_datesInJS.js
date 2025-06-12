//Dates => Object

let myDate = new Date()
// console.log(myDate.toString())  // Tue Jun 03 2025 16:41:38 GMT+0545 (Nepal Time)
// console.log(myDate.toISOString())  // 2025-06-03T10:58:30.142Z
// console.log(myDate.toUTCString())  // Tue, 03 Jun 2025 11:00:43 GMT
// console.log(myDate.toDateString()) // Tue Jun 03 2025
// console.log(myDate.toTimeString()) // 16:45:43 GMT+0545 (Nepal Time)
// console.log(myDate.toJSON())  // 2025-06-03T11:00:43.620Z
// console.log(myDate.toLocaleDateString())  // 6/3/2025
// console.log(myDate.toLocaleString())  // 6/3/2025, 4:45:43 PM

// let myCreatedDate = new Date(2025, 0, 29)
// console.log(myCreatedDate.toDateString())
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now();

// console.log(myTimeStamp)
// console.log(Math.floor(Date.now() / 1000))

let newDate = new Date()
// console.log(newDate.getMonth())
// console.log(newDate.getDay())

let weekday = newDate.toLocaleDateString('default', {
    weekday: "short"
})
// console.log(weekday)

