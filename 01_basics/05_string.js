const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " value1");

console.log(`Hello my name is ${name} and repocount is ${repoCount} `);

const gameName = new String('hitesh-hc-com')

console.log (gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);

const anothersting =  gameName.slice(-8,4)
console.log(anothersting);

const newStringOne =  "   hitesh  "
console.log(newStringOne);
console.log(newStringOne.trim());


// const url = "https://jitesh.com/hitesh%20chodhar"

// console.log(url.replace('%20', '-'));

// console.log(url.includes('sundar'));

// console.log(gameName.split('-'));
