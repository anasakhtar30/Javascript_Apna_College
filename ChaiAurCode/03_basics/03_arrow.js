const user = {
    username:"hitesh",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username}, Welcome to website`);
        console.log(this); // here this will show the current user object
        
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);


// function chai(){
//     let username = "hitesh"
//     console.log(this.username);// yha pr this use nhn kr paa rha hu .so function ke andr this kaam nhn kr rha hai
    
// }
// chai();

// const chai = function(){
//     let username = "hitesh"
//     console.log(this.username);
    
// }
// const chai = ()=>{
//     let username = "hitesh"
//     console.log(this.username);
    
// }
// chai();

// const addTwo = (num1,num2)=>{
//     return num1 + num2;
// }

//Implicit return
// const addTwo = (num1,num2)=> num1 + num2;
// const addTwo = (num1,num2)=> (num1 + num2);
// const addTwo = (num1,num2)=> {return num1 + num2;}
// const addTwo = (num1,num2)=> {username:"hitesh"}; // no output
const addTwo = (num1,num2)=> ({username:"hitesh"}); // output : hitesh

console.log(addTwo(3,4));

