// const promiseOne = new Promise(function(resolve,reject){
//     //Do an async task
//     //DB call, cryptography,network
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve();
//     },1000)
// })

// promiseOne.then(function(){
//     console.log("Promised consumed");
    
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task 2');
//         resolve();
//     },1000)
// }).then(function(){
//     console.log('Async 2 resolved');
    
// })


// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({username:"Chai",email:"chai@example.com"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user);
    
// })


const promisefour = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(error === true){
            resolve({username:"Hitesh",password:"123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promisefour
.then((user)=>{
    // console.log(user);
    return user;
})
.then((username)=>{
    console.log(username);
    
})
.catch(function(error){
    console.log(error);
}).finally(()=> console.log("The promise is eithter resolve or rejected"))


const promiseFive = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(error === true){
            resolve({username:"javascript",password:"123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

//async await ka ek problem hai ki direct error handle nhn kr skta hai isiliye
// usko try-catch block me likhte hai

// async function consumePromiseFive(){
//     try{
//         const response = await promiseFive
//         console.log(response);
//     }catch(error){
//         console.log(error);
        
//     }
// }

// consumePromiseFive();


// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         // console.log(response)
//         const data = await response.json()
//         console.log(data);
//     }catch(error){
//         console.log("ERROR :", error);
        
//     }
// }

// getAllUsers();

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    
}).catch((error)=>{
    console.log(error);
    
})
