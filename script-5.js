// function myFunc(){
//     console.log("Welcome to Apna College !");
//     console.log("We are learing JS");
// }
// myFunc();


// function myFunction(msg,n){
//     console.log(msg*n);
// }
// //naN -- Not a Number
// myFunction("I love JS",100);

//Create Function to add two Number
// function sum(a,b){
//     console.log(a+b);
// }

// sum(3,2);



// function sum(a,b){
// This 'a' & 'b' will be Local Variable
//     s = a + b;
//     console.log("Function before returned");
//     return s;
//     console.log("This line will never be executed");
// }
// let ans = sum(4,5);
// console.log(ans);

//Arrow Function
// function sum(a,b){
//     return a + b;
// }

// Multiplication
// function mul(a,b){
//     return (a * b);
// }

//Arrow Function of Adding two number
// const arrowSum = (a,b) => {
//     return a + b;
// }

//Arrow Function of multiplication two number
// const mul = (a,b) => {
//     return (a*b);
// };

// const printHello = () => {
//     console.log("hello");
// }



//Let's Practice 


// function countVowel(str) {
//     let count = 0;
//     for (const ch of str) {
//         if (ch === 'o' || ch === 'e' || ch === 'a' || ch === 'i' || ch === 'u') {
//             count++;
//         }
//     }
//     return count;
// }

// countVowel("apnaCollege");

//solve by Using Arrow Function

// const arrowVowel = (str) => {
//     let count = 0;
//     for(const ch of str){
//         if (ch === 'o' || ch === 'e' || ch === 'a' || ch === 'i' || ch === 'u') {
//             count++;
//         }
//     }
//     return count;
// }

//forEach Loop In array
// let arr = ["pune","mumbai","delhi"];

// arr.forEach(function printVal(val){   // forEach Loop array ke ek ek element ko 'val' mein insert karta hai.
//     console.log(val);
// })

// arr.forEach((val) => { // arrowFunction ki madad se bhi array ke ek ek element ko 'val' mein insert karskte hai.
//     console.log(val.toUpperCase());
// })

// arr.forEach((val,idx,arr) => {             // forEach ke andar 3 parameter aa skta hai (value,idx,arr)
//     console.log(val.toUpperCase(),idx,arr);
// })


//Let's Practice.
// let arr = [1,2,3,4];

// arr.forEach((val) => {
//     console.log(val*val);
// })

// let calcSquare = num => {
//     console.log(num * num);
// };

// arr.forEach(calcSquare);

//Map
// let nums = [1,2,3,4,5];

// nums.map((val) => {
//     console.log(val);
// });

//Copying the array using map-It doesn't affect original array
// let newArray = nums.map((val) => {
//     return val;
// })

// console.log(newArray);

//ARRAY FILTER : Array ke kch kch element ko filter krna based on some condition.
// let newArray = arr.filter((val) => {
//     // return val % 2 === 0;
//     return val > 3;
// });
// console.log(newArray);

//ARRAY REDUCE
// const output = arr.reduce((res,curr) => {
//     return res + curr;
// });

// // output = 11;   // To check whether output will change or not
// console.log(output);


//To find the Largest of Array
// const output = arr.reduce((res,curr) => {
//     return res > curr ? res:curr;
// })

// console.log(output);

// Let's Practice
// let ansArray = arr.filter((val) => {
//     return val > 90;
// });
// console.log("Marks greater than 90",ansArray);

// Let's practice

// let askNum = prompt("Enter any Random Number ");

// let arr = [];  //Empty array declaration
// for (let i = 1; i <= askNum; ++i) {
//     arr[i - 1] = i;   //arr[0] = 1, arr[1] = 2 ... so on..
//     // arr.push(i);
// }
// console.log(arr);

// const output = arr.reduce((res, curr) => {
//     return res + curr;
// });
// console.log("Sum = ", output);

// const product = arr.reduce((res, curr) => {
//     return res * curr;
// });

// console.log("Product of all element = ", product);

//**** END *****// 
