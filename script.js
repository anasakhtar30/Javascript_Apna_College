/* comment
console.log("Hello World");
console.log("Helo JS");
*/
// Arithmetic Operator

/*let a = 5;
let b = 2;

console.log("a = ", a , " & b = ", b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a + b = ",a + b);
console.log("a % b = ",a % b);
console.log("a ** b = ", a ** b);


*/


// Unary Operation
/*
let a = 5;
let b = 2;

// a = a + 1;
// a++;
// b = b + 1;
// b--;

console.log("a = ", a, " & b = ", b);
console.log("++a = ", ++a);
console.log("a++ = ", a++);
console.log("final value of a = ", a);

*/

//Assignment Operator
// let a = 5;
// let b = 2;

//a += 4 // a = a+4
// a -= 4;
// a/=2;
// a*=3;
// a **= 2;
// console.log("a = ", a);

//Comparison Operator
// let a = 5;
// let b = "5"; // this string converts string into number and then compare
// console.log("5 == 5",a == b);

//let a = 5;
//let b = "5"; // this string converts string into number and then compare
//console.log("5 == 5",a === b);

// let a = 5;
// let b = 4;

// console.log("5 > 4 ", a > b);

//logical Operator

//AND
/*let a = "6";
let b = 5;

let cond1 = a > b; // true"
console.log("cond1 = ", cond1);

let cond2 = a === 6; // true
console.log("cond2 = ",cond2);

console.log("cond1 && cond2 = ", cond1 && cond2); */

//OR
/*
let a = 4;
let b = 3;

let cond1 = a < b;
console.log("cond1 = ", cond1);

let cond2 = a !== b;
console.log("cond2 = ", cond2);

console.log("cond1 || cond2 =", cond1 || cond2);
*/

//NOT

// let a = 4;
// let b = 5;

// console.log("!(4 < 5)", !(4 < 5));


//Conditional Statement

/*let age = 2;
if(age >= 18){
    console.log("You can Vote");
}

if(age < 18){
    console.log("You cannot Vote");
}
*/

//IF-ELSE

// let mode = "dark-mode";
// let color;

// if(mode == "dark"){
//     color = "black";
// }else {
//     color = "white";
// }

// if(mode == "light"){
//     color = "blue";
// }

// console.log(color);

//IF-ELSE

// let num = 10;
// if(num % 2 === 0){
//     console.log(num ," is Even");
// }
// else{
//     console.log(num ," is Odd");
// }

//IF-ELSE-IF
/*
let mode = "dark-mode";
let color;

if(mode === "dark"){
    color = "black";
}else if(mode === "grey"){
    color = "blue";
}else if(mode === "green"){
    color = "Pink";
}else{
    color = "none";
}
console.log("color = ", color);*/

//let mode = "dark"
//if(mode === "dark") console.log("mode") // recommended not to use without Curly braces

// Ternary Operator
// condition ? true output : false output;

// let age = 35;

// let result = age >= 18 ? "adult":"not adult";
// console.log(result);


//Write a small program for switch from mdn web docs.

// alert("hello");
// let fname = prompt("hello");
// console.log(fname);


// //Let's Practice - ex - 1
// let num = prompt("Enter a number");

// if(num % 5 === 0){
//     console.log("Yes");
// }else{
//     console.log("no");
// }

//Let's Practice - ex-2

let score = prompt("Enter the score of student:")

if (score >= 90 && score <= 100) {
    console.log("Grade-A");
} else if (score >= 70 && score <= 89) {
    console.log("Grade-B");
} else if (score >= 60 && score <= 69) {
    console.log("Grade-C");
} else if (score >= 50 && score <= 59) {
    console.log("Grade-D");
} else {
    console.log("Grade-F");
}