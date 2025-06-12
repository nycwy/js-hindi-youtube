// for in => object

const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

for (const key in myObject) {
    // console.log(myObject[key])
}

const programming = ['js', 'rb', 'py', 'java', 'cpp'];
for (const key in programming) {
    // console.log(programming[key])
}

const map = new Map() 
map.set('IN', 'India');
map.set('US', 'United states of America');
map.set('NP', 'Nepal');

for (const key in map) {
    // console.log(key) ////maps are not iterable
}
