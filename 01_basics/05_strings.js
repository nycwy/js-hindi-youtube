const name = "santosh"
const repoCount = 50

// console.log(name + repoCount)

// template literal
// console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

const gameName = new String('pubg')
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toUpperCase)
// console.log(gameName.charAt(2))
// console.log(gameName.indexOf('u'))

const newStr = gameName.substring(0, 3) // last index is excluded
// console.log(newStr)

const newName = name.slice(1, 4) //elements can also be accessed from backward using neg indexing
// console.log(newName)

const newStringOne = "   santosh   "
// console.log(newStringOne)
// console.log(newStringOne.trim()) //trim() will remove the empty spaces

const url = "https://santosh.com/santosh%20khatri"

// console.log(url.replace('%20', '-'))  //replace one char or string with other
// console.log(url.includes('santosh'))  //check whether the char or string is available

const newUrl = new String('santosh-sk-com')

console.log(newUrl.split('-'))
