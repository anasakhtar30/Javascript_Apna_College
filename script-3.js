
/*
   LOOPS AND STRINGS--- TUTORIAL


//Loops- For
//Print 1-5
// for(let count = 1 ; count <=5 ; count++){
//     console.log("NIT jamshedpur");
// }
// console.log("Loop has ended");

//Calculate sum of 1 to 5

// let ask = prompt("Enter the first n natural number")
// let sum = 0

// for(let val = 1; val <=ask; ++val){
//     sum += val;
// }
// console.log("sum = ",sum);

//Infinite LOOp example

// for(let i = 1; i; ++i){
//     if(i === 5){
//         break;
//     }
//     console.log("i = ",i);
// }


//While-Loops
// let i = 1;
// while (i<=5) {
//     console.log("i = ",i);
//     i++;
// }


//do-While Loop

// let i = 20;

// do {
//     console.log("Apna College");
//     i++;
// }while (i <= 10);

//For-of-Loop
//It is not used for objects.It is used for Array and functions
// let str = "Javascript";
// let size = 0;
// for(let i of str){
//     console.log("i = ",i);
//     size++;
// }

// console.log("size = ",size);

//For-in Loops
//It is used for objects.
// let student = {
//     name: "rahul kumar",
//     age: 20,
//     cgpa:7.5,
//     isPass:true
// }
// for(let key in student){
//     console.log("key = ",key,"value = ",student[key]);
// }
// student["name"] = "rahul sharma";
// console.log(student["name"]);
// console.log(student["age"]);

//Let's Practice-ex-1 

// for(let num = 0; num <= 100; ++num)
// {
//     if(num % 2 !== 0){
//         console.log(num);
//     }
// }

//Let's Practice -ex -2
// Prompt return strings
// let gameNum = 25;
// let userNum = prompt("Guess The game Number")

// while(userNum != gameNum){
//     userNum = prompt("You entered wrong number.Guess again");
// }
// console.log("Congrats,You guessed correct Value");


//Strings
// let str = "Apna College"
// let str2 = 'Anas M'
// console.log(str[8]);

//Template Literals

// let obj = {
//     item:"pen",
//     price:10
// }

// let output = `the cost of ${obj["item"]} is ${obj.price}`

// console.log("The cost of ",obj["item"], "is",obj["price"]);
// console.log(output)
// let specialString= `This is a template literat ${1+2+4}`
// console.log(specialString);

//str.toUpperCase
// String in JS are immutable(not change)
// let st = "apna";
// let newStr = st.toUpperCase();
// console.log(newStr);

//str.lowerCases()

// let str = "APNA COLLEGE";
// let str1 = str.toLowerCase();
// console.log(str1);

//str.trim(); ---> it removes whitespaces from start and end
// let str = "     Javascript in  apna college     ";
// console.log(str.trim());

//str.slice(start,end?)
// let str = "apnaCollege";
// console.log( str.slice(1,5));pnaC

// str1.concat(str12);
// let str1 = "mallick";
// let str2 = "anas";
// let newStr = str1 + str2;
// let newStr = str2.concat(str1); // anasmallick
// console.log(newStr);

// str.replace(searchVal,newVal);
// let str = "apnaCollege";
// console.log(str.replace("a","b")); // bpnaCollege

// let str = "apna college";
// console.log(str.charAt(3)); // a

// Let's Practice
// let fname = prompt("Enter their full name");
// let userName = "@" + fname + fname.length;
// console.log(userName);
*/

