// var c = 300

let a = 300
if(true){
    let a = 10
    const b = 20
    // console.log("Inner :",a);
    c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username); 
    }
    // console.log(website);

    two()
    
}

//one()

// if(true){
//     const username = "hitesh"
//     if(username === "hitesh"){
//         const website = " youtube"
//         console.log(username + website);
        
//     }
//     // console.log(website);
    
// }
// console.log(username);

//++++++++++++++++++++ Interesting ++++++++++++++++++++


function addone(num){
    return num + 1
}

addone(5)

const addTwo = function(num){
    return num + 2
}

addTwo(5)