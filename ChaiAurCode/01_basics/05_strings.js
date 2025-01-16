const name = "Anas"
const repoCount = 49;

// console.log(name + repoCount + " Value")

// console.log(`My name is ${name} and my repoCount is ${repoCount}`);//Modern way to concatenate the string

const gameName = new String('hitesh-hc-com')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
// console.log(newString);

const anotherString = gameName.slice(2,4)
const anotherString2 = gameName.slice(-8,4)
// console.log(anotherString);
// console.log(anotherString2);

const newStringOne = "     hitesh    "
// console.log(newStringOne);
// console.log(newStringOne.trim()); // remove extra spaces


const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));


// console.log(url.includes('hitesh'))
// console.log(url.includes('sundar'))

console.log(gameName.split('-'));






