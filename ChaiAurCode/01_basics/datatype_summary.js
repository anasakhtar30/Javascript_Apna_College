//  Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol,
//BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId); // false, since Symbol returns unique value


const bigNumber = 34343430403408409430995n;


// Reference(Non primitive)

//Array,objects,Functions

const heros = ["shaktiman","naagraj","doga"];

let myObj = {
    name:"anas",
    age :11,
}

const myfunc = function(){
    console.log("hello world");
}

// console.log(typeof bigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof scoreValue);
// console.log(typeof myfunc);

/*
JavaScript is a DYNAMICALLY TYPED LANGUAGE, meaning that type checking happens at runtime and you don't need to explicitly declare the data type of a variable when defining it; unlike statically typed languages where type checking occurs during compilation
*/


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack(Primitive) , Heap(Non-Primitive)

let myYoutubename = "anasmallickdotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"
console.log(myYoutubename)
console.log(anothername)

let userOne = {
    email : "user@google.com",
    upi:"user@ybl"
}

let userTwo = userOne;

userTwo.email = "hitesh@google.com"

console.log(userOne.email)
console.log(userTwo.email)