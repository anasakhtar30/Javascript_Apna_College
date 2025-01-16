// var pass = document.getElementById("password")
// var msg = document.getElementById("message")
// var str = document.getElementById("strength");


// pass.addEventListener('input', ()=>{
//     var task = pass.value;
//     if(task.length > 0){
//         msg.style.display = "block"
        
//     }else{
//         msg.style.display = "none"
//     }
//     if(task.length < 4){
//         str.innerHTML = "weak";
//         pass.style.borderColor = "red";
//         msg.style.color = "red"
//     }else if(task.length >=4 && pass.value.length <=8){
//         str.innerHTML = "medium"
//         pass.style.borderColor = "yellow";
//         msg.style.color = "yellow"
//     }else if(task.length >= 8){
//         str.innerHTML = "strong"
//         pass.style.borderColor = "green";
//         msg.style.color = "green"
//     }
// })


let str = document.querySelector("#strength")
let msg = document.querySelector("#message")
let pass = document.querySelector("#password")

pass.addEventListener('input',()=>{
    let task = pass.value;
    if(task.length > 0){
        msg.style.display = "block"
    }else{
        msg.style.display = "none"
    }

    if(task.length < 4){
        str.innerHTML = "weak"
        msg.style.color = "red";
        pass.style.borderColor = "red"
    }else if(task.length >= 4 && task.length < 8){
        str.innerHTML = "medium"
        msg.style.color = "yellow"
        pass.style.borderColor = "yellow"
    }else{
        str.innerHTML = "strong"
        msg.style.color = "green"
        pass.style.borderColor = "green"
    }
})