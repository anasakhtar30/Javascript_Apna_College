// function sayMyName(){
//     console.log("h");
//     console.log("i");
//     console.log("t");
//     console.log("e");
//     console.log("s");
//     console.log("h");
    
// }

// sayMyName()


//a and b are parameters
// function addTwoNumber(a,b){
//     console.log(a+b);
// }

function addTwoNumber(a,b){
    let result = a + b;
    return result
}
// addTwoNumber(3,"5");

// 3 and a are arguements.
// addTwoNumber(3,"a");
// addTwoNumber(3,null);

// const result = addTwoNumber(3,5);
// console.log("Result = ",result);

function loginUserMessage(username){
    if(username === undefined){
        console.log("Please enter a username");
        return;
    }
    return `${username} just Logged in`
}

console.log(loginUserMessage())


function calculateCartPrice(val1,val2,...num1){ //...num1 is Rest operator
    return num1;
}

// console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username:"hitesh",
    price:199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}

// handleObject(user)
handleObject({
    username:"sam",
    price:399
})

const mynewArr = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(mynewArr))