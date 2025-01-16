//Immediately Invoked Function Expressions(IIFE)

// (function chai(){
//     console.log(`DB CONNECTED`);
    
// })()

//()() --> global scope ke pollution se kyi baar hoti hai problem,global scope
// ke variable ko (pollution ko )htane ke liye IIFE use krte hai

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
    
})();
//; is required for one IIFE to end
((name)=>{
    console.log(`DB CONNECTED TWO ${name}`);
    
})('hitesh')